var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "dfffc2f20157126f0c21a9a269b4be4e");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/odds/live/bets", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));