import React, { Component } from "react";
// import UserLogin from './not used yet/UserLogin'
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText,
    FormFeedback
} from "reactstrap";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            validate: {
                emailState: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailState = "has-success";
        } else {
            validate.emailState = "has-danger";
        }
        this.setState({ validate });
    }

    handleChange = async event => {
        const { target } = event;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value
        });
    };

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`);
        const token = this.props.loginUser(this.state.email, this.state.password)
        console.log(token)
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <Container className="Login">
                    <h2>Sign In</h2>
                    <Form className="form" onSubmit={(e) => { this.submitForm(e); }}
                    >
                        <Col>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input className="input-box"
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="myemail@email.com"
                                    value={email}
                                    valid={this.state.validate.emailState === "has-success"}
                                    invalid={this.state.validate.emailState === "has-danger"}
                                    onChange={e => {
                                        this.validateEmail(e);
                                        this.handleChange(e);
                                    }}
                                />
                                <FormFeedback valid>
                                    Your Email Looks Correct!
              </FormFeedback>
                                <FormFeedback>
                                    Uh oh! Looks like there is an issue with your email. Please
                                    input a correct email.
              </FormFeedback>
                                <FormText>Your username is most likely your email.</FormText>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input className="input-box"
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                    value={password}
                                    onChange={e => this.handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Button className="button">Submit</Button>
                    </Form>
                </Container>

            </div>
        );
    }
}

export default Login;
