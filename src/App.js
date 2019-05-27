import React, { Component, Fragment } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Jumbotron, Nav } from "react-bootstrap";
import Routes from "./Routes";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      searchData: "",
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);
  
    this.props.history.push("/login");
  }
  
  searchBills = searchTerm => {
    this.setState({ searchTerm: searchTerm });
    console.log(this.state.searchTerm)
    this.fetchBills()
  }

  fetchBills = async () => {
    console.log(this.state.searchTerm)
    var emptyObject = {}
    await fetch(`https://legicycle-api.herokuapp.com/api/search`, {
      method: 'post',
      body: JSON.stringify(emptyObject),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ searchData: data }));
    console.log(this.state.searchData)

  }
  
  
  

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      searchBills: this.searchBills,
      searchData: this.state.searchData
    };
    
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Jumbotron >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="zombie"><Link to="/">Zombie Legislator Detector</Link></Navbar.Brand>
 
 



          {/* <Navbar fluid >
            <Navbar.Header>
              <Navbar.Brand className="zombie">
                <Link to="/">Zombie Legislator Detector</Link>
              </Navbar.Brand>
             
            </Navbar.Header> */}
          
              <Nav >
              {this.state.isAuthenticated
  ? <Nav className="nav-item" onClick={this.handleLogout}>Logout</Nav>
  : <Fragment>
                <LinkContainer to="/signup">
                  <Nav className="nav-item">Signup</Nav>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav className="nav-item">Login</Nav>
                </LinkContainer>
                </Fragment>
                }
              </Nav>
         
          </Navbar>
        </Jumbotron>
        <Routes childProps={childProps} />


      </div>
    );
  }
}

export default withRouter(App);

