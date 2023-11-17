import React from 'react';
//CSS
import "./Home.css";

//Images
import laptop from "../../images/svg/computador_com_codigo.webp";
import github from "../../images/svg/github.svg";
import instagram from "../../images/svg/instagram.svg";
import linkedin from "../../images/svg/linkedin.svg";


const Home = () => {
  return (
    <div className='container_home'>
      <div className="section_hero">
        <img src={laptop} alt="laptop" className='img_laptop'/>
        <div className="title_and_icons">
          <h1>Olá, me chamo jhonathas</h1>
          <p>Full Stack Developer</p>
          <div className="icons">
            <ul>
              <li>
                <a href="https://www.instagram.com/jhonathas921/" target="_blank" rel='noreferrer'>
                  <img src={instagram} alt="instagram" className='icons_img'/>
                </a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/jhonathas-souza-33891b245/" target="_blank" rel='noreferrer'>
                  <img src={linkedin} alt="linkedin"  className='icons_img'/>
                </a>
              </li>
              <li>
                <a href="https://github.com/DevJhonathas" target="_blank" rel='noreferrer'>
                  <img src={github} alt="github"  className='icons_img'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section_objetivo">
        <h3>Objetivo</h3>
        <div></div>
      </div>
    </div>
  )
}

export default Home 