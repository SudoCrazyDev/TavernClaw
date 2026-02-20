import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Instances from './pages/Instances'

function Layout() {
  return (
    <div className="min-h-screen bg-primary-50 text-slate-900">
      <nav className="border-b border-primary-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-semibold text-primary-700 hover:text-primary-600 transition-colors">
            TavernClaw
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Dashboard
            </Link>
            <Link to="/instances" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
              Instances
            </Link>
          </div>
        </div>
      </nav>
      <main className="px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instances" element={<Instances />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
