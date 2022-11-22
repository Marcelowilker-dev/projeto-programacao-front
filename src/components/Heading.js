import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color='dark' dark>
            <Container className='d-flex'>
                <NavbarBrand href='/'>Cadastro de Usuários</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className='btn btn-primary mx-3' to="/add">Adicionar novo usuário</Link>
                    </NavItem>
                </Nav>

            </Container>
        </Navbar>
    )
}
