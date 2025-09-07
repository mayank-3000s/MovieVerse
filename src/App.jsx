import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { About } from './pages/About';
import { Contact, contactData } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import { getApiData } from './api/GetApiData';

const App = ()=>{
  const router = createBrowserRouter([
    {
      path:'/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {path:'/', element: <Home />},
        {path:'/movie', element: <Movie />, loader: getApiData,},
        {path:'/about', element: <About />},
        {path:'/contact', element: <Contact />, action: contactData}
      ]
    }
  ]);
  return(
    <RouterProvider router={router} />
  )
}

export default App ;