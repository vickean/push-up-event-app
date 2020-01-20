import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Counter } from '../Counter/Counter'
import { LandingPage } from '../LandingPage/LandingPage'
import { ThankYou } from '../ThankYou/ThankYou'
import { CountDisplay } from '../CountDisplay/CountDisplay'

export const Routes = (props: any) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/counter">
          <Counter />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
        </Route>
        <Route exact path="/count-display">
          <CountDisplay />
        </Route>
      </Switch>
    </Router>
  )
}
