import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PostContainer from './components/PostContainer'
import Search from './components/Search'
import TitleHeader from './components/TitleHeader'

const App = () => {
  return (
    <> 
       <Navbar />
       <Search />
       <TitleHeader />
       <PostContainer />
       <Footer />
    </>
  )
}

export default App