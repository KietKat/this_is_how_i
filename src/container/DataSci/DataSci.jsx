import React from 'react';

import './DataSci.css';
import {images} from "../../constants"
import { SubHeading } from '../../components';

const DataSci = () => (
  <div className= "app__datasci app__wrapper app__wrapper section__padding" id= "datasci">
    <div className="app__wrapper_img">
      <img src = {images.dscat} alt ='header img'/>
    </div>
    
    <div className = "app__wrapper-info">
      <SubHeading title = "Section 2"/>
      <h1 className = "app__datasci-h1 ">Data Science</h1> 
      <p className = "p__opensans" style = {{margin : "2rem 0"}}>
        New content: Comming up soon
      </p>
      <button className ="custom__button" type = "button">All Contents</button>
    </div>
  </div>
);

export default DataSci;
