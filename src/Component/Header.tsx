import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
	return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit">
                        <h1>Police Department of Berlin</h1>
                        <br />
                        <h2>Stolen Bykes</h2>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
		
	)
}

export default Header;
