import { UserList } from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold">Turborepo Starter</h1>
              <p className="text-sm text-gray-400">React + NestJS + Prisma</p>
            </div>
          </div>
          <a
            href="https://github.com/neiserdeveloper/turborepo-react-nest-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">👥 Usuarios</h2>
          <p className="text-gray-400">
            Listado obtenido desde la API de NestJS conectada a PostgreSQL vía Prisma.
          </p>
        </div>

        <UserList />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          Hecho con 💜 por{' '}
          <a
            href="https://neisercp.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Neiser Custodio
          </a>{' '}
          · Lima, Perú 🇵🇪
        </div>
      </footer>
    </div>
  );
}

export default App;
