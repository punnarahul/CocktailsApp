import React, { useRef } from 'react'
import { useCustomContext } from '../Context'

const Form = () => {
  const {setter}=useCustomContext()

  const searcher=useRef("")
  const handler=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="container form flex justify-center align-middle space-x-5">
      <form >
      <label htmlFor="inputtaker"></label>
        <input type="text" ref={searcher} onChange={(e)=>{setter(searcher.current.value)}} id="inputtaker" placeholder='Enter the search Query' className='border-cyan-800 rounded-md px-3 py-2'/>
        <button className='bg-cyan-300 hover:bg-cyan-500 px-2 py-2 mx-5 font-mono rounded-sm text-cyan-800 my-2' onClick={handler}>Enter</button>
      </form>
    </div>
  )
}

export default Form