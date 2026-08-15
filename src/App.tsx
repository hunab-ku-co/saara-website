import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Teemat from './pages/Teemat'
import Tietoa from './pages/Tietoa'
import Yhteystiedot from './pages/Yhteystiedot'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teemat" element={<Teemat />} />
        <Route path="tietoa" element={<Tietoa />} />
        <Route path="yhteystiedot" element={<Yhteystiedot />} />
        {/* Also what dist/404.html resolves to for any unknown deep link. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
