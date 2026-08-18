import { useState } from "react";

function TodoList(){

const [todos, setTodos] = useState([]);
const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim() === "") return;
        setTodos((prev) => [...prev, { id: Date.now(), title: text, done: false }]);
        setText("");
    };

    const deleteTodo = (idToDelete) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== idToDelete));
    }


    const toggleDone = (id) => {
        setTodos((prev) => prev.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
       };


    return(
        <>
       <div className="flex justify-center">

       <div>
            <p className="text-xl text-gray-600 my-3">Plan your day now!</p>

            <div className="flex flex-row gap-2">
                <input
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full md:min-w-96 bg-gray-50 outline-2 outline-gray-300 rounded ring focus:ring-green-300 focus:outline-green-300" />
            
                <div>

                <button
                onClick={addTodo}
                className="bg-green-500 px-6 py-2 rounded hover:bg-green-400">Add</button>
                </div>

            </div>
                
            <div>
                <p className="mt-5 text-gray-400 font-semibold">List of all tasks</p>
                <div className="mt-2 flex flex-col gap-2">
                    {todos.map((todo) =>(
                        <div key={todo.id} 
                        className="flex items-center justify-between bg-white border border-gray-100 p-3 rounded shadow-sm text-gray-700">
                            <span
                                onClick={() => toggleDone(todo.id)}
                                className={`cursor-pointer select-none transition-all duration-200 flex-1 py-1 ${
                                    todo.done ? "line-through text-gray-400 italic" : "text-gray-800 font-medium"
                                }`}
                            >{todo.title}</span>
                            
                            <div>
                            <button
                                onClick={() => deleteTodo(todo.id)} 
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm transition-colors"
                            >     
                            Delete  
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        
        </div> 
       </div>
        </>
    )
}
export default TodoList