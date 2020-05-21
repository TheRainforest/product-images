import React from 'react';
import style from '../css/style.css';

const MainImageContainer = (props) => {
  console.log(style);
  return (
    <div className={style.mainImageContainer} onMouseLeave={props.exit}>
      <span>
        <img className={style.mainImage} onMouseMove={props.onHover} onMouseLeave={props.onLeave} src={props.image} />
        <div id={style.mags} className={style.none} style={{ top: props.y, left: props.x }} />
      </span>
    </div>
  );
};

export default MainImageContainer;
