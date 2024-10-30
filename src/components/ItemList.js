import React from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
    return (
        <div>
            <h1>Item List</h1>
            <ul>
                <li><Link to="/itemdetail/1">Item 1</Link></li>
                <li><Link to="/itemdetail/2">Item 2</Link></li>
                <li><Link to="/itemdetail/3">Item 3</Link></li>
            </ul>
        </div>
    )
}

export default ItemList;