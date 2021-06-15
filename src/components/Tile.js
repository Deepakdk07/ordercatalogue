import React from 'react';
import './Tile.css'

const Tile = ({top, bottom}) => {
    return (
        <div className ="tile">
            <p>{top.name} : {top.value}</p>
            <p>{bottom.name} : {bottom.value}</p>
        </div>
    )
}

export default Tile
