import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// components
import backgroundImg from '../assets/backgroundImg.jpg';

function Homepage() {

    return (
        <div style={{
            backgroundImage: 'url(' + backgroundImg + ')',
            backgroungRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
        }}>

            <Box sx={{
                display: 'flex',
                width: '85%',
                height: '40vh',
                mx: 'auto',
                backgroundColor: '#CEFDCD',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1.5rem',
            }}>
                <h1>Hero Section</h1>
            </Box>
            <Box sx={{
                display: 'flex',
                width: '65%',
                height: '20vh',
                mx: 'auto',
                mt: '3%',
                backgroundColor: '#c4c4c4',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1.5rem',
            }}>
                <h1>Timer</h1>
            </Box>

            <Box sx={{
                display: 'flex',
                width: '85%',
                mx: 'auto',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '7rem'
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '3rem',
                    marginBottom: '3rem'
                }}>DEPARTMENTS</h1>
                <Grid container columnSpacing={{ xs: 1, sm: 6, md: 10, lg: 6}} rowSpacing={6}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper elevation={12} style={{
                            backgroundColor: '#c4c4c4',
                            height: '40vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            borderRadius: '1rem',
                            backgroundImage: 'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)',
                        }}>
                            <h1 style={{
                                color: 'white',
                                fontSize: '5vmin'
                            }}>Mechanical</h1>
                            <Button variant="contained" style={{backgroundColor: '#fffd1b'}}>Click Me</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper elevation={12} style={{
                            backgroundColor: '#c4c4c4',
                            height: '40vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            borderRadius: '1rem',
                            backgroundImage: 'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)',
                        }}>
                            <h1 style={{
                                color: 'white',
                                fontSize: '5vmin'
                            }}>Electrical</h1>
                            <Button variant="contained" style={{backgroundColor: '#fffd1b'}}>Click Me</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper elevation={12} style={{
                            backgroundColor: '#c4c4c4',
                            height: '40vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            borderRadius: '1rem',
                            backgroundImage: 'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)',
                        }}>
                            <h1 style={{
                                color: 'white',
                                fontSize: '5vmin'
                            }}>Programming</h1>
                            <Button variant="contained" style={{backgroundColor: '#fffd1b'}}>Click Me</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper elevation={12} style={{
                            backgroundColor: '#c4c4c4',
                            height: '40vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            borderRadius: '1rem',
                            backgroundImage: 'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)',
                        }}>
                            <h1 style={{
                                color: 'white',
                                fontSize: '5vmin'
                            }}>General</h1>
                            <Button variant="contained" style={{backgroundColor: '#fffd1b'}}>Click Me</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Homepage;
