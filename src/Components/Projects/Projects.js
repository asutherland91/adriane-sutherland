import React, { useState } from 'react';
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    backgroundColor: '#EDBAFF',
    color: 'rgb(228, 10, 156)',
    border: '1px solid rgb(228, 10, 156)',
    boxShadow: '-3px -3px 0px 0px rgb(247, 125, 206)',
    height: '45em',
    width: '55em',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
              >
                <button
                  className="modal-button"
                  onClick={() => {
                    setGameIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Game Night</h2>
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
                <p>Project Information</p>
                <p>
                  Game Night was my capstone project, completed during my final
                  module at Turing School of Software and Development on a
                  fullstack team, seven developers - four frontend and three
                  backend. For my contributions I did the main styling elements,
                  and was responsible for the entirity of the event details page
                  and integrating MUI into our application, and countless other
                  miscellanious tasks. During the 10 days that we were building
                  Game Night I put about 80 hours of work into it. Upon
                  completion our peers in our cohort selected Game Night to go
                  to Turing's Demo Competition.
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
                    target="_blank"
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

