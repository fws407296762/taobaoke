import React from "react";
import {Link} from "react-router";

import Header from "./components/Header";

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="main">
                <Header/>
            </div>
        )
    }
}

export default App;