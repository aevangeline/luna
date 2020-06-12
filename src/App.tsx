import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import {
  Switch,
  Route,
  NavLink,
  useLocation,
  Redirect,
} from 'react-router-dom';

// import routes
import Home from './components/Home';
import Resume from './components/Resume';
import Research from './components/Research';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HighlightColor } from './components/PageStyles';

const NameHeader = styled.h1({
  textAlign: "center",
  fontFamily: "'Cinzel Decorative', cursive",
  fontSize: "5vw",
  opacity: 0,
  animation: "fadeIn ease 3s",
  animationFillMode: "forwards",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },

    "100%": {
      opacity: 1,
    }
  },
})

const Navbar = styled.nav({
  borderBottom: "min(.1vh, 3px) solid white",
  alignContent: "center",
  justifyContent: "center",
  display: "flex",
  textAlign: "center",
  opacity: 0,
  animation: "fadeIn ease 4s",
  animationFillMode: "forwards",
  "@keyframes fadeIn": {
    "25%": {
      opacity: 0,
    },

    "100%": {
      opacity: 1,
    }
  },

})

const NavList = styled.ul({
  listStyleType: "none",
  margin: "0px",
  padding: "0px",
  display: "flex",
})

const NavItem = styled.li({
  margin: "0px",
  padding: "0px",
  display: "inline-block",
  // Margins & Padding
  paddingBottom: "1vh",
  marginBottom: "1vh",
  marginLeft: "1vw",
  marginRight: "1vw",
  width: "min(30vw, 250px)",
})

const NavBarLink = styled(NavLink)({
  color: "white",
  textDecoration: "none",
  float: "none",
  // Font Options
  fontFamily: "'Cinzel', serif",
  fontWeight: 700,
  fontSize: "min(3vw, 20px)",
  textAlign: "center",

  "&.active": {
    color: HighlightColor,
  }
})

const MainContent = styled.main({
  opacity: 0,
  animation: "fadeIn ease 5s",
  animationFillMode: "forwards",
  paddingTop: "1vmax",
  "@keyframes fadeIn": {
    "25%": {
      opacity: 0,
    },

    "100%": {
      opacity: 1,
    }
  },

  ".fade-enter": {
    opacity: 0,
  },

  ".fade-enter.fade-enter-active": {
    opacity: 1,
    transition: "opacity 500ms ease-in",
    transitionDelay: "500ms"
  },

  ".fade-exit": {
    opacity: 1,
  },

  ".fade-exit.fade-exit-active": {
    opacity: 0,
    transition: "opacity 500ms ease-in",
  },

  "div.transition-group": {
    position: "relative",
  },

  "section.route-section": {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
  }
})

function App() {
  let location = useLocation();
  return (
    <Container>
      {/* Application Title */}
      <Row justify="center">
        <Col xs={12}>
          <NameHeader>Aurelia Augusta</NameHeader>
        </Col>
      </Row>
      {/* Navigation Bar */}
      <Row justify="center">
        <Col xs={12}>
          <Navbar>
            <NavList>
              <NavItem>
                <NavBarLink exact to="/">Home</NavBarLink>
              </NavItem>
              <NavItem>
                <NavBarLink to="/research">Research</NavBarLink>
              </NavItem>
              <NavItem>
                <NavBarLink to="/resume">Résumé</NavBarLink>
              </NavItem>
            </NavList>
          </Navbar>
        </Col>
      </Row>
      <MainContent>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={{ exit: 1000, enter: 1000 }}
          >
            <section className="route-section">
              {/* Main Content in Switches */}
              <Switch location={location}>
                <Route exact path="/resume">
                  {/* Resume Page */}
                  <Resume />
                </Route>
                <Route exact path="/research">
                  {/* Research Page */}
                  <Research />
                </Route>
                <Route exact path="/">
                  {/* Home Page */}
                  <Home />
                </Route>
                <Redirect from="*" to="/" />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </MainContent>
    </Container>


  );
}

export default App;
