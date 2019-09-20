import React from 'react'


import Browse from './Browse.js'
import Header from './Layout/Header.js';
import { Container } from '@material-ui/core';



export default function HomePage(props) {
    return (
        <div>
            <Header />

            <Container maxWidth="xl">
                <Browse />
            </Container>
            

        </div>
    )
}
