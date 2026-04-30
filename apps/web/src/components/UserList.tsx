import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

interface ApiResponse {
  data: User[];
  message: string;
  success: boolean;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/users`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result: ApiResponse = await response.json();
      setUsers(result.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Cargando usuarios...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
        <p className="text-red-400 font-medium mb-2">❌ Error</p>
        <p className="text-red-300 text-sm mb-4">{error}</p>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors text-sm"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 text-center">
        <p className="text-gray-400">No hay usuarios registrados.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
              ID
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
              Nombre
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
              Email
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
              Creado
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
            >
              <td className="px-6 py-4">
                <span className="text-purple-400 font-mono text-sm">
                  #{user.id}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium">{user.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-400 text-sm">{user.email}</td>
              <td className="px-6 py-4 text-gray-500 text-sm">
                {new Date(user.createdAt).toLocaleDateString('es-PE', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer de la tabla */}
      <div className="px-6 py-3 border-t border-gray-800 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {users.length} usuario{users.length !== 1 ? 's' : ''}
        </p>
        <button
          onClick={fetchUsers}
          className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          ↻ Refrescar
        </button>
      </div>
    </div>
  );
}
