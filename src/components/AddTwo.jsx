import { useState } from "react"

export default function AddTwo() {
 const [count, setCount] = useState(0);

// The function does not recognize the updated count from the first code
// because it uses the original value of count
 const addTwo = () => {
    setCount((prev)=> (prev + 1));
    setCount((prev)=> (prev + 1));
 }

 return (
    <div className="flex justify-center items-center h-screen p-6 text-center">
        
        <div>
            <h1 className="text-3xl font-bold">{count}</h1>
            <button
            onClick={addTwo}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Increase</button>
        </div>
    </div>
 )
}