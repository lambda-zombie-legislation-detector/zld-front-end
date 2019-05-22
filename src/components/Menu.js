import React from "react";
import {
    // Dropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    Container,
    Row,
    Col
} from "reactstrap";
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { fetchBills } = this.props
        return (
            <div className="menu">
                <Container className="top-container">
                    <Row>
                        <Col xs="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tortor at risus viverra adipiscing at in tellus. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Consectetur adipiscing elit duis tristique sollicitudin nibh. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Mauris vitae ultricies leo integer malesuada nunc. Adipiscing vitae proin sagittis nisl rhoncus. Enim sit amet venenatis urna cursus. Aliquet bibendum enim facilisis gravida neque convallis. Ipsum consequat nisl vel pretium. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ut tortor pretium viverra suspendisse. Ornare suspendisse sed nisi lacus sed. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Tellus mauris a diam maecenas sed enim. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Eu nisl nunc mi ipsum faucibus vitae. Suspendisse potenti nullam ac tortor vitae purus. In egestas erat imperdiet sed euismod nisi.

                        Dui id ornare arcu odio. Ut consequat semper viverra nam libero justo. Leo in vitae turpis massa sed elementum tempus egestas sed. In mollis nunc sed id. Tortor vitae purus faucibus ornare suspendisse sed nisi. Felis eget velit aliquet sagittis id consectetur. Vulputate dignissim suspendisse in est. Volutpat consequat mauris nunc congue nisi. Eget aliquet nibh praesent tristique magna sit. Ac orci phasellus egestas tellus. Dictum varius duis at consectetur lorem donec massa sapien.</Col>
                        <Col xs="4"><img src="https://picsum.photos/425/377" alt="place-holder" /></Col>
                    </Row>
                </Container>
                <Container className="bottom-container">
                    <Row>
                        <Col sm="3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc. Et tortor consequat id porta nibh venenatis cras sed. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Mattis pellentesque id nibh tortor id aliquet lectus. Id semper risus in hendrerit gravida. Et netus et malesuada fames ac turpis egestas integer eget. Libero nunc consequat interdum varius. Lacus vel facilisis volutpat est velit egestas dui. Lectus nulla at volutpat diam ut. Turpis massa tincidunt dui ut.
                        </Col>
                        <Col sm="9">
                            <button onClick={fetchBills}>
                                (activate fetchBills function)
                            </button>

                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}
export default Menu;

// const menuItems = [
//     { issue: "Indian Affairs" },
//     { issue: "Banking" },
//     { issue: "Foreign Affairs" },
//     { issue: "Homeland Security and Governmental Affairs" },
//     { issue: "Budget" },
//     { issue: "Ethics" },
//     { issue: "Rules and Administration" },
//     { issue: "Foreign Relations" },
//     { issue: "Commerce" },
//     { issue: "Small Business" },
//     { issue: "Veterans' Affairs" },
//     { issue: "Intelligence" },
//     { issue: "Ways and Means" },
//     { issue: "Armed Services" },
//     { issue: "Natural Resources" },
//     { issue: "Homeland Security" },
//     { issue: "Energy and Commerce" },
//     { issue: "Agriculture" },
//     { issue: "Agriculture" },
//     { issue: "Transportation and Infrastructure" },
//     {
//         issue: "United States Senate Caucus on International Narcotics Control"
//     },
//     { issue: "Climate Crisis" },
//     { issue: "Education and Labor" },
//     { issue: "Appropriations" },
//     { issue: "Rules" },
//     { issue: "Ethics" },
//     { issue: "Financial Services" },
//     { issue: "Budget" },
//     { issue: "Finance" },
//     { issue: "Environment and Public Works" },
//     { issue: "Veterans' Affairs" },
//     { issue: "Health" },
//     { issue: "Intelligence" },
//     { issue: "House Administration" },
//     { issue: "Oversight and Reform" },
//     { issue: "Science" },
//     { issue: "Armed Services" },
//     { issue: "Appropriations" },
//     { issue: "Aging" },
//     { issue: "Modernization of Congress" },
//     { issue: "Small Business and Entrepreneurship" },
//     { issue: "Energy and Natural Resources" },
//     { issue: "Judiciary" },
//     { issue: "Judiciary" }
// ];


// {/* <Col sm="12" md={{ size: 6, offset: 2 }}> */ }
//  <Dropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                                 <DropdownToggle caret>Legislative Issues</DropdownToggle>
//                                 <DropdownMenu
//                                     modifiers={{
//                                         setMaxHeight: {
//                                             enabled: true,
//                                             order: 890,
//                                             fn: (data) => {
//                                                 return {
//                                                     ...data,
//                                                     styles: {
//                                                         ...data.styles,
//                                                         overflow: 'auto',
//                                                         maxHeight: 300,
//                                                     },
//                                                 };
//                                             },
//                                         },
//                                     }}
//                                 >
//                                     <DropdownItem>Header</DropdownItem>
//                                     {menuItems.map(item => (
//                                         <DropdownItem>{item.issue}</DropdownItem>
//                                     ))}
//                                 </DropdownMenu>
//                             </Dropdown> 