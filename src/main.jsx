import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Store/store.js'
import {Provider} from "react-redux"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <ToastContainer/>
  <App />
  </BrowserRouter>
  </Provider>
    
  
)
