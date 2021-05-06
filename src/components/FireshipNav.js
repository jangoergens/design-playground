import './FireshipNav.css';
import {ReactComponent as ReactLogo} from './../images/lightbulb.svg';
import { Link } from 'react-router-dom'

const FireshipNav = (props) => {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/" className="link">
            <ReactLogo></ReactLogo>
            <span className="logoDesc">DesignPlay</span>
          </Link> 
        </li>
        <li>
          <Link to="/" className="link">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" className="svg-inline--fa fa-cat fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
            </svg>
            <span>Cats</span>
          </Link> 
        </li>
        <li>
          <Link to="/" className="link">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dog" className="svg-inline--fa fa-dog fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"></path>
            </svg>
            <span>Dogs</span>
          </Link> 
        </li>
        <li>
          <Link to="/feedback" className="link">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fish" className="svg-inline--fa fa-fish fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"></path>
            </svg>
            <span>Fish</span>
          </Link> 
        </li>
      </ul>
    </nav>
  )
}



export default FireshipNav;