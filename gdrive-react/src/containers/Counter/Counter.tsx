import React, { useState } from 'react'
import { Paper, Typography, Grid, Button } from '@material-ui/core'
import { useStyles } from '../styles'
import { useHistory, useLocation } from 'react-router-dom'

//TODO:
// send data to server

export const Counter = (props: any) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [count, setCount] = useState(0)
  const upCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }
  const saveCount = () => {
    fetch('/save-count', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: location.state,
        count: count,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log('response :', res)
      })

    history.push({
      pathname: '/thankyou',
      state: {
        name: location.state,
        count: count,
      },
    })
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
            <Typography variant="h5" align="center">
              {location.state}'s
            </Typography>
            <Typography variant="h5" align="center">
              PUSH-UP COUNTER
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{ textAlign: 'center' }}
            className={classes.coreGridItem}
          >
            <Grid item xs={6} className={classes.coreGridItem}>
              <Button
                variant="contained"
                color="default"
                onClick={saveCount}
                size="large"
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.coreGridItem}>
              <Button
                variant="contained"
                color="secondary"
                onClick={resetCount}
                size="large"
              >
                Reset
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.coreGridItem}>
            <Typography align="center" className={classes.bigCounter}>
              {count}
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
              className={classes.bigButton}
              onClick={upCount}
              fullWidth
            >
              Push-Up!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
