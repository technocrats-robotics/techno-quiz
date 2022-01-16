import React from 'react'
import '../App.css'
import logo from '../images/logo.png';
import dummyUser from '../images/dummyUserIcon.png';
import coder from '../images/coder.png';

function UserDashboard() {
    return (
        <>
        <nav className="navBarUser">
            <li className="navButtons"><img src={logo} alt="Logo" className="logo" /></li>
            <li className="navButtons"><img src={dummyUser} alt="Dummy User Icon" className="dummyUser"/><p className="userName">dummyBear</p></li>
        </nav>
        <section className="mainSection">
            <section className="subSection1">
                <p className="activeLeftButton">Dashboard</p>
                <p className="LeftButtons">Leaderboard</p>
                <p className="LeftButtons">Quiz Tracks</p>
                <p className="LeftButtons">View Attempts</p>
                <img src={coder} alt="Coder" className="coderImage"/>
                <button className="logoutButton">Logout</button>
            </section>
            <section className="subSection2">

            </section>
        </section>
        </>
    )
}

export default UserDashboard;
