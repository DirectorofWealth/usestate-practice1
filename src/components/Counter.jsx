import { useState } from "react"

export default function Counter() {
 const [count, setCount] = useState(0);

 const increase = () => {
    setCount((prevCount) => prevCount + 1)
 };

 return (
    <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">{count}</h1>
        <button
        onClick={increase}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Increase</button>
    </div>
 )
}