import React from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

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
        const menuItems = [
            { issue: "Indian Affairs" },
            { issue: "Banking" },
            { issue: "Foreign Affairs" },
            { issue: "Homeland Security and Governmental Affairs" },
            { issue: "Budget" },
            { issue: "Ethics" },
            { issue: "Rules and Administration" },
            { issue: "Foreign Relations" },
            { issue: "Commerce" },
            { issue: "Small Business" },
            { issue: "Veterans' Affairs" },
            { issue: "Intelligence" },
            { issue: "Ways and Means" },
            { issue: "Armed Services" },
            { issue: "Natural Resources" },
            { issue: "Homeland Security" },
            { issue: "Energy and Commerce" },
            { issue: "Agriculture" },
            { issue: "Agriculture" },
            { issue: "Transportation and Infrastructure" },
            {
                issue: "United States Senate Caucus on International Narcotics Control"
            },
            { issue: "Climate Crisis" },
            { issue: "Education and Labor" },
            { issue: "Appropriations" },
            { issue: "Rules" },
            { issue: "Ethics" },
            { issue: "Financial Services" },
            { issue: "Budget" },
            { issue: "Finance" },
            { issue: "Environment and Public Works" },
            { issue: "Veterans' Affairs" },
            { issue: "Health" },
            { issue: "Intelligence" },
            { issue: "House Administration" },
            { issue: "Oversight and Reform" },
            { issue: "Science" },
            { issue: "Armed Services" },
            { issue: "Appropriations" },
            { issue: "Aging" },
            { issue: "Modernization of Congress" },
            { issue: "Small Business and Entrepreneurship" },
            { issue: "Energy and Natural Resources" },
            { issue: "Judiciary" },
            { issue: "Judiciary" }
        ];
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Dropdown</DropdownToggle>
                    <DropdownMenu
                        modifiers={{
                            setMaxHeight: {
                                enabled: true,
                                order: 890,
                                fn: (data) => {
                                    return {
                                        ...data,
                                        styles: {
                                            ...data.styles,
                                            overflow: 'auto',
                                            maxHeight: 300,
                                        },
                                    };
                                },
                            },
                        }}
                    >
                        <DropdownItem>Header</DropdownItem>
                        {menuItems.map(item => (
                            <DropdownItem>{item.issue}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}
export default Menu;
