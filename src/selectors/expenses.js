import moment from "moment";

//get visible expenses
export default (expenses , {text , sortBy , startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const  createdAt = moment(expense.createdDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt , 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt , 'day'): true;

        const textMatch = (text==='')?true:(expense.description.toLowerCase().includes(text.toLowerCase())?true:false)
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdDate < b.createdDate ? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

