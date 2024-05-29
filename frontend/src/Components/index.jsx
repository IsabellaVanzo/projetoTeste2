import React from "react";
import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
export const Signin = () => {
  return (
    <Container>
      <div className="container">
        <div className="container1">
          <div className="image">
            <img
              src="sigin.png"
              width={400}
              height={400}
              className="img-banner"
              alt="banner"
            />
          </div>
        </div>
        <div className="container2">
          <Form>
            <Logo>
              <p>Login</p>
            </Logo>
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              placeholder="Login"
              endAdornment={
                <InputAdornment position="end">
                  <HiOutlineUser
                    style={{
                      color: "#0563e7ba",
                      fontSize: "1.3rem",
                    }}
                  />
                </InputAdornment>
              }
            />
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              type="password"
              placeholder="Senha"
              endAdornment={
                <InputAdornment position="end">
                  <SlLock
                    style={{
                      color: "#0563e7ba",
                      fontSize: "1.3rem",
                    }}
                  />
                </InputAdornment>
              }
            />
            <div className="bottom">
              <Button variant="contained" className="buttom">
                Login
              </Button>
              <div className="checkbox">
                <span>
                  <input type="checkbox" className="input-checkbox" />
                </span>
                <p>Lembrar senha.</p>
              </div>
            </div>
            <div className="cad">
              <p>
                Ainda não tenho conta ? <a href="/">Cadastrar.</a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};
