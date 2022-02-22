import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Timer from '../components/Timer'
// components
import backgroundImg from "../img/bg.svg";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";
var countDownDate = new Date("Mar 5, 2022 15:37:25").getTime();
var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
var departments = [
    {
        "name": "Mechanical",
        "linkto": "_blank"
    },
    {
        "name": "Electrical",
        "linkto": "_blank"
    },
    {
        "name": "Programming",
        "linkto": "_blank"
    },
    {
        "name": "General",
        "linkto": "_blank"
    }
]
function Item(props)
{
    return (
        <div style={{height:"300px",position:'relative',top:'0',marginTop:'100px',padding:"2em",width:"90%",marginLeft:"5%",borderRadius:"2em",backgroundColor:"white"}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </div>
    )
}
function CarouselCard(props)
{
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
function Homepage() {
    const [countdown, setcountdown] = React.useState("00d 00h 00m 00s ")
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        let temp = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        setcountdown(temp)
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
         setcountdown("EXPIRED");
        }
      }, 200);
      var GRID_COLOR = "transparent"
    return (
    <>
    <div style={{
            background:
                "linear-gradient(145deg,rgba(0,0,0,1),rgba(0,0,100,0.9))",
            position: "fixed",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            // zIndex: -1,
        }}
    />
    <div style={{
            backgroundImage: "url(" + backgroundImg + ")",
            backgroungRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "50% 0",
            mixBlendMode: "hard-light",
        }}
    >
            <Navbar />
                <div style={{backgroundColor:GRID_COLOR,minHeight:'100px',width:"100%",marginTop:"40px",position:"relative"}}>
                <CarouselCard />

                </div>
                
                <div style={{backgroundColor:GRID_COLOR,minHeight:'100px',width:"100%",marginTop:"40px",textAlign:"center"}}>
                <Typography variant="h3" component="h1" color="yellow">
                        {countdown}
                    </Typography>
                </div>
                
                <div style={{backgroundColor:GRID_COLOR,minHeight:'100px',width:"100%",marginTop:"40px"}}>
                <Grid
                        container
                        columnSpacing={{ xs: 1, sm: 6, md: 10, lg: 6 }}
                        rowSpacing={6}
                    >
                        {
                            departments.map(item => {
                                return (
                                    <Grid item xs={12} sm={6} md={6} lg={3}>
                                        <Paper
                                            elevation={12}
                                            style={{
                                                background:
                                                    "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                                height: "40vh",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                                borderRadius: "3rem",
                                                marginBottom: "20px",
                                                border: "2px solid rgba(255,255,255,0.3)",
                                                // borderImageSource:
                                                //     "linear-gradient(144.87deg, rgba(255,255,255, 0.64), rgba(218, 218, 218, 0.7), rgba(255, 255, 255, 0.9))",
                                                boxShadow:
                                                    "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                                backdropFilter: "blur(10px)",
                                            }}
                                        >
                                            <Typography
                                                variant={"h3"}
                                                component="h3"
                                                sx={{
                                                    color: "white",
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                style={{
                                                    color: "#fffd1b",
                                                    border: "2px solid #fffd1b",
                                                }}
                                            >
                                                Click Me
                                            </Button>
                                        </Paper>
                                    </Grid>)
                            })}
                    </Grid>
                </div>
                

            </div>
    
    </>

    );
}

export default Homepage;
