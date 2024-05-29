// CadastroProdutos.js
import CadastroClientesForm from "../Components/CadastroClientesForm.jsx";
import TabelaCadastroClientes from "../Components/TabelaCadastroClientes.jsx";
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
import { IoIosSearch } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidGroup } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { BiSolidCog } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { BiSolidMessageDots } from "react-icons/bi";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillHdd } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FaPeopleLine } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";

import ContasAReceber from "../Pages/ContasAReceber.js"
import Grafico from "../Pages/Grafico.js";
import TabelaHistoricoClientes from '../Components/TabelaHistoricoClientes';
const avatars = [User, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8];
const notifications = [
  { id: 1, message: 'Atualização' },
  { id: 2, message: 'Lembrete Reunião' },
  { id: 3, message: 'Feedback' },
  { id: 4, message: 'Alerta Segurança ' },
  { id: 5, message: 'Notificação Tarefa' },
];

function DashboardCadastroClientes() {
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
  const loadModalScript = async () => {
    try {
      const module = await import('../data/jsModal.js');
      module.default();
    } catch (error) {
      console.error("Failed to load modal script:", error);
    }
  };
  loadModalScript();

  const handleNotificationClick = () => {
    setShowNotificationsDropdown(!showNotificationsDropdown);
  };

  return (
    <div>

      <section id="sidebar">
        <img className="brand" src={logoGaroto} />
        <ul className="side-menu top">
          <li className="active">
            <Link to="/">
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
            <Link to="/registroVendas">
              <GiMoneyStack />
              <span className="text">Registro de Vendas</span>
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
            <a href="#">
              <BiSolidCog />
              <span className="text">Configurações</span>
            </a>
          </li>
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
                  <a className="active" href="#">Home</a>
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
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <BiSolidGroup />
              <span className="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <AiFillDollarCircle />
              <span className="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <IoIosSearch />
                <IoFilterOutline />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={User} alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={User} alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={User} alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={User} alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                <HiOutlinePlusSmall />
                <IoFilterOutline />
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Todo List</p>
                  <LuMoreVertical />
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <LuMoreVertical />
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <LuMoreVertical />
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <LuMoreVertical />
                </li>
              </ul>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Tabela com Modal</h3>
                <HiOutlinePlusSmall />
                <IoFilterOutline />
              </div>
              <ul className="todo-list">
                <div>
                  <button id="myBtn"><FaCirclePlus /></button>
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span className="close">&times;</span>
                      <CadastroClientesForm />
                    </div>
                  </div>
                </div>
                <TabelaCadastroClientes />
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DashboardCadastroClientes;







