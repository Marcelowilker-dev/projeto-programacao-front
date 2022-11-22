import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);

    return (
        <ListGroup className='mt-4'>
            {users.length > 0 ? (
                <>
                    {users.map(user => (
                        <ListGroupItem className='d-flex' key={user.id}>
                            <strong>{user.name}</strong>
                            <div className="ml-auto">
                                <Link className="btn btn-warning ms-3 mx-2" to={`/edit/${user.id}`}>Editar</Link>
                                <Button onClick={() => removeUser(user.id)} color='danger'>Excluir</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>

            ) : (
                <h4 className='text-center'>Sem usuários cadastrados ainda!</h4>
            )}
        </ListGroup>
    )
}
