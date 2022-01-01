import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TableView from './TableView';
import LoadIcon from './LoadIcon';
import AddField from './AddField';
import UpdateField from './UpdateField';
import axios from 'axios';
import './DataLoadTable.css';
import './App.css';



class DataLoadTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: null,
            fieldType: "post",
            idToUpdate: null
        };
        axios.defaults.baseURL = "https://finance-tracker-backend-jsb.herokuapp.com";
        this.getExpenses = this.getExpenses.bind(this);
        this.postExpense = this.postExpense.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
        this.putExpense = this.putExpense.bind(this);
        this.changeFieldType = this.changeFieldType.bind(this);
        this.setIdToEdit = this.setIdToEdit.bind(this);
    }

    // Use this function to load data from an endpoint
    componentDidMount() {
        this.getExpenses();
        setInterval(this.getExpenses, this.props.refreshRate * 1000);
    }

    async getExpenses() {
        try {
            var res = await axios.get('/api/expense');
            this.setState({ expenses: res.data });
        } catch (err) {
            console.log(err);
        }
    };

    async postExpense(expense) {
        try {
            var res = await axios.post(`/api/expense/`, expense);
            if (res.data === true) {
                this.getExpenses();
            }
        } catch (err) {
            console.log(err);
        }
    };

    async deleteExpense(id) {
        try {
            var res = await axios.delete(`/api/expense/${id}`);
            if (res.data === true) {
                this.getExpenses();
            }
        } catch (err) {
            console.log(err);
        }
    };

    async putExpense(itemData) {
        try {
            var res = await axios.put(`/api/expense/${this.state.idToUpdate}`, itemData);
            if (res.data === true) {
                this.getExpenses();
            }
        } catch (err) {
            console.log(err);
        }
    }

    setIdToEdit(id){
        this.setState({ idToUpdate: id });
        this.changeFieldType("put");
    }

    changeFieldType(type) {
        this.setState({ fieldType: type });
    }

    render() {
        if (this.state.expenses === null) {
            return (
                <LoadIcon />
            );
        } else {
            let element
            if (this.state.fieldType === "post") {
                element = <AddField addExpense={this.postExpense} />;
            } else if (this.state.fieldType === "put") {
                element = <UpdateField updateExpense={this.putExpense} changeFieldTo={this.changeFieldType}/>;
            }
            return (
                <div className="dataLoadTable">
                    <TableView data={this.state.expenses} deleteRow={this.deleteExpense} setId={this.setIdToEdit}/>
                    {element}
                    <br />
                    <Button className="DLTButton" onClick={this.getExpenses}>Refresh</Button>
                    <br />
                    <br />
                </div>
            );
        }
    }

}

export default DataLoadTable;