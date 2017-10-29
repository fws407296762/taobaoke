import React from "react";
import {NavLink} from "react-router-dom";
import "./header.scss";
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="header">
                <div className="header-top main-box clearfix">
                    <span className="welcome-tip fl">欢迎加入QQ群：681119604</span>
                    <span className="page-retain-box fr">
                        <a href="">设为首页</a>
                        <a href="">加入收藏</a>
                        <a href="">设为标签页</a>
                    </span>
                </div>
                <div className="header-main main-box clearfix">
                    <div className="logo-box fl">
                        <h1 className="logo">啥都有券</h1>
                        <strong>QQ群：681119604</strong>
                    </div>
                    <div className="site-props fr">
                        <ul className="site-props-list">
                            <li>智能筛选最优</li>
                            <li>人工审核</li>
                            <li>全场包邮</li>
                        </ul>
                    </div>
                    <div className="search-box">
                        <div className="search-input-box">
                            <input type="text" placeholder="越搜越优惠" className="search-input" name="search" id="search"/>
                            <input type="submit" value="搜索" className="search-btn"/>
                        </div>
                    </div>
                </div>
                <nav className="nav-box">
                    <ul className="nav-list main-box">
                        <li><NavLink to="/" activeClassName="nav-active">最新优惠</NavLink></li>
                        <li><NavLink to="/nine" activeClassName="nav-active">九块九包邮</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;