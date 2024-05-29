// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/Login.css';
import Form from 'react-bootstrap/Form';
import logoGaroto from '../images/logoGaroto.png';
import primeiroCarrosel from '../images/primeiroCarrosel.jpg';
import segundoCarrosel from '../images/segundoCarrosel.jpg';
import terceiroCarrosel from '../images/terceiroCarrosel.png';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Swal from 'sweetalert2';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, preencha todos os campos.',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      console.log(formData);
      await axios.post('http://localhost:3001/loginSistema', formData);
      await Swal.fire('Sucesso!', 'Login efetuado!', 'success'); 
      setFormData({
        email: '',
        senha: ''
      });

      navigate('/Dashboard'); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao criar cadastro de login. Verifique o console para mais detalhes.',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleForgotPassword = () => {
    Swal.fire({
      icon: 'info',
      title: 'Recupere sua senha',
      text: 'Insira seu e-mail para recuperar sua senha:',
      input: 'email',
      inputPlaceholder: 'Seu e-mail',
      inputAttributes: {
        autocapitalize: 'off',
        autocorrect: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Recuperar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      inputValidator: (value) => {
        if (!value || !/\S+@\S+\.\S+/.test(value)) {
          return 'Endereço de email inválido';
        }
      },
      preConfirm: (email) => {
       
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
      customClass: {
        title: 'swal2-title-custom',
        content: 'swal2-content-custom',
        confirmButton: 'swal2-confirm-custom',
        cancelButton: 'swal2-cancel-custom'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('E-mail enviado!', 'Um e-mail foi enviado para o endereço fornecido com instruções para recuperar sua senha.', 'success');
      }
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 
  };

  return (
    <div className="container">
      <div className="body d-md-flex align-items-center justify-content-between">
        <div className="box-1 mt-md-0 mt-5">
          <Slider {...settings}>
            <div>
              <img className='primeiroCarrosel' src={primeiroCarrosel} alt="Primeiro Carrossel" />
            </div>

            <div>
              <img className='segundoCarrosel' src={segundoCarrosel} alt="Segundo Carrossel" />
            </div>

            <div>
              <img className='terceiroCarrosel' src={terceiroCarrosel} alt="Terceiro Carrossel" />
            </div>

          </Slider>
        </div>

        <div className="box-2 d-flex flex-column h-100">
          <div className="mt-5">
            <img className='logoStyle' src={logoGaroto} alt="Logo Garoto" />
            <h4 className='titulo'> Olá! Entre e explore </h4>
            <p className='subtitulo'>Acompanhe toda a gestão da sua empresa</p>

            <Form onSubmit={handleSubmit}>
              <div className="login-form">
                <input name='email' type="email" className="login-input" value={formData.email} onChange={handleChange} placeholder="E-mail" />
                <input type="password" name="senha" className="login-input" placeholder="Senha" value={formData.senha} onChange={handleChange} />
                <button type="submit" className="login-button">Entrar</button>
              </div>
            </Form>
          </div>
          <div className="mt-auto">
            <p className="footer text-muted mb-0 mt-md-0 mt-4">Problemas para lembrar?
              <span className="p-color ms-1" onClick={handleForgotPassword}>Recupere sua senha </span>
            </p>
          </div>
        </div>
        <span className="fas fa-times"></span>
      </div>
    </div>
  );
}

export default Login;
