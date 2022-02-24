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
import WantedPlusLanding from './pages/WantedPlus/WantedPlusLanding';
import WantedPlusContents from './pages/WantedPlus/WantedPlusContents';
import Resume from './pages/Resume/Resume';

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
        <Route path="/company/:id" element={<Company />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/neededPlus/landing" element={<WantedPlusLanding />} />
        <Route path="/neededPlus/contents" element={<WantedPlusContents />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
