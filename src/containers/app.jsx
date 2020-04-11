import React from 'react'
import { connect } from 'react-redux'
import {
  HashRouter as Router
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import MainView from './mainview.jsx'

export const mapStateToProps = (state) => {
  return {
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ConnectedApp = (props) => {
  return (
    <>
      <CssBaseline />
      <Router>
        <MainView />
      </Router>
    </>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
export default App
