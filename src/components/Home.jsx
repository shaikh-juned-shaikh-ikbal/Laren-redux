import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='add-to-cart'>
      <img src="data:image/png;base64,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" alt="add-cart-logo" srcset="" />
      </div>
      <h1>Hello from Home components</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src="https://static.toiimg.com/photo/msid-70479681/70479681.jpg" alt="note 7pro " srcset="" />
        </div>
        <div className='text-wrapper item'>
          <span>
            Note 7 pro 
          </span>
          <span>
            Prices: $11000.00
          </span>

        </div>
        <div className='btn-wrapper item'>
          <button>Add To cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
 