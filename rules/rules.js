var random = Math.floor(Math.random() * 12);
var colors =["#AA00FF","#C51162","#D50000","#2962FF","#304FFE","#6200EA","#00BFA5","#00B8D4","#0091EA","#AEEA00","#64DD17","#00C853","#FF6D00","#FFAB00","#FFD600","#212121","#3E2723","#DD2C00","#263238"]
color = colors[Math.floor(Math.random()*colors.length)]
document.getElementById('title').innerHTML = data[random].title;
document.getElementById('content').innerHTML = data[random].content;
document.getElementById('container').style.backgroundColor = color

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

document.getElementById('button').onclick = function () {
	location.reload();
}