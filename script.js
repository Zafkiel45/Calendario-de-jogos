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


function carta(date, day, games){
  return `
                  <div class="card">
                    <h2><strong>${date}</strong><span>${day}</span></h2>
                    <ul class="lista-1">
                      ${games}
                    </ul>
                </div>
  `
}



document.querySelector("#app").innerHTML = `
<div class="container">
            <header class="cabecalho">
                <h1>
                    <img src="Assets/logo.svg" alt="logo">
                </h1>
            </header>
            <main>
            ${carta(
            '24/11' , 
            'quinta',
              CreateGames('brasil' , '16:00' , 'servia') + 
              CreateGames('hungria' , '13:00' , 'argentina') +
              CreateGames('colombia' , '20:00' , 'japão')
            )}
            ${carta('28/11' , "segunda")}

            </main>
        </div>
`