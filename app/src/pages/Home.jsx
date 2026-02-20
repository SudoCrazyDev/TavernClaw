import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome to TavernClaw</h1>
      <p className="text-slate-600 mb-8">
        Hub control panel for spinning up and managing OpenClaw instances on Docker, VPS/EC2, or Cloudflare.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/dashboard"
          className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm hover:border-primary-300 hover:bg-primary-50/50 transition-all block"
        >
          <h2 className="text-lg font-semibold text-primary-800 mb-1">Dashboard</h2>
          <p className="text-slate-600 text-sm">Overview and quick stats.</p>
        </Link>
        <Link
          to="/instances"
          className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm hover:border-primary-300 hover:bg-primary-50/50 transition-all block"
        >
          <h2 className="text-lg font-semibold text-primary-800 mb-1">Instances</h2>
          <p className="text-slate-600 text-sm">Manage your OpenClaw instances.</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
