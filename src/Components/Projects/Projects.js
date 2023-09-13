import React, { useState } from 'react';
import Modal from 'react-modal';
import s1 from '../../Assets/photos/SuperTicTacToe/s1.png';
import b1 from '../../Assets/photos/BootlegBarkeep/b1.png';
import c1 from '../../Assets/photos/CritterCompanion/c1.png';
import g1 from '../../Assets/photos/GameNight/g1.png';
import './Projects.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#EDBAFF',
    color: 'rgb(228, 10, 156)',
    border: '1px solid rgb(228, 10, 156)',
    boxShadow: '-3px -3px 0px 0px rgb(247, 125, 206)',
  },
};

export const Projects = () => {
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
                <button className="modal-button"
                  onClick={() => {
                    setGameIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Game Night</h2>
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
                    href="https://game-night-fe.vercel.app/"
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
                <button className="modal-button"
                  onClick={() => {
                    setCritterIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Critter Companion</h2>
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
                <button className="modal-button"
                  onClick={() => {
                    setBootlegIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Bootleg Barkeep</h2>
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
                <button className="modal-button"
                  onClick={() => {
                    setTictactoeIsOpen(false);
                  }}
                >
                  close
                </button>
                <h2>Super Tic Tac Toe</h2>
                <div className="navigation-links">
                  <a
                    className="tac-tac-toe"
                    href="https://github.com/asutherland91/tictactoe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="tac-tac-toe"
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
