import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "./TableView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import trash from './trash.svg';
import edit from './edit.svg';
// import add from './add.svg';


class TableView extends Component {

    render() {
        // const tableSize = Object.keys(this.props.data).length;
        return (
            <div className="tableView">
                <Table striped hover variant="light" size="sm">
                    <caption>Expenses</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((elem, i) =>
                            <tr key={elem.id}>
                                <td>{i + 1}</td>
                                <td>{elem.id}</td>
                                <td>{elem.item}</td>
                                <td>
                                    <img src={edit} alt="Edit Icon" onClick={() => this.props.setId(elem.id)} />
                                    <img src={trash} alt="Trash Icon" onClick={() => this.props.deleteRow(elem.id)} />
                                    {/*{i + 1 === tableSize ? <img src={add} alt="Add Icon" /> : ""}*/  /*Adds + sign to last table row*/}
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