import React from 'react'
import { Paper, Typography, Grid, Button } from '@material-ui/core'
import { useStyles } from '../styles'
import { useHistory, useLocation } from 'react-router-dom'

export const ThankYou = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const anotherOne = () => {
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <Paper elevation={2} className={classes.paper}>
        <Grid
          container
          className={classes.coreContainer}
          justify="space-around"
        >
          <Grid item xs={12} className={classes.coreGridItem}>
            <Typography
              variant="h4"
              align="center"
              className={classes.fontWeightBold}
            >
              THANK YOU
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className={classes.fontWeightBold}
            >
              {location.state.name}
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.coreGridItem}>
            <Typography variant="h3" align="center">
              You did
            </Typography>
            <Typography align="center" className={classes.bigCounter}>
              {location.state.count}
            </Typography>
            <Typography variant="h3" align="center">
              push-ups!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: 'center' }}
            className={classes.coreGridItem}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.anotherOneButton}
              fullWidth
              onClick={anotherOne}
            >
              Another One!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
