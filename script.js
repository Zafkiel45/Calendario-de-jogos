/*
A função CreateGames é quem mostra a imagem dos jogos de forma dinâmica junto com a hora. Os argumentos Player1, hora e Player2 funcionando da seguinte forma:

O player1 é o valor do primeiro país que vai aparecer do lado esquerdo, como valor na chama da função devemos colocar o nome do país que irá aparecer a imagem de uma forma mais dinâmica. A hora basta colocarmos a hora em que o jogo ocorrerá que será colocada entre a imagens dos países. O player2 funciona da mesma forma que o player1 só que para o lado direito. 

*/

function CreateGames(player1, hora, player2){
  return `
      <li class="item">
        <img src="Assets/icon-${player1}.svg" alt="Brasil-icone">
        <strong>${hora}</strong>
        <img src="Assets/icon-${player2}.svg" alt="Servia-icone">
      </li>
      <hr>
  `
}

/* 
  A função carta cria uma nova div toda vez que é chamada junto com outros elementos de formatações como strong e span. Também foi adicionado argumentos como "Date" , "Day" e "games" sendo date o agumento relacionado a data, o day relacionado ao dia da semana, e o games é a função que vai criar os jogos de forma dinâmica toda vez que for chamada.  
*/

let delay = -0.4
function carta(date, day, games){
  delay = delay + 0.4;
  return `
                  <div class="card" style="animation-delay: ${delay}s>
                    <h2><strong>${date}</strong><span>${day}</span></h2>
                    <ul class="lista-1">
                      ${games}
                    </ul>
                </div>
  `
}


//Pega um elemento do HTML e sobrescreve por cima do documento HTML. Ou seja, tudo que foi escrito no arquivo HTML será apagado e escrito esté daqui abaixo...

//OBS: de fazer é para deixar o HTML dinâmico e mais produtivo conforme for crescendo o projeto...

document.querySelector(".container").innerHTML = 
              carta('24/11' , 'quinta',  //Chama a função cartas que cria uma nova lista toda vez que é chamada
              CreateGames('brasil' , '16:00' , 'servia') + 
              CreateGames('hungria' , '13:00' , 'argentina') +
              CreateGames('colombia' , '20:00' , 'japão')
            ) +
              carta('28/11' , "segunda" ,
              CreateGames('brasil' , '16:00' , 'servia')
            )

            /* A função CreateGames foi utilizado de uma forma bem versátil. Ela foi criada acima da função cartas, e foi usada como valor de um argumento pela a função carta, que por sua vez a função CreateGames que foi utilizada como valor de argumento, trouxe consigo outros valores de argumento deixar o código versátil e abrindo diversas posibilidades.*/