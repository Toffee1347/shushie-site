import { Grid } from "@mui/material";
import React from "react";
import Curve from "../../compnents/Curve";

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <Curve arrow/>
                <div className="intro" id="intro">
                    <Grid container spacing={3}>
                        <Grid item xs={0} md={2}/>
                        <Grid item xs={12} md={4}>
                            <img className="home-main-image curved-corners" style={{width: '80%'}} alt="logo" src="/static/img/profile.png"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="intro-text">
                                <div className="center-inner">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper purus nulla, vitae laoreet orci pulvinar non. Sed sollicitudin porta euismod. Sed at elementum velit. Curabitur fringilla tempus tincidunt. Fusce ac leo in ipsum condimentum aliquet. Nulla sagittis leo sit amet neque ultrices bibendum. Curabitur eu augue ut est fringilla lacinia vel et tortor. Morbi dictum consectetur mauris ac tincidunt. Praesent sit amet tempor sem, eu semper orci. Sed varius lacus magna, a laoreet magna fringilla ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu felis eget turpis ullamcorper feugiat in vel erat. Morbi a sodales nisi, a pulvinar nibh. Proin mauris metus, egestas in sollicitudin a, maximus at felis.</p>
                                    <p>Quisque nec nulla vel eros euismod feugiat eu vitae nulla. Donec elementum arcu quis suscipit eleifend. Vivamus ut lectus facilisis, lobortis arcu ac, semper nunc. Aenean semper id ex vitae euismod. Donec consectetur eros ac est convallis, sed venenatis lacus gravida. Suspendisse pretium nisi vitae dignissim feugiat. Mauris efficitur dolor risus, mattis porta massa tristique efficitur. Integer sed accumsan arcu. Donec gravida, leo et pellentesque scelerisque, odio purus congue purus, eleifend aliquet urna lorem vitae arcu.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={0} md={2}/>
                    </Grid>
                </div>
                <Curve inverted topOffset="0"/>
            </div>
        );
    }
}