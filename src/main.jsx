import { createRoot } from 'react-dom/client'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/index.jsx'
import routes from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}>

    </RouterProvider>
  </Provider>

)
