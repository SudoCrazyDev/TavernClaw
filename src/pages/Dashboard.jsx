function Dashboard() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
      <p className="text-slate-600 mb-8">Welcome to your dashboard.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-1">Overview</h2>
          <p className="text-slate-600 text-sm">Quick stats and summary.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-1">Activity</h2>
          <p className="text-slate-600 text-sm">Recent activity feed.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-1">Settings</h2>
          <p className="text-slate-600 text-sm">Preferences and options.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
