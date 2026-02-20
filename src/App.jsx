import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-white p-8">
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-600 bg-slate-800/50 px-8 py-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent bg-slate-700 px-5 py-2.5 font-medium transition-colors hover:border-slate-500 hover:bg-slate-600"
        >
          count is {count}
        </button>
        <p className="text-slate-300">
          Edit <code className="rounded bg-slate-700 px-2 py-0.5 font-mono text-sm">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-slate-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
