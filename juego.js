var lista = [
    {
       "botones":27,
       "letters" : ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
                    "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ",
                    "Z", "X", "C", "V", "B", "N", "M",
                    "Space"]
    }
]

    palabras = [
        {
          "input":8,
          "category": "Sabor de Helado",
          "word": "PISTACHE"
        },

        {
          "input":3,
          "category": "Juego de mesa",
          "word": "UNO"
        },

        {
          "input":9,
          "category": "Canción de Luis Miguel",
          "word": "ENTREGATE"
        },

        {
          "input":5,
          "category": "Color",
          "word": "NEGRO"
        },

        {
          "input":7,
          "category": "Papeleria",
          "word": "TIJERAS"
        },

        {
          "input":7,
          "category": "Mes del año",
          "word": "OCTUBRE"
        },
    ]


$(document).ready(function (){
    displayKeyboard();
    fillBlanks();
})

function displayKeyboard(){
    const teclado = lista[0].letters;
    console.log(teclado.length);
    //$("#teclado").empty();
    for(var i = 0; i<=teclado.length; i++){
        var letra = ` <button class="btn btn-outline-primary" id="teclado_${i}" clickable>${lista[0].letters[i]}</button>`
        $("#ABCdario").append(letra);
        console.log(letra)
    }
}

function fillBlanks(){
    //Crea una const para elegir la palabra aleatoria
    const randomWord = palabras[Math.floor(Math.random()*palabras.length)];

    //Asegurar que tus espacios esten vacíos
    $("#blanks").empty();

    //Mostrar los espacios en blanco usando <span> con bucle for
    for(var i = 0; i<randomWord.inputs; i++){
        var espacios = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(espacios);
        $("#pista").html(randomWord.category);
    }

    //Establecer estado del juego
    var gameOver = false;

    //Rellenar espacios en blanco solo si la letra coincide con randomWord
    $("button[clickable]").click(function(){
        if(!gameOver){
            var letra = $(this).html();
            var found = false;
            var vidas = parseInt($("#lifes").text())
            for(var i=0; i<randomWord.word.length; i++){
                if(randomWord.word[i] === letra){
                   if(vidas > 0 && !found){
                    $("#input_"+i).html(letra);
                    //found = true;
                    console.log(letra);
                       //Verificar que la palabra ha sido encontrada
                       if($("#blanks").text() === randomWord.word){
                           $("#result").text("¡¡Ganaste!!");
                           found = true;
                           gameOver = true;
                           console.log("Ganaste")
                       }
                   }
                }
            }
            if(!found && !randomWord.word.index){
                //Restar una vida
                vidas = vidas -1;
                $("#lifes").html(vidas);
                console.log("Vida perdida");
            }
            else if(vidas === 0){
                gameOver = true;
                $("#result").text("Perdiste, espero te vaya mejor")
                location.reload();
            }
        }
        
    })

    //Obtener el id del botón clickeado

    //Obtener vidas del jugador
}