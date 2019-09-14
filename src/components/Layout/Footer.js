import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    footer: {
        minHeight: '50px',
        backgroundColor: '#FFFFFF',
        paddingTop:'12px'
    },
    footerTypographyBold: {
        fontSize:'15px !important',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography className={classes.footerTypographyBold} variant="h6">
                2019 — Muse Instruments
            </Typography>
        </div>
    )
}
