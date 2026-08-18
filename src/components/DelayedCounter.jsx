import { useState } from "react";

function DelayedCounter(){

    const [count, setCount] = useState(0);


    // Because due to the setTimeout delay, each time the button is clicked,
    //at the time it was clicked the state is still zero

    const delayedIncrease = () => {
    setTimeout(() => {
    setCount((prev) => (prev + 1));
    }, 3000);
};


    return(

        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold">{count}</h1>
            <button
            onClick={delayedIncrease}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Increase</button>
        </div>

    )
}
export default DelayedCounter