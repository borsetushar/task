import React from 'react';
import { Container, Row, Col, Image, Dropdown, FormControl, InputGroup, ButtonGroup } from 'react-bootstrap';
import { FiSearch, FiBell, FiSettings, FiUser, FiSun } from 'react-icons/fi'; // Assuming you have icons for theme change
import igniLogo from '../../assets/Igni.png';

const Header = () => {
    return (
        <div className="header bg-white shadow-sm" style={{width:'84%', marginLeft:'17%'}}>
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={8} md={1} className="text-md-start">
                        <div className="icon-container bg-white shadow-sm">
                            <Image src={igniLogo} alt="Igni" className="igni-logo" style={{ width: '80px', height: '80px' }}/>
                        </div>
                    </Col>
                    <Col xs={4} md={2} className="text-end">
                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-igniculuss">
                               <span style={{fontWeight:'bold',color:'black'}}>Igniculuss</span> 
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={12} md={8}>
                        <Row className="align-items-center">
                            <Col xs={8} md={4}>
                                <InputGroup>
                                    <FormControl placeholder="Search" />
                                    
                                        <InputGroup.Text><FiSearch /></InputGroup.Text>
                                   
                                </InputGroup>
                            </Col>
                            <Col xs={4} md={3}>
                                <FormControl type="date" />
                            </Col>
                            <Col xs={4} md={1}>
                                <FiBell className="notification-icon" />
                            </Col>
                            <Col xs={4} md={1}>
                                <FiSettings className="settings-icon" />
                            </Col>
                            <Col xs={4} md={1}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-theme">
                                        <FiSun /> {/* Placeholder icon */}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Dark Mode</Dropdown.Item>
                                        <Dropdown.Item>Light Mode</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs={4} md={1}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-profile">
                                        <FiUser />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Profile</Dropdown.Item>
                                        <Dropdown.Item>Settings</Dropdown.Item>
                                        <Dropdown.Item>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
