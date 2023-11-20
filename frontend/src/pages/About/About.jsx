import React from 'react';

// CSS
import "./About.css";

//Img
import balaoDuvida from "../../images/svg/chat_interrogacao.webp";

//Components
import MessageText from '../../components/MessageText';

const About = () => {
  return (
    <div className='container_about'>
      <section className="section_hero">
          <div className='text_about_me'>
            <h1>Quem eu sou?</h1>
            <p>Olá, me chamo Jhonathas</p>
          </div>
          <div>
            <img className="img_balao_duvida" src={balaoDuvida} alt="balão de duvida" />
          </div>
      </section>

      <section className='section_objetivo_about'>
      <div>
          <MessageText 
            text_one={"Bem,  me chamo Jhonathas, tenho 20 anos, atualmente sou um estudante da Universidade Vila Velha e estou procurando minha primeira oportunidade de emprego na área de desenvolvedor Full-Stack. "}
            text_two={"Prático programação desde que eu tinha 16 anos, de lá até hoje venho praticando várias linguagens de programação, entretanto acabei me encontrando na de desenvolvimento web."}
            text_three={"Já fiz vários cursos na área de desenvolvimento e atualmente estou no 4° período de Analise e Desenvolvimento de Sistemas para poder aprimorar meus conhecimentos. Após estes anos de estudo gostaria de poder estar pondo em prática meu aprendizado ajudando no crescimento da empresa."}
            type="nobutton" 
          />
        </div>
      </section>
    </div>
  )
}

export default About