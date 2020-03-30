import React from 'react';
import moment  from "moment";
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{

    constructor(props) {
        super();
        this.state ={
            id: props.expense ? props.expense.id:'',
            description: props.expense? props.expense.description:'',
            amount: props.expense? (props.expense.amount*100).toString():'',
            note: props.expense? props.expense.note:'',
            createdDate: props.expense? moment(props.expense.createdDate ) : moment(),
            calenderFocused:false,
            error: '',
        }
    }




    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({ description }));
    }

    onNoteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>({ note }));
    }

    onAmountChange=(e)=>{
        const amount = e.target.value;
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }));
        }

    }

    onDateChange = (createdDate) => {
        if(createdDate){
            this.setState(() => ({ createdDate }));
        }

    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };

    //description: '' , amount: '' , createdDate: moment() , note:''

    onSubmitForm = (e )=>{
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: <p> Description or Amount is missing. </p>}));
        } else {
            this.setState(() => ({
                error: ''
            }));
        }

        this.props.onSubmit({
             description: this.state.description,
             amount: parseFloat(this.state.amount, 10) * 100,
             note: this.state.note,
             createdDate: this.state.createdDate.valueOf()
        })
        }




    render(){
        console.log(this.props.expense);
        return (
            <div>
                <br/>
                { (!!this.state.error) && this.state.error}
                <br/>
            <form onSubmit={this.onSubmitForm}>
                <input type={'text'} placeholder={'Description'}
                value={this.state.description} onChange={this.onDescriptionChange}
                />
                <input type={'number'} placeholder={'Amount'}
                       value={this.state.amount} onChange={this.onAmountChange}/>
                <br/>
                <SingleDatePicker
                    date={this.state.createdDate}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
                    <br/>
                <textarea placeholder={'Add a note related the expense (optional)'}
                          value={this.state.note} onChange={this.onNoteChange}
                ></textarea>
                <button> {(!this.state.id)?'Add Expense' : 'Edit Expense'}</button>
            </form>

            </div>
        )
    }
}