function moon() {
	var fullmoon = new Date("03/14/2025 01:00:00").getTime();
	var fase= 1000*60*60*24*29+1000*60*60*12+1000*60*44+1000*2.82;
	var now = new Date().getTime();
	var distance = now-fullmoon;
	var i = Math.floor(distance/fase)
	var days = Math.floor((distance-fase*i)/(1000 * 60 * 60 * 24))
	var fullmoonnext = Math.floor(fase/(1000 * 60 * 60 * 24) - days);

	var luneT1 = document.getElementById('lt1');
	var luneT2 = document.getElementById('lt2');
	var container = document.querySelector('.lune__img');
	
	if (days<2) {
		luneT1.innerHTML = " Полнолуние";
		container.innerHTML="<img src='images/l1.png' width='95%' height='100%'>";
		}
	if (days<6&&days>=2) {
		luneT1.innerHTML = " Убывающая Луна";
		container.innerHTML="<img src='images/l2.png' width='95%' height='100%'>";
		} 
	if (days<=8&&days>=6) {
		luneT1.innerHTML = " Последняя четверть";
		container.innerHTML="<img src='images/l3.png' width='95%' height='100%'>";
		} 
	if (days<14&&days>8) {
		luneT1.innerHTML = " Убывающий месяц";
		container.innerHTML="<img src='images/l4.png' width='95%' height='100%'>";
		}
	if (days<=15&&days>=14) {
		luneT1.innerHTML = " новолуние";
		container.innerHTML="<img src='images/l5.png' width='95%' height='100%'>";
		}
	if (days<22&&days>15) {
		luneT1.innerHTML = " Растущий месяц";
		container.innerHTML="<img src='images/l6.png' width='95%' height='100%'>";
		}
	if (days<=24&&days>=22) {
		luneT1.innerHTML = " Первая четверть";
		container.innerHTML="<img src='images/l7.png' width='95%' height='100%'>";
		}
	if (days<29&&days>24) {
		luneT1.innerHTML =" Растущая Луна";
		container.innerHTML="<img src='images/l8.png' width='95%' height='100%'>";
		}
	luneT2.innerHTML = "следующее полнолуние через: " + fullmoonnext + " дней";
}
