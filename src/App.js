import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Ledgers from './pages/master_accounts/Ledgers';
import Employees from './pages/master_accounts/Employees';
import Godown from './pages/master_accounts/Godown';
import Stockitem from './pages/master_accounts/Stockitem';
import Stockunit from './pages/master_accounts/Stockunit';
import Analytics from './pages/Analytics';
import Salesorder from './pages/vouchers/Salesorder';
import Purchaseorder from './pages/vouchers/Purchaseorder';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="bg-primary-subtle">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>  
          <Route path='/ledgers' element={<Ledgers/>}/> 
          <Route path='/employees' element={<Employees/>}/> 
          <Route path='/godown' element={<Godown/>}/> 
          <Route path='/stockitem' element={<Stockitem/>}/> 
          <Route path='/stockunit' element={<Stockunit/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/salesorder' element={<Salesorder/>}/>
          <Route path='/purchaseorder' element={<Purchaseorder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
