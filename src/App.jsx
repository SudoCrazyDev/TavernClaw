import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <nav className="border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </nav>
        <main className="px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
