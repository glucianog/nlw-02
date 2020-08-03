import React from 'react';


import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1119592201791655938/JVsVIApm_400x400.jpg" alt="Gabriel Luciano" />
        <div>
          <strong> Gabriel Luciano</strong>
          <span>Redes de Computadores</span>
        </div>
      </header>

      <p>
        Recém formado em Ciência da Computação pela PUCMINAS e mestrando em Ciência da Computação na UNICAMP,
        tenho um breve conhecimento em Redes de Computadores e gostaria de compartilhar o máximo de conhecimento
        possívels para aqueles que tiver o interesse.

      <br />
        <br />
      Redes de Computadores não é difícil, só te prega peças que rendem alguns fios de cabelos.
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )

}

export default TeacherItem;