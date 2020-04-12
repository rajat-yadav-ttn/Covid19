const initialState={
    cases:null,
    isCasesLoading:true,
    affected:0,
    recovered:0,
    news:null,
    isNewsLoading:true,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_CASES':
            return{
                ...state,
                cases:[
                    {
                        caseHeading:'Total Cases',
                        graphImg:require("../Images/Graph/Graph.svg"),
                        caseQty:action.data.total_cases,
                        increased:true,
                    },
                    {
                        caseHeading:'Recovered',
                        graphImg:require("../Images/Graph/Graph-3.svg"),
                        caseQty:action.data.total_recovered,
                        increased:false,
                    },
                    {
                        caseHeading:'Active Cases',
                        graphImg:require("../Images/Graph/Graph-2.svg"),
                        caseQty:action.data.total_active_cases,
                        increased:true,
                    },
                    {
                        caseHeading:'Total Death',
                        graphImg:require("../Images/Graph/Graph-1.svg"),
                        caseQty:action.data.total_deaths,
                        increased:false,
                    }
                ],
                isCasesLoading:false,
                affected:action.data.total_cases,
                recovered:action.data.total_recovered,
            }

        case 'GET_NEWS':
            return {
                ...state,
                news:action.data.articles,
                isNewsLoading:false,
            }

        default:
            return state;
    }
}



export default reducer;