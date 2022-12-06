var elForm = document.querySelector('.form');
var elAvto = document.querySelector('.js-car');
var elResult = document.querySelector('.js-result');
var elInput = document.querySelector('.input');
var elInput2 = document.querySelector('.input2');
var elButton1 = document.querySelector('.button-js');
var elButton2 = document.querySelector('.button-js2');
var elButton3 = document.querySelector('.button-js3');
var elErr = document.querySelector('.js-err')
var array = ['Chevrolet', ' BMW', ' KIA', ' Tesla', ' McLaren', ' Toyota', ' Ferrari ', ' Lamborghini'];

elAvto.textContent = array;

elButton1.addEventListener('click', function(evt) {
    evt.preventDefault();


    array.shift(elInput.value);
    elAvto.textContent = array;
    elInput.value = ''
    elInput2.value = ''
});

elButton2.addEventListener('click', function(evt) {
    evt.preventDefault();

   
    array.pop(elInput2.value);
    elAvto.textContent = array;
    elInput.value = ''
    elInput2.value = ''
});

elButton3.addEventListener('click', function(evt) {
    evt.preventDefault();
  

    if (elInput.value == '') {
        array.push(elInput2.value);
    }else if (elInput2.value == '') {
        array.unshift(elInput.value);
    }else {
        array.unshift(elInput.value);
        array.push(elInput2.value);
    }

    elAvto.textContent = array;
    elInput.value = ''
    elInput2.value = ''
});
