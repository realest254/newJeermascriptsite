// src/CustomRouter.jsx
import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const CustomRouter = ({ children }) => {
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    return <HashRouter>{children}</HashRouter>;
  }
  
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default CustomRouter;