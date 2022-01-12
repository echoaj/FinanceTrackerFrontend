import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./UpdateField.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateField extends Component {

    constructor(props) {
        super(props);
        this.state = { data: { "item": "" } };
        this.handlePut = this.handlePut.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Put expense when the form is submited
    async handlePut(event) {
        event.preventDefault();
        await this.props.updateExpense(this.state.data);
        this.setState({ data: { "item": "" } });
    }

    // Update state when the user types in the expense item
    handleChange(event) {
        const expense = { "item": event.target.value };
        this.setState({ data: expense });
    }

    render() {
        const valueItem = this.state.data.item;
        const isEmpty = valueItem === "";
        return (
            <form className="updateField" onSubmit={this.handlePut} action="#">
                <Form.Control className="updateFieldForm" type="text" placeholder="Update Item" value={valueItem} onChange={this.handleChange} />
                <Button className="updateFieldButton" type="submit" variant="primary" disabled={isEmpty}>Update</Button>
                <Button className="closeUpdateFieldButton" variant="danger" onClick={() => this.props.changeFieldTo("post")}>Cancel</Button>
            </form>
        );
    }
}

export default UpdateField;