
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider';
import Login from './component/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
