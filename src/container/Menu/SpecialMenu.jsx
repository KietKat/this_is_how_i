import React from 'react';

import {SubHeading, MenuItem} from '../../components';
import './SpecialMenu.css';
import {data} from '../../constants';

const SpecialMenu = () => (
  <div className = "app__specialMenu flex__center section__padding" id = "menu">

    <div className='app__specialMenu-title'>
        <SubHeading title = "Win-gar-di-ummm Le-vi-o-saaaaa"/>
        <h1 className = "headtext__cormorant">Table of Contents</h1>
    </div>

    <div className = "app__specialMenu-menu">
      <div className = "app__specialMenu-menu_compsci flex__center">
        <p className='app__specialMenu-menu_heading'>Computer Science</p>
        <div className ='app__specialMenu_menu_items'>
          {data.compsci.map((compsci,index) => (
            <MenuItem key= {compsci.title + index} title = {compsci.title} date= {compsci.price} tags={compsci.tags}/>
          )
          )}
        </div>

        <div style = {{marginTop: '15px'}}> 
          <a href = "#compsci"><button type ="button" className = "custom__button">View All</button></a> 
        </div>
    
      </div>

      <div className = "app__specialMenu-menu_datasci flex__center">
        <p className='app__specialMenu-menu_heading'>Data Science</p>
        <div className ='app__specialMenu_menu_items'>
          {data.datasci.map((datasci,index) => (
            <MenuItem key= {datasci.title + index} title = {datasci.title} date= {datasci.price} tags={datasci.tags}/>
          )
          )}
        </div>
        <div style = {{marginTop: '15px'}}> 
          <a href = "#datasci"><button type ="button" className = "custom__button">View All</button></a>
        </div>
      </div>

      <div className = "app__specialMenu-menu_math flex__center">
        <p className='app__specialMenu-menu_heading'>Mathematics</p>
        <div className ='app__specialMenu_menu_items'>
          {data.math.map((math,index) => (
            <MenuItem key= {math.title + index} title = {math.title} date= {math.price} tags={math.tags}/>
          )
          )}
        </div>
        <div style = {{marginTop: '15px'}}> 
          <a href = "#math"><button type ="button" className = "custom__button">View All</button> </a>
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
