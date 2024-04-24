import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FaHome, FaUserFriends, FaTasks, FaUser, FaChartLine, FaRegMoneyBillAlt, FaFileAlt, FaReceipt, FaBuilding } from 'react-icons/fa';
import './sidebar.css';
import Profile from '../../assets/image.png';

const Sidebar = () => {
    return (
        <div className="sidebar text-light">
            <Container fluid >
                <Row>
                    <Col className="text-center">
                        <Image src={Profile} roundedCircle className="profile-pic" />
                        <h5>John Doe</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-start'>
                        <ListGroup variant="flush">
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaHome /> Home</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaUserFriends /> Engage</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaTasks /> Task</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaUser /> Employee</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaRegMoneyBillAlt /> Payroll</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaFileAlt /> Leave</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaChartLine /> Workflow</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaReceipt /> Reports</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaReceipt /> Expense Claims</ListGroup.Item>
                            <ListGroup.Item action className="bg-info text-light hover-light-white"><FaBuilding /> Assets Management</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sidebar;
