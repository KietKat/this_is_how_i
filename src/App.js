import React from 'react';

import { AboutUs, CompSci, DataSci, Header, Math, SpecialMenu, Footer} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <CompSci />
    <DataSci />
    <Math />
    <Footer />
  </div>
);

export default App;
