let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let a;
    let slides1 = document.getElementsByClassName("mySlides1");
    // let dots = document.getElementsByClassName("dot");
    for (a = 0; a < slides1.length; a++) {
        slides1[a].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1
    }
    slides1[slideIndex1 - 1].style.display = "block";

    setTimeout(showSlides1, 3000); // Change image every 2 seconds
}


function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function addDays(days) {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return result;
}

let fromDate = addDays(-3);
let toDate = addDays(3);
let fromDateFormated = formatDate(fromDate);
let toDateFormated = formatDate(toDate);
// let data = {
//         "get": "fixtures",
//         "parameters": {
//                 "league": "39",
//                 "season": "2022",
//                 "from": "2022-09-01",
//                 "to": "2022-09-15"
//         },
//         "errors": [],
//         "results": 21,
//         "paging": {
//                 "current": 1,
//                 "total": 1
//         },
//         "response": [
//                 {
//                         "fixture": {
//                                 "id": 867990,
//                                 "referee": "C. Pawson",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-01T19:00:00+00:00",
//                                 "timestamp": 1662058800,
//                                 "periods": {
//                                         "first": 1662058800,
//                                         "second": 1662062400
//                                 },
//                                 "venue": {
//                                         "id": 547,
//                                         "name": "King Power Stadium",
//                                         "city": "Leicester, Leicestershire"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 5"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 46,
//                                         "name": "Leicester",
//                                         "logo": "https://media.api-sports.io/football/teams/46.png",
//                                         "winner": false
//                                 },
//                                 "away": {
//                                         "id": 33,
//                                         "name": "Manchester United",
//                                         "logo": "https://media.api-sports.io/football/teams/33.png",
//                                         "winner": true
//                                 }
//                         },
//                         "goals": {
//                                 "home": 0,
//                                 "away": 1
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 0,
//                                         "away": 1
//                                 },
//                                 "fulltime": {
//                                         "home": 0,
//                                         "away": 1
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 867996,
//                                 "referee": "S. Hooper",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T16:30:00+00:00",
//                                 "timestamp": 1662222600,
//                                 "periods": {
//                                         "first": 1662222600,
//                                         "second": 1662226200
//                                 },
//                                 "venue": {
//                                         "id": 495,
//                                         "name": "Villa Park",
//                                         "city": "Birmingham"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 66,
//                                         "name": "Aston Villa",
//                                         "logo": "https://media.api-sports.io/football/teams/66.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 50,
//                                         "name": "Manchester City",
//                                         "logo": "https://media.api-sports.io/football/teams/50.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": 1,
//                                 "away": 1
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 0,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 1,
//                                         "away": 1
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 867997,
//                                 "referee": "R. Jones",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T14:00:00+00:00",
//                                 "timestamp": 1662213600,
//                                 "periods": {
//                                         "first": 1662213600,
//                                         "second": 1662217200
//                                 },
//                                 "venue": {
//                                         "id": 10503,
//                                         "name": "Gtech Community Stadium",
//                                         "city": "Brentford, Middlesex"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 55,
//                                         "name": "Brentford",
//                                         "logo": "https://media.api-sports.io/football/teams/55.png",
//                                         "winner": true
//                                 },
//                                 "away": {
//                                         "id": 63,
//                                         "name": "Leeds",
//                                         "logo": "https://media.api-sports.io/football/teams/63.png",
//                                         "winner": false
//                                 }
//                         },
//                         "goals": {
//                                 "home": 5,
//                                 "away": 2
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 2,
//                                         "away": 1
//                                 },
//                                 "fulltime": {
//                                         "home": 5,
//                                         "away": 2
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 867998,
//                                 "referee": "T. Harrington",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-04T13:00:00+00:00",
//                                 "timestamp": 1662296400,
//                                 "periods": {
//                                         "first": 1662296400,
//                                         "second": 1662300000
//                                 },
//                                 "venue": {
//                                         "id": 508,
//                                         "name": "The American Express Community Stadium",
//                                         "city": "Falmer, East Sussex"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 51,
//                                         "name": "Brighton",
//                                         "logo": "https://media.api-sports.io/football/teams/51.png",
//                                         "winner": true
//                                 },
//                                 "away": {
//                                         "id": 46,
//                                         "name": "Leicester",
//                                         "logo": "https://media.api-sports.io/football/teams/46.png",
//                                         "winner": false
//                                 }
//                         },
//                         "goals": {
//                                 "home": 5,
//                                 "away": 2
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 2,
//                                         "away": 2
//                                 },
//                                 "fulltime": {
//                                         "home": 5,
//                                         "away": 2
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 867999,
//                                 "referee": "A. Madley",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T14:00:00+00:00",
//                                 "timestamp": 1662213600,
//                                 "periods": {
//                                         "first": 1662213600,
//                                         "second": 1662217200
//                                 },
//                                 "venue": {
//                                         "id": 519,
//                                         "name": "Stamford Bridge",
//                                         "city": "London"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 49,
//                                         "name": "Chelsea",
//                                         "logo": "https://media.api-sports.io/football/teams/49.png",
//                                         "winner": true
//                                 },
//                                 "away": {
//                                         "id": 48,
//                                         "name": "West Ham",
//                                         "logo": "https://media.api-sports.io/football/teams/48.png",
//                                         "winner": false
//                                 }
//                         },
//                         "goals": {
//                                 "home": 2,
//                                 "away": 1
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 0,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 2,
//                                         "away": 1
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868000,
//                                 "referee": "A. Taylor",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T11:30:00+00:00",
//                                 "timestamp": 1662204600,
//                                 "periods": {
//                                         "first": 1662204600,
//                                         "second": 1662208200
//                                 },
//                                 "venue": {
//                                         "id": 8560,
//                                         "name": "Goodison Park",
//                                         "city": "Liverpool"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 45,
//                                         "name": "Everton",
//                                         "logo": "https://media.api-sports.io/football/teams/45.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 40,
//                                         "name": "Liverpool",
//                                         "logo": "https://media.api-sports.io/football/teams/40.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": 0,
//                                 "away": 0
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 0,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 0,
//                                         "away": 0
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868001,
//                                 "referee": "P. Tierney",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-04T15:30:00+00:00",
//                                 "timestamp": 1662305400,
//                                 "periods": {
//                                         "first": 1662305400,
//                                         "second": 1662309000
//                                 },
//                                 "venue": {
//                                         "id": 556,
//                                         "name": "Old Trafford",
//                                         "city": "Manchester"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 33,
//                                         "name": "Manchester United",
//                                         "logo": "https://media.api-sports.io/football/teams/33.png",
//                                         "winner": true
//                                 },
//                                 "away": {
//                                         "id": 42,
//                                         "name": "Arsenal",
//                                         "logo": "https://media.api-sports.io/football/teams/42.png",
//                                         "winner": false
//                                 }
//                         },
//                         "goals": {
//                                 "home": 3,
//                                 "away": 1
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 1,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 3,
//                                         "away": 1
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868002,
//                                 "referee": "M. Salisbury",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T14:00:00+00:00",
//                                 "timestamp": 1662213600,
//                                 "periods": {
//                                         "first": 1662213600,
//                                         "second": 1662217200
//                                 },
//                                 "venue": {
//                                         "id": 562,
//                                         "name": "St. James' Park",
//                                         "city": "Newcastle upon Tyne"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 34,
//                                         "name": "Newcastle",
//                                         "logo": "https://media.api-sports.io/football/teams/34.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 52,
//                                         "name": "Crystal Palace",
//                                         "logo": "https://media.api-sports.io/football/teams/52.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": 0,
//                                 "away": 0
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 0,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 0,
//                                         "away": 0
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868003,
//                                 "referee": "M. Oliver",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T14:00:00+00:00",
//                                 "timestamp": 1662213600,
//                                 "periods": {
//                                         "first": 1662213600,
//                                         "second": 1662217200
//                                 },
//                                 "venue": {
//                                         "id": 566,
//                                         "name": "The City Ground",
//                                         "city": "Nottingham, Nottinghamshire"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 65,
//                                         "name": "Nottingham Forest",
//                                         "logo": "https://media.api-sports.io/football/teams/65.png",
//                                         "winner": false
//                                 },
//                                 "away": {
//                                         "id": 35,
//                                         "name": "Bournemouth",
//                                         "logo": "https://media.api-sports.io/football/teams/35.png",
//                                         "winner": true
//                                 }
//                         },
//                         "goals": {
//                                 "home": 2,
//                                 "away": 3
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 2,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 2,
//                                         "away": 3
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868004,
//                                 "referee": "S. Attwell",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T14:00:00+00:00",
//                                 "timestamp": 1662213600,
//                                 "periods": {
//                                         "first": 1662213600,
//                                         "second": 1662217200
//                                 },
//                                 "venue": {
//                                         "id": 593,
//                                         "name": "Tottenham Hotspur Stadium",
//                                         "city": "London"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 47,
//                                         "name": "Tottenham",
//                                         "logo": "https://media.api-sports.io/football/teams/47.png",
//                                         "winner": true
//                                 },
//                                 "away": {
//                                         "id": 36,
//                                         "name": "Fulham",
//                                         "logo": "https://media.api-sports.io/football/teams/36.png",
//                                         "winner": false
//                                 }
//                         },
//                         "goals": {
//                                 "home": 2,
//                                 "away": 1
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 1,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 2,
//                                         "away": 1
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868005,
//                                 "referee": "J. Brooks",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-03T14:00:00+00:00",
//                                 "timestamp": 1662213600,
//                                 "periods": {
//                                         "first": 1662213600,
//                                         "second": 1662217200
//                                 },
//                                 "venue": {
//                                         "id": 600,
//                                         "name": "Molineux Stadium",
//                                         "city": "Wolverhampton, West Midlands"
//                                 },
//                                 "status": {
//                                         "long": "Match Finished",
//                                         "short": "FT",
//                                         "elapsed": 90
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 6"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 39,
//                                         "name": "Wolves",
//                                         "logo": "https://media.api-sports.io/football/teams/39.png",
//                                         "winner": true
//                                 },
//                                 "away": {
//                                         "id": 41,
//                                         "name": "Southampton",
//                                         "logo": "https://media.api-sports.io/football/teams/41.png",
//                                         "winner": false
//                                 }
//                         },
//                         "goals": {
//                                 "home": 1,
//                                 "away": 0
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": 1,
//                                         "away": 0
//                                 },
//                                 "fulltime": {
//                                         "home": 1,
//                                         "away": 0
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868006,
//                                 "referee": "C. Kavanagh",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-10T14:00:00+00:00",
//                                 "timestamp": 1662818400,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 504,
//                                         "name": "Vitality Stadium",
//                                         "city": "Bournemouth, Dorset"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 35,
//                                         "name": "Bournemouth",
//                                         "logo": "https://media.api-sports.io/football/teams/35.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 51,
//                                         "name": "Brighton",
//                                         "logo": "https://media.api-sports.io/football/teams/51.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868007,
//                                 "referee": "S. Hooper",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-11T13:00:00+00:00",
//                                 "timestamp": 1662901200,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 494,
//                                         "name": "Emirates Stadium",
//                                         "city": "London"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 42,
//                                         "name": "Arsenal",
//                                         "logo": "https://media.api-sports.io/football/teams/42.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 45,
//                                         "name": "Everton",
//                                         "logo": "https://media.api-sports.io/football/teams/45.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868008,
//                                 "referee": "S. Attwell",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-11T15:30:00+00:00",
//                                 "timestamp": 1662910200,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 525,
//                                         "name": "Selhurst Park",
//                                         "city": "London"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 52,
//                                         "name": "Crystal Palace",
//                                         "logo": "https://media.api-sports.io/football/teams/52.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 33,
//                                         "name": "Manchester United",
//                                         "logo": "https://media.api-sports.io/football/teams/33.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868009,
//                                 "referee": "D. Coote",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-10T11:30:00+00:00",
//                                 "timestamp": 1662809400,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 535,
//                                         "name": "Craven Cottage",
//                                         "city": "London"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 36,
//                                         "name": "Fulham",
//                                         "logo": "https://media.api-sports.io/football/teams/36.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 49,
//                                         "name": "Chelsea",
//                                         "logo": "https://media.api-sports.io/football/teams/49.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868010,
//                                 "referee": "A. Taylor",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-12T19:00:00+00:00",
//                                 "timestamp": 1663009200,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 546,
//                                         "name": "Elland Road",
//                                         "city": "Leeds, West Yorkshire"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 63,
//                                         "name": "Leeds",
//                                         "logo": "https://media.api-sports.io/football/teams/63.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 65,
//                                         "name": "Nottingham Forest",
//                                         "logo": "https://media.api-sports.io/football/teams/65.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868011,
//                                 "referee": "J. Gillett",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-10T14:00:00+00:00",
//                                 "timestamp": 1662818400,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 547,
//                                         "name": "King Power Stadium",
//                                         "city": "Leicester, Leicestershire"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 46,
//                                         "name": "Leicester",
//                                         "logo": "https://media.api-sports.io/football/teams/46.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 66,
//                                         "name": "Aston Villa",
//                                         "logo": "https://media.api-sports.io/football/teams/66.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868012,
//                                 "referee": "A. Madley",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-10T14:00:00+00:00",
//                                 "timestamp": 1662818400,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 550,
//                                         "name": "Anfield",
//                                         "city": "Liverpool"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 40,
//                                         "name": "Liverpool",
//                                         "logo": "https://media.api-sports.io/football/teams/40.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 39,
//                                         "name": "Wolves",
//                                         "logo": "https://media.api-sports.io/football/teams/39.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868013,
//                                 "referee": "M. Oliver",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-10T16:30:00+00:00",
//                                 "timestamp": 1662827400,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 555,
//                                         "name": "Etihad Stadium",
//                                         "city": "Manchester"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 50,
//                                         "name": "Manchester City",
//                                         "logo": "https://media.api-sports.io/football/teams/50.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 47,
//                                         "name": "Tottenham",
//                                         "logo": "https://media.api-sports.io/football/teams/47.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868014,
//                                 "referee": "T. Bramall",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-10T14:00:00+00:00",
//                                 "timestamp": 1662818400,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 585,
//                                         "name": "St. Mary's Stadium",
//                                         "city": "Southampton, Hampshire"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 41,
//                                         "name": "Southampton",
//                                         "logo": "https://media.api-sports.io/football/teams/41.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 55,
//                                         "name": "Brentford",
//                                         "logo": "https://media.api-sports.io/football/teams/55.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 },
//                 {
//                         "fixture": {
//                                 "id": 868015,
//                                 "referee": "C. Pawson",
//                                 "timezone": "UTC",
//                                 "date": "2022-09-11T13:00:00+00:00",
//                                 "timestamp": 1662901200,
//                                 "periods": {
//                                         "first": null,
//                                         "second": null
//                                 },
//                                 "venue": {
//                                         "id": 598,
//                                         "name": "London Stadium",
//                                         "city": "London"
//                                 },
//                                 "status": {
//                                         "long": "Match Postponed",
//                                         "short": "PST",
//                                         "elapsed": null
//                                 }
//                         },
//                         "league": {
//                                 "id": 39,
//                                 "name": "Premier League",
//                                 "country": "England",
//                                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                                 "flag": "https://media.api-sports.io/flags/gb.svg",
//                                 "season": 2022,
//                                 "round": "Regular Season - 7"
//                         },
//                         "teams": {
//                                 "home": {
//                                         "id": 48,
//                                         "name": "West Ham",
//                                         "logo": "https://media.api-sports.io/football/teams/48.png",
//                                         "winner": null
//                                 },
//                                 "away": {
//                                         "id": 34,
//                                         "name": "Newcastle",
//                                         "logo": "https://media.api-sports.io/football/teams/34.png",
//                                         "winner": null
//                                 }
//                         },
//                         "goals": {
//                                 "home": null,
//                                 "away": null
//                         },
//                         "score": {
//                                 "halftime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "fulltime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "extratime": {
//                                         "home": null,
//                                         "away": null
//                                 },
//                                 "penalty": {
//                                         "home": null,
//                                         "away": null
//                                 }
//                         }
//                 }
//         ]
// };

let key ="de4c322d3b3f7eb99eeea0597d0f96fb"
// let key = "9470c6e148be07c6d17f81826de45d11"
// let key = "b6523abb6a98cf5f4cb532f2a0898a97"

fetch(`https://v3.football.api-sports.io/fixtures?league=39&season=2022&from=${fromDateFormated}&to=${toDateFormated}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": key
    }

})
    .then(response => response.json())
    .then(results => results.response.forEach(result => {
        let rightDiv = document.getElementById(`right`);
        let tourDiv = document.createElement(`div`);
        tourDiv.classList.add(`tourDiv`);
        rightDiv.appendChild(tourDiv);
        let tour = document.createElement(`h5`);
        tour.classList.add(`tourCount`);
        tour.innerHTML = result.league.round;
        tourDiv.appendChild(tour);
        let container = document.createElement(`div`);
        container.classList.add(`container`);
        rightDiv.appendChild(container);
        //цей кусок коду тримає інфу про команди які грають дома
        let homeDiv = document.createElement(`div`);
        homeDiv.classList.add(`home`);
        container.appendChild(homeDiv);
        let teamName = document.createElement(`h2`);
        teamName.classList.add(`nameOfTeam`)
        teamName.innerHTML = result.teams.home.name;
        homeDiv.appendChild(teamName);
        let imgHome = document.createElement(`img`);
        imgHome.classList.add(`imgHome`);
        imgHome.src = result.teams.home.logo;
        homeDiv.appendChild(imgHome);
        let countDivHome = document.createElement(`div`);
        countDivHome.classList.add(`countHome`);
        container.appendChild(countDivHome);
        let h1Count = document.createElement(`h1`);
        h1Count.innerHTML = result.score.fulltime.home;
        countDivHome.appendChild(h1Count);
        //двокрапка))
        let pointDiv = document.createElement(`div`);
        pointDiv.classList.add(`doublePoint`);
        container.appendChild(pointDiv);
        let doublePoint = document.createElement(`h2`);
        doublePoint.innerHTML = ':';
        pointDiv.appendChild(doublePoint);
        //цей кусок коду тримає інфу за виїздну команду
        let awayCountDiv = document.createElement(`div`);
        awayCountDiv.classList.add(`countAway`);
        container.appendChild(awayCountDiv);
        let h1CountA = document.createElement(`h1`);
        h1CountA.innerHTML = result.score.fulltime.away;
        awayCountDiv.appendChild(h1CountA);
        let awayDiv = document.createElement(`div`);
        awayDiv.classList.add(`away`);
        container.appendChild(awayDiv);
        let imgAway = document.createElement(`img`);
        imgAway.classList.add(`imgAway`);
        imgAway.src = result.teams.away.logo;
        awayDiv.appendChild(imgAway);
        let teamNameA = document.createElement(`h2`);
        teamNameA.classList.add(`nameOfTeamA`);
        teamNameA.innerHTML = result.teams.away.name;
        awayDiv.appendChild(teamNameA);

    }))
fetch("https://v3.football.api-sports.io/players/topscorers?league=39&season=2022", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": key
    }
})
    .then(response => response.json())
    .then(topScorers =>topScorers.response.forEach(topScorer =>{
        debugger
    }))



fetch("https://v3.football.api-sports.io/status", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key":  key
    }
})
    .then(response => response.json())
    .then(status => {
            let url = document.getElementById(`url`);
            let urlH2 = document.createElement(`h5`);
            urlH2.innerHTML = status.response.requests.current;
            url.appendChild(urlH2);


        }
    )
