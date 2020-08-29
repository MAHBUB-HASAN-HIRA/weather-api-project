const api_key = '2f39f7c04c528fa9dc03f073f9e6e164';
const getData = city_name => {
    const set_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;
    fetch(set_url)
    .then(response => response.json())
    .then(data => {
        update_data(data);
    });
};


const search_btn = document.getElementById('search_btn');
search_btn.addEventListener('click', () => {
    const get_input_city_name = document.getElementById('get_input_city_name').value;
    if(get_input_city_name.length == 0){
        alert('Please Type Your City Name And Get Current Weather Details');
        }
    else{
        getData(get_input_city_name);
    }
    
});


const update_data = data => {
    document.getElementById('status_icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('show').innerText = data.name || "Unknown Location!";
    document.getElementById('country').innerText = data.sys.country || "Unknown Location!";
    document.getElementById('show_temp').innerText = (data.main.temp - 273.15).toFixed(2);
    document.getElementById('show_status').innerText = data.weather[0].main;
    document.getElementById('wind_speed').innerText = data.wind.speed;
    document.getElementById('get_input_city_name').value = '';
};

getData('Dhaka');
