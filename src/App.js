import { useState } from "react"

const api = {
  key: 'b599b55454b9e8d9192ce6c7f97367a3',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (evt) => {
    if(evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(data => setWeather(data))
    }
  }


  const dateBuilder = (dateParam) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let day = days[dateParam.getDay()]
    let date = dateParam.getDate()
    let month = months[dateParam.getMonth()]
    let year = dateParam.getFullYear()

    return `${day}, ${date}th ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" 
          className="search-bar"
          placeholder="Search..."
          />
        </div>

        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">15°C</div>
          <div className="weather">Sunny</div> 
        </div>
      </main>
    </div>
  );
}

export default App;
