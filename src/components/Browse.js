import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import axios from 'axios'

const url = 'http://localhost:8000';

const useStyles = () => ({
    card: {
        display: 'inline-block'
    },
    gridItem: {
        padding: '15px !important'
    },
    browseAction: {
        marginTop: '30px',
        marginBottom: '10px',
        textAlign: 'left'
    },
    cardTypography: {
        fontSize: '14px !important'
    }
});

class Browse extends Component {
    state = {
        departments: [],
    };


    componentDidMount() {
        this.getDepartments();
    }
    async getDepartments() {
        await axios.get(`${url}/api/departments`)
            .then((response) => {
                this.setState({ departments: response.data });
            });
    }

    render() {
        const { departments } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Typography styles={{ marginTop: '30px', marginBottom: '10px', textAlign: 'left' }} display="block" variant='h4'>
                    Browse Departments
                </Typography>

                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    {departments.map((obj, index) => {
                    return <Grid
                        key={index}
                        className={classes.gridItem}
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                    >
                        <Link to={`/${obj.id}`}>
                            <Card className={classes.card} style={{ width: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ height: '250px' }}
                                        image={require(`../images/${obj.image}`)}
                                        title={obj.name}
                                    />
                                    <Typography className={classes.cardTypography} variant="overline">
                                        {obj.name}
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                })}
                </Grid>
                <Link to="/new">
                    Add Product
                </Link>
            </div>
        )

    }
}

Browse.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Browse);