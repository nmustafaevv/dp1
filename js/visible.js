                            
//отображаем основную зону	
		function displayWindow() {
			var window1 = document.querySelector('.output_block');
			window1.style.visibility = 'visible';
		}
//отображаем листы и контроллеры		
		function displayList(num) {
			var list1 = document.getElementById('list1');
			var list2 = document.getElementById('list2');
			var list3 = document.getElementById('list3');
			var cntL = document.getElementById('controlL');
			var cntR = document.getElementById('controlR');
			if(num===1){
				list1.style.visibility = 'visible';
				list2.style.visibility = 'hidden';
				list3.style.visibility = 'hidden';
				cntL.style.visibility = 'hidden';
				cntR.style.visibility = 'visible';
			}
			if(num===2){
				list1.style.visibility = 'hidden';
				list2.style.visibility = 'visible';
				list3.style.visibility = 'hidden';
				cntL.style.visibility = 'visible';
				cntR.style.visibility = 'visible';
			}
			if(num===3){
				list1.style.visibility = 'hidden';
				list2.style.visibility = 'hidden';
				list3.style.visibility = 'visible';
				cntL.style.visibility = 'visible';
				cntR.style.visibility = 'hidden';
			}
		}
//меню выбора ввода данных		
		function dropMenu() {
			document.getElementById("Dropdown").classList.toggle("show");
		}
//отображение выбора ввода на кнопке	
		function dropItem(Item) {
			dropMenu();
			if (Item===1){
				document.getElementById("drop_menu_text").textContent = "Название города";
				document.getElementById('inputName1').style.visibility = 'visible';
				document.getElementById('inputName2').style.visibility = 'hidden';
				document.getElementById('inputName3').style.visibility = 'hidden';
				}
			if (Item===2){
				document.getElementById("drop_menu_text").textContent = "Координаты";
				document.getElementById('inputName1').style.visibility = 'hidden';
				document.getElementById('inputName2').style.visibility = 'visible';
				document.getElementById('inputName3').style.visibility = 'hidden';
				
				}
			if (Item===3){
				document.getElementById("drop_menu_text").textContent = "Геолокация";
				document.getElementById('inputName1').style.visibility = 'hidden';
				document.getElementById('inputName2').style.visibility = 'hidden';
				document.getElementById('inputName3').style.visibility = 'visible';
				
				}
		}
//получение геолокации		
		function getLocation() {
    // Если геолокация поддерживается браузером
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else {
				document.getElementById("location").innerHTML = "Геолокация не поддерживается.";
			}
		}
//разбор геолокации
		function showPosition(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			document.getElementById("locationX").innerHTML = lat;
			document.getElementById("locationY").innerHTML = lon;
		}