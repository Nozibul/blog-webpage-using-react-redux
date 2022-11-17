import React from 'react'
import logo from "./assets/s1.jpg"

const Navbar = () => {
  return (
    <div>
        <nav class="bg-slate-100 shadow-md">
            <div
                class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <img
                        class="h-10"
                        src={logo}
                        alt="Nozibul Islam"
                    />
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar