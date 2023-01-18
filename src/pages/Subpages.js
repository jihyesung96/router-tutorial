import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Subpage = () => {
    const activeStyle = {
        backgroundColor : 'lightblue',
        fontSize: 24
    }
    return (
        <div>
            <ul>
                {/* NavLink는 객체의 key가 isActive로 자동으로 받음  */}
                <li><NavLink to="/subpages/1"
                style={({isActive})=> isActive ? activeStyle : undefined}>서브페이지1</NavLink></li>
                <li><NavLink to="/subpages/2"
                style={({isActive})=> isActive ? activeStyle : undefined}>서브페이지2</NavLink></li>
                <li><NavLink to="/subpages/3"
                style={({isActive})=> isActive ? activeStyle : undefined}>서브페이지3</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Subpage;