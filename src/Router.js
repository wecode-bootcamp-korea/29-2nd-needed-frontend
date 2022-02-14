import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';

const Router = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
