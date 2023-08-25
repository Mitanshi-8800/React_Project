import React from 'react'
import './LandingContent.css';
function LandingContent() {
  return (
    <div className='LandingContent'>
    <div className='LandingContent_Left'>
    <div className='LandingContent_heading'>
    <h1> YOUR FEET  DESERVE THE BEST</h1>
    </div>
    <div className='LandingContent_heading2'>
    <p>
    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </p>
    </div>
    <div className='LandingContent_Buttons'>
     <div className='LandingContent_Buttons1'>
       <button>Shop Now </button>
     </div>
     <div className='LandingContent_Buttons2'>
       <button>Category</button>
     </div>

</div>
      <div className='LandingContent_Availablity'>
       <p>Also Available On</p>
      </div>
      <div className='LandingContent_logos'>
     <div className='LandingContent_logo1'>
       <img src='./Image/amazon.png' alt='amazon_logo'/>
     </div>
     <div className='LandingContent_logo2'>
     <img src='./Image/flipkart.png' alt='flipkart_logo'/>
     </div>

</div>


    </div>
    <div className='LandingContent_Right'>
     <img src='./Image/shoe_image.png' alt='shoe_image' />
    </div>
      
    </div>
  )
}

export default LandingContent
