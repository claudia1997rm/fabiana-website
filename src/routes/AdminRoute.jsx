import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ProtectedRoute } from './ProtectedRoute';

export function AdminRoute({ children }) {
  const { loading, profileLoading, profileError, isAdmin, refreshProfile } = useAuth();

  useEffect(() => {
    refreshProfile();
  }, []);

  return (
    <ProtectedRoute>
      {loading || profileLoading ? (
        <div className="mx-auto max-w-7xl px-6 py-24 text-ink/70">Comprobando acceso de admin...</div>
      ) : profileError ? (
        <div className="mx-auto max-w-3xl px-6 py-24 text-ink/70">
          No se pudo cargar tu rol desde public.profiles. {profileError.message}
        </div>
      ) : isAdmin ? (
        children
      ) : (
        <Navigate to="/profile" replace />
      )}
    </ProtectedRoute>
  );
}
