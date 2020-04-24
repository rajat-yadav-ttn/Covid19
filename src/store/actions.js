export const getCases = (cases) => {
  return {
    type: "GET_CASES",
    data: cases,
  };
};

export const fetchCases = () => {
  return (dispatch) => {
    fetch("https://corona.lmao.ninja/v2/all")
      .then((res) => res.json())
      .then((res) => {
        dispatch(getCases(res));
      });
  };
};

export const getNews = (news) => {
  return {
    type: "GET_NEWS",
    data: news,
  };
};

export const fetchNews = () => {
  return (dispatch) => {
    let today = new Date(),
      date = today.getDate(),
      month = today.getMonth(),
      year = today.getFullYear(),
      fullDate = `${year}-${month + 1}-${date}`;

    // console.log(fullDate);
    fetch(
      "http://newsapi.org/v2/everything?q=coronavirus   &language=en&from=" +
        fullDate +
        "&sortBy=popularity&apiKey=d557e160ef1143b9938fae90f4202d85"
    )
      // fetch('http://newsapi.org/v2/everything?q=coronavirus%20&language=en&from=2020-04-18&sortBy=popularity&apiKey=d557e160ef1143b9938fae90f4202d85')
      .then((res) => res.json())
      .then((res) => dispatch(getNews(res)))
      .catch((err) => console.log(err));
  };
};

export const darkMode = (isDark) => {
  return (dispatch) => {
    dispatch({
      type: "DARK_MODE",
      isDark,
    });
  };
};
