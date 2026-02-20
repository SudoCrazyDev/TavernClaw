function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard</h1>
      <p className="text-slate-600 mb-8">Overview and quick stats for your hub.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary-800 mb-1">Instances</h2>
          <p className="text-2xl font-bold text-primary-600">0</p>
          <p className="text-slate-600 text-sm mt-1">Total OpenClaw instances</p>
        </div>
        <div className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary-800 mb-1">Running</h2>
          <p className="text-2xl font-bold text-primary-600">0</p>
          <p className="text-slate-600 text-sm mt-1">Active instances</p>
        </div>
        <div className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary-800 mb-1">Activity</h2>
          <p className="text-slate-600 text-sm">Recent activity will appear here.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
