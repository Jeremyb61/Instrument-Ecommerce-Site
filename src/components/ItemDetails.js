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

//http cycle library
import axios from 'axios'
// Servers port
const url = 'http://localhost:8000';

const useStyles = () => ({

});

class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {}
        };
    }

    // Lifecycle method that fires when component initializes
    async componentDidMount() {
        await this.getCurrentIem();
    }
    //uses axios to make a get request to render all departments
    async getCurrentIem() {
        await axios.get(`${url}/api/products/one/${this.props.match.params.itemId}`)
            .then((response) => {
                // console.log(response)
                this.setState({ item: response.data });
                console.log(this.state.item);
            });

    }

    render() {
        const { classes } = this.props;
        if (this.state.item) {
            return (
                <div>
 
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                    >
                        <Grid
                            // className={classes.gridItem}
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={3}
                        >
                            <Card className={classes.card} style={{ width: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{ height: '250px' }}
                                        // image={this.state.item.productimages[0].path}
                                    // title={item.name}
                                    />
                                    {/* <Typography className={classes.cardTypography} variant="overline">
                                    {obj.name}
                                </Typography> */}
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            )
        }

    }
}

ItemDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ItemDetails);