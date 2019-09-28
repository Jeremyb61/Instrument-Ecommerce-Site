import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//http cycle library
import axios from 'axios'
// Servers address
const url = 'http://localhost:8000';

const useStyles = (theme) => ({
    root: {
        padding: theme.spacing(1, 2),
        textAlign: 'right'

    },
    price: {
        color: 'rgb(205, 36, 24)',

    },
    form: {

    },
    inputNum: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: '0',
        width: '96%'
    },
    gridItem: {
        display: 'inline-block',
        textAlign: 'left'
    }
});


class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            totalPrice: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            let rounded = this.props.price.toFixed(2);
            let result = this.formatNumber(rounded);
            
            if(result.indexOf('.') === -1) {
                result+= '.00';
            }
            this.setState({
                totalPrice: result
            });
        }, 1000)
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    handleChange(e) {
        if (e.target.value < 2) {
            e.target.value = 1;
            this.setState({
                quantity: 1
            });
        } else {
            this.setState({
                quantity: e.target.value
            });
        }
        const num = this.props.price * e.target.value;
        let rounded = num.toFixed(2);
        let result = this.formatNumber(rounded);
        if(result.indexOf('.') === -1) {
            result+= '.00';
        }
        this.setState({
            totalPrice: result
        })

    }
    addToCart() {
        
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <Typography variant="h6" component="h3" style={{ color: "#1d862c", textDecoration: 'underline', marginBottom: '10px' }}>
                        In stock
                </Typography>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        alignContent="flex-start"

                    >

                        <Grid
                            className={classes.gridItem}
                            item
                            xs={5}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={3}>
                            <Typography
                                variant="h5"
                                component="h3"
                                className={classes.price}
                            >
                                ${this.state.totalPrice}
                            </Typography>
                        </Grid>
                        <Grid
                            className={classes.gridItem}
                            item
                            xs={7}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={3}>
                            <form noValidate autoComplete="off" className={classes.form}>
                                <TextField
                                    placeholder={this.state.quantity.toString()}
                                    onChange={this.handleChange}
                                    id="outlined-number"
                                    label="Quantity"
                                    type="number"
                                    className={classes.inputNum}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </form>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <ButtonGroup
                                onClick={this.addToCart}
                                variant="outlined"
                                size="large"
                                color="secondary"
                                fullWidth aria-label="full width button group">
                                <Button>Add to cart</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Paper>

            </div >
        )
    }
}
AddToCart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(AddToCart);