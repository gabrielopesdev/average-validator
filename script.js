//const gradesJoaoInput = [document.querySelector('#joao1bm'), document.querySelector('#joao2bm'), document.querySelector('#joao3bm'), document.querySelector('#joao4bm')]

const gradeJoaoInput = document.querySelectorAll('input[class="joao-input"]');
var gradeJoao = []

gradeJoaoInput.forEach(function(input) {
    gradeJoao.push(input.value);
});  

//const gradesAlexInput = [document.querySelector('#alex1bm'), document.querySelector('#alex2bm'), document.querySelector('#alex3bm'), document.querySelector('#alex4bm')]

const gradeAlexInput = document.querySelectorAll('input[class="alex-input"]');
var gradeAlex = []

gradeAlexInput.forEach(function(input) {
    gradeAlex.push(input.value);
})


//const gradesMarcosInput = [document.querySelector('#marcos1bm'), document.querySelector('#marcos2bm'), document.querySelector('#marcos3bm'), document.querySelector('#marcos4bm')]

const gradeMarcosInput = document.querySelectorAll('input[class="marcos-input"]');
var gradeMarcos = []

gradeMarcosInput.forEach(function(input) {
    gradeMarcos.push(input.value);
});  

//const gradesMariaInput = [document.querySelector('#maria1bm'), document.querySelector('#maria2bm'), document.querySelector('#maria3bm'), document.querySelector('#maria4bm')]

const gradeMariaInput = document.querySelectorAll('input[class="maria-input"]');
var gradeMaria = []

gradeMariaInput.forEach(function(input) {
    gradeMaria.push(input.value);
});  

