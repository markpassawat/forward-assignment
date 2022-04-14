import { Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'

import Lending from './pages/Lending'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/borrow" element={<Lending />} />
            <Route path="*" element={<Navigate to="/borrow" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
