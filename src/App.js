import './App.css';
// import {useSelector, useDispatch } from 'react-redux';
// import {Home , Student , Contact} from './assignment-7/Action';
import Data from './assignment-7/SData';
import Home from './assignment-7/Home';
import Contacts from './assignment-7/Contacts';
import Students from './assignment-7/StudentData';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './assignment-7/Navbar';
import CreateNew from './assignment-7/NewStudent';
import Edit from './assignment-7/EditStudent';
function App()
{
  // const status = useSelector((status)=> status.StudentData);
  // const dispatch = useDispatch();
  return (
    <Data>
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/student' element={<Students/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/student-new' element={<CreateNew/>}/>
      <Route path='/Edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter> 
    
    </div>
    </Data>
    )
};
export default App;