import React from 'react';

// CSS
import "./About.css";

//Img
import balaoDuvida from "../../images/svg/chat_interrogacao.webp";
import falling_books from "../../images/svg/livros_em_queda.webp";
import apple_with_books from "../../images/svg/livros_e_maca.webp";
import brasil from "../../images/brasil.png";
import eua from "../../images/eua.png";

//Components
import MessageText from '../../components/MessageText';
import MessageWithButton from '../../components/MessageWithButton';

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
      <div className='subtitle'>
        <h3>Objetivo</h3>
      </div>
      <div className='component_message_text'>
          <MessageText
            text_one={"Olá! Sou o Jhonathas, um apaixonado por desenvolvimento Full-Stack, atualmente cursando na Universidade Vila Velha e pronto para abraçar minha primeira oportunidade profissional nesse campo."}
            text_two={"Desde os 16 anos, venho imerso no mundo da programação, explorando diversas linguagens, mas foi no desenvolvimento web que encontrei minha verdadeira vocação e aprimorei minhas habilidades."}
            text_three={"Minha jornada inclui vários cursos na área de desenvolvimento e estou no 4° período de Análise e Desenvolvimento de Sistemas, sempre buscando aprimorar meu conhecimento. Estou animado para aplicar toda essa bagagem e colaborar ativamente para o crescimento e inovação de uma empresa."}
          />
        </div>
      </section>

      <section className="section_school_about">
        <div className='subtitle school_text_about'>
            <h3>Escolaridade</h3>
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <p>Universidade Vila Velha - 4° período.
            (Fevereiro de 2022) até (Fevereiro de 2024).</p>
        </div>
        <div >
          <img src={falling_books} alt="falling_books" className="falling_books_about" />
        </div>
      </section>

      <section className="section_courses_about">
        <div className="img_books_and_apple">
          <img src={apple_with_books} className='apple_with_books' alt="apple_with_books" />
        </div>
        <div className="subtitle courses_text_about">
            <h3>Cursos | idomas</h3>
            <ul className='courses_list'>
              <li><span>Full-stack</span> - Danki Code</li>
              <li><span>Web Designer</span> - Prepara cursos</li>
              <li><span>Programador</span> - Prepara Cursos</li>
              <li><span>React do zero</span> - Udemy</li>
              <li><span>Docker para desenvolvedores</span> - Udemy</li>
              <li><span>PHP do zero a maestria</span> - udemy</li>
            </ul>
            <ul className="language_list">
              <li><img src={brasil} className='bandeiras' alt="brasil" /> PT-BR Falante nativo</li>
              <li><img src={eua} className='bandeiras' alt="Eua" />  EN Avançado</li>
            </ul>
        </div>
      </section>

      <section className="section_projects">
        <div className='text_about_me'>
          <MessageWithButton 
          msg_title={"Está preparado?"} 
          msg={"Venha conhecer meus projetos"} 
          type="button" msg_button={"Projetos"} 
          rota={'/projects'}/>
        </div>
      </section>
    </div>
  )
}
export default About