import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

import ActionsPage from './pages/ActionsPage'
import ActionDetailPage from './pages/ActionDetailPage'
import CreateActionPage from './pages/CreateActionPage'
import EditActionPage from './pages/EditActionPage'


function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<ActionsPage />} />
        <Route path="/actions/:id" element={<ActionDetailPage />} />
        <Route path="/create" element={<CreateActionPage />} />
        <Route path="/actions/:id/edit" element={<EditActionPage />} />
      </Routes>
    </div>
  )
}

export default App