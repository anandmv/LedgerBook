import * as React from 'react';
import { 
  Routes, 
  Route
} from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Ledger from './pages/ledger';
import Accounts from './pages/accounts';
import Users from './pages/users';
import Layout from './layout';
import { AuthProvider, RequireAuth } from './provider/authProvider';


export default function App() {
  const renderLayoutElement = (title:string, children:JSX.Element) => (
    <RequireAuth>
      <Layout title={title}>{children}</Layout>
    </RequireAuth>
  );
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={renderLayoutElement("Dashboard", <Dashboard/>)} />
        <Route path="/ledger" element={renderLayoutElement("Ledger", <Ledger/>)} />
        <Route path="/accounts" element={renderLayoutElement("Accounts", <Accounts/>)} />
        <Route path="/users" element={renderLayoutElement("Users", <Users/>)} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}