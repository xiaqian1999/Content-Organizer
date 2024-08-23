import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar"
import { Routes, Route } from 'react-router-dom'
import AddJob from "./pages/AddJob"
import ListJob from "./pages/ListJob"
import ViewCalendar from "./pages/ViewCalendar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4001";
  const [showAddJob, setShowAddJob] = useState(false);

  return (
    <>
    {showAddJob ? <AddJob url={url} setShowAddJob={setShowAddJob} /> : <></>}
    <div>
      <ToastContainer />
      <hr />
      <div className='flex flex-nowrap'>
        <Sidebar />
        <Routes>
          <Route path="/addjob" element={<AddJob url={url} setShowAddJob={setShowAddJob} />} />
          <Route path="/listjob" element={<ListJob url={url} setShowAddJob={setShowAddJob} />} />
          <Route path="/viewcalendar" element={<ViewCalendar url={url} />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App