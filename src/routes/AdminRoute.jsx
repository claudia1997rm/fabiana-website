import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ProtectedRoute } from './ProtectedRoute';

export function AdminRoute({ children }) {
  const { loading, isAdmin } = useAuth();

  return (
    <ProtectedRoute>
      {loading ? null : isAdmin ? children : <Navigate to="/profile" replace />}
    </ProtectedRoute>
  );
}