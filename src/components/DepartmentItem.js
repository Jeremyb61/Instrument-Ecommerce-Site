import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import guitarDept1 from '../images/guitarDept1.jpg';
import guitarDept2 from '../images/guitarDept2.jpg';
import guitarDept3 from '../images/guitarDept3.jpg';

const useStyles = makeStyles({
    card: {
        maxWidth: '100%',
        display: 'inline-block',
        
    },
    gridItem: {
        padding:'0px !important',
    },
    media: {
        height: 300,
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
    },
});

export default function DepartmentItem(props) {
    const classes = useStyles();
    const params = props.params.instName;

    const state = {
        departmentItems: [
            {
                name: 'Taylor 250ce-BLK DLX 12-String Dreadnought Acoustic-Electric Guitar',
                img: guitarDept1,
                price: '$1,599.00'
            },
            {
                name: 'Fender Custom Shop Eric Clapton Crossroads Blind Faith Telecaster Electric Guitar by Todd Krause 3-Color Sunburst',
                img: guitarDept2,
                price: '$11,999.00'
            },
            {
                name: 'Gibson Custom Eric Clapton Crssroads 1964 Firebird I VOS Electric Guitar Vintage Sunburst',
                img: guitarDept3,
                price: '$7,999.00'
            },
            {
                name: 'Gibson Custom Eric Clapton Crossroads 1964 Fiebird I VOS Electric Gitar Vintage Sunburst',
                img: guitarDept3,
                price: '$7,999.00'
            },
            {
                name: 'Gibson Custom Eric Clapton Crossroads 1964 Firebird I VOS Electric Guitar Vintae Sunburst',
                img: guitarDept3,
                price: '$7,999.00'
            },
            {
                name: 'Gibson Custom Eric Clapon Crossroads 1964 Firebird I VOS Electric Guitar Vintage Sunburst',
                img: guitarDept3,
                price: '$7,999.00'
            },
            {
                name: 'Gibson Custom Eric Clapton Crossrads 1964 Firebird I VOS Electric Guitar Vintage Sunburst',
                img: guitarDept3,
                price: '$7,999.00'
            },
        ]
    }
    const itemList = state.departmentItems.map((item) => {
        if (item.name.length >= 66) {
            let nameArr = item.name.split('');
            let counter = 0;
            for (let i = 66; i < nameArr.length; i++) {
                counter++;
                if(i+1===nameArr.length && counter < 3) {
                    nameArr[i+1] = "."
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
                <Link to={`/${params}/${item.name}`}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                            title="Taylor 250ce-BLK DLX 12-String Dreadnought Acoustic-Electric Guitar"
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
    })
    return (
        <div>
            <br /><br />
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
};
