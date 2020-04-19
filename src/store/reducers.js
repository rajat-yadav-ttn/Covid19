const initialState={
    cases:null,
    isCasesLoading:true,
    affected:0,
    recovered:0,
    news:null,
    isNewsLoading:true,
    darkMode:false,
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
                        caseQty:action.data.cases,
                        increased:true,
                    },
                    {
                        caseHeading:'Recovered',
                        graphImg:require("../Images/Graph/Graph-3.svg"),
                        caseQty:action.data.recovered,
                        increased:false,
                    },
                    {
                        caseHeading:'Active Cases',
                        graphImg:require("../Images/Graph/Graph-2.svg"),
                        caseQty:action.data.active,
                        increased:true,
                    },
                    {
                        caseHeading:'Total Death',
                        graphImg:require("../Images/Graph/Graph-1.svg"),
                        caseQty:action.data.deaths,
                        increased:false,
                    }
                ],
                isCasesLoading:false,
                affected:action.data.cases,
                recovered:action.data.recovered,
        
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