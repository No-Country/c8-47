import React,{useState, useEffect} from 'react'
import { FiSun } from 'react-icons/fi';
import { IoMdMoon } from 'react-icons/io';

export const DarkMode = () => {
    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark");
        }

    },[theme]);

    const handlerTheme = () =>{
        setTheme(theme==="dark" ? "light": "dark" );
    };

  return (
    
        <button onClick={handlerTheme}>     
            <span className="dark:hidden flex flex-row items-center gap-x-3 text-sm" >
                <IoMdMoon className='  text-bold text-xl'/> Modo oscuro
            </span>

            <span className=" hidden dark:flex flex-row items-center gap-x-3 text-sm">                
                <FiSun className=' text-xl'/> Modo claro
            </span>       
         </button>
    
  )
};


