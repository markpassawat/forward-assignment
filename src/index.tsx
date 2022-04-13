import React from 'react'
import ReactDOM from 'react-dom'
// import ThemeProvider from './theme'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './theme'

ReactDOM.render(
  // <ThemeProvider theme={dark}>
  <>
    <GlobalStyle />
    <App />
  </>,

  // </ThemeProvider>
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
