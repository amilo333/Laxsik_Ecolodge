import { useState } from 'react'
import './App.css'
import Header from './Header'
import Banner from './Banner'
import Content from './Content'
import RoomInfo from './RoomInfo'
import ServiceSection from './ServiceSection'
import ExploreSapa from './ExploreSapa'
import PostSapa from './PostSapa'
import Footer from './Footer'
import BackToTop from './BackToTop'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <RoomInfo></RoomInfo>
      <ServiceSection></ServiceSection>
      <ExploreSapa></ExploreSapa>
      <PostSapa></PostSapa>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
  )
}

export default App
