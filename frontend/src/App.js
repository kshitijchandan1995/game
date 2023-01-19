import logo from './logo.svg';
import './App.css';
import{ BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';

import Employee from './component/Employee';
import List from './component/List';
import Search from './component/Search';
import Display from './component/Display';

function App() {
  return (
    <div className="App">
      <div id='mydiv'><h1>welcome to the site</h1></div>
  <BrowserRouter>
  <div className='mb-3' id='mydiv'> <Link to="/signup">Signup</Link></div>
  <div className='mb-3' id='mydiv'> <Link to="/login">Login</Link></div>
 



  <Routes>
    <Route path='/' element={<Signup></Signup>}/>
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/list' element={<List></List>}/>
        <Route path='/employee' element={<Employee></Employee>}/>
        <Route path='/search' element={<Search></Search>}/>
        <Route path='/display' element={<Display/>}/>

  </Routes>
  </BrowserRouter>



    </div>
  );
}

export default App;
