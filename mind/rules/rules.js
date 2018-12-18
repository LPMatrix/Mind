var random = Math.floor(Math.random() * 12);
document.getElementById('title').innerHTML = data[random].title;
document.getElementById('content').innerHTML = data[random].content;

document.getElementById('button').onclick = function () {
	location.reload();
}