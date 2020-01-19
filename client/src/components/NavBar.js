import React, { Fragment, useState, useEffect } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { Route, Link, useRouteMatch, useParams, Switch } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import WorkIcon from '@material-ui/icons/Work'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

export const NavBar = () => {
    return (
        <div style={styles.navBarOuterDiv}>
            <Tooltip title="Home" placement="top" arrow>
                <HomeIcon className="nav-icons" onClick={() => window.location.href = "/"} style={(window.location.pathname === '/' ? 
                styles.activeNavBarIcon : styles.inActiveNavBarIcon)} fontSize={'Large'}/>
            </Tooltip>
            <Tooltip title="Projects" placement="top" arrow>
                <WorkIcon className="nav-icons" onClick={() => window.location.href = "/projects"} style={(window.location.pathname === '/projects' ? 
                styles.activeNavBarIcon : styles.inActiveNavBarIcon)} fontSize={'Large'}/>
            </Tooltip>
            <Tooltip title="Github" placement="top" arrow>
                <GitHubIcon className="nav-icons" onClick={() => window.open("https://github.com/mjjply42", "_blank")} style={(window.location.pathname === '/github' ? 
                styles.activeNavBarIcon : styles.inActiveNavBarIcon)} fontSize={'Large'}/>
            </Tooltip>
            <Tooltip title="LinkedIn" placement="top" arrow>
                <LinkedInIcon className="nav-icons" onClick={() => window.open("https://www.linkedin.com/in/matthew-jones-4682ab126/", "_blank")}  style={(window.location.pathname === '/linkedin' ? 
                styles.activeNavBarIcon : styles.inActiveNavBarIcon)} fontSize={'Large'}/>
            </Tooltip>
        </div>
    )
}

const styles = {
    activeNavBarIcon: {
        color: 'white',
        width: 40,
        height: 'auto',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        cursor: 'pointer',
    },
    inActiveNavBarIcon: {
        color: 'white',
        width: 40,
        height: 'auto',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        opacity: 0.38,
        cursor: 'pointer',
    },
    navBarOuterDiv: {
        display: 'flex',
        alignItems: 'center',
    }
}