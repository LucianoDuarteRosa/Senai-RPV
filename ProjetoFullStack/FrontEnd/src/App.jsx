// BIBLIOTECAS
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// IMPORTAÇÕES
import { AuthProvider, useAuth } from './components/login/authContext';
import Navbar from './components/navbar';
import Manager from './components/manager';
import CreateUser from './components/user/createUser';
import SearchUser from './components/user/searchUser';
import UpdateUser from './components/user/updateUser';
import CreateGroup from './components/group/createGroup';
import SearchGroup from './components/group/searchGroup';
import UpdateGroup from './components/group/updateGroup';
import CreateSubGroup from './components/subGroup/createSubGroup';
import SearchSubGroup from './components/subGroup/searchSubGroup';
import UpdateSubGroup from './components/subGroup/updateSubGroup';
import Home from './components/home';
import Login from './components/login/login';
import PrivateRoute from './components/login/privateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
          <Route exact path='/' element={<Home/>} />
            <Route path="/manager" element={<Manager />} />
            <Route path='/createuser' element={<CreateUser/>} />
            <Route path='/searchuser' element={<SearchUser/>} />
            <Route path="/updateuser/:id" element={<UpdateUser/>} />
            <Route path='/creategroup' element={<CreateGroup/>} />
            <Route path='/searchgroup' element={<SearchGroup/>} />
            <Route path="/updategroup/:id" element={<UpdateGroup/>} />
            <Route path='/createsubgroup' element={<CreateSubGroup/>} />
            <Route path='/searchsubgroup' element={<SearchSubGroup/>} />
            <Route path="/updatesubgroup/:id" element={<UpdateSubGroup/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
