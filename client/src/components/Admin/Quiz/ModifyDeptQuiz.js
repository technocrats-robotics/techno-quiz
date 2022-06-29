import { Box, Typography, Button, Grid } from "@mui/material";
import Badge from "../Badge";
import React from "react";
import { Link } from "react-router-dom";
import { borderRadius } from "@mui/system";
import { useEvaluateQuizMutation, usePublishQuizMutation } from "../../../app/services/api";

function QuizCard({ data }) {
    const [publish,{isLoading,isError,isSuccess}]=usePublishQuizMutation()
    const [evaluate,{}]=useEvaluateQuizMutation()

    const handlePublish=async(event)=>{
        event.preventDefault()
        
        try{
            const response=await publish({quizId:data._id}).unwrap()
            console.log(response)
            alert('success')
        }
        catch(err){
            alert(err.data.err)
            console.log(err)
        }
      
    }
    const handleEvaluate=async(event)=>{
        event.preventDefault()
        
        try{
            const response=await evaluate(data._id).unwrap()
            console.log(response)
            alert('success')
        }
        catch(err){
            alert('failed')
            console.log(err)
        }
      
    }
    return (
        <Box
            sx={{
                backgroundColor: "#f2f2f4",
                borderRadius: "30px",
                // width: "70%",
                marginBottom: "5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "1.5rem",
            }}
        >
            <br></br>
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bolder",
                    color: "#000",
                }}
            >
                {data.name}
            </Typography>
            <Typography
                sx={{
                    margin: "20px 15px",
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "#000",
                }}
            >
                {data.description}
            </Typography>
            <Box>
                <Link
                    to={`/scheduleQuiz/${data._id}`}
                    style={{ textDecoration: "none" }}
                >
                    {/* <Badge
                    content="Select"
                    logout
                    style={{
                        color: "#000",
                        textAlign: "center",
                        cursor: "pointer",
                        
                    }}
                >
                    <Button sx={{ width: "100%" }}></Button>
                </Badge> */}
                    <Button
                        sx={{
                            color: "#000",
                            backgroundColor: "#FFE500",
                            borderRadius: "1.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                        }}
                    >
                        Select
                    </Button>
                </Link>

                    {/* <Badge
                    content="Select"
                    logout
                    style={{
                        color: "#000",
                        textAlign: "center",
                        cursor: "pointer",
                        
                    }}
                >
                    <Button sx={{ width: "100%" }}></Button>
                </Badge> */}
                {!data.isEvaluated && <Button
                        sx={{
                            color: "#000",
                            backgroundColor: "#00cc00",
                            borderRadius: "1.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                        }}
                        onClick={handleEvaluate}
                    >
                        Evaluate
                    </Button>} 
                    {data.isEvaluated && <Button
                        sx={{
                            color: "#000",
                            backgroundColor: "#00cc00",
                            borderRadius: "1.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                        }}
                        
                    >
                        Evaluated
                    </Button>} 
                    
               

                    {/* <Badge
                    content="Select"
                    logout
                    style={{
                        color: "#000",
                        textAlign: "center",
                        cursor: "pointer",
                        
                    }}
                >
                    <Button sx={{ width: "100%" }}></Button>
                </Badge> */}
                {!data.isPublished && <Button
                        sx={{
                            color: "#000",
                            backgroundColor: "#ff3300",
                            borderRadius: "1.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                        }}
                        onClick={handlePublish}
                    >
                        PUBLISH
                    </Button>}
                    {data.isPublished && <Button
                        sx={{
                            color: "#000",
                            backgroundColor: "#ff3300",
                            borderRadius: "1.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                        }}

                    >
                        Already Published
                    </Button>}
                    
                
            </Box>
        </Box>
    );
}

function Content({ quiz }) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                height: "100%",
                width: "100%",
                backgroundColor: "#050022",
                color: "white",
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    marginTop: "80px",
                }}
            >
                Modify (Dept) Quiz
            </Typography>
            <Typography
                sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
            >
                Select the Quiz
            </Typography>
            <Grid container spacing={2} sx={{ mx: "3rem" }}>
                
                    {quiz.map((item) => (
                        <Grid item xs={4}>
                        <QuizCard key={item._id} data={item} />
                        </Grid>
                    ))}
               
            </Grid>
        </Box>
    );
}

export default Content;
