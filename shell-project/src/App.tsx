import React from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'

export default function App(): JSX.Element {
  return (
    <Layout type="column">
      <Header />
      <Layout type="row">
        <SideBar />
        <Content>
          <div id="viewport">
            ViewPort
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
