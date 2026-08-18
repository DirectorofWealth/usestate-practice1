import { useState } from "react";

function ToggleDark(){

    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {

        setIsDark((prevDark) => (!prevDark))
};

    return(
        <div>
            <div className="">
                <nav className="flex flex-row shadow-sm justify-around items-center py-5">
                    <div>Logo</div>
                    <div className="flex flex-row gap-15 justify-evenly">
                        <div>Home</div>
                        <div>Contact</div>
                        <div>About</div>
                        <div>Achievements</div>
                    </div>
                    <div>
                    <button 
                        onClick={toggleTheme}
                        className="bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded
                         text-white outline-none transition-all duration-300 
                         ease-in-out hover:-translate-y-1 hover:scale-105 
                         active:scale-95 active:translate-y-0"
                    >
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>

                    </div>
                </nav>
            </div>
           
           <main>
                <div className=" flex items-center justify-center h-screen">
                <h1 className="text-7xl text-center">Toggle Dark</h1>
                </div>
           </main>
            
        </div>

    )
}
export default ToggleDark