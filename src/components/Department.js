import React, { Component } from 'react'
import { Container } from '@material-ui/core';

import DepartmentItem from './DepartmentItem.js'

import axios from 'axios';
const url = 'http://localhost:8000';

export default class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: props.match.params.instId,
            departmentName: null
        }
    }

    async getCurrentDepartment() {
        await axios.get(`${url}/api/departments/${this.state.params}`)
            .then((response) => {
                this.setState({
                    departmentName: response.data.name
                })
            })
    }
        componentDidMount() {
            this.getCurrentDepartment();
        }

        render() {
            return (
                <div>
                    <br /><br /><br />
                    
                    <h1>{this.state.departmentName} Department</h1>
                    <Container maxWidth="lg">
                        <DepartmentItem params={this.state.params} />
                    </Container>
                </div>
            )
        }
    }
