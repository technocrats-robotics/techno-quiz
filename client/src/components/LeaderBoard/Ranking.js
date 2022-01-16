import { Box } from '@mui/material'
import React from 'react'

function Ranking() {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
             background:'linear-gradient(to bottom,rgba(9,191,16,1),rgba(0,0,0,0))',
             height:'100%',
             margin:'1rem',
             padding:'1rem',
             overflow:'hidden',
             borderRadius:'1.5rem'

        }}>
            <p>Rank-1</p>
            <p>Rank-2</p>
            <p>Rank-3</p>
        </Box>
    )
}

export default Ranking
