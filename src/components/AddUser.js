import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export const AddUser = () => {
    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);

    const navigate = useNavigate();

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        navigate('/');
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    return (

        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Nome</Label>
                <Input type='text' value={name} onChange={onChange} placeholder='Digite o nome do usuário'></Input>
            </FormGroup>
            <Button type="submit">Cadastrar</Button>
            <Link to="/" className='btn btn-danger mx-3'>Cancelar</Link>
        </Form>
    )
}
