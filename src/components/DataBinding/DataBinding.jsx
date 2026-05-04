import React from 'react'

//  binding string
const DataBinding = () => {

    //  tạo 1 biến name
    const name = "Phương Nga"

    //  funtion : renderlongtext -> anfn
    const renderLongText = () => { 
        return <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facere itaque harum deserunt. Sapiente tempora asperiores officia et veritatis repudiandae modi fuga earum incidunt corporis, aspernatur pariatur, officiis voluptate quidem!</span>
     }

     const user={
        name: "Phương Nga",
     }

  return (
    <div>
        {/*  biding giá trị của biến name vào html */}
      <p>Binding biến: {name}</p>


      <p> binding expression: {10 +30}</p>


      {/*  binding function */}
        {renderLongText()}

        {/*  render obj */}
        <p>{user.name}</p>
    </div>
  )
}

export default DataBinding
