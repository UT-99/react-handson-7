import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Student from './components/Student'
import EditStudent from './components/EditStudent'
import AddStudent from './components/AddStudent'
import store from './components/store';


import './App.css'
import { Provider } from 'react-redux'

const App = () => {
  
  const navigate = useNavigate();
  const home = () => {
navigate('/')
  }
  const student = () => {
    navigate('/student')
      }
      const contact = () => {
        navigate('/contact')
          }
  return (
    
    <div>
<div className='navbar'>
  <span onClick={home}>Home</span>
  <span onClick={student}>Student</span>
  <span onClick={contact}>Contact Us</span>

</div>
<div className='route-div'>
<Provider store={store}>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/student' element={<Student />}/>
  <Route path='/addstudent' element={<AddStudent />}/>
  <Route path='/contact' element={<Contact />}/>
 
  <Route path='/editstudent' element={<EditStudent />}/>
  


</Routes>
    </Provider>
</div>



    </div>
  )
}

export default App