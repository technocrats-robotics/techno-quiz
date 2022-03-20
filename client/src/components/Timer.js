import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

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
    ) : (
        <div>Loading...</div>
    );
}

export default Timer;
