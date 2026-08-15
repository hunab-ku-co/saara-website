import { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

const LINKS = [
  { to: '/', label: 'Etusivu' },
  { to: '/teemat', label: 'Teemat' },
  { to: '/tietoa', label: 'Tietoa' },
  { to: '/yhteystiedot', label: 'Yhteystiedot' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const { pathname } = useLocation()

  // Navigating with the menu open would otherwise leave it hanging over the
  // new page.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="nav">
      <div className="container nav__bar">
        <NavLink to="/" className="nav__brand">
          Saara Kiventöyry
        </NavLink>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Sulje valikko' : 'Avaa valikko'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`nav__burger${open ? ' is-open' : ''}`}
            aria-hidden
          />
        </button>

        <nav
          id={panelId}
          className={`nav__links${open ? ' is-open' : ''}`}
          aria-label="Päävalikko"
        >
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav__link${isActive ? ' is-active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
