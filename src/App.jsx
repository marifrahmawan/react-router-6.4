import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './RootLayout';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

//* Absolute Path
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> }, //* we can use index : true, element: <Home /> to define the default page
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> },
    ],
    errorElement: <Error />,
  },
]);

//* Relative Path
// const router = createBrowserRouter([
//   {
//     path: '/root',
//     element: <RootLayout />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: 'products', element: <Products /> },
//       { path: 'products/:productId', element: <ProductDetail /> },
//     ],
//     errorElement: <Error />,
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
