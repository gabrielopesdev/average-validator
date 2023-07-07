function calculate() {

    function criarArray(lista, nodeList) {

        var lista = []

        for (var i = 0; i < nodeList.length; i++) {

            lista.push(parseInt(nodeList[i].value))
        }

        return lista
    }

    // notas do João
    let joaoGradeInput = document.querySelectorAll('input[class="joao-notas"]')
    var joaoGrade = criarArray(joaoGrade, joaoGradeInput)
    console.log(joaoGrade)

    // notas do Alex
    let AlexGradeInput = document.querySelectorAll('input[class="alex-input"]')
    var alexGrade = criarArray(alexGrade, AlexGradeInput)
    console.log(alexGrade)

    //notas do Marcos
    let MarcosGradeInput = document.querySelectorAll('input[class="marcos-input"]')
    var marcosGrade = criarArray(marcosGrade, MarcosGradeInput)
    console.log(marcosGrade)

    //notas do Maria
    let MariaGradeInput = document.querySelectorAll('input[class="maria-input"]')        
    var mariaGrade = criarArray(mariaGrade, MariaGradeInput)
    console.log(mariaGrade)
}