import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import logo from '../images/logo.png'
import dummyUser from '../images/dummyUserIcon.png'
import coder from '../images/coder.png'
import footer from '../images/footer.svg'

function QuizTracks() {
    return (
        <>
        <nav className="navBarUser">
            <li className="navButtons"><img src={logo} alt="Logo" className="logo" /></li>
            <li className="navButtons"><img src={dummyUser} alt="Dummy User Icon" className="dummyUser"/><p className="userName">dummyBear</p></li>
        </nav>
        <div className="enclosure">
        <section className="mainSection">
            <section className="subSection1">
                <Link to="/user" className="LeftButtons">Dashboard</Link>
                <Link to="/leaderboard"className="LeftButtons">Leaderboard</Link>
                <p className="activeLeftButton">Attempt Quizes</p>
                <p className="LeftButtons">View Attempts</p>
                <img src={coder} alt="Coder" className="coderImage"/>
                <button className="logoutButton">Logout</button>
            </section>
            <section className="subSection2">
                <h1 className="welcome">Quizes Available</h1>
                <p className="subtitle">You can attempt any one of these quizes</p>
                <div className="stats">
                    <div className="card">
                        <h2 className="progress">Programming</h2>
                        {/* <p className="quizDescriptionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et recusandae consequatur commodi repudiandae amet iusto quis ratione numquam, laboriosam unde eaque cumque nemo voluptatibus ab ad odit fuga distinctio.</p> */}
                        <div
                         className="startQuizButton">Attempt</div>
                    </div>
                    <div className="card">
                        <h2 className="progress">Electrical</h2>
                        {/* <p className="quizDescriptionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et recusandae consequatur commodi repudiandae amet iusto quis ratione numquam, laboriosam unde eaque cumque nemo voluptatibus ab ad odit fuga distinctio.</p> */}
                        <div className="startQuizButton">Attempt</div>
                    </div>
                    <div className="card">
                        <h2 className="progress">Mechanical</h2>
                        {/* <p className="quizDescriptionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et recusandae consequatur commodi repudiandae amet iusto quis ratione numquam, laboriosam unde eaque cumque nemo voluptatibus ab ad odit fuga distinctio.</p> */}
                        <div className="startQuizButton">Attempt</div>
                    </div>
                    <div className="card">
                        <h2 className="progress">General Robotics</h2>
                        {/* <p className="quizDescriptionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et recusandae consequatur commodi repudiandae amet iusto quis ratione numquam, laboriosam unde eaque cumque nemo voluptatibus ab ad odit fuga distinctio.</p> */}
                        <div className="startQuizButton">Attempt</div>
                    </div>
                    </div>
            </section>
        </section>
        <img src={footer} alt="Footer" className="footer"/>
        </div>
        </>
    )
}

export default QuizTracks
