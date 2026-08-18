import { useState } from "react";

function IntervalCounter(){

    const [seconds, setSeconds] = useState(0);
    const [id, setId] = useState(null);

    const start = () => {

        if (id !== null) return;
        const timerId = setInterval(() => {
 
    // update seconds here
        setSeconds((prevSecond) => (prevSecond + 1))

    }, 1000);
        setId(timerId);
    };

    const stop = () => {
        clearInterval(id);
        setId(null);
    };


    return (

        <>
        
        <div className="flex flex-col gap-6 justify-center items-center h-screen">
            {/* 2. Moved inside the layout wrapper for visual layout centering */}
            <h1 className="text-5xl font-bold">{seconds}s</h1>

            <div className="flex flex-row gap-6">
                {/* 3. Wired up onClick event listeners */}
                <button 
                    onClick={start} 
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-3xl font-medium transition-colors"
                >
                    Start
                </button>
                <button 
                    onClick={stop} 
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-3xl font-medium transition-colors"
                >
                    Stop
                </button>
            </div>
        </div>
        
        </>
        


    )
}

export default IntervalCounter