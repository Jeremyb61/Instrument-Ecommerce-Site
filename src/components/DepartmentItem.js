import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux';
import { fetchItems } from '../actions/itemActions'

const useStyles = () => ({
    card: {
        minWidth: '100%',
        height: '430px',
        display: 'inline-block',

    },
    gridItem: {
        padding: '0px !important',
    },
    media: {
        height: 300,
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
    },
});

class DepartmentItem extends Component {

    async componentDidMount() {
        await this.props.fetchItems(this.props.params);
    }
    render() {

        const { classes } = this.props;
        var itemList;

        if (!this.props.items[0]) {
            itemList = <h1>Loading</h1>
        } else {
            itemList = this.props.items.map((item) => {
                if (item.productimages[0]) {

                    if (item.name.length >= 66) {
                        let nameArr = item.name.split('');
                        let counter = 0;
                        for (let i = 66; i < nameArr.length; i++) {
                            counter++;
                            if (i + 1 === nameArr.length && counter < 3) {
                                nameArr[i + 1] = "."
                            }
                            if (counter > 3) {
                                nameArr[i] = "";
                            }
                            else {
                                nameArr[i] = ".";
                            }
                        }
                        item.name = nameArr.join('');
                    }
                    return (
                        <Grid
                            className={classes.gridItem}
                            key={item.name}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={3}
                        >
                            <Link to={`/${this.props.params}/${item.id}`}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={item.productimages[0].path}
                                            title={item.name}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.name}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="h2" style={{ color: '#cd2418' }}>
                                                {item.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    )
                }
            })
        }
        return (
            <div>

                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {itemList}
                </Grid>

            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    items: state.items.items
})

DepartmentItem.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};
export default withStyles(useStyles)(connect(mapStateToProps, { fetchItems })(DepartmentItem));