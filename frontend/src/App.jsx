import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar"
import { Routes, Route, Navigate } from 'react-router-dom'
import AddJob from "./pages/AddJob"
import ListJob from "./pages/ListJob"
import ViewCalendar from "./pages/ViewCalendar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard'
import UserLogin from './pages/UserLogin'

const App = () => {
  const url = "http://localhost:4001";
  const [showAddJob, setShowAddJob] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  return (
    <>
    {showAddJob ? <AddJob url={url} setShowAddJob={setShowAddJob} /> : <></>}
    <div>
      <ToastContainer />
      <hr />
      <>
        {isAuthenticated ? (
          <div className="flex flex-nowrap">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Dashboard url={url} setIsAuthenticated={setIsAuthenticated} token={token} setToken={setToken} />} />
              <Route path="/addjob" element={<AddJob url={url} setShowAddJob={setShowAddJob} />} />
              <Route path="/listjob" element={<ListJob url={url} setShowAddJob={setShowAddJob} />} />
              <Route path="/viewcalendar" element={<ViewCalendar url={url} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        ):(
          <Routes>
            <Route path="/user" element={<UserLogin url={url} setIsAuthenticated={setIsAuthenticated} token={token} setToken={setToken} />} />
            {/* Navigate used for redirection, and path=* matches all unkown routes, providing a way to handle 404 errors */}
            <Route path="*" element={<Navigate to="/user" />} />
          </Routes>
        )

        }
      </>
    </div>
    </>
  )
}

export default App