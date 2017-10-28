import React from "react";
import ReactDOM from "react-dom";
import "./header.scss";
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="header">
                <span>啥都有券</span>
            </div>
        );
    }
}

export default Header;