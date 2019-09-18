import React from 'react'
import { Container } from '@material-ui/core';

import DepartmentItem from './DepartmentItem.js'
export default function Department(props) {
    const { params } = props.match;
    
    return (
        <div>
            <br /><br /><br />
            <h1>{params.instName} Department</h1>
            <Container maxWidth="lg">
                <DepartmentItem params={params} />
            </Container>
        </div>
    )
}
