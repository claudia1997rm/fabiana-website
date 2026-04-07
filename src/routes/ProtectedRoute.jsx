import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SupabaseSetupNotice } from '../pages/SupabaseSetupNotice';

export function ProtectedRoute({ children }) {
  const { isConfigured, loading, user } = useAuth();
  const location = useLocation();

  if (!isConfigured) return <SupabaseSetupNotice />;
  if (loading) return <div className="mx-auto max-w-7xl px-6 py-24 text-ink/70">Loading account...</div>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
}