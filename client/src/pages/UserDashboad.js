import React from 'react'
import '../App.css'
import logo from '../images/logo.png';
import dummyUser from '../images/dummyUserIcon.png';
import coder from '../images/coder.png';
import meter from '../images/meter.png';
import graph from '../images/graphPaper.png';
import footer from '../images/footer.svg';

function UserDashboard() {
    return (
        <>
        <nav className="navBarUser">
            <li className="navButtons"><img src={logo} alt="Logo" className="logo" /></li>
            <li className="navButtons"><img src={dummyUser} alt="Dummy User Icon" className="dummyUser"/><p className="userName">dummyBear</p></li>
        </nav>
        <div className="enclosure">
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
                <h1 className="welcome">Welcome, Dummy User!</h1>
                <p className="subtitle">We’re happy to have you back.</p>
                <div className="stats">
                    <div className="card">
                        <h2 className="progress">Progress Meter</h2>
                        <p className="progressText">Keep it up! You’re getting there.</p>
                        <img src={meter} alt="Meter" className="meter"/>
                    </div>

                    <div className="card2">
                        <h2 className="userAnalysis">User Analysis</h2>
                        <p className="userAnalysisText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minima cum consectetur asperiores, facilis repellat vitae culpa doloremque illo possimus ducimus ratione nobis assumenda ipsa excepturi</p>
                    </div>
                    <div className="card2">
                        <h2 className="previousAttempts">Summary of Previous Attempts</h2>
                        <img src={graph} alt="Graph" className="Graph"/>
                    </div>
                    <div className="card">
                        <div className="pieChart">
                        <h2 className="testAnalysis">Test Analysis</h2>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <img src={footer} alt="Footer" className="footer"/>
        </div>
        </>
    )
}

export default UserDashboard;
