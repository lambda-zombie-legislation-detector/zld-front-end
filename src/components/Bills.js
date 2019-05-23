import React, { Component } from "react";
import {
    Jumbotron, Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from "reactstrap";
import bgimage from "./congress.jpg";
import './Bills.css';

class Bills extends Component {

    render() {

        const { data } = this.props

        const bills = [
            {
                short_title: "Tax Cuts and Jobs Act",
                similarity_score: 86,
                congress: 115,
                status: "ENACTED:SIGNED",
                bill_link:
                    "https://www.congress.gov/bill/115th-congress/house-bill/1/text",
                top_5_subjects: [
                    "American Samoa",
                    "Arctic and polar regions",
                    "Art, artists, authorship",
                    "Assault and harassment offenses",
                    "Aviation and airports"
                ]
            },
            {
                short_title: "Tax Cuts and Jobs Act",
                similarity_score: 86,
                congress: 115,
                status: "ENACTED:SIGNED",
                bill_link:
                    "https://www.congress.gov/bill/115th-congress/house-bill/1/text",
                top_5_subjects: [
                    "American Samoa",
                    "Arctic and polar regions",
                    "Art, artists, authorship",
                    "Assault and harassment offenses",
                    "Aviation and airports"
                ]
            },
            {
                short_title: "Tax Cuts and Jobs Act",
                similarity_score: 86,
                congress: 115,
                status: "ENACTED:SIGNED",
                bill_link:
                    "https://www.congress.gov/bill/115th-congress/house-bill/1/text",
                top_5_subjects: [
                    "American Samoa",
                    "Arctic and polar regions",
                    "Art, artists, authorship",
                    "Assault and harassment offenses",
                    "Aviation and airports"
                ]
            },
            {
                short_title: "Tax Cuts and Jobs Act",
                similarity_score: 86,
                congress: 115,
                status: "ENACTED:SIGNED",
                bill_link:
                    "https://www.congress.gov/bill/115th-congress/house-bill/1/text",
                top_5_subjects: [
                    "American Samoa",
                    "Arctic and polar regions",
                    "Art, artists, authorship",
                    "Assault and harassment offenses",
                    "Aviation and airports"
                ]
            },
            {
                short_title: "Tax Cuts and Jobs Act",
                similarity_score: 86,
                congress: 115,
                status: "ENACTED:SIGNED",
                bill_link:
                    "https://www.congress.gov/bill/115th-congress/house-bill/1/text",
                top_5_subjects: [
                    "American Samoa",
                    "Arctic and polar regions",
                    "Art, artists, authorship",
                    "Assault and harassment offenses",
                    "Aviation and airports"
                ]
            }
        ];




        console.log(data)
        return (
            <span>
                <Jumbotron fluid className="jumbo">
                    <Container
                        fluid
                        className="container container-jumbo"
                        style={{
                            backgroundImage: `url(${bgimage})`,
                            backgroundSize: "cover"
                        }}
                    />
                </Jumbotron>

                {data && data.map((bill, index) => (
                    <div className="bill-container" key={index}>
                        <Container>
                            <Card >
                                <Row>

                                    <Col xs="4">


                                        <CardHeader tag="h3" className="cardheader card-width" >{bill.short_title}</CardHeader>
                                        <CardBody className="card-width">
                                            <CardTitle className="cardheader card-width"><h6 className="cardheader">Similarity Score:</h6> {bill.similarity_score}</CardTitle>
                                            <CardText className="cardheader card-width"><h6 className="cardheader">Congress:</h6> {bill.congress}</CardText>
                                            <CardText className="cardheader card-width"><h6 className="cardheader">Status:</h6> {bill.status}</CardText>

                                        </CardBody>
                                        <CardFooter className="text-muted card-width"><Button>Bill Link</Button></CardFooter>

                                    </Col>
                                    <Col xs="4">
                                        <Row>
                                            <h6 className="cardheader top-five">Top 5 Subjects:</h6>
                                        </Row>
                                        <ul>
                                            {bill.top_5_subjects.map((subject, index) => (
                                                <li key={index} className="cardheader">{subject} </li>
                                            ))}
                                        </ul>
                                    </Col>


                                </Row>
                            </Card>

                        </Container>
                    </div>
                ))}




            </span>
        );
    }
}


export default Bills;

{/* <Row>
                                        <h6>Short Title:</h6> {bill.short_title}
                                    </Row>
                                    <Row>
                                        <h6>Similarity Score:</h6> {bill.similarity_score}
                                    </Row>
                                    <Row>
                                        <h6>Congress:</h6> {bill.congress}
                                    </Row>
                                    <Row>
                                        <h6>Status:</h6> {bill.status}
                                    </Row>
                                    <Row>
                                        <h6>Introduced:</h6> {bill.bill_link}
                                    </Row> */}