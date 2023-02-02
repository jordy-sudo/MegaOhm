import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../components/views/AboutPage'
import { ContactPage } from '../components/views/ContactPage'
import { HomePage } from '../components/views/HomePage'

export const MegaOhmRoutes = () => {
  return (
        <Routes>
            <Route path='/*' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/*' element={<Navigate to="/"/>}/>
        </Routes>
  )
}
