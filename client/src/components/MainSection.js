import React, {useState, useEffect} from 'react';
import { Route, Link, useRouteMatch, useParams, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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

const Contact = () => {
    return (
    <div style={styles.contact}>
        <Typography style={{fontSize: 12, marginTop: 10, marginBottom: 10, opacity: '0.3', color: 'black', marginLeft: 10, marginRight: 10}}>mjjply2@gmail.com</Typography>
        <Typography style={{fontSize: 12, marginTop: 10, marginBottom: 10, opacity: '0.3', color: 'black', marginLeft: 10}}>(510)-650-5167</Typography>
    </div>
    )
}

const Main = () => {
    const matches600Min = useMediaQuery('(min-width:900px)')

    return (
        <div style={styles.mainComponentOuterDiv}>
            <div style={styles.leftSideMainDiv}>
                <img style={(!matches600Min ? styles.circleAvatar : styles.avatar)} src={Avatar}></img>
                {/*<Typography>GFHJK</Typography>*/}
            </div>
            <div style={styles.rightSideMainDiv}>
                <div style={styles.rightSideInnerDiv}>
                    <Typography style={{opacity: '0.8', textAlign: 'center', fontSize: 40}}>Matthew Jones</Typography>
                    <Typography style={{opacity: '0.3', textAlign: 'center', fontSize: 23}}>Software Engineer</Typography>
                    <Contact/>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const matches600Min = useMediaQuery('(min-width:900px)')
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const projectObj = [{
        image: MainHyperMap, name: "HyperMap", used: ["JavaScript", "React", "ExpressJS", "NodeJS", 
        "MongoDB", "Redis", "Heroku", "Google Docs API"], 
        description: "The HyperMap web application is an interactive conenction to all" +
        " of the data from current and future HyperLoop high speed transit systems around the globe."
    },
    {
        image: MobielScreenMain, name: "Plug Mobile", used: ["JavaScript", "React", "React Navigation", "Redux", "Redux Sagas", 
        "React Native", "OpenCV", "React Native Paper", "Xcode", "Android Studio"], 
        description: "Plug Mobile is a mobile app built for a partner in the energy sector. This application monitors "+
        "a very specfic tool using an excellent UI and ML to gather large amounts of data from in-field workers."
    },
    {
        image: DashboardScreenMain, name: "Plug Dashboard Analytics", used: ["JavaScript", "React", "React Router", "Redux", "Redux Sagas", 
        "Google Maps API"], 
        description: "An intuitive and elegant dashboard for the analytics end of the Plug Mobile application. It provides extensive "+
        "graphing data and a detailed gallery for individual item inspection."
    },
    {
        image: VisualizerMain, name: "Sorting Visualizer", used: ["JavaScript", "React", "Redux", "ExpressJS", "NodeJS", 
        "MaterialUI", "Heroku"], 
        description: "A nice Material UI based visualizer to help give a more hands on feel for the " +
        " different sorting algorithms, and how they sort/sift data."
    },
    {
        image: ComicClanMain, name: "Comic Clan", used: ["JavaScript", "React", "React Router", "Redux", "Redux Sagas", 
        "ExpressJS", "NodeJS", "MaterialUI", "Heroku"], 
        description: "Comic Clan provides great searchability and filtering for users to venture through a " +
        "small comic book archive."
    },]
    return (
        <div style={styles.mainProjectContainer}>
            <div style={styles.innerProjectContainer}>
                <Divider style={styles.projectTitleDivider}/>
            </div>
            <div style={styles.individualOuterProjectDiv}>
                <div style={styles.individualInnerProjectDiv}>
                    {projectObj.map((item, index) => {
                        return (
                            <>
                            <div style={(matches600Min ? styles.projectDescription : styles.projectDescriptionSmall)}>
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
                            <div style={(matches600Min ? styles.projectImage : styles.projectImageSmall)}>
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
        maxWidth: 900,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainComponentOuterDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    rightSideMainDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 140,
        minWidth: 300,
        height: 'auto',
    },
    rightSideInnerDiv: {
        minWidth: 300,
        justifyContent: 'center',
    },
    leftSideMainDiv: {
        display: 'flex',
        minWidth: 200,
    },
    avatar: {
        maxWidth: 600,
        width: '100%',
        minWidth: 200,
        minHeight: 200,
        objectFit: 'cover',
        display: 'block',
    },
    circleAvatar: {
        borderRadius: '50%',
        maxWidth: '100%',
        width: 250,
        height: 250, 
        minWidth: 200,
        minHeight: 200,
        objectFit: 'cover',
        display: 'block',
        margin: 20,
    },
    mainProjectContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '90%',
    },
    innerProjectContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    projectTitleDivider: {
        opacity: '0.2',
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
        width: '45%',
        minWidth: 243,
        marginTop: 10,
        marginBottom: 60,
    },
    projectImageSmall: {
        width: '100%',
        minWidth: 243,
        marginTop: 10,
        marginBottom: 60,
    },
    projectDescription: {
        width: '45%',
        minWidth: 243,
        marginRight: 20,
    },
    projectDescriptionSmall: {
        width: '100%',
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
    contact: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
    }
}