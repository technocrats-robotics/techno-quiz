import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

<<<<<<< HEAD
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
=======
function Timer({ data }) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data) {
            setInterval(() => {
                let difference = new Date(data.end) - new Date();
                var minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                var seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setMinutes(minutes);
                setSeconds(seconds);
            }, 1000);
        }
    }, []);

    return data ? (
>>>>>>> 02dd6546fb956bceaf8086cb5b13f69aa8bc4e68
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
<<<<<<< HEAD
             {minutes} : {seconds}    
=======
            {minutes} : {seconds}
>>>>>>> 02dd6546fb956bceaf8086cb5b13f69aa8bc4e68
        </Box>
    ) : (
        <div>Loading...</div>
    );
}

export default Timer;
