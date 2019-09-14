import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// MUI Components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
//images
import violinImg from "../images/violin.jpg";
import saxImg from "../images/sax.jpg";
import trumpetImg from "../images/trumpet.jpg";
import tromboneImg from "../images/trombone.jpg";
import keyImg from "../images/keyboard.jpg";
import guitarImg from "../images/guitar.jpg";
import clarinetImg from "../images/clarinet.jpg";
import bassImg from "../images/cello.jpg";
import drumsImg from "../images/drums.jpg";

const useStyles = makeStyles(() => ({
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
}));
export default function Browse() {
    const classes = useStyles();

    const state = {
        instruments: [
            { name: "Violin", img: violinImg, route: "" },
            { name: "Saxaphone", img: saxImg, route: "" },
            { name: "Trumpet", img: trumpetImg, route: "" },
            { name: "Trombone", img: tromboneImg, route: "" },
            { name: "Keyboard", img: keyImg, route: "" },
            { name: "Guitar", img: guitarImg, route: "" },
            { name: "Clarinet", img: clarinetImg, route: "" },
            { name: "Bass", img: bassImg, route: "" },
            { name: "Percussion", img: drumsImg, route: "" }
        ]
    }
    const instrumentList = state.instruments.map((obj) => {
        return (
            <Grid
                className={classes.gridItem}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
            >
                <Link to={`/${obj.name}`}>
                    <Card className={classes.card} style={{ width: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                style={{ height: '250px' }}
                                image={obj.img}
                                title={obj.name}
                            />
                            <Typography className={classes.cardTypography} variant="overline">
                                {obj.name}
                            </Typography>
                        </CardActionArea>

                    </Card>
                </Link>
            </Grid>
        )
    })
    return (
        <div>
            <Typography className={classes.browseAction} display="block" variant='h4'>
                Browse Instruments
            </Typography>
            <Grid
                container
                spacing={0}
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
                {instrumentList}
            </Grid>
        </div>
    )
}

