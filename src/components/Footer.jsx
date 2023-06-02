import './Footer.css'
import { Slide } from "react-awesome-reveal";
import {BiCoffeeTogo} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className="footer-div">
        <Slide direction="down">
        <p className="footer-text">
          <a href="https://www.buymeacoffee.com/xrpnikhil" target="_blank" rel="noopener noreferrer">
          Support Me With a <span className='coffee' style={{color: "orange", paddingRight: "3px"}}><BiCoffeeTogo /></span>Coffee
          </a>
        </p>
        </Slide>
    </div>  
    )
}

export default Footer