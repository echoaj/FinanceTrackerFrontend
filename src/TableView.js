import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "./TableView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import trash from './trash.svg';
import edit from './edit.svg';
import log from './logger';

class TableView extends Component {

    render() {
        log("render: TableView rendered")
        return (
            <div className="tableView">
                <Table striped hover variant="light" size="sm">
                    <caption>Expenses</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="id-toggle">ID</th>
                            <th>Item</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((elem, i) =>
                            <tr key={elem.id}>
                                <td>{i + 1}</td>
                                <td className="id-toggle">{elem.id}</td>
                                <td>{elem.item}</td>
                                <td>
                                    <img src={edit} alt="Edit Icon" onClick={() => this.props.setId(elem.id)} />
                                    <img src={trash} alt="Trash Icon" onClick={() => this.props.deleteRow(elem.id)} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableView;