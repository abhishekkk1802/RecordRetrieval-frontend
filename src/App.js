import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UserSearch from './components/UserSearch';
import UserList from './components/UserList';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="adduser" element={<AddUser adduser="Adduser"/>} />
        <Route path="usersearch" element={<UserSearch />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
