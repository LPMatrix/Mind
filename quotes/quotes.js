function creator(argument) {
	var random = Math.floor(Math.random() * data.length);
	var colors =["#AA00FF","#C51162","#D50000","#2962FF","#304FFE","#6200EA","#00BFA5","#00B8D4","#0091EA","#AEEA00","#64DD17","#00C853","#FF6D00","#FFAB00","#FFD600","#212121","#3E2723","#DD2C00","#263238"]
	color = colors[Math.floor(Math.random()*colors.length)]
	document.getElementById('title').innerHTML = data[random].quote;
	document.getElementById('content').innerHTML = String(data[random].author);
	document.getElementById('container').style.backgroundColor = color
}

creator()

document.getElementById('button').onclick = function () {
	creator()
}
setInterval(function(){creator()}, 30000)