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

document.querySelector(".container").innerHTML = 
              carta('24/11' , 'quinta',
              CreateGames('brasil' , '16:00' , 'servia') + 
              CreateGames('hungria' , '13:00' , 'argentina') +
              CreateGames('colombia' , '20:00' , 'japão')
            ) +
              carta('28/11' , "segunda" ,
              CreateGames('brasil' , '16:00' , 'servia')
            )
