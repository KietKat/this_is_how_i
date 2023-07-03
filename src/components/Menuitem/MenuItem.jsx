import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, date, tags}) => (
  <div className = "app__menuitem">

    <div className='app__menuitem-head'>
      <div className = "app__menuitem-name">
        <p className = "p__cormorant" style = {{color : "#DCCA87" }}>{title}</p>
      </div>
    </div>
    
    <div className = "app__menuitem-sub">
      <div className = "app__menuitem-date">
        <p className = "p__cormorant" >{date}</p>
      </div>
      
      <div className = "app__menuitem-dash"/>
        <p className = "p__opensans" style = {{color : "#AAA"}}> {tags} </p>
      </div>
  </div>
);

export default MenuItem;
