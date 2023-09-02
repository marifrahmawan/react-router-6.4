import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './RootLayout';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/products', element: <Products /> },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
