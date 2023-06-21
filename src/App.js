import React, { useEffect, useRef, useState } from 'react';
import LogoImgTxt from './Logo01.png'
import LogoImg from './Logo02.png'
import './App.css';

const App = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Jul 04, 2023 20:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000)
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <section className='timer-container'>
      <section className='timer'>
        <div>
          <span>
            <img className='logo-img' src={LogoImg} alt="logo-hack-my-future" />
            <img className='logo-img-txt' src={LogoImgTxt} alt="logo-hack-my-future" />
          </span>
          <h2>Lançamento em...</h2>
        </div>
        <div className='counterdown'>
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>

        <div className='description'>
        <p>Agradeço o seu interesse pelo projeto de Mentoria em Cibersegurança 100% Free.
        Este projeto tem por objetivo desmistificar a carreira de cibersegurança e quebrar alguns paradigmas criados por vendedores de curso Hacker. Aguardem, estamos preparando algo de alto nível com a participação de profissionais renomados do mercado de cibersegurança. Aqui você aprenderá com os melhores, e de graça!
        </p>
        </div>
      </section>
    
    </section>
  );
}

export default App;
