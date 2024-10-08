import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate } from 'react-router-dom';
import AddJob from "./pages/AddJob";
import AddEvent from './components/AddEvent';
import ListJob from "./pages/ListJob";
import ViewCalendar from "./pages/ViewCalendar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import UserLogin from './pages/UserLogin';
import JobTracker from './pages/JobTracker';
import Test from './pages/Test';
import EventDashboard from './pages/EventDashboard';

const App = () => {
  const url = "http://localhost:4001";
  const [showAddJob, setShowAddJob] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  // Load authenticatin state from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken){
      // optionally, vertify the token's validity here
      setToken(storedToken);
      setIsAuthenticated(true);
      console.log('User is authenticated');
    }else{
      setIsAuthenticated(false);
      console.log('User is not authenticated');
    }
  }, []);

  return (
    <>
    {showAddJob ? <AddJob url={url} setShowAddJob={setShowAddJob} /> : <></>}
    {showAddEvent ? <AddEvent url={url} setShowAddEvent={setShowAddEvent} /> : <></>}
    <div>
      <ToastContainer />
      <>
        {isAuthenticated ? (
          <div className="md:grid md:grid-cols-5 grid-flow-row-dense bg-gray-50 h-screen">
            <div className='md:col-span-1'>
              <Sidebar />
            </div>
            <div className='md:col-span-4 grid grid-rows-6 grid-flow-row-dense gap-4 overflow-scroll h-screen'>
              <div className='row-span-1'>
                <Navbar setAuthenticated={setIsAuthenticated} token={token} setToken={setToken} />
              </div>
              <div className='h-screen'>
                <Routes>
                  <Route path="/" element={<Dashboard url={url} setIsAuthenticated={setIsAuthenticated} token={token} setToken={setToken} />} />
                  <Route path="/listjob" element={<ListJob url={url} setShowAddJob={setShowAddJob} />} />
                  <Route path="/jobtracker" element={<JobTracker url={url} />} />
                  <Route path="/events" element={<EventDashboard url={url} setShowAddEvent={setShowAddEvent} /> } />
                  <Route path="/test" element={<Test url={url} />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
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