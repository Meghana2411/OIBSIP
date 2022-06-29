function conversionFahrenheit(){
        
    let inputnumber = document.getElementById("tempReader1").value;
    let fahrenheit = (inputnumber * 9/5) + 32;
      var f = document.getElementById("fahrenheit1")
      f.innerHTML = 'Fahrenheit: ' + fahrenheit;
  }
  function conversionCelsius(){
        
    let inputnumber = document.getElementById("tempReader1").value;
    let celsius = (inputnumber - 32) * 5/9;
      var c = document.getElementById("celsius1")
      c.innerHTML = 'Celsius: ' + celsius;
  }