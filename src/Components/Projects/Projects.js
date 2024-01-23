import React, { useEffect } from 'react';
import Modal from 'react-modal';
import sgif from '../../Assets/photos/SuperTicTacToe/example.gif';
import s1 from '../../Assets/photos/SuperTicTacToe/s1.png';
import s2 from '../../Assets/photos/SuperTicTacToe/s2.png';
import s3 from '../../Assets/photos/SuperTicTacToe/s3.png';
import s4 from '../../Assets/photos/SuperTicTacToe/s4.png';
import s5 from '../../Assets/photos/SuperTicTacToe/s5.png';
import s6 from '../../Assets/photos/SuperTicTacToe/s6.png';
import b1 from '../../Assets/photos/BootlegBarkeep/b1.png';
import b2 from '../../Assets/photos/BootlegBarkeep/b2.png';
import b3 from '../../Assets/photos/BootlegBarkeep/b3.png';
import b4 from '../../Assets/photos/BootlegBarkeep/b4.png';
import b5 from '../../Assets/photos/BootlegBarkeep/b5.png';
import b6 from '../../Assets/photos/BootlegBarkeep/b6.png';
import c1 from '../../Assets/photos/CritterCompanion/c1.png';
import c2 from '../../Assets/photos/CritterCompanion/c2.png';
import c3 from '../../Assets/photos/CritterCompanion/c3.png';
import c4 from '../../Assets/photos/CritterCompanion/c4.png';
import g1 from '../../Assets/photos/GameNight/g1.png';
import g2 from '../../Assets/photos/GameNight/g2.png';
import g3 from '../../Assets/photos/GameNight/g3.png';
import g4 from '../../Assets/photos/GameNight/g4.png';
import g5 from '../../Assets/photos/GameNight/g5.png';
import g6 from '../../Assets/photos/GameNight/g6.png';
import g7 from '../../Assets/photos/GameNight/g7.png';
import g8 from '../../Assets/photos/GameNight/g8.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const customStyles = {
  overlay: {
    className: 'modal-overlay', 
  },
  content: {
    className: 'modal-content', 
  },
};

export const Projects = () => {
  const getSlickSettings = () => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
  };

  const [gameModalIsOpen, setGameIsOpen] = React.useState(false);
  const [critterModalIsOpen, setCritterIsOpen] = React.useState(false);
  const [bootlegModalIsOpen, setBootlegIsOpen] = React.useState(false);
  const [ticTacToeModalIsOpen, setTictactoeIsOpen] = React.useState(false);

  return (
    <div className="projects-page-wrapper">
      <h1 className="project-header">My Projects</h1>
      <div className="project-wrapper">
        <div className="project-content-wrapper">
          <div className="project-left">
            <h3 className="app-name">Game Night</h3>
            <div className="game-modal">
              <Modal
                isOpen={gameModalIsOpen}
                onRequestClose={() => {
                  setGameIsOpen(false);
                }}
                style={customStyles}
                contentLabel="Game Modal"
                className={"modal-content"}
                overlayClassName={"modal-overlay"}
              >
                <button
                  className="modal-button"
                  onClick={() => {
                    setGameIsOpen(false);
                  }}
                >
                  Close
                </button>
                <h2 className="project-title">Game Night</h2>
                <Slider {...getSlickSettings()}>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g1} alt="Game Night 1" />
                  </div>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g2} alt="Game Night 2" />
                  </div>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g3} alt="Game Night 3" />
                  </div>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g4} alt="Game Night 4" />
                  </div>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g5} alt="Game Night 5" />
                  </div>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g6} alt="Game Night 6" />
                  </div>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g7} alt="Game Night 7" />
                  </div>
                  <div className="slick-slide">
                    <img className="modal-slides" src={g8} alt="Game Night 8" />
                  </div>
                </Slider>
                <div className="navigation-links">
                  <a
                    className="game"
                    href="https://github.com/Game-Night-2301/game-night-fe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="game"
                    href="https://www.youtube.com/watch?v=RMfsrraNj2E"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo Comp Video
                  </a>
                  <a
                    className="game"
                    href="https://game-night-fe.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                </div>
                <p className="description-text">
                  Game Night was my capstone project, completed during my final
                  module at Turing School of Software and Development on a
                  fullstack team of seven developers - four front-end and three
                  back-end. For my contributions I did the main styling
                  elements, and was responsible for the entirity of the event
                  details page and integrating MUI into our application, and
                  many other miscellanious tasks. During the 10 days that we
                  were building Game Night I put about 80 hours of work into it.
                  Upon completion our peers in our cohort selected Game Night to
                  go to Turing's bimonthly Demo Competition, where we placed
                  3rd.
                </p>
                <p className="description-text">
                  As a side note due to using a free back end hosting service it
                  takes a while for the page to load when you first navigate to
                  it.
                </p>
              </Modal>
            </div>
            <img
              className="display-image"
              src={g1}
              alt="game night image"
              onClick={() => {
                setGameIsOpen(true);
              }}
            />

            <h3 className="app-name">Critter Companion</h3>
            <div className="critter-modal">
              <Modal
                isOpen={critterModalIsOpen}
                onRequestClose={() => {
                  setCritterIsOpen(false);
                }}
                style={customStyles}
                contentLabel="Critter Modal"
                className={"modal-content"}
                overlayClassName={"modal-overlay"}
              >
                <button
                  className="modal-button"
                  onClick={() => {
                    setCritterIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Critter Companion</h2>
                <Slider {...getSlickSettings()}>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={c1}
                      alt="Critter Companion 1"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={c2}
                      alt="Critter Companion 2"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={c3}
                      alt="Critter Companion 3"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={c4}
                      alt="Critter Companion 4"
                    />
                  </div>
                </Slider>
                <div className="navigation-links">
                  <a
                    className="critter"
                    href="https://github.com/asutherland91/CritterCompanion"
                    target="_blan"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="critter"
                    href="https://critter-companion-pi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                </div>
                <p className="description-text">
                  Citter Companion was my final project of my third module at
                  Turing. This project was done solo. During this module I
                  learned how to use React and end to end testing for the first
                  time. The premise of this project was to make something that
                  could appeal to a niche audience and so I made an application
                  meant to help people who play Animal Crossing New Horizons
                  track all of the critters that can be caught in the game. This
                  project was done over the course of 5 days. Unfortunately
                  sometime after turing this project in the original API I used
                  was removed, but I did manage to find a replacment and update
                  my page so that it would continue working.
                </p>
              </Modal>
            </div>
            <img
              className="display-image"
              src={c1}
              alt="critter companion image"
              onClick={() => {
                setCritterIsOpen(true);
              }}
            />
          </div>
          <div className="project-right">
            <h3 className="app-name">Bootleg Barkeep</h3>
            <div className="bootleg-modal">
              <Modal
                isOpen={bootlegModalIsOpen}
                onRequestClose={() => {
                  setBootlegIsOpen(false);
                }}
                style={customStyles}
                contentLabel="bootleg Modal"
                className={"modal-content"}
                overlayClassName={"modal-overlay"}
              >
                <button
                  className="modal-button"
                  onClick={() => {
                    setBootlegIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Bootleg Barkeep</h2>
                <Slider {...getSlickSettings()}>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={b1}
                      alt="Bootleg Barkeep 1"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={b2}
                      alt="Bootleg Barkeep 2"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={b3}
                      alt="Bootleg Barkeep 3"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={b4}
                      alt="Bootleg Barkeep 4"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={b5}
                      alt="Bootleg Barkeep 5"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={b6}
                      alt="Bootleg Barkeep 6"
                    />
                  </div>
                </Slider>
                <div className="navigation-links">
                  <a
                    className="bootleg"
                    href="https://github.com/asutherland91/Bootleg-Barkeep"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="bootleg"
                    href="https://bootleg-barkeep.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                </div>
                <p className="description-text">
                  Bootleg Barkeep was a group project in my third module at
                  Turing. In this project we were challenged to learn something
                  that we have never touched before and use it in our
                  application. For this challange we chose TypeScript. Over a
                  period of a week we learned how to use TypeScript and also
                  built this project. For my contributions I did the entire
                  drink grid, and various other tasks.{' '}
                </p>
              </Modal>
            </div>
            <img
              className="display-image"
              src={b1}
              alt="bootleg barkeep image"
              onClick={() => {
                setBootlegIsOpen(true);
              }}
            />
            <h3 className="app-name">Super Tic Tac Toe</h3>
            <div className="tic-modal">
              <Modal
                isOpen={ticTacToeModalIsOpen}
                onRequestClose={() => {
                  setTictactoeIsOpen(false);
                }}
                style={customStyles}
                contentLabel="Tictactoe Modal"
                className={"modal-content"}
                overlayClassName={"modal-overlay"}
              >
                <button
                  className="modal-button"
                  onClick={() => {
                    setTictactoeIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Super Tic Tac Toe</h2>
                <Slider {...getSlickSettings()}>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={sgif}
                      alt="SuperTicTacToe gif"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={s1}
                      alt="SuperTicTacToe 1"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={s2}
                      alt="SuperTicTacToe 2"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={s3}
                      alt="SuperTicTacToe 3"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={s4}
                      alt="SuperTicTacToe 4"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={s5}
                      alt="SuperTicTacToe 5"
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="modal-slides"
                      src={s6}
                      alt="SuperTicTacToe 6"
                    />
                  </div>
                </Slider>
                <div className="navigation-links">
                  <a
                    className="tac"
                    href="https://github.com/asutherland91/tictactoe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="tac"
                    href="https://asutherland91.github.io/tictactoe/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                </div>
                <p className="description-text">
                  Super Tic-Tac-Toe was my final project from my first module at
                  Turing. In this project we were required to build a basic game
                  of tic tac toe. I did several extensions in being able to
                  enter in a name, select a token and also have local storage
                  associated with the name entered in. This project was where I
                  really realized that I love UI/UX and could have fun with it.
                </p>
              </Modal>
            </div>
            <img
              className="display-image"
              src={s1}
              alt="tic tac toe image"
              onClick={() => {
                setTictactoeIsOpen(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
