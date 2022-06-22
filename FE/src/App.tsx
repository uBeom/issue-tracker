<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Issues from './pages/Issues/Issues';
import NewIssue from './pages/NewIssue/NewIssue';
import DetailIssue from './pages/DetailIssue/DetailIssue';
import Labels from './pages/Labels/Labels';
import Milestones from './pages/Milestones/Milestones';
=======
import { Routes, Route } from 'react-router-dom';

import { Login } from 'pages/Login';
import { Issues } from 'pages/Issues';
import { NewIssue } from 'pages/NewIssue';
import { DetailIssue } from 'pages/DetailIssue';
import { Labels } from 'pages/Labels';
import { Milestones } from 'pages/Milestones';
>>>>>>> 655a1dd8c6efa1753bc10a5273b5ceec1a86cb66

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/newissue" element={<NewIssue />} />
      <Route path="/detailissue" element={<DetailIssue />} />
      <Route path="/labels" element={<Labels />} />
      <Route path="/milestones" element={<Milestones />} />
    </Routes>
  );
}

export default App;
