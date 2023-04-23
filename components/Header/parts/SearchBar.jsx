"use client"
import { useState, useEffect, useRef } from "react"
import { FiSearch } from "react-icons/fi"

const SearchBar = () => {
  const inputRef = useRef()
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    setTimeout(() => {
      inputRef.current.focus()
    }, 500)
  }

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <li ref={ref} className="inline-block relative cursor-pointer z-10 flex-1">
      <FiSearch
        onClick={handleOpen}
        className="text-neutral-800 xs:hidden ml-auto"
        size={27}
      />
      <div
        className={`shadow absolute rounded-lg border min-w-[240px] w-full  right-0 xs:hidden px-4 py-1.5 bg-neutral-100  items-center transition-all duration-100 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <input
          ref={inputRef}
          className="w-full focus:outline-none bg-neutral-100"
          type="text"
          placeholder="Search"
        />
      </div>
      <div
        className={` ml-auto rounded-lg  min-w-[240px] w-full max-w-[268px]  px-4 py-2 bg-neutral-100 hidden xs:flex items-center transition-all duration-100 ease-in-out relative`}
      >
        <FiSearch
          className="text-neutral-400 ml-auto absolute left-2 top-1/2 -translate-y-1/2"
          size={20}
        />
        <input
          className="w-full px-5 h-5 focus:outline-none bg-neutral-100 placeholder-neutral-500"
          type="text"
          placeholder="Search"
        />
      </div>
    </li>
  )
}

export default SearchBar

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}
