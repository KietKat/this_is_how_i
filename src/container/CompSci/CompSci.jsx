import React from 'react';

import {SubHeading} from "../../components";
import {images} from "../../constants";
import './CompSci.css';

const CompSci = () => (
  <div className = "app__compsci app__wrapper app__wrapper section__padding" id = "compsci">
    <div className="app__wrapper_img">
      <img src = {images.cscat} alt ='header img'/>
    </div>

    <div className='app__wrapper-info'>
      <SubHeading title = "Section 1"/>
      <h1 className = "app__compsci-h1"> Computer Science </h1>
      <p className = "p__opensans" style = {{margin : "2rem 0"}}>
        New content: Comming up soon
      </p>
      <button className = "custom__button" type = "button">All Contents</button>
    </div>
  </div>
);

export default CompSci;
