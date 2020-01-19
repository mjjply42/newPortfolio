import React from 'react';
import { Route, Link, useRouteMatch, useParams, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import Avatar from '../img/intra_pic.jpg'

const Main = () => {
    return (
        <div style={styles.mainComponentOuterDiv}>
            <div style={styles.leftSideMainDiv}>
                <div style={styles.leftSideInnerDiv}>
                    <Typography style={{textAlign: 'left', fontSize: 40}}>Matthew Jones</Typography>
                    <Typography style={{textAlign: 'left', fontSize: 23}}>Software Engineer</Typography>
                    <Typography style={{textAlign: 'left', fontSize: 15}}>"I am an incredibly hardworking Front End Engineer, 
                        with the utmost respect for user design principles and the
                        ability to find solutions to user problems. I love programming and 
                        I love being part of a team that I can learn and grow with."</Typography>
                    <Typography style={{textAlign: 'left', fontSize: 17}}>mjjply2@gmail.com</Typography>
                    <Typography style={{textAlign: 'left', fontSize: 17}}>(510)-650-5167</Typography>
                </div>
            </div>
            <div style={styles.rightSideMainDiv}>
                <img style={styles.avatar} src={Avatar}></img>
            </div>
        </div>
    )
}

const Work = () => {
    return (
        <div>
            <h1>Work Div</h1>
        </div>
    )
}

export const MainSection = () => {
    return (
        <div style={styles.mainDivStyle}>
            <Route path={'/'} exact component={Main}/>
            <Route path={'/projects'} exact component={Work}/>
        </div>
    )
}

const styles = {
    mainDivStyle: {
        backgroundColor: "white",
        width: '70%',
    },
    mainComponentOuterDiv: {
        display: 'flex',
        alignContent: 'space-between',
    },
    leftSideMainDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '55%',
        height: 'auto',
    },
    leftSideInnerDiv: {
        width: '90%',
    },
    rightSideMainDiv: {
        width: '45%',
    },
    avatar: {
        maxWidth: '100%',
        maxHeight: 400,
        objectFit: 'cover',
        height: 450,
        display: 'block',
    }
}