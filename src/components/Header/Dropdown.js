import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Wrapper,
  Menu,
  Auth,
  Nav,
  Drawer,
} from "./Dropdown.style";

function Dropdown() {
  const [drawer, setDrawer] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const onDrawerClick = () => {
    const nav = document.querySelector(`.${Menu.styledComponentId}`);

    if (drawer) {
      nav.classList.remove("show");
      setDrawer(false);
    } else {
      nav.classList.add("show");
      setDrawer(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
    });
  }, [scrollY]);


  useEffect(() => {
    const header = document.querySelector(`.${Menu.styledComponentId}`);

    if (scrollY > 10) {
      header.classList.remove("show");
      setDrawer(false);
    }
  }, [scrollY]);


  return (
    <Header>
      <Container>
        <Wrapper> 
          <Menu>
            <Nav>
              <ul className="nav__list-m">
                <li className="nav__item-m">
                  <a href="#articles">Articles</a>
                </li>
                <li className="nav__item-m">
                  <a href="#locations">Locations</a>
                </li>
                <li className="nav__item-m">
                  <a href="#videos">Videos</a>
                </li>
                <li className="nav__item-m">
                  <a href="#signin">Sign in</a>
                </li>
              </ul>
            </Nav>
          </Menu>
          <Drawer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => onDrawerClick()}
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </Drawer>
        </Wrapper>
      </Container>
    </Header>
  );
}

export default Dropdown;