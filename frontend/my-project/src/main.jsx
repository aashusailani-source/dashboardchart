import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AreaChartPage from "./pages/AreaChartPage";
import BarChartPage from "./pages/BarChartPage";
import LineChartPage from "./pages/LineChartPage";
import PieChartPage from "./pages/PieChartPage";
import RadarChartPage from "./pages/RadarChartPage";  
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/area-chart",
        element: <AreaChartPage />,
      },
      {
        path: "/bar-chart",
        element: <BarChartPage />,
      },
      {
        path: "/line-chart",
        element: <LineChartPage />,
      },
      {
        path: "/pie-chart",
        element: <PieChartPage />,
      },
      {
        path: "/radar-chart",
        element: <RadarChartPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
  <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
)