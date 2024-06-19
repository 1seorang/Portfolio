import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavbarMenu = ({ offset = -70, duration = 600, url }) => {
  const isiLink = [{ url: '', desc: '' }]
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              <li><ScrollLink spy={true} smooth={true} offset={offset} duration={duration} to={url}>{desc}</ScrollLink></li>

            </ul>
          </div>
        </div>

      </div>
    </>
  )
}
export default NavbarMenu