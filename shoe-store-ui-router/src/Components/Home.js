import { Container, Typography } from '@mui/material'
import { Box, typography } from '@mui/system'

import React from 'react'

export const Home = () => {
    return (
        <Box sx = {{width: '100', height: '100vh', bgcolor: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant = 'h2' sx = {{fontWeight:'bold'}} >
                Home
            </Typography>
            
        </Box>
        
    )
}
