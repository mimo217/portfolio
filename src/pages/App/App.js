import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Layout from '../../components/Layout/Layout'

function App() {
  const [portfolioData, setPortfolioData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPortfolioData(data)
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      }
    };

    fetchData()
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default App;

