var random = Math.floor(Math.random() * 12);
document.getElementById('title').innerHTML = data[random].quote;
document.getElementById('content').innerHTML = data[random].author;

document.getElementById('button').onclick = function () {
	location.reload();
}