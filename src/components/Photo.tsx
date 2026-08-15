import { IMAGES, type ImageName } from '../images.generated'

// Ordered best-first: the browser takes the first <source> it can decode.
const MODERN = ['avif', 'webp'] as const

type Props = {
  name: ImageName
  alt: string
  /** Tells the browser the rendered width before CSS loads, so it picks the right file. */
  sizes: string
  className?: string
  /** Above-the-fold images load eagerly; everything else defers. */
  priority?: boolean
}

export default function Photo({
  name,
  alt,
  sizes,
  className,
  priority = false,
}: Props) {
  const img = IMAGES[name]
  const jpeg = img.sources.jpg
  const srcSetFor = (ext: string) =>
    img.sources[ext].entries.map((e) => `${e.url} ${e.width}w`).join(', ')

  return (
    <picture className={className}>
      {MODERN.map((ext) => (
        <source
          key={ext}
          type={img.sources[ext].type}
          sizes={sizes}
          srcSet={srcSetFor(ext)}
        />
      ))}
      <img
        src={jpeg.entries[jpeg.entries.length - 1].url}
        srcSet={srcSetFor('jpg')}
        sizes={sizes}
        alt={alt}
        // Intrinsic dimensions reserve the right box before the file arrives,
        // so the layout never jumps as photos load.
        width={img.width}
        height={img.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  )
}
