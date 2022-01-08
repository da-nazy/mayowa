export default function  employeeReducer(state,action){
    //console.log(action);
    switch(action.type){
        case 'ADD_EMPLOYE':
               return(
                 {...state,day:action.day,employementType:action.employementType,averageMonthRevanue:action.averageMonthRevanue}
            )

        case 'ADD_REPAYMENT':
            return(
                {...state,averageMonthlyRevenue:action.averageMonthlyRevanue}
            )
            default:
                console.log("Problem");
                break;
    }
}   