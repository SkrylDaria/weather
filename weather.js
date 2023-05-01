let apiKey = "7ea17545a21f89aeeada0f673de912d3";
let city = "London"

var select = document.getElementById("select");     

select.addEventListener("change", function(){
  // Если нужно value
  // input.value = this.value;
  // Если нужен текст
  city = this.options[this.selectedIndex].text;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
.then(data => {
document.querySelector('.city').innerHTML = data.name 
document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273.15)
})
});

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
document.querySelector('.city').innerHTML = data.name 
document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273.15)
})