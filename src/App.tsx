import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-grid-system';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link, 
} from 'react-router-dom';


const NameHeader = styled.h1({
  textAlign : "center",
  fontFamily: "'Cinzel Decorative', cursive",
  fontSize  : "5vw",
  animation : "fadeIn ease 3s",
  "@keyframes fadeIn" : {
    "0%" : {
      opacity : 0,
    },

    "100%" : {
      opacity : 1,
    }
  },
})

const Navbar = styled.nav({
  borderBottom: ".1vh solid white",
  alignContent : "center",
  justifyContent : "center",
  display: "flex",
  textAlign: "center",
  animation : "fadeIn ease 4s",
  "@keyframes fadeIn" : {
    "0%" : {
      opacity : 0,
    },

    "25%" : {
      opacity: 0, 
    },

    "100%" : {
      opacity : 1,
    }
  },

})

const NavList = styled.ul({
  listStyleType : "none",
  margin: "0px",
  padding: "0px",
  display:"flex",
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
  width: "min(30vw, 200px)",
})

const NavLink = styled(Link)({
  color: "white",
  textDecoration : "none",
  float: "none",
  // Font Options
  fontFamily: "'Cinzel', serif", 
  fontWeight: 700,
  fontSize: "min(3vw, 14px)",
  
})

function App() {
  return (
    <Router>
      {/* Actual Page Body */}
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
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/research">Research</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/cv">Curriculum Vitae</NavLink>
                </NavItem>
              </NavList>
            </Navbar>
          </Col>
        </Row>
      </Container>

    </Router>
  );
}

export default App;
