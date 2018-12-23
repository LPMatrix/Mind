var random = Math.floor(Math.random() * 12);
var colors =["#AA00FF","#C51162","#D50000","#2962FF","#304FFE","#6200EA","#00BFA5","#00B8D4","#0091EA","#AEEA00","#64DD17","#00C853","#FF6D00","#FFAB00","#FFD600","#212121","#3E2723","#DD2C00","#263238"]
color = colors[Math.floor(Math.random()*colors.length)]
document.getElementById('title').innerHTML = data[random].title;
document.getElementById('content').innerHTML = data[random].content;
document.getElementById('container').style.backgroundColor = color

var d = new Date()
var hour = d.getHours()
var mins = d.getMinutes()
var sec = d.getSeconds()
var time = hour+':'+mins+':'+sec
document.getElementById('time').innerHTML = time
document.getElementById('button').onclick = function () {
	location.reload();
}