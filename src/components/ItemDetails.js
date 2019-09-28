import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import '../App.css'
// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "react-image-gallery/styles/css/image-gallery.css";

import AddToCart from './AddToCart';

//http cycle library
import axios from 'axios'
import { parse } from '@babel/core';
// Servers address
const url = 'http://localhost:8000';

const useStyles = (theme) => ({
    gridItem: {
        padding: '0px !important',
   },
    
    root: {
        padding: theme.spacing(2, 2),
    },
    img: {
        height:'350px'
    }
});

class ItemDetails extends Component {
    state = {
        item: {},
        mainImage: "",
        productImages: [],
        price: 0
    };


    // Lifecycle method that fires when component initializes
    async componentDidMount() {
        await this.getCurrentItem();
        this.prepCarosel();

    }
    //uses axios to make a get request to render all departments
    async getCurrentItem() {
        await axios.get(`${url}/api/products/one/${this.props.match.params.itemId}`)
            .then((response) => {
                let price = response.data.product.price;
                let num = price.replace(',','');
                const newPrice = parseFloat(num);
                this.setState({
                    item: response.data.product,
                    mainImage: response.data.product.productimages[0].path,
                    productImages: response.data.product.productimages,
                    price: newPrice
                });
            });
    }
    prepCarosel() {
        const { productImages } = this.state;
        const imageArray = [];
        
        productImages.forEach((obj) => {
            let newObj = {
                original: obj.path,
                thumbnail: obj.path,
                id: obj.id,
                productId:obj.productId,
                sizes: '100vh'
            }
            imageArray.push(newObj);
        });
        this.setState({
            productImages:imageArray
        })
    }

    render() {
        const { classes } = this.props;
        const { item, productImages, price } = this.state;
    
        return (
            <div style={{minHeight: '80vh'}}>
                <div className="item-det-body">
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid
                        className={classes.gridItem}
                        item
                        xs={12}
                        sm={10}
                        md={6}
                        lg={3}
                        xl={3}
                    >
                        <ImageGallery 
                            additionalClass="image-scroll"
                            useBrowserFullscreen={false}
                            sizes={productImages.sizes}
                            items={productImages}
                            showPlayButton={false}
                            />
                    </Grid>
                    <Grid
                        className={classes.gridItem}
                        style={{marginTop:'10px'}}
                        item
                        xs={11}
                        sm={10}
                        md={6}
                        lg={3}
                        xl={3}
                    >
                        <Typography variant="h5" component="h3" style={{marginBottom:'25px'}}>
                            {item.name}
                        </Typography>
                        <Typography component="p" align="justify">
                            (Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet varius enim. Nullam lacinia lacus in venenatis ullamcorper. Sed viverra dui nibh, non imperdiet justo iaculis lobortis. Vestibulum a finibus nunc. Morbi molestie eros sem, id tincidunt augue malesuada vitae. Aliquam egestas, risus id rhoncus tincidunt, velit ante dignissim arcu, id laoreet nisi turpis eget massa. Suspendisse porta luctus arcu, vitae fermentum massa vulputate at. Quisque in ipsum sollicitudin, ornare nibh eget, tempor nulla. Nulla enim metus, lacinia sed aliquet sed, dapibus id dui.
                        </Typography>
                    </Grid>
                    <Grid
                        className={classes.gridItem}
                        style={{marginTop:'10px'}}
                        item
                        xs={11}
                        sm={10}
                        md={6}
                        lg={3}
                        xl={3}
                    >
                        <AddToCart item={item} price={price}/>
                    </Grid>
                </Grid>
                </div>
            </div>
        )


    }
}

ItemDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ItemDetails);