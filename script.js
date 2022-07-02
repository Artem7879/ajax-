function getAjax(method,url,func)//метод, адрес, функция-обработчик результатов
{
//1. Создать объект запрос XMLHttpRequest
let request = new XMLHttpRequest();
//2. Настройка запроса (указать адрес и метод отправки)
request.open(method,url,true)
//3. Обработчик события изменения состояния запроса
request.onreadystatechange = function()
{
//4.Отследить состояние - получен ответ от сервера
if(request.readyState == 4 && request.status == 200)
func(request.responseText)//результаты запроса
}
//5. Отправить запрос
request.send()
}

document.querySelector("#btn").addEventListener('click',function()
{

let request = new XMLHttpRequest();
request.open('GET', "phone.json", false);
request.send();

if(request.status == 200)
{
    console.log(request.responseText);
    document.querySelector('#result').innerHTML = request.responseText;
}

})
