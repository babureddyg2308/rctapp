import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom';
import BodyAdd from "./components/BodyAdd";
import Fitnes from './components/Fitnes';
import BuildTransform from "./components/BuildTransform";
import CarePage from './pages/CarePage';
import MindPage from './pages/MindPage';
import AuthForm from "./components/AuthForm";
// import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BodyAdd />} />
        <Route path="/fitnes" element={<Fitnes />} />
        <Route path="/transform" element={<BuildTransform />} />
        <Route path="/care" element={<CarePage />} />
        <Route path="/mind" element={<MindPage />} />
        <Route path="/signin" element={<AuthForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
