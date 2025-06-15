//Ввод
		const token = '89b49c3743bb372ec4cf03ca304c7de9';
		const lang = 'ru';
		const units = 'metric';
		const urlBase = 'https://api.openweathermap.org/data/2.5/';
		const url = 'wa';
		const inputName = document.querySelector('#nameCiry');
		const inputCordX = document.querySelector('#cordX');
		const inputCordY = document.querySelector('#cordY');
		const typeGet = document.querySelector('#drop_menu_text');
		const inputLocationX = document.querySelector('#locationX');
		const inputLocationY = document.querySelector('#locationY');
//Вывод
		const icon = document.querySelector('.icon__container');
		const name = document.querySelector('#cityName');
		const temp = document.querySelector('#icon__container-temp');
		const tempMin = document.querySelector('#temp-min');
		const tempMax = document.querySelector('#temp-max');
		const tempSr = document.querySelector('#temp-sr');
		const tempIcon = document.querySelector('#icon__container-temp');
		const tDate = document.querySelector('.date');
		const weatherName = document.querySelector('#weather');
		const hum = document.querySelector('#humidity');
		const pres = document.querySelector('#pressure');
		const vis = document.querySelector('#visibility');
		const Wspeed = document.querySelector('#wind_speed');
		const Wgust = document.querySelector('#wind_gust');
		const Wdeg = document.querySelector('#wind_deg');
		const list = document.querySelector('#scrollList');
		var i=1;
		
		
//отображение листов
		function showList(ind) {
			if(ind==='left'){
				i--;
				displayList(i);
			}
			if(ind==='right'){
				i++;
				displayList(i);
			}
		}
//отображение блока данных, запуск цепочки в зависимости от запроса
		function searchWeather() {
			displayWindow();
			var tx = typeGet.textContent;
			switch(tx){
				case 'Название города':  
				getResultsName(inputName.value);
				getResultsNamePR(inputName.value);
				break;
				case 'Координаты':  
				getResultsCord(inputCordX.value, inputCordY.value);
				getResultsCordPR(inputCordX.value, inputCordY.value);
				break;
				case 'Геолокация':  
				getResultsCord(inputLocationX.textContent, inputLocationY.textContent);
				getResultsCordPR(inputLocationX.textContent, inputLocationY.textContent);
				break;
				default: alert("ошибка");
				break;
			}
		}
//слушатель на название
		inputName.addEventListener("keypress", setQuery);
		function setQuery(event) {
			if(event.keyCode === 13) {
				displayWindow();
				getResultsName(inputName.value);
				getResultsNamePR(inputName.value);
			}
		}
//ДАННЫЕ О ПОГОДЕ
//запрос по названию	
		function getResultsName(city) {
			fetch(`${urlBase}weather?q=${city}&lang=ru&appid=${token}&units=metric`)
				.then((weather) => {
					return weather.json();
				}).then(displayRes);
		}
//запрос по координатам	
		function getResultsCord(lat, lon) {
			fetch(`${urlBase}weather?lat=${lat}&lon=${lon}&lang=ru&appid=${token}&units=metric`)
				.then((weather) => {
					return weather.json();
				}).then(displayRes);
		}
//вывод даты
		function displayDate() {
			let date = new Date();
			let day = date.getDate();
			let monthIndex = date.getMonth();
			let year = date.getFullYear();
			let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
			let monthName = months[monthIndex];
			let formattedDate = day + " " + monthName + " " + year;
			console.log(formattedDate);
			tDate.innerHTML = formattedDate;
		}
//разбор и вывод данных о погоде
		function displayRes(weather) {
			console.log(weather);
			let nm_d = weather.weather[0].description;
			displayDate();
			moon();
			
			var div = document.createElement("div");
			icon.appendChild(div);
			
			
			switch(nm_d){
				case 'пасмурно':  div.innerHTML="<img id='icon_weather' src='images/pas.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'небольшая облачность':  div.innerHTML="<img id='icon_weather' src='images/obl.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'облачно с прояснениями':  div.innerHTML="<img id='icon_weather' src='images/obl.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'переменная облачность':  div.innerHTML="<img id='icon_weather' src='images/obl.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'ясно':  div.innerHTML="<img id='icon_weather' src='images/sol.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'дождь':  div.innerHTML="<img id='icon_weather' src='images/pas_d.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'небольшой дождь':  div.innerHTML="<img id='icon_weather' src='images/obl_d.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'снег':  div.innerHTML="<img id='icon_weather' src='images/pas_d.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				case 'небольшой снег':  div.innerHTML="<img id='icon_weather' src='images/obl_d.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
				default: div.innerHTML="<img id='icon_weather' src='images/obl.svg' alt='' style='max-width: 100%;height: 85%;padding-left: 10%;padding-top: 3%;'>";
				break;
			}
			weatherName.innerHTML = weather.weather[0].description;
			name.innerHTML = weather.name;
			tempMin.innerHTML = weather.main.temp_min + "&#176;C";
			tempMax.innerHTML = weather.main.temp_max + "&#176;C";
			tempSr.innerHTML = weather.main.temp + "&#176;C";
			tempIcon.innerHTML = weather.main.temp + "&#176;C";
			hum.innerHTML = weather.main.humidity + "%";
			pres.innerHTML = weather.main.pressure + "мм";
			vis.innerHTML = weather.visibility + "м";
			Wspeed.innerHTML = weather.wind.speed + "м/с";
			Wgust.innerHTML = weather.wind.gust + "м/с";
			Wdeg.innerHTML = weather.wind.deg + "&#176;";
		}
	
//ПРОГНОЗ ПОГОДЫ
//запрос по названию	
		function getResultsNamePR(city) {
			fetch(`${urlBase}forecast?q=${city}&lang=ru&appid=${token}&units=metric`)
				.then((weather) => {
					return weather.json();
				}).then(displayResPR);
		}
//запрос по координатам	
		function getResultsCordPR(lat, lon) {
			fetch(`${urlBase}forecast?lat=${lat}&lon=${lon}&lang=ru&appid=${token}&units=metric`)
				.then((weather) => {
					return weather.json();
				}).then(displayResPR);
		}
//разбор и вывод данных о погоде
		function displayResPR(weather) {
			console.log(weather);
			for (var i = 0; i < weather.list.length; i++) {
				var div = document.createElement("div");
				div.innerHTML ="<div class='pageLB'><h2 class='scrollPage_temp'>" + weather.list[i].main.temp + "&#176;C</h2><h2 class='scrollPage_weather'>" + weather.list[i].weather[0].description + "</h2></div><div class='pageRB'><div class='scrollPage_DT'><p>" + weather.list[i].dt_txt + "</p></div><div class='scrollPage_Date'><div><p>влажность - " + weather.list[i].main.humidity + "%</p></br><p>давление - " + weather.list[i].main.pressure + "мм</p></br><p>видимость - " + weather.list[i].visibility + "м</p></div><div><p>скорость ветра -" + weather.list[i].wind.speed + "м/с</p></br><p>порывы ветра -" + weather.list[i].wind.gust + "м/с</p></br><p>направление ветра -" + weather.list[i].wind.deg + "&#176</p></div></div></div>"
				list.appendChild(div);
			}
		}