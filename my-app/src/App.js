import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {NavBar} from './components/NavBar'
// import {Loader} from './components/Loader'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  // if (!ready) {
  //   return <Loader />
  // }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        <div className="main-container">
          { isAuthenticated && <NavBar />}
          <div className="container">
            {routes}
          </div>
          { isAuthenticated && <Footer />}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
