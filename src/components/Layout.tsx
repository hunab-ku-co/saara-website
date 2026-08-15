import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // A client-side navigation keeps the old scroll offset, so arriving at a
  // short page from halfway down a long one lands you below the fold.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
