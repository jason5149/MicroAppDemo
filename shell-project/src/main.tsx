import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.less'

render({})

function render(props: {}): void {
  ReactDOM.render(<App />, document.querySelector('#root'))
}
