import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'Saara Kiventoyry'
const ORIGIN = 'https://saarakiventoyry.fi'

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector)
  el?.setAttribute(attr, value)
}

/**
 * Keeps the document title, description, canonical URL and Open Graph tags in
 * step with the active route.
 *
 * A client-rendered SPA has one static index.html, so without this every route
 * would share the shell's metadata — every page would report the same title to
 * a browser tab, the same canonical URL to a search engine, and the same
 * preview card to anything unfurling a shared link.
 */
export function usePageMeta(title: string, description?: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title === SITE ? SITE : `${title} — ${SITE}`
    const url = `${ORIGIN}${pathname}`

    document.title = fullTitle
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:url"]', 'content', url)

    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
  }, [title, description, pathname])
}
