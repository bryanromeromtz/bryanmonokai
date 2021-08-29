import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

import dailySmarty from '../static/projects/dailySmarty.png';
import gameSnake from '../static/projects/gameSnake.png';
import marioBros from '../static/projects/marioBros.png';
import portfolio from '../static/projects/portfolio.png';
import weatherApp from '../static/projects/weather-app.png';

const Portfolio = () => {

  // modal for daily samarty app

  const openPopupboxDailySmarty = () => {

    const content = (
      <div className="wrapper-modal">
        <img className="portfolio-img-popupbox" src={dailySmarty} alt="Daily Smarty UI Project..." />
        <p>
          this is a replica of the graphical interface of the daily smarty website,
          this is a blog where you can find the most important programming topics,
          in this replica we extract all the data from the blogs that daily smarty has with its api,
          here we work with redux to know the state of our data
        </p>
        <b>View Site: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://replicate-daily-smarty-ketsup.herokuapp.com")} >
          Daily Smarty UI
        </button>
        <br />
        <b>GitHub: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://github.com/bryanromeromtz/DailySmartyUI")} >
          My GitHub Repository
        </button>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Daily Smarty UI React And Redux Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }


  // modal for portfolio app

  const openPopupboxPortfolio = () => {
    const content = (
      <div className="wrapper-modal">
        <img className="portfolio-img-popupbox" src={portfolio} alt="Portfolio React Project..." />
        <p>
          Demo React portfolio, Working React Router dom and several libraries for the project,
          also on the blog page it has the infinite scroll feature
        </p>
        <b>GitHub: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://github.com/bryanromeromtz/bryan-martinez-react-portfolio")} >
          My GitHub Repository
        </button>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Portfolio Demo React Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }



  // modal for weather app

  const openPopupboxWeatherApp = () => {
    const content = (
      <div className="wrapper-modal">
        <img className="portfolio-img-popupbox" src={weatherApp} alt="Weather Aplication..." />
        <p>
          This is a weather application, it is used to find both the temperature,
          the humidity and the wind speed. consume data from open weather api
        </p>
        <b>View Site: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://weather-app-by-crypto.herokuapp.com")} >
          weather App From Anywhere In The World
        </button>
        <br />
        <b>GitHub: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://github.com/bryanromeromtz/wheather-app")} >
          My GitHub Repository
        </button>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Weather App In React",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });

  }


  // modal for game snake

  const openPopupboxGameSnake = () => {
    const content = (
      <div className="wrapper-modal">
        <img className="portfolio-img-popupbox" src={gameSnake} alt="Game-Boy Snake..." />
        <p>
          this is the classic snake game from the gameboy console from many years ago,
          here you work with vanilla javascript without any framework or library, pure css and html
          works for both desktop and mobile. I dare you to get the best score, enjoy it
        </p>
        <b>GitHub: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://github.com/bryanromeromtz/game-snake-web")} >
          My GitHub Repository
        </button>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Game-Boy Snake In JS",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }


  // modal for mario bros game

  const openPopupboxMarioBros = () => {

    const content = (
      <div className="wrapper-modal">
        <img className="portfolio-img-popupbox" src={marioBros} alt="Mario Bros Game..." />
        <p>
          This is the replica of the game you love so much, Mario Bros contains only 2
          levels and need to add more functions to the game, it only works for desktop,
          It is built with the kaBoom.js javascript library, it is quite friendly and fun to build 2D videogames,
          I recommend it
        </p>
        <b>view Site: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://mario-bugs-zorakcis.herokuapp.com")} >
          Mario Bros Demo
        </button>
        <br />
        <b>GitHub: </b>
        <button
          className="hyper-link"
          onClick={() => window.open("https://github.com/bryanromeromtz/mario-kaboom")} >
          My GitHub Repository
        </button>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Mario Bros Demo In KaBoom JS",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container portfolio-margin-bottom">
        <div className="header__wrapper">
          <h1 className="header__header portfolio-header">
            Projects
          </h1>
        </div>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxDailySmarty} >
            <img className="portfolio-img" src={dailySmarty} alt="Daily Smarty UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio} >
            <img className="portfolio-img" src={portfolio} alt="Portfolio React Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxWeatherApp} >
            <img className="portfolio-img" src={weatherApp} alt="Weather Aplication..." />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxGameSnake} >
            <img className="portfolio-img" src={gameSnake} alt="Game-Boy Snake Clone..." />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxMarioBros}>
            <img className="portfolio-img" src={marioBros} alt="Mario Bros Clone..." />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  )
}

export default Portfolio;
