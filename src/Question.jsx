const Question = () =>{
    return(
        <>
         <h1 className='mt-8 text-3xl text-center'> This is question </h1>
      <ul className='mt-8'>
        
        <div className='flex flex-wrap justify-center gap-x-56'>
        <li className='my-2 text-xl'>Option 1</li>
        <li className='my-2 text-xl'>Option 2</li>
      
        </div>
        
        <div className='flex flex-wrap justify-center gap-x-56'>
          <li className='my-2 text-xl'>Option 3</li>  
        <li className='my-2 text-xl'>Option 4</li>
       
        </div>
      </ul>
        </>
    )
}