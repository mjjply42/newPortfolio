import React from 'react';
import { Route, Link, useRouteMatch, useParams, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import Avatar from '../img/intra_pic.jpg'

const Main = () => {
    return (
        <div style={styles.mainComponentOuterDiv}>
            <div style={styles.rightSideMainDiv}>
                <img style={styles.avatar} src={Avatar}></img>
            </div>
            <div style={styles.leftSideMainDiv}>
                <div style={styles.leftSideInnerDiv}>
                    <Typography style={{opacity: '0.8', textAlign: 'center', fontSize: 40}}>Matthew Jones</Typography>
                    <Typography style={{opacity: '0.3', textAlign: 'center', fontSize: 23}}>Software Engineer</Typography>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div style={styles.mainProjectContainer}>
            <div style={styles.innerProjectContainer}>
                <Typography style={{opacity: '0.8', fontSize: 30}}>Projects</Typography>
            </div>
        </div>
    )
}

export const MainSection = () => {
    return (
        <div style={styles.mainDivStyle}>
            <Route path={'/'} exact component={Main}/>
            <Route path={'/projects'} exact component={Projects}/>
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainProjectContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    innerProjectContainer: {
        display: 'flex',
        width: '86%',
        marginTop: 50,
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
        minWidth: '300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSideMainDiv: {
        width: '45%',
        minWidth: 200,
    },
    avatar: {
        maxWidth: '100%',
        minWidth: 200,
        maxHeight: 400,
        objectFit: 'cover',
        height: 450,
        display: 'block',
    }
}