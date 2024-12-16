import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Ledgers from './components/master_accounts/Ledgers';
import Employees from './components/master_accounts/Employees';
import Godown from './components/master_accounts/Godown';
import Stockitem from './components/master_accounts/Stockitem';
import Stockunit from './components/master_accounts/Stockunit';
import Analytics from './components/Analytics';
import Salesorder from './components/vouchers/Salesorder';
import Purchaseorder from './components/vouchers/Purchaseorder';

function App() {
  return (
    <div className="bg-primary-subtle">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>  
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
