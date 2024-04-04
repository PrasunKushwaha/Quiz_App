import React from 'react'
import Navbar from './Navbar'

function App() {

  return (
    <>
    <Navbar/>

    <div className='rounded-lg border-[#00055e] border-4 mx-8 mt-36 h-72'>

      <h1> This is question </h1>
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
    </div>
    </>
  )
}

export default App
