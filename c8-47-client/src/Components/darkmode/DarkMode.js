import React,{useState, useEffect} from 'react'
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';

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
            <span className="dark:hidden flex flex-row items-center gap-x-3" >
                <FaRegMoon/> Dark mode
            </span>

            <span className=" hidden dark:flex flex-row items-center gap-x-3">                
                <FiSun/> Light Mode
            </span>       
         </button>
    
  )
};


