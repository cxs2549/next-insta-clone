"use client"

import React, { useState, useEffect } from "react"
import { BsChevronDoubleDown } from "react-icons/bs"

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <button
      onClick={handleClick}
      className={
        isVisible
          ? "back-to-top-btn right-8 bottom-[78px] md:bottom-[50px] visible grid place-items-center bg-gray-100 rounded-full shadow h-12 w-12 xl:h-16 xl:w-16"
          : "back-to-top-btn "
      }
    >
      <p className="text-neutral-500/80   text-sm">
        <BsChevronDoubleDown className="text-2xl xl:text-3xl rotate-180" />
      </p>
    </button>
  )
}

export default BackToTopButton
