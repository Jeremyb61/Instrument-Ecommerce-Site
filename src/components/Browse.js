import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
//images
import violinImg from "../images/violin.jpg";
import saxImg from "../images/mic.jpg";
import accessories from "../images/accessories.png";
import keyImg from "../images/keyboard.jpg";
import guitarImg from "../images/guitar.jpg";
import bassImg from "../images/bass.jpg";
import drumsImg from "../images/drums.jpg";

const axios = require('axios');

const url = 'http://localhost:8000'
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
export default function Browse(props) {
    const [departments, setDepartments] = useState(null);
    useEffect(() => {
        callBackendAPI();
    });
    const callBackendAPI = async () => {
        await axios.get(`${url}/api/departments`)
        .then((res) => {
            setDepartments(res.data);
        });
    }
    console.log(departments)
    const classes = useStyles();

    // const state = {
    //     departments: [
    //         { name: "Guitar", img: guitarImg, key: "" },
    //         { name: "Bass", img: bassImg, key: "" },
    //         { name: "Percussion", img: drumsImg, key: "" },
    //         { name: "Keyboard & MIDI", img: keyImg, key: "" },
    //         { name: "Band & Orchestra", img: violinImg, key: "" },
    //         { name: "Mics & Wireless", img: saxImg, key: "" },
    //         { name: "Accessories", img: accessories, key: "" }, 
    //     ]
    // }
    // const departmentList = state.departments.map((obj,index) => { 
    //     return (
    //         <Grid
    //             key={index}
    //             className={classes.gridItem}
    //             item
    //             xs={12}
    //             sm={12}
    //             md={6}
    //             lg={4}
    //             xl={3}
    //         >
    //             <Link to={`/${obj.name}`}>
    //                 <Card className={classes.card} style={{ width: '100%' }}>
    //                     <CardActionArea>
    //                         <CardMedia
    //                             style={{ height: '250px' }}
    //                             image={obj.img}
    //                             title={obj.name}
    //                         />
    //                         <Typography className={classes.cardTypography} variant="overline">
    //                             {obj.name}
    //                         </Typography>
    //                     </CardActionArea>

    //                 </Card>
    //             </Link>
    //         </Grid>
    //     )
    // })
    return (
        <div>
            <Typography className={classes.browseAction} display="block" variant='h4'>
                Browse Departments
            </Typography>
            <Grid
                container
                spacing={0}
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
                {/* {departmentList} */}
            </Grid>
        </div>
    )
}

