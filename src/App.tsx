import { RouterProvider } from 'react-router';
import { router } from './routes.tsx';
import { useEffect } from 'react';

export default function App() {
  // Cargar fuente Nunito de manera programática para asegurar carga en producción
  useEffect(() => {
    // Preconnect a Google Fonts
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectGstatic);

    // Cargar fuente Nunito
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap';
    document.head.appendChild(link);

    // Aplicar fuente inmediatamente al body
    document.body.style.fontFamily = "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
  }, []);

  return (
    <RouterProvider router={router} />
  );
}