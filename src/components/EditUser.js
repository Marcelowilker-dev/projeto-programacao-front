import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditUser = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users, editUser } = useContext(GlobalContext);
    const currentUserId = id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser)
    }, [currentUserId, users])


    const onSubmit = (e) => {
        e.preventDefaul();
        editUser(selectedUser);
        navigate('/');
    }

    const onChange = (e) => {
        selectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Nome</Label>
                <Input type='text' name="name" value={selectedUser.name} onChange={onChange} placeholder='Edit Name'></Input>
            </FormGroup>
            <Button type="submit">Confirmar</Button>
            <Link to="/" className='btn btn-danger mx-3'>Cancelar</Link>
        </Form>
    )
}
