import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Menu from './Menu';
import bgimage from './congress.jpg';
import './Home.css';

class Home extends Component {


    render() {
        return (
            <div >
                <Jumbotron fluid className="jumbo">
                    <Container fluid className="container container-jumbo" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>

                    </Container>
                </Jumbotron>
                <span>
                    <Menu />
                </span>
            </div>


        )
    }
}

export default Home;