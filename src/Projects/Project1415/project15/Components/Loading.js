import React from 'react'
import image1 from './loader.svg'
const Loading = () => {
  return (
    <><div className="element h-20 text-center">
            Loading...
        </div>
        <div className="main h-60 w-screen flex justify-center mx-auto align-middle ">
        
            <div className="one h-30"><img src={image1} className="animate-spin h-20" alt="hl" /></div>
        </div>
    </>
  )
}

export default Loading