import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import JobList from './pages/JobList/JobList';
<<<<<<< HEAD
import SignUp from './pages/Login/SignUp';
import JobDetail from './pages/JobDetail/JobDetail';
=======
import Login from './pages/Login/Login';
>>>>>>> a6fab58 (add: kakao login 통신완료)

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
<<<<<<< HEAD
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/recruitment/:id" element={<JobDetail />} />
=======
        <Route path="/login" element={<Login />} />
>>>>>>> a6fab58 (add: kakao login 통신완료)
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
