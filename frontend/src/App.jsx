import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar"
import { Routes, Route } from 'react-router-dom'
import AddJob from "./pages/AddJob"
import ListJob from "./pages/ListJob"
import ViewCalendar from "./pages/ViewCalendar"

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className='flex flex-nowrap'>
        <Sidebar />
        <Routes>
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/listjob" element={<ListJob />} />
          <Route path="/viewcalendar" element={<ViewCalendar />} />
        </Routes>
      </div>
    </div>
  )
}

export default App