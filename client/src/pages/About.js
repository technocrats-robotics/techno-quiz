import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import backgroundImg from '../img/bg.svg';

export default function About() {
    return (
        <div style={{
            backgroundImage: 'url(' + backgroundImg + ')',
            backgroungRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: '50% 0',
            position: 'absolute',
        }}>
            <Box sx={{
                display: 'flex',
                width: '85%',
                mx: 'auto',
                mt: '5rem',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container columnSpacing={{ xs: 1, sm: 6, md: 10, lg: 6 }} rowSpacing={6}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper elevation={12} style={{
                            backgroundColor: '#c4c4c4',
                            height: '40vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            borderRadius: '1rem',
                            background: 'rgba(41, 42, 46, 0.6)',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: 'blur( 6px )',

                        }}>
                        <h1 style={{
                            color: 'white',
                            fontSize: '5vmin'
                        }}>Mechanical</h1>
                        <Button variant="outlined" style={{ color: '#fffd1b', border: '2px solid #fffd1b' }}>Click Me</Button>
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
                        background: 'rgba(41, 42, 46, 0.6)',
                        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                        backdropFilter: 'blur( 6px )',
                    }}>
                        <h1 style={{
                            color: 'white',
                            fontSize: '5vmin'
                        }}>Electrical</h1>
                        <Button variant="outlined" style={{ color: '#fffd1b', border: '2px solid #fffd1b' }}>Click Me</Button>
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
                        background: 'rgba(41, 42, 46, 0.6)',
                        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                        backdropFilter: 'blur( 6px )',
                    }}>
                        <h1 style={{
                            color: 'white',
                            fontSize: '5vmin'
                        }}>Programming</h1>
                        <Button variant="outlined" style={{ color: '#fffd1b', border: '2px solid #fffd1b' }}>Click Me</Button>
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
                        background: 'rgba(41, 42, 46, 0.6)',
                        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                        backdropFilter: 'blur( 6px )',
                    }}>
                        <h1 style={{
                            color: 'white',
                            fontSize: '5vmin'
                        }}>General</h1>
                        <Button variant="outlined" style={{ color: '#fffd1b', border: '2px solid #fffd1b' }}>Click Me</Button>
                    </Paper>
                </Grid>
            </Grid>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '85%',
                mx: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '5rem',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '9vmin',
                }}>About Technocrats</h1>
                <p style={{
                    color: 'white',
                    fontSize: '4vmin',
                    marginTop: '2rem',
                    textAlign: 'justify',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut elementum erat. Morbi nec malesuada elit. Suspendisse placerat velit magna, vitae commodo mi accumsan elementum. Curabitur cursus nunc sit amet faucibus consequat. Fusce dictum interdum leo. Sed eget luctus leo. Nunc tellus lorem, placerat id urna at, viverra iaculis magna. Nunc a fermentum mauris. Etiam malesuada leo ut quam elementum sodales. Duis a ullamcorper purus. Aenean tristique felis in bibendum imperdiet. Praesent euismod ante ac tortor sodales, convallis fermentum turpis sagittis. Nulla iaculis vel diam a luctus. Aenean porta purus orci, in mattis turpis dignissim ut.
                </p>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '85%',
                mx: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '5rem',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '9vmin',
                }}>Achievements</h1>
                <Grid 
                    container 
                    columnSpacing={{ xs: 1, sm: 4, md: 6, lg: 6 }} 
                    rowSpacing={6} 
                    style={{ marginTop: '1.5rem' }}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <img src={require("../img/pic_1.svg").default} style={{
                            width: '90%'
                        }}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <img src={require("../img/pic_2.svg").default} style={{
                            width: '90%'
                        }}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <img src={require("../img/pic_3.svg").default} style={{
                            width: '90%'
                        }}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <img src={require("../img/pic_4.svg").default} style={{
                            width: '90%'
                        }}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
};