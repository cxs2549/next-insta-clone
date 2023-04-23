import MainNav from "./parts/MainNav"

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-30 left-0 bg-white md:hidden">
      <MainNav />
    </header>
  )
}

export default Header
