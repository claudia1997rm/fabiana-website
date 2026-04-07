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
        <div className="mx-auto max-w-7xl px-6 py-24 text-ink/70">Checking admin access...</div>
      ) : profileError ? (
        <div className="mx-auto max-w-3xl px-6 py-24 text-ink/70">
          Could not load your profile role from public.profiles. {profileError.message}
        </div>
      ) : isAdmin ? (
        children
      ) : (
        <Navigate to="/profile" replace />
      )}
    </ProtectedRoute>
  );
}