import React from 'react';
import style from '../css/style.css';

const ModelContainer = (props) => (
  <div className={`${style.modal} ${style.none}`} id="modal-container">
    <img id="modal-image" src={props.image} style={{ top: props.y, left: props.x }} />
  </div>
);

export default ModelContainer;
