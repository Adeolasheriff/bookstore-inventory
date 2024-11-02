import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import MyFooter from './components/footer'

function App() {
return (
   <div>
  <Navbar/>
 <div className='min-h-screen'>
 <Outlet/>
 </div>
  <MyFooter/>
   </div>
  )
}

export default App
