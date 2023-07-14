function calculate() {

    let criarArray = (lista, nodeList) => {
    
        var lista = []

        for (var i = 0; i < nodeList.length; i++) {

            lista.push(parseInt(nodeList[i].value))
            
        }

        return lista

    }

    // notas do João
    let joaoGradeInput = document.querySelectorAll('input[class="joao-notas"]')
    var joaoGrade = criarArray(joaoGrade, joaoGradeInput)

    let joaoMediaInput = document.querySelector('#joao-media')

    // notas do Alex
    let AlexGradeInput = document.querySelectorAll('input[class="alex-input"]')
    var alexGrade = criarArray(alexGrade, AlexGradeInput)

    let alexMediaInput = document.querySelector('#alex-media')

    //notas do Marcos
    let MarcosGradeInput = document.querySelectorAll('input[class="marcos-input"]')
    var marcosGrade = criarArray(marcosGrade, MarcosGradeInput)

    let marcosMediaInput = document.querySelector('#marcos-media')

    //notas do Maria
    let MariaGradeInput = document.querySelectorAll('input[class="maria-input"]')        
    var mariaGrade = criarArray(mariaGrade, MariaGradeInput)

    let mariaMediaInput = document.querySelector('#maria-media')

    var media = (aluno) => {

        let calcMedia = (n1, n2, n3, n4) => (n1 + n2 + n3 + n4) / 4

        const mediaFinal = calcMedia(aluno[0], aluno[1], aluno[2], aluno[3])

        return mediaFinal

    }

    var imprimirMedia = (input, aluno) => {

        if(media(aluno) <= 6 || media(aluno) <= 0) {

            input.style.backgroundColor = "#FF0F0F";
        
        } else {

            input.style.backgroundColor = "#31FF4E";

        }

        input.value = media(aluno)

    }
    
    imprimirMedia(joaoMediaInput, joaoGrade)
    imprimirMedia(alexMediaInput, alexGrade)
    imprimirMedia(marcosMediaInput, marcosGrade)
    imprimirMedia(mariaMediaInput, mariaGrade)

}