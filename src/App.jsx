import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { InteractiveBrandBackground } from './components/InteractiveBrandBackground';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './context/AuthContext';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { SignupPage } from './pages/SignupPage';
import { AdminRoute } from './routes/AdminRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="relative isolate min-h-screen bg-cloud text-ink">
          <InteractiveBrandBackground />
          <div className="relative z-10">
            <NavBar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="/admin" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
                <Route path="/resources/:slug" element={<ResourceDetailPage />} />
                <Route path="/journal/:slug" element={<BlogPostDetailPage />} />
                <Route path="/habitos" element={<CategoryPage categoryKey="habitos" />} />
                <Route path="/moda" element={<CategoryPage categoryKey="moda" />} />
                <Route path="/estetica" element={<CategoryPage categoryKey="estetica" />} />
                <Route path="/fotografia" element={<CategoryPage categoryKey="fotografia" />} />
                <Route path="/astrologia" element={<CategoryPage categoryKey="astrologia" />} />
                <Route path="/vida" element={<CategoryPage categoryKey="vida" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;