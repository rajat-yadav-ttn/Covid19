export const getCases=(cases)=>{
    return{
        type:'GET_CASES',
        data:cases,
    }
}

export const fetchCases=()=>{
    return dispatch=>{
        fetch('https://api.thevirustracker.com/free-api?global=stats')
            .then(res=>res.json())
            .then(res=>{
                    dispatch(getCases(res.results[0]));
            });

    }
}

