import React, { useState } from "react";
import styled from "styled-components";
import { RouterPathEnum } from "constants/paths";
import "./index.scss";
import { Support } from "constants/support";

function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="burger-menu">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}

export default BurgerMenu;

const StyledMenu = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 6rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-transform: uppercase;
    
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    padding: 2rem 1rem 2rem 0;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    span{
      padding-left: 10px;
    }
    &:hover {
      color: #7069ea;
    }
  }
`;

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href={RouterPathEnum.HOME}>
        <div role="img" aria-label="home">
          🏡
        </div>
        <span>Home</span>
      </a>
      <a href={RouterPathEnum.DRUM_KIT}>
        <div role="img" aria-label="home">
          ▶️
        </div>
        <span>Playground </span>
      </a>
      <a href={RouterPathEnum.ABOUT_US}>
        <div role="img" aria-label="about us">
          💁🏻‍♂️
        </div>
        <span>     About us</span>
      </a>

      <a href={Support.EMAIL}>
        <div role="img" aria-label="contact">
          📩
        </div>
        <span>   Contact</span>
      </a>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
