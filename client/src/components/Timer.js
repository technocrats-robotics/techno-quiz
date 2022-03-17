import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

function Timer({data}) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        setInterval(() => {
            console.log(data.end);
          let difference = new Date(data.end) - new Date();
          var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((difference % (1000 * 60)) / 1000);
          setMinutes(minutes);
          setSeconds(seconds);
        }, 1000);
      }, [data]);
    return (
        <Box
            sx={{
                backgroundColor: "#FFFD18",
                margin: "1rem",
                height: "5rem",
                borderRadius: "2rem",
                textAlign: "center",
                lineHeight: "5rem",
                color: "black",
            }}
        >
             {minutes} : {seconds}    
        </Box>
    );
}

export default Timer;
