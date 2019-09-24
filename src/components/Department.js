import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import DepartmentItem from './DepartmentItem.js'

import axios from 'axios';
const url = 'http://localhost:8000';

const useStyles = () => ({
    header: {
        marginBottom: "30px",
        fontWeight:'300'
    }
});

class Department extends Component {
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
            const { classes } = this.props;

            return (
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    <h1 className={classes.header}>{this.state.departmentName}</h1>
                    <Container maxWidth="lg">
                        <DepartmentItem params={this.state.params} />
                    </Container>
                </div>
            )
        }
    }
    Department.propTypes = {
        classes: PropTypes.object.isRequired,
    };
    export default withStyles(useStyles)(Department);