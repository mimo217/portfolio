import {StrictMode} from "react"
import { createRoot } from "react-dom/client"
import App from './pages/App/app'
import './pages/home/home.scss'
import { BrowserRouter as Router } from 'react-router-dom'
const root = createRoot(document.getElementById("app"))
root.render(<StrictMode><Router><App/></Router></StrictMode>)