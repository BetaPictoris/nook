const cdnBaseURL = "https://cdn.ozx.me";
const noWeatherSupport = ["population-growing"]

/*
  parseGameName
  Returns a URL game name into a user friendly one.
*/
function parseGameName(game) {
  game = game.replace('-', ' ') 
  return game.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/*
  getURLWeather
  Returns the weather to use for a given game. Will always return "clear" if
  the game doesn't support weather, so far this is only Population Growing but,
  the noWeatherSupport array can be updated in the future. 

  game    String    The name of the game to check.
  weather String    The weather mode to check for, this will be returned if the
                    game supports weather-based music.
*/
function getURLWeather(game, weather) {
  if (noWeatherSupport.indexOf(game) !== -1) {
    return "clear"
  }

  return weather
}

/*
  getURL
  Returns the URL to use for music with a given set of user settings

  game    String    The game to play audio from.
  weather String    The weather to play for, see getURLWeather.
  hour    Number    The hour to play music from.
*/
export function getURL(game, weather, hour) {
  weather = getURLWeather(game, weather)
  return `${cdnBaseURL}/ac/${game}/music/${weather}/${hour}.ogg`
}

/*
  getMetadata
  return a MediaMetadata object so that custom audio titles can be displayed.

  game  String    The game that audio is being played from.
*/
export function getMetadata(game) {
  game = parseGameName(game)

  return new MediaMetadata({
    title: `Animal Crossing: ${game}`,
  })
}

/*
  getWeatherURL
  returns the URL to use for weather

  game    String    The game that audio is being played from.
  weather String    The weather to play audio for.
*/
export function getWeatherURL(game, weather) {
  if (weather === "rainy") {
    return `${cdnBaseURL}/sounds/rain.ogg`
  }

  return `${cdnBaseURL}/sounds/clear.ogg`
}