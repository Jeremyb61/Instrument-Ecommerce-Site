import React from 'react';
import { Grid } from '@material-ui/core';
import { Parallax, Background } from 'react-parallax';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css'

const Header = () => {
    return (
        <div >
            <Parallax
                bgImage={require('../../images/jumbotron.jpg')}
                bgImageAlt="Violin Paralax image"
                strength={450}
            >
                <Grid
                    container
                    spacing={10}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <Grid 
                        item 
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={4}
                        >
                        <Typography className="head-title" variant="h2">
                            Muse Instruments
                        </Typography>
                        <Typography className="head-sub" component="h2" >                            
                            Find Your Melody                       
                        </Typography>
                    </Grid>

                    <div style={{ height: '800px' }} />
                </Grid>
            </Parallax>

    </div>
)};
export default Header;