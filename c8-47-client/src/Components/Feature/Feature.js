import React from 'react'
import { ButtonRoundedPurple } from '../buttons/ButtonRoundedPurple'

// md:grid grid-cols-2 grid-rows-2

export const Feature = (props) => {
  return (
    <div className=' container'>

    <div className='  md:grid-rows-2 md:grid-cols-2 dark:text-white font-Mon grid  w-full py-20 md:gap-y-0 gap-y-10 justify-items-stretch' >
        <div className=' justify-self-center justify-items-center md:justify-self-start md:place-self-center '>
        <ButtonRoundedPurple button={props.button}/>
        </div>

        <p className='justify-self-center justify-items-center md:col-end-2  md:justify-self-start w-3/4 md:w-80	 '>
                {props.paragraph}
       
            </p>

            <div className=' md:col-end-3 justify-self-center dark:text-black flex fljustify-items-stretchex-col justify-center items-center h-72 w-3/4 bg-slate-200  '>
               {props.gif} 
            </div>


        
    </div>
    </div>
  )
}


// {/* <div className=' flex flex-row gap-x-32 justify-center w-full pb-16 ' >
// <div className=' flex flex-col justify-center gap-y-10 mb-14 '>
// <button className='  bg-white text-black font-medium rounded-3xl px-7 py-2 self-start text-lg border-4 border-violet-900 hover:bg-violet-900 hover:text-white transition ease-in-out '>
//     {props.button}
// </button>
//     <p className=' max-w-xs pt-10 pb-20'>
//         {props.paragraph}

//     </p>
// </div>
//     <div className=' flex flex-col justify-center items-center h-72 w-96 bg-slate-200 mt-16'>
//        {props.gif} 
//     </div>
// </div> */}
