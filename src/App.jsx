import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className="header">
        <div className="header-left">
            <a className="title-btn" href="https://jxex.github.io/dtd/"><h1>Vegetables</h1></a>
        </div>
        <div className="header-right">
            <a href="#"><img src="img/btn_facebook.png" alt="fb"/></a>
            <a href="#"><img src="img/btn_instagram.png" alt="ig"/></a>
            <div className="line"></div>
            <a className="btn LOGIN" href="#">LOGIN</a>
            <a className="btn JOIN" href="#">JOIN</a>
        </div>
      </header>

      <nav className="nav">
        <a className="btn list" href="#">Home</a>
        <a className="btn list" href="#">About Us</a>
        <a className="btn list" href="#">Vegetables</a>
        <a className="btn list" href="#">Online</a>
        <a className="btn list" href="#">Contact</a>
      </nav>

      <article>
        <img src="img/img_main_pumpkin.png" alt="pumpkin"/>
        <div className="article-bottom">
            <div className="article-vegetables">
                <div className="article-vegetables-title">
                    <h2>Vegetables</h2>
                </div>
                <div className="article-vegetables-img">
                    <img src="img/img_vegetables_carrot.png" alt="carrot"/>
                    <img src="img/img_vegetables_corn.png" alt="corn"/>
                    <img src="img/img_vegetables_pepper.png" alt="pepper"/>
                </div>
            </div>
    
            <div className="article-contact">
                <div className="article-contact-title">
                    <h2>Contact</h2>
                </div>
                <div className="content">
                    <p>For any questions or suggestions about Vegetables, Vegetables Club 
                        or your online order you can contact Vegetables Customer Service by phone, 
                        email or post and we’ll be happy to help.</p>
                    <div className="line2"></div>
                    <p>E-mail : Vegetables@aaabbccc.com<br/>PHONE : +886-123-456-789</p>
                </div>
            </div>
        </div>
      </article>

      <footer className="footer">
        <p>Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>
    </div>
  )
}

export default App
