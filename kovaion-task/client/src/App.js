import logo from './logo.svg';
import './App.css';
import Firstpage from './components/firstpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Addcontacts from './components/addcontacts';
import Viewdetails from './components/viewcontacts';
import Updatedetails from './components/updatecontacts';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Firstpage/>}/>
      <Route path='/add' element = {<Addcontacts/>}/> 
      <Route path='/update/:id' element = {<Updatedetails/>}/>
      <Route path='/view' element = {<Viewdetails/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

