import React from 'react'
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    backgroundColor: '#f7f7f7',
    height: '100vh',
    width: '100vw',
  },
  paper: {
    margin: '1rem',
    padding: '1rem',
    width: '100%',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  nameField: {
    margin: '1rem',
  },
  nameFieldInput: {
    fontSize: '2rem',
    textAlign: 'center',
  },
  coreContainer: {
    height: '100%',
  },
  coreGridItem: {
    margin: 'auto',
  },
  bigCounter: {
    fontWeight: 'bolder',
    fontSize: '10rem',
    lineHeight: '10rem',
  },
  bigButton: {
    height: '10rem',
    fontSize: '3rem',
  },
  anotherOneButton: {
    height: '5rem',
    fontSize: '2rem',
  },
})
