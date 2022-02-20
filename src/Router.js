import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import JobList from './pages/JobList/JobList';
import SignUp from './pages/Login/SignUp';
import JobDetail from './pages/JobDetail/JobDetail';
import Login from './pages/Login/Login';
import Company from './pages/Company/Company';
import Salary from './pages/Salary/Salary';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recruitments" element={<JobList />} />
        <Route path="/recruitments/:category" element={<JobList />} />
        <Route
          path="/recruitments/:category/:subcategory"
          element={<JobList />}
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/recruitment/:id" element={<JobDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company" element={<Company />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
