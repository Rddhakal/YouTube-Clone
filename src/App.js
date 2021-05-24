import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import VideoContainer from './components/VideoContainer'
import './styles/App.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <SideBar />
        <VideoContainer />
      </main>

    </>
  )
}

export default App