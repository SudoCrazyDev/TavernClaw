function Instances() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Instances</h1>
          <p className="text-slate-600">Create and manage OpenClaw instances on Docker, VPS/EC2, or Cloudflare.</p>
        </div>
        <button
          type="button"
          className="rounded-lg bg-primary-500 px-4 py-2.5 font-medium text-white hover:bg-primary-600 transition-colors"
        >
          New instance
        </button>
      </div>
      <div className="rounded-xl border border-primary-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-primary-100 bg-primary-50/50">
          <p className="text-slate-600 text-sm">No instances yet. Create one to get started.</p>
        </div>
      </div>
    </div>
  )
}

export default Instances
