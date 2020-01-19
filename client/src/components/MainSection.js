import React, {useState, useEffect} from 'react';
import { Route, Link, useRouteMatch, useParams, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import Chip from '@material-ui/core/Chip'
import Avatar from '../img/intra_pic.jpg'
import MainHyperMap from '../img/hypermap_main.png'
import HyperMap1 from '../img/hypermap_screen1.png'
import HyperMap2 from '../img/hypermap_screen2.png'
import HyperMap3 from '../img/hypermap_screen3.png'
import VisualizerMain from '../img/Visualizer_main.png'
import ComicClanMain from '../img/ComicClanMain.png'
import MobielScreenMain from '../img/MobielScreenMain.png'
import DashboardScreenMain from '../img/DashboardScreenMain.png'


const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:'scroll'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

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
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const projectObj = [{
        image: MainHyperMap, name: "HyperMap", used: ["JavaScript", "React", "ExpressJS", "NodeJS", 
        "MongoDB", "Redis", "Heroku", "Google Docs API"], 
        description: "The HyperMap web application gives an interactive conenction to all" +
        " of the data from current and future HyperLoop high speed transit systems around the globe."
    },
    {
        image: VisualizerMain, name: "Sorting Visualizer", used: ["JavaScript", "React", "Redux", "ExpressJS", "NodeJS", 
        "Sorting Algorithms", "MaterialUI", "Heroku"], 
        description: "This was a fun visualizer to help give a more hands on feel about the " +
        " different types of sorting algorithms, and how they sort data. This was a lot of fun!"
    },
    {
        image: ComicClanMain, name: "Comic Clan", used: ["JavaScript", "React", "React Router", "Redux", "Redux Sagas", 
        "ExpressJS", "NodeJS", "MaterialUI", "Heroku"], 
        description: "Comic Clan is a web application that allows users to search through a small database of comics "+
        "with multiple search features."
    },
    {
        image: MobielScreenMain, name: "Plug Mobile", used: ["JavaScript", "React", "React Navigation", "Redux", "Redux Sagas", 
        "React Native", "OpenCV", "React Native Paper", "Xcode", "Android Studio"], 
        description: "Plug Mobile is a mobile app built out for our partner in the energy sector. This application monitors "+
        "a very specfic tool using an excellent UI and ML to gather large amounts of data from in-field workers."
    },
    {
        image: DashboardScreenMain, name: "Plug Dashboard Analytics", used: ["JavaScript", "React", "React Router", "Redux", "Redux Sagas", 
        "Google Maps API"], 
        description: "An excellent dashboard for the analytics end of the Plug Mobile application. It provides extensive "+
        "graphing data and a detailed gallery for individual item inspection."
    },]
    return (
        <div style={styles.mainProjectContainer}>
            <div style={styles.innerProjectContainer}>
                <Typography style={{alignSelf: 'flex-start', marginTop: 40, opacity: '0.8', fontSize: 30}}>Projects</Typography>
                <Divider style={styles.projectTitleDivider}/>
            </div>
            <div style={styles.individualOuterProjectDiv}>
                <div style={styles.individualInnerProjectDiv}>
                    {projectObj.map((item, index) => {
                        return (
                            <>
                            <div style={styles.projectDescription}>
                                <Typography style={{fontSize: '1.7em', textAlign: 'left', marginBottom: 20, marginTop: 30}}>{item.name}</Typography>
                                <Typography style={{fontSize: '1em', textAlign: 'left', marginBottom: 20}}>{item.description}</Typography>
                                <Typography style={{fontSize: '.65em', textAlign: 'left'}}></Typography>
                                {item.used.map((tech, ind) => {
                                    return (
                                        <>
                                        <Chip style={styles.techStackDescription} size="small" label={tech} />
                                        </>
                                    )
                                })}
                            </div>
                            <div style={styles.projectImage}>
                                <img onClick={handleOpen} style={styles.individualImage} src={item.image}></img>
                            </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>
            <div style={{marginTop: 40}}></div>
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 300,
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
        alignItems: 'center',
        flexDirection: 'column',
        width: '90%',
    },
    innerProjectContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
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
    },
    projectTitleDivider: {
        opacity: '0.2',
        backgroundColor: "black",
        marginBottom: 40,
    },
    individualOuterProjectDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    individualInnerProjectDiv: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'space-between',
    },
    projectImage: {
        width: '49%',
        minWidth: 243,
        marginTop: 10,
        marginBottom: 60,
    },
    projectDescription: {
        width: '48%',
        minWidth: 243,
        marginRight: 20,
    },
    individualImage: {
        maxWidth: '100%',
        minWidth: '100%',
        minHeight: '50%',
        objectFit: 'cover',
        height: 'auto',
        display: 'block',
    },
    techStackDescription :{
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
    },
}