import { useState } from "react";
import { BiMenuAltRight, BiSearchAlt } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const activeLink = "bg-black border-black text-white";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="relative bg-white z-50 flex px-3 md:px-0 justify-between py-7 items-center border-b-2 mb-8">
      <div className="relative z-20" onClick={closeMenu}>
        <Link to="/">
          <h1 className="text-2xl font-bold">HeroesApp</h1>
        </Link>
      </div>
      <div
        className={`flex gap-6 text-lg font-bold items-center flex-col md:flex-row absolute md:relative top-[106px] md:top-0 left-0 py-10 md:py-0 bg-white z-10 w-full md:w-auto ${
          !openMenu ? "-translate-y-96" : "translate-y-0"
        } md:translate-y-0 transition-transform ease-in-out duration-300`}
        onClick={closeMenu}
      >
        <NavLink
          to="marvel"
          className={({ isActive }) =>
            `border-4 border-transparent px-3 py-1 rounded-lg hover:border-black ${
              isActive && activeLink
            }`
          }
        >
          Marvel Comics
        </NavLink>
        <NavLink
          to="dc"
          className={({ isActive }) =>
            `border-4 border-transparent px-3 py-1 rounded-lg hover:border-black ${
              isActive && activeLink
            }`
          }
        >
          DC Comics
        </NavLink>
        <NavLink
          to="search"
          className={({ isActive }) =>
            `p-3 rounded-full ${isActive && "bg-black text-white"}`
          }
        >
          <span className="text-2xl font-semibold">
            <BiSearchAlt />
          </span>
        </NavLink>
      </div>
      <button
        className="rounded-full p-3 text-2xl md:hidden relative z-20"
        onClick={toggleMenu}
      >
        <BiMenuAltRight />
      </button>
    </nav>
  );
};
