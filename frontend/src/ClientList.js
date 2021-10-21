import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';

class ClientList extends Component {

    constructor(props) {
        super(props);
        this.state = { clients: [] };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/clients')
            .then(response => response.json())
            .then(data => this.setState({ clients: data }));
    }

    async remove(id) {
        await fetch(`/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.clients].filter(i => i.id !== id);
            this.setState({ clients: updatedClients });
        });
    }

    dashPhone(n) {
        return (
            n[0] + n[1] + n[2] + '-' +
            n[3] + n[4] + n[5] + '-' +
            n[6] + n[7] + n[8] + n[9]
        )
    }

    render() {
        const { clients } = this.state;

        const clientList = clients.map(client => {
            return <tr key={client.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{client.name}</td>
                <td>{client.email}</td>
                <td>{this.dashPhone(client.phone)}</td>
                {/* <td>{client.date}</td> */}
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/clients/" + client.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(client.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Nav />
                <Container fluid>
                    <div className="float-right">
                        <Button id="add" color="success" tag={Link} to="/clients/new">Add Client</Button>
                    </div>
                    <h3>Clients</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Name</th>
                                <th width="20%">Email</th>
                                <th width="30%">Phone</th>
                                <th width="40%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ClientList;