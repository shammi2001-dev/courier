import React from 'react'

const Delivery = () => {
  return (
    <div className='max-w-container mx-auto'>
    <div style={{
        background:'url(./src/assets/delivery.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        paddingTop:'126px',
        paddingBottom:'168px'
    }}>
        <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="115" height="116" viewBox="0 0 115 116" fill="none">
  <ellipse cx="58" cy="58.5044" rx="43" ry="43.3739" fill="#F95C19"/>
  <path d="M74 57.0419C75.3333 57.8117 75.3333 59.7362 74 60.506L50 74.3624C48.6667 75.1322 47 74.1699 47 72.6303V44.9175C47 43.3779 48.6667 42.4157 50 43.1855L74 57.0419Z" fill="white"/>
</svg>
<h1 className='font-ox text-[#F95C19] text-[32px] font-semibold text-center'>FASTEST DELIVERY</h1>
<p className='font-raleway text-white text-[25px] font-normal w-[600px] mx-auto'> You can get your valuable item in the fastest period of
 time with safety. Because your emergency
 is our first priority.</p>
    </div>
    </div>
    </div>
  )
}

export default Delivery