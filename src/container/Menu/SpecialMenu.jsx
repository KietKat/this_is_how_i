import React from 'react';

import {SubHeading, MenuItem} from '../../components';
import './SpecialMenu.css';
import {images, data} from '../../constants';

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
          {data.wines.map((wine,index) => (
            <MenuItem key= {wine.title + index} title = {wine.title} price= {wine.price} tags={wine.tags}/>
          )
          )}
        </div>

        <div style = {{marginTop: '15px'}}> 
          <button type ="button" className = "custom__button">View All</button>    
        </div>
    
      </div>

      <div className = "app__specialMenu-menu_datasci flex__center">
        <p className='app__specialMenu-menu_heading'>Data Science</p>
        <div className ='app__specialMenu_menu_items'>
          {data.wines.map((wine,index) => (
            <MenuItem key= {wine.title + index} title = {wine.title} price= {wine.price} tags={wine.tags}/>
          )
          )}
        </div>
        <div style = {{marginTop: '15px'}}> 
          <button type ="button" className = "custom__button">View All</button>    
        </div>
      </div>

      <div className = "app__specialMenu-menu_math flex__center">
        <p className='app__specialMenu-menu_heading'>Mathematics</p>
        <div className ='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail,index) => (
            <MenuItem key= {cocktail.title + index} title = {cocktail.title} price= {cocktail.price} tags={cocktail.tags}/>
          )
          )}
        </div>
        <div style = {{marginTop: '15px'}}> 
          <button type ="button" className = "custom__button">View All</button>    
        </div>
      </div>

    </div>
  </div>
);

export default SpecialMenu;
