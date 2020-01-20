import React, { useState, useEffect } from 'react'
import { Paper, Typography, Grid, Button } from '@material-ui/core'
import { useStyles } from '../styles'
import format from 'date-fns/format'

//TODO:
// send data to server

export const CountDisplay = (props: any) => {
  const classes = useStyles()
  let [refresh, setRefresh] = useState(0)
  let [data, setData] = useState('')
  let [count, setCount] = useState(0)
  let [latest, setLatest] = useState()

  const getCount = () => {
    fetch('/get-count')
      .then(res => res.json())
      .then(res => {
        // console.log('response :', res)
        setData(res)
      })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh(refresh++)
      getCount()
      const dataArr = data.split('\n')
      dataArr.pop()
      const parseData = dataArr.map(el => JSON.parse(el))
      const totalPushups = parseData.reduce((acc, el) => acc + el.count, 0)
      setLatest(parseData[parseData.length - 1])
      setCount(totalPushups)
    }, 500)
    return () => clearInterval(interval)
  })

  return (
    <div className={classes.root}>
      <Paper elevation={2} className={classes.paper}>
        <Grid
          container
          className={classes.coreContainer}
          justify="space-around"
        >
          <Grid item xs={12} className={classes.coreGridItem}>
            <Typography variant="h3" align="center">
              TOTAL PUSH-UPS
            </Typography>
            <Typography align="center" variant="h3">
              {format(new Date(), 'hh:mm:ss a')}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.coreGridItem}>
            <Typography align="center" className={classes.bigCounter}>
              {count}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.coreGridItem}>
            <Typography align="center" variant="h4">
              Most Recent Participant!
            </Typography>
            <Typography align="center" variant="h2">
              {latest ? latest.name : ''} with {latest ? latest.count : ''}{' '}
              push-ups at{' '}
              {latest ? format(new Date(latest.timeStamp), 'hh:mm:ss a') : ''}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
