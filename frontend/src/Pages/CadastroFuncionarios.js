// CadastroFuncionarios.js
import CadastroFuncionariosForm from "../Components/CadastroFuncionariosForm.jsx";
import TabelaCadastroFuncionarios from "../Components/TabelaCadastroFuncionarios.jsx";
import '../css/modal.css';
import { FaCirclePlus } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import '../css/dashboard.css';
import { initializeSidebar } from '../data/dashboard.js';
import { Link } from 'react-router-dom';
import User from "../images/avatar-1.avif";
import logoGaroto from "../images/logoGaroto.png";
import avatar2 from "../images/avatar-2.avif";
import avatar3 from "../images/avatar-3.avif";
import avatar4 from "../images/avatar-4.avif";
import avatar5 from "../images/avatar-5.avif";
import avatar6 from "../images/avatar-6.avif";
import avatar7 from "../images/avatar-7.avif";
import avatar8 from "../images/avatar-8.avif";
import { LuMoreVertical } from "react-icons/lu";
import { IoFilterOutline } from "react-icons/io5";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidGroup } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { BiSolidMessageDots } from "react-icons/bi";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillHdd } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";

import Grafico from '../Pages/GraficoFuncionarios.js';

const avatars = [User, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8];
const notifications = [
  { id: 1, message: 'Atualização' },
  { id: 2, message: 'Lembrete Reunião' },
  { id: 3, message: 'Feedback' },
  { id: 4, message: 'Alerta Segurança ' },
  { id: 5, message: 'Notificação Tarefa' },
];

function DashboardCadastroFuncionarios() {
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(User);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  useEffect(() => {
    initializeSidebar();
  }, []);

  const handleAvatarClick = () => {
    setShowAvatarDropdown(!showAvatarDropdown);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setShowAvatarDropdown(false);
  };

  const handleNotificationClick = () => {
    setShowNotificationsDropdown(!showNotificationsDropdown);
  };

  return (
    <div>

      <section id="sidebar">
        <img className="brand" src={logoGaroto} />
        <ul className="side-menu top">
          <li className="active">
            <Link to="/dashboard">
              <RiDashboardFill />
              <span className="text">Painel</span>
            </Link>
          </li>
          <li>
            <Link to="/cadastroLogin">
              <GiShoppingBag />
              <span className="text">Cadastro de Login</span>
            </Link>
          </li>
          <li>
            <Link to="/cadastroProdutos">
              <BiSolidDoughnutChart />
              <span className="text">Cadastro de Produtos</span>
            </Link>
          </li>
          <li>
            <Link to="/cadastroFornecedores">
              <BiSolidMessageDots />
              <span className="text">Cadastro de Fornecedores</span>
            </Link>
          </li>
          <li>
            <Link to="/historicoClientes">
              <AiFillHdd />
              <span className="text">Historico de Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="/cadastroClientes">
              <BiSolidGroup />
              <span className="text">Cadastro de Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="/controleEstoque">
              <FaPeopleCarry />
              <span className="text">Controle de Estoque</span>
            </Link>
          </li>
          <li>
            <Link to="/cadastroFuncionarios">
              <FaPeopleLine />
              <span className="text">Cadastro de Funcionarios</span>
            </Link>
          </li>
          <li>
            <Link to="/contasAPagar">
              <GiTakeMyMoney />
              <span className="text">Contas a Pagar</span>
            </Link>
          </li>
          <li>
            <Link to="/contasAReceber">
              <GiReceiveMoney />
              <span className="text">Contas a Receber</span>
            </Link>
          </li>
          <li>
            <Link to="/listaLogin">
              <FaClipboardList />
              <span className="text">Lista de Login</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="/" className="logout">
              <CiLogout />
              <span className="text">Sair</span>
            </a>
          </li>
        </ul>
      </section>



      <section id="content">

        <nav>
          <i className='bx bx-menu'></i>
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <div className="notification" onClick={handleNotificationClick}>
            <FaBell />
            <span className="num">5</span>
            {showNotificationsDropdown && (
              <div className="dropdown notifications">
                {notifications.map((notification) => (
                  <div key={notification.id} className="notification-item">
                    <p>{notification.message}</p>
                    <span>{notification.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="profile" onClick={handleAvatarClick}>
            <img src={selectedAvatar} alt="Profile" />
            {showAvatarDropdown && (
              <div className="dropdown">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    onClick={() => handleAvatarSelect(avatar)}
                    className="dropdown-avatar"
                  />
                ))}
              </div>
            )}
          </div>
        </nav>


        <main>
          <div className="head-title">
            <div className="left">
              <h1>Sistema Garoto</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><RiArrowRightSLine /></li>
                <li>
                  <a className="active" href="#">Cadastro de Funcionários</a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <FaCloudDownloadAlt />
              <span className="text">Download PDF</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <FaCalendarCheck />
              <span className="text">
                <h3>28/05</h3>
                <p>Calendário</p>
              </span>
            </li>
            <li>
              <BiSolidGroup />
              <span className="text">
                <h3>130 mil</h3>
                <p>Funcionários</p>
              </span>
            </li>
            <li>
              <AiFillDollarCircle />
              <span className="text">
                <h3>$1498000</h3>
                <p>Vendas Mensais</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <table>
                <Grafico />
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Tarefas ✔️</h3>
                <HiOutlinePlusSmall />
                <IoFilterOutline />
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Coleta de Documento</p>
                  <LuMoreVertical />
                </li>
                <li className="completed">
                  <p>Contrato de Trabalho</p>
                  <LuMoreVertical />
                </li>
                <li className="completed">
                  <p>Atualização de Informações</p>
                  <LuMoreVertical />
                </li>
                <li className="completed">
                  <p>Arquivamento de Documentos</p>
                  <LuMoreVertical />
                </li>
                <li className="completed">
                  <p>Registro de Experiência</p>
                  <LuMoreVertical />
                </li>
              </ul>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Cadastro de Funcionários</h3>
                <HiOutlinePlusSmall />
                <IoFilterOutline />
              </div>
              <ul className="todo-list">
                <div>
                  <button id="myBtn"><FaCirclePlus /></button>
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span className="close">&times;</span>
                      <CadastroFuncionariosForm />
                    </div>
                  </div>
                </div>
                <TabelaCadastroFuncionarios />
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DashboardCadastroFuncionarios;

