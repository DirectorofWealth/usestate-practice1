import { text } from "framer-motion/client";
import { useState } from "react";

function ProfileForm(){

    const [form, setForm] = useState({ name: "", email: "", age: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ [name]: value }); 
      };


    return(
        <>

       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
            <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p class="text-sm text-gray-500 mt-2">Please enter your details to sign in</p>
            </div>

        <form className="space-y-5">

        <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" for="name">Name</label>
                <input 
                type="text" 
                id="name"
                value={form.name}
                onChange={handleChange}                placeholder="Reverence Anietie" 
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                required
                />
        </div>

        <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" for="email">Email Address</label>
                <input 
                type="email" 
                id="email" 
                value={form.email}
                onChange={handleChange}                placeholder="name@example.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                required
                />
        </div>

        <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" for="age">Age</label>
                <input 
                type="text" 
                id="age" 
                value={form.age}
                onChange={handleChange}
                placeholder="21" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                required
                />
        </div>

        <button 
        type="submit" 
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Sign In
      </button>

        </form>
  </div>

            
       </div>

        </>

    )

}
export default ProfileForm