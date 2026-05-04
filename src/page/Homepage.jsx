// rafce - tạo function component nhanh
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Homepage = () => {
    //
  return (
    <div>
        {/* hiển thị header, sử dung như 1 thẻ khuyết html */}
        {/*  */}
        <Header />

        <div className="container">
            <h1 className='text-danger'>Hello BC-93</h1>

        </div>


        {/*  gọi component footer */}
        <Footer />
      
    </div>
  )
}
//

export default Homepage
