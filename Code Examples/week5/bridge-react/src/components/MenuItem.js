import React from 'react';
import './MenuItem.css';

export default function(props){
    return (
        <div
            className="menu-item"
            title={props.bridge.name}
            onClick={props.onClick}
        >
            {props.bridge.nameEncoded}
        </div>
    );
}