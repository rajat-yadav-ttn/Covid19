export const getCases=(cases)=>{
    return{
        type:'GET_CASES',
        data:cases,
    }
}

export const getNews=(news)=>{
    return{
        type:'GET_NEWS',
        data:news,
    }
}

export const fetchCases=()=>{
    return dispatch=>{
        fetch('https://api.thevirustracker.com/free-api?global=stats')
            .then(res=>res.json())
            .then(res=>{
                    dispatch(getCases(res.results[0]));
            }).catch(err=>console.log(err));
    }
}

export const fetchNews=()=>{
    return  dispatch=>{
        fetch('http://newsapi.org/v2/everything?q=coronavirus&language=en&from=2020-03-12&sortBy=popularity&apiKey=d557e160ef1143b9938fae90f4202d85')
            .then(res=>res.json())
            .then(res=>dispatch(getNews(res)))
            .catch(err=>console.log(err))
    }
}