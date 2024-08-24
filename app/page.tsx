import { Card } from './components/Card'

export default function Home() {
  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <h1 className="text-5xl font-bold	text-center">Counter APP</h1>

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <Card value={ 10 } />
        </div>
      </main>
    </div>
  );
}
