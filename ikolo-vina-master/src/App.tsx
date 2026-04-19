// src/App.tsx (MODIFIÉ)
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from "./components/ScrollToTop";
import Layout from './components/layout/Layout';
import { Toaster } from 'sonner';
import HeadMetadata from './components/layout/HeadMetadata';
import './index.css';
import useDynamicTitle from './hooks/useDynamicTitle';
import LanguageFloatingButton from './components/ui/language-floating-button';

const TitleHandler = () => {
  useDynamicTitle();
  return null;
};

function App() {
  return (
    <BrowserRouter>
      {/* HeadMetadata utilise maintenant React 19 natif */}
      <HeadMetadata />
      <ScrollToTop />
      <LanguageFloatingButton />
      <TitleHandler />
      <Layout>
        <AppRoutes />
      </Layout>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;