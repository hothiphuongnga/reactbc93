import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigate from '../components/BTLayout/Navigate'
import Content from '../components/BTLayout/Content'

const BTLayout = () => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* main
          content -> 3 card
      */}
      <div className="main" style={{display: 'flex', height: '500px'}}>
        {/*  navigate */}
        <Navigate />
        {/*  content */}
        <Content />

      </div>

        {/* footer */}
        <Footer />
        
      </div>
  )
}

export default BTLayout
