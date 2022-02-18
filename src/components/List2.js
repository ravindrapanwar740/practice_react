import React from 'react'
import { BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";

function List2() {
    return (
        <div>
            <h1>List Component</h1>
            <div className="img-wrapperr img">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418" />

            </div>
            <Router>
               <Link to="">User</Link> 
            </Router>
        </div>
    )
}

export default List2
