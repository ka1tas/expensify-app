import React from 'react';
import {Link } from "react-router-dom";

export  const ExpenseListItem = ({dispatch , id, description , amount , createdDate })=>(
    <div>
        <h2><Link to={`/edit/${id}`}>{description}</Link></h2>
        <p> Amount : {amount} - Created At : {createdDate}</p>

    </div>
);



export default ExpenseListItem;

