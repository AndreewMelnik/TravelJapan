import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: none;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  top: 0;
  z-index: 100;
  transition: all 0.3s;
  @media screen and (max-width: 800px) {
  display:flex
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-left: 8%;
  margin-right: 8%;
  max-width: 1280px;
 
  @media screen and (max-width: 800px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;

export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: end;
  align-items: center;
`;


export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(14, 29, 40, 0.97);
    right: -100%;
    top: 0rem;
    text-align: center;
    transition: all 0.3s;
  }
  &.show {
    right: 0%;
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    li {
      @media screen and (max-width: 800px) {
        display: block;
        margin-top: 3.5rem;
        line-height: 30px;
      }
      a {
        text-decoration: none;
        margin: 0 0.5rem;
        padding: 0 0.5rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: #212832;
        transition: all 0.3s;
        &:hover {
          color: #df6951;
        }
        @media screen and (max-width: 800px) {
          color: #fff;
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
`;

export const Drawer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    margin-right: 3%;
  }
  .menu {
    color: #fff;
    height: 2rem;
    position: relative;
    z-index: 99;
  }
`;