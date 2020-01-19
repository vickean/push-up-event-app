import React, { useState } from 'react'
import { Paper, Grid, Typography, Button, TextField } from '@material-ui/core'
import { useStyles } from '../styles'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const LandingPage = (props: any) => {
  const [state, setState] = useState('')
  const classes = useStyles()
  const history = useHistory()

  const handleStart = () => {
    axios
      .post('/testpost', {
        message: 'Hello!',
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get('/ping')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    history.push({
      pathname: '/counter',
      state: state,
    })
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          className={classes.coreContainer}
          justify="space-around"
        >
          <Grid item xs={12} className={classes.coreGridItem}>
            <Typography variant="h3" align="center">
              TAYLOR'S
            </Typography>
            <Typography variant="h4" align="center">
              Pump-a-thon
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.coreGridItem}
            style={{ textAlign: 'center' }}
          >
            <Typography variant="h5" align="center">
              Hi! my name is
            </Typography>
            <TextField
              name="nameField"
              variant="outlined"
              className={classes.nameField}
              InputProps={{
                classes: {
                  input: classes.nameFieldInput,
                },
              }}
              value={state}
              onChange={e => {
                setState(e.target.value)
              }}
            />
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
              onClick={handleStart}
              fullWidth
            >
              Start!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
