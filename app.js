//CARD PARTIDO 1 MEXICO VS SUDAFRICA//
const scoreTeam1 = document.getElementById("scoreteam1");
const scoreTeam2 = document.getElementById("scoreteam2");
const saveBtn = document.getElementById("btn")
//CARD PARTIDO 2 COREA VS CHEQUIA//
const scoreTeam3 = document.getElementById("scoreteam3");
const scoreTeam4 = document.getElementById("scoreteam4");
const saveBtn2 = document.getElementById("btn2")
//CARD PARTIDO 3 MEXICO VS COREA//
const scoreTeam5 = document.getElementById("scoreteam5");
const scoreTeam6 = document.getElementById("scoreteam6");
const saveBtn3 = document.getElementById("btn3")
//CARD PARTIDO 4 SUDAFRICA VS CHEQUIA//
const scoreTeam7 = document.getElementById("scoreteam7");
const scoreTeam8 = document.getElementById("scoreteam8");
const saveBtn4 = document.getElementById("btn4");
//CARD PARTIDO 5 MEXICO VS CHEQUIA//
const scoreTeam9 = document.getElementById("scoreteam9");
const scoreTeam10 = document.getElementById("scoreteam10");
const saveBtn5 = document.getElementById("btn5");
//CARD PARTIDO 5 COREA VS SUDAFRICA//
const scoreTeam11 = document.getElementById("scoreteam11");
const scoreTeam12 = document.getElementById("scoreteam12");
const saveBtn6 = document.getElementById("btn6");

const firstTeam = document.getElementById('1');
const secondTeam = document.getElementById('2');
const thirdTeam = document.getElementById('3');
const fourthTeam = document.getElementById('4');

//CARGAR LOCAL STORAGE//
document.addEventListener("DOMContentLoaded", function () {

    const raw1 = localStorage.getItem('resultlMatch1');
    const raw2 = localStorage.getItem('resultlMatch2');
    const raw3 = localStorage.getItem('resultlMatch3');
    const raw4 = localStorage.getItem('resultlMatch4');
    const raw5 = localStorage.getItem('resultlMatch5');
    const raw6 = localStorage.getItem('resultlMatch6');

    if (raw1) {
        const match1 = JSON.parse(raw1);
        if (match1.mexico !== 0 && match1.sudafrica !== 0) {
            loadFromLocal();
        }
    }

    if (raw2) {
        const match2 = JSON.parse(raw2);
        if (match2.corea !== 0 && match2.chequia !== 0) {
            loadFromLocal2();
        }
    }

    if (raw3) {
        const match3 = JSON.parse(raw3);
        if (match3.mexico !== 0 && match3.corea !== 0) {
            loadFromLocal3();
        }
    }

    if (raw4) {
        const match4 = JSON.parse(raw4);
        if (match4.chequia !== 0 && match4.sudafrica !== 0) {
            loadFromLocal4();
        }
    }

    if (raw5) {
        const match5 = JSON.parse(raw5);
        if (match5.mexico !== 0 && match5.chequia !== 0) {
            loadFromLocal5();
        }
    }

    if (raw6) {
        const match6 = JSON.parse(raw6);
        if (match6.corea !== 0 && match6.sudafrica !== 0) {
            loadFromLocal6();
        }
    }

    // const a = mexicoStats.pts
    // const b = sudafricaStats.pts
    // const c = coreaStats.pts
    // const d = chequiaStats.pts

    // const es = [a,b,c,d]
    // console.log(es)
    // es.sort((x,y) => y - x);
    // console.log(es)

    const keys = [
        'chequiaSavedStats',
        'coreaSavedStats',
        'mexicoSavedStats',
        'sudafricaSavedStats'
    ];

    // Leer objetos disponibles
    const items = keys.map(k => {
        const raw = localStorage.getItem(k);
        return raw ? { key: k, obj: JSON.parse(raw) } : null;
    }).filter(Boolean);

    // Ordenar por pts desc, luego dg desc
    items.sort((a, b) => {
        if (b.obj.pts !== a.obj.pts) return b.obj.pts - a.obj.pts;
        return b.obj.dg - a.obj.dg;

    });


    // Actualizar index y guardar en su clave original
    items.forEach((entry, i) => {
        entry.obj.index = i + 1;
        localStorage.setItem(entry.key, JSON.stringify(entry.obj));
    });

    if (mexicoStats.index === 1) {
        firstTeam.innerHTML = `                        <p class="country"> <span><img src="images/mexico-bandera.png"
                                    alt=""></span>${mexicoStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${mexicoStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${mexicoStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${mexicoStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${mexicoStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${mexicoStats.dg}</div>
                        <div class="points" id="mexico-points">${mexicoStats.pts}</div>
                    </div>`
    }
    else if (sudafricaStats.index === 1) {
        firstTeam.innerHTML = `                        <p class="country"> <span><img src="images/sudafrica-bandera.png"
                                    alt=""></span>${sudafricaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${sudafricaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${sudafricaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${sudafricaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${sudafricaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${sudafricaStats.dg}</div>
                        <div class="points" id="mexico-points">${sudafricaStats.pts}</div>
                    </div>`

    }
    else if (coreaStats.index === 1) {
        firstTeam.innerHTML = `                        <p class="country"> <span><img src="images/coreadelsur-bandera.png"
                                    alt=""></span>${coreaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${coreaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${coreaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${coreaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${coreaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${coreaStats.dg}</div>
                        <div class="points" id="mexico-points">${coreaStats.pts}</div>
                    </div>`

    }
    else if (chequiaStats.index === 1) {
        firstTeam.innerHTML = `                        <p class="country"> <span><img src="images/chequia-bandera.png"
                                    alt=""></span>${chequiaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${chequiaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${chequiaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${chequiaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${chequiaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${chequiaStats.dg}</div>
                        <div class="points" id="mexico-points">${chequiaStats.pts}</div>
                    </div>`

    }
    if (mexicoStats.index === 2) {
        secondTeam.innerHTML = `                        <p class="country"> <span><img src="images/mexico-bandera.png"
                                    alt=""></span>${mexicoStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${mexicoStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${mexicoStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${mexicoStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${mexicoStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${mexicoStats.dg}</div>
                        <div class="points" id="mexico-points">${mexicoStats.pts}</div>
                    </div>`
    }
    else if (sudafricaStats.index === 2) {
        secondTeam.innerHTML = `                        <p class="country"> <span><img src="images/sudafrica-bandera.png"
                                    alt=""></span>${sudafricaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${sudafricaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${sudafricaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${sudafricaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${sudafricaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${sudafricaStats.dg}</div>
                        <div class="points" id="mexico-points">${sudafricaStats.pts}</div>
                    </div>`

    }
    else if (coreaStats.index === 2) {
        secondTeam.innerHTML = `                        <p class="country"> <span><img src="images/coreadelsur-bandera.png"
                                    alt=""></span>${coreaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${coreaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${coreaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${coreaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${coreaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${coreaStats.dg}</div>
                        <div class="points" id="mexico-points">${coreaStats.pts}</div>
                    </div>`

    }
    else if (chequiaStats.index === 2) {
        secondTeam.innerHTML = `                        <p class="country"> <span><img src="images/chequia-bandera.png"
                                    alt=""></span>${chequiaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${chequiaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${chequiaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${chequiaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${chequiaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${chequiaStats.dg}</div>
                        <div class="points" id="mexico-points">${chequiaStats.pts}</div>
                    </div>`

    }
    if (mexicoStats.index === 3) {
        thirdTeam.innerHTML = `                        <p class="country"> <span><img src="images/mexico-bandera.png"
                                    alt=""></span>${mexicoStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${mexicoStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${mexicoStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${mexicoStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${mexicoStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${mexicoStats.dg}</div>
                        <div class="points" id="mexico-points">${mexicoStats.pts}</div>
                    </div>`
    }
    else if (sudafricaStats.index === 3) {
        thirdTeam.innerHTML = `                        <p class="country"> <span><img src="images/sudafrica-bandera.png"
                                    alt=""></span>${sudafricaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${sudafricaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${sudafricaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${sudafricaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${sudafricaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${sudafricaStats.dg}</div>
                        <div class="points" id="mexico-points">${sudafricaStats.pts}</div>
                    </div>`

    }
    else if (coreaStats.index === 3) {
        thirdTeam.innerHTML = `                        <p class="country"> <span><img src="images/coreadelsur-bandera.png"
                                    alt=""></span>${coreaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${coreaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${coreaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${coreaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${coreaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${coreaStats.dg}</div>
                        <div class="points" id="mexico-points">${coreaStats.pts}</div>
                    </div>`

    }
    else if (chequiaStats.index === 3) {
        thirdTeam.innerHTML = `                        <p class="country"> <span><img src="images/chequia-bandera.png"
                                    alt=""></span>${chequiaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${chequiaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${chequiaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${chequiaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${chequiaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${chequiaStats.dg}</div>
                        <div class="points" id="mexico-points">${chequiaStats.pts}</div>
                    </div>`

    }
    if (mexicoStats.index === 4) {
        fourthTeam.innerHTML = `                        <p class="country"> <span><img src="images/mexico-bandera.png"
                                    alt=""></span>${mexicoStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${mexicoStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${mexicoStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${mexicoStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${mexicoStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${mexicoStats.dg}</div>
                        <div class="points" id="mexico-points">${mexicoStats.pts}</div>
                    </div>`
    }
    else if (sudafricaStats.index === 4) {
        fourthTeam.innerHTML = `                        <p class="country"> <span><img src="images/sudafrica-bandera.png"
                                    alt=""></span>${sudafricaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${sudafricaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${sudafricaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${sudafricaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${sudafricaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${sudafricaStats.dg}</div>
                        <div class="points" id="mexico-points">${sudafricaStats.pts}</div>
                    </div>`

    }
    else if (coreaStats.index === 4) {
        fourthTeam.innerHTML = `                        <p class="country"> <span><img src="images/coreadelsur-bandera.png"
                                    alt=""></span>${coreaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${coreaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${coreaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${coreaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${coreaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${coreaStats.dg}</div>
                        <div class="points" id="mexico-points">${coreaStats.pts}</div>
                    </div>`

    }
    else if (chequiaStats.index === 4) {
        fourthTeam.innerHTML = `                        <p class="country"> <span><img src="images/chequia-bandera.png"
                                    alt=""></span>${chequiaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${chequiaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${chequiaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${chequiaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${chequiaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${chequiaStats.dg}</div>
                        <div class="points" id="mexico-points">${chequiaStats.pts}</div>
                    </div>`

    }



});



// const firstTeam = document.getElementById("1");
// const secondTeam = document.getElementById("2");
// const thirdTeam = document.getElementById("3");
// const fourthTeam = document.getElementById("4");

// console.log(items)


//STATS MEXICO//

const mexicoPlayedGames = document.getElementById("mexico-playedGames")
const mexicoWonGames = document.getElementById("mexico-wonGames")
const mexicoDrawGames = document.getElementById("mexico-drawGames")
const mexicoLostGames = document.getElementById("mexico-lostGames")
const mexicoGoalDifference = document.getElementById("mexico-goalDifference")
const mexicoPoints = document.getElementById("mexico-points")

let mexicoStats = {
    "index": 1,
    "country": "Mexico",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

//STATS SUDAFRICA

const sudafricaPlayedGames = document.getElementById("sudafrica-playedGames")
const sudafricaWonGames = document.getElementById("sudafrica-wonGames")
const sudafricaDrawGames = document.getElementById("sudafrica-drawGames")
const sudafricaLostGames = document.getElementById("sudafrica-lostGames")
const sudafricaGoalDifference = document.getElementById("sudafrica-goalDifference")
const sudafricaPoints = document.getElementById("sudafrica-points")

let sudafricaStats = {
    "index": 2,
    "country": "Sudáfrica",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

//STATS COREA DEL SUR

const coreaPlayedGames = document.getElementById("corea-playedGames")
const coreaWonGames = document.getElementById("corea-wonGames")
const coreaDrawGames = document.getElementById("corea-drawGames")
const coreaLostGames = document.getElementById("corea-lostGames")
const coreaGoalDifference = document.getElementById("corea-goalDifference")
const coreaPoints = document.getElementById("corea-points")

let coreaStats = {
    "index": 3,
    "country": "Corea del sur",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

//STATS CHEQUIA

const chequiaPlayedGames = document.getElementById("chequia-playedGames")
const chequiaWonGames = document.getElementById("chequia-wonGames")
const chequiaDrawGames = document.getElementById("chequia-drawGames")
const chequiaLostGames = document.getElementById("chequia-lostGames")
const chequiaGoalDifference = document.getElementById("chequia-goalDifference")
const chequiaPoints = document.getElementById("chequia-points")

let chequiaStats = {
    "index": 4,
    "country": "Chequia",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

//ORDENAR EQUIPOS




//MARCADORES

let resultlMatch1 = {
    "mexico": 0,
    "sudafrica": 0
}

let resultlMatch2 = {
    "corea": 0,
    "chequia": 0
}

let resultlMatch3 = {
    "mexico": 0,
    "corea": 0
}

let resultlMatch4 = {
    "chequia": 0,
    "sudafrica": 0
}

let resultlMatch5 = {
    "mexico": 0,
    "chequia": 0
}

let resultlMatch6 = {
    "corea": 0,
    "sudafrica": 0
}

let result = null

//PRIMER PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match1() {
    scoreTeam1.addEventListener("change", function (e) {
        resultlMatch1.mexico = e.target.value
        //console.log(scoreTeam1Value)
        checkWinner1();

    })

    scoreTeam2.addEventListener("change", function (e) {
        resultlMatch1.sudafrica = e.target.value
        checkWinner1();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner1() {
    if (resultlMatch1.mexico === 0 || resultlMatch1.sudafrica === 0) return;
    if (resultlMatch1.mexico > resultlMatch1.sudafrica) {
        result = resultlMatch1.mexico - resultlMatch1.sudafrica

        //console.log(`Gano mexico ${resultlMatch1.mexico} - ${scoreTeamresultlMatch1.sudafrica2Value} y quedo con diferencia de gol de + ${result}`)

        //actualizando stats de mexico
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pg = mexicoStats.pg + 1
        mexicoStats.dg = result
        mexicoStats.pts = mexicoStats.pts + 3

        //actualizando stats de sudafrica
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pp = sudafricaStats.pp + 1
        sudafricaStats.dg = -result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        mexicoPlayedGames.textContent = mexicoStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos ganados de mexico
        mexicoWonGames.textContent = mexicoStats.pg
        //actualiza los partidos perdidos de sudafrica
        sudafricaLostGames.textContent = sudafricaStats.pp
        //actualiza la diferencia de gol de ambos
        mexicoGoalDifference.textContent = mexicoStats.dg
        sudafricaGoalDifference.textContent = sudafricaStats.dg
        //actualiza los puntos de ambo
        mexicoPoints.textContent = mexicoStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts


    } else if (resultlMatch1.mexico < resultlMatch1.sudafrica) {
        result = resultlMatch1.sudafrica - resultlMatch1.mexico
        //console.log(`Gano Sudafrica ${resultlMatch1.sudafrica} - ${resultlMatch1.mexico} y quedo con diferencia de gol de + ${result}`)

        //actualizando stats de mexico
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pp = mexicoStats.pp + 1
        mexicoStats.dg = -result

        //actualizando stats de sudafrica
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pg = sudafricaStats.pg + 1
        sudafricaStats.dg = result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        mexicoPlayedGames.textContent = mexicoStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos ganados de sudafrica
        sudafricaWonGames.textContent = sudafricaStats.pg
        //actualiza los partidos perdidos de mexico
        mexicoLostGames.textContent = mexicoStats.pp
        //actualiza la diferencia de gol de ambos
        mexicoGoalDifference.textContent = mexicoStats.dg
        sudafricaGoalDifference.textContent = sudafricaStats.dg
        //actualiza los puntos de ambo
        mexicoPoints.textContent = mexicoStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

    } else {


        //actualizando stats de mexico
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pe = mexicoStats.pe + 1
        mexicoStats.pts = mexicoStats.pts + 1

        //actualizando stats de sudafrica
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pe = sudafricaStats.pe + 1
        sudafricaStats.pts = sudafricaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        mexicoPlayedGames.textContent = mexicoStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos empatados de mexico
        mexicoDrawGames.textContent = mexicoStats.pe
        sudafricaDrawGames.textContent = sudafricaStats.pe
        //actualiza los puntos de ambos
        mexicoPoints.textContent = mexicoStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

        // resultlMatch1 = {
        //     "mexico": resultlMatch1.mexico,
        //     "sudafrica": resultlMatch1.sudafrica
        // }


        console.log("Empate");
    }
}

match1();

//accedemos a la card con el marcador
const matchOne = document.getElementById("match1")

//inyectamos el resultado actualizado
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let gameOneSaved = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Mexico</div>
                        <p class="rival2score">${resultlMatch1.mexico}<p/>
                        <p class="rival2score">${resultlMatch1.sudafrica}<p/>
                        <div class="rival2team">Sudafrica</div>
                                            <div class="undo-container">
                        <button class="undoButton-show" id="undoBtn">Deshacer</button>
                    </div>
                    </div>`

    matchOne.innerHTML = gameOneSaved;

    saveToLocal();

});

//LOCAL STORAGE//

function saveToLocal() {
    localStorage.setItem("resultlMatch1", JSON.stringify(resultlMatch1));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("mexicoSavedStats", JSON.stringify(mexicoStats));
    localStorage.setItem("sudafricaSavedStats", JSON.stringify(sudafricaStats));
}

function loadFromLocal() {
    //carga los datos guardados previamente 
    //scoreTeam1Value = localStorage.getItem("ScoreTeam1Value");
    //scoreTeam2Value = localStorage.getItem("ScoreTeam2Value");
    resultlMatch1 = JSON.parse(localStorage.getItem("resultlMatch1"));
    mexicoStats = JSON.parse(localStorage.getItem("mexicoSavedStats"));
    sudafricaStats = JSON.parse(localStorage.getItem("sudafricaSavedStats"));

    //recarga la UI con los datos cargados
    matchOne.innerHTML = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Mexico</div>
                        <p class="rival2score">${resultlMatch1.mexico}<p/>
                        <p class="rival2score">${resultlMatch1.sudafrica}<p/>
                        <div class="rival2team">Sudafrica</div>
                        <div class="undo-container">
                            <button class="undoButton-show" id="undoBtn">Deshacer</button>
                    </div>
                    </div>`

    mexicoPlayedGames.textContent = mexicoStats.pj
    mexicoWonGames.textContent = mexicoStats.pg
    mexicoDrawGames.textContent = mexicoStats.pe
    mexicoLostGames.textContent = mexicoStats.pp
    mexicoGoalDifference.textContent = mexicoStats.dg
    mexicoPoints.textContent = mexicoStats.pts

    sudafricaPlayedGames.textContent = sudafricaStats.pj
    sudafricaWonGames.textContent = sudafricaStats.pg
    sudafricaDrawGames.textContent = sudafricaStats.pe
    sudafricaLostGames.textContent = sudafricaStats.pp
    sudafricaGoalDifference.textContent = sudafricaStats.dg
    sudafricaPoints.textContent = sudafricaStats.pts
}

//PARTIDO 2//

//funcion para caputrar el valor de los imputs--resultado final del partido//
function match2() {
    scoreTeam3.addEventListener("change", function (e) {
        resultlMatch2.corea = e.target.value
        checkWinner2();

    })

    scoreTeam4.addEventListener("change", function (e) {
        resultlMatch2.chequia = e.target.value
        checkWinner2();
    })

}

//funcion para validar quien gano y actualizar la UI
function checkWinner2() {
    if (resultlMatch2.corea === 0 || resultlMatch2.chequia === 0) return;
    if (resultlMatch2.corea > resultlMatch2.chequia) {
        result = resultlMatch2.corea - resultlMatch2.chequia


        //actualizando stats de corea
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pg = coreaStats.pg + 1
        coreaStats.dg = result
        coreaStats.pts = coreaStats.pts + 3

        //actualizando stats de chequia
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pp = chequiaStats.pp + 1
        chequiaStats.dg = -result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        coreaPlayedGames.textContent = coreaStats.pj
        chequiaPlayedGames.textContent = chequiaStats.pj
        //actualiza los partidos ganados de corea
        coreaWonGames.textContent = coreaStats.pg
        //actualiza los partidos perdidos de chequia
        chequiaLostGames.textContent = chequiaStats.pp
        //actualiza la diferencia de gol de ambos
        coreaGoalDifference.textContent = coreaStats.dg
        chequiaGoalDifference.textContent = chequiaStats.dg
        //actualiza los puntos de ambos
        coreaPoints.textContent = coreaStats.pts
        chequiaPoints.textContent = chequiaStats.pts


    } else if (resultlMatch2.corea < resultlMatch2.chequia) {
        result = resultlMatch2.chequia - resultlMatch3.corea
        //console.log(`Gano Sudafrica ${resultlMatch1.sudafrica} - ${resultlMatch1.mexico} y quedo con diferencia de gol de + ${result}`)

        //actualizando stats de corea
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pp = coreaStats.pp + 1
        coreaStats.dg = - result

        //actualizando stats de chequia
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pg = chequiaStats.pg + 1
        chequiaStats.dg = result
        chequiaStats.pts = chequiaStats.pts + 3

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        coreaPlayedGames.textContent = coreaStats.pj
        //actualiza los partidos ganados de chequia
        chequiaWonGames.textContent = chequiaStats.pg
        //actualiza los partidos perdidos de corea
        coreaLostGames.textContent = coreaStats.pp
        //actualiza la diferencia de gol de ambos
        chequiaGoalDifference.textContent = chequiaStats.dg
        coreaGoalDifference.textContent = coreaStats.dg
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        coreaPoints.textContent = coreaStats.pts

    } else {


        //actualizando stats de chequia
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pe = chequiaStats.pe + 1
        chequiaStats.pts = chequiaStats.pts + 1

        //actualizando stats de corea
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pe = coreaStats.pe + 1
        coreaStats.pts = coreaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        coreaPlayedGames.textContent = coreaStats.pj
        //actualiza los partidos empatados de mexico
        chequiaDrawGames.textContent = chequiaStats.pe
        coreaDrawGames.textContent = coreaStats.pe
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        coreaPoints.textContent = coreaStats.pts

    }
}

match2();

//accedemos a la card con el marcador
const matchTwo = document.getElementById("match2")

//inyectamos el resultado actualizado
saveBtn2.addEventListener("click", (e) => {
    e.preventDefault();

    let gameTwoSaved = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Corea del sur</div>
                        <p class="rival2score">${resultlMatch2.corea}<p/>
                        <p class="rival2score">${resultlMatch2.chequia}<p/>
                        <div class="rival2team">Chequia</div>
                    </div>`

    matchTwo.innerHTML = gameTwoSaved;

    saveToLocal2();

});

function saveToLocal2() {
    localStorage.setItem("resultlMatch2", JSON.stringify(resultlMatch2));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("coreaSavedStats", JSON.stringify(coreaStats));
    localStorage.setItem("chequiaSavedStats", JSON.stringify(chequiaStats));
}

function loadFromLocal2() {
    //carga los datos guardados previamente 
    resultlMatch2 = JSON.parse(localStorage.getItem("resultlMatch2"));
    coreaStats = JSON.parse(localStorage.getItem("coreaSavedStats"));
    chequiaStats = JSON.parse(localStorage.getItem("chequiaSavedStats"));

    //recarga la UI con los datos cargados
    matchTwo.innerHTML = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Corea del sur</div>
                        <p class="rival2score">${resultlMatch2.corea}<p/>
                        <p class="rival2score">${resultlMatch2.chequia}<p/>
                        <div class="rival2team">Chequia</div>
                    </div>`

    chequiaPlayedGames.textContent = chequiaStats.pj
    chequiaWonGames.textContent = chequiaStats.pg
    chequiaDrawGames.textContent = chequiaStats.pe
    chequiaLostGames.textContent = chequiaStats.pp
    chequiaGoalDifference.textContent = chequiaStats.dg
    chequiaPoints.textContent = chequiaStats.pts

    coreaPlayedGames.textContent = coreaStats.pj
    coreaWonGames.textContent = coreaStats.pg
    coreaDrawGames.textContent = coreaStats.pe
    coreaLostGames.textContent = coreaStats.pp
    coreaGoalDifference.textContent = coreaStats.dg
    coreaPoints.textContent = coreaStats.pts
}


//PARTIDO 3//

//funcion para caputrar el valor de los imputs--resultado final del partido//
function match3() {
    scoreTeam5.addEventListener("change", function (e) {
        resultlMatch3.mexico = e.target.value
        checkWinner3();

    })

    scoreTeam6.addEventListener("change", function (e) {
        resultlMatch3.corea = e.target.value
        checkWinner3();
    })

}

//funcion para validar quien gano y actualizar la UI
function checkWinner3() {
    if (resultlMatch3.mexico === 0 || resultlMatch3.corea === 0) return;
    if (resultlMatch3.mexico > resultlMatch3.corea) {
        result = resultlMatch3.mexico - resultlMatch3.corea


        //actualizando stats de mexico
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pg = mexicoStats.pg + 1
        mexicoStats.dg = mexicoStats.dg + result
        mexicoStats.pts = mexicoStats.pts + 3

        //actualizando stats de corea
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pp = coreaStats.pp + 1
        coreaStats.dg = coreaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        mexicoPlayedGames.textContent = mexicoStats.pj
        coreaPlayedGames.textContent = coreaStats.pj
        //actualiza los partidos ganados de mexico
        mexicoWonGames.textContent = mexicoStats.pg
        //actualiza los partidos perdidos de corea
        coreaLostGames.textContent = coreaStats.pp
        //actualiza la diferencia de gol de ambos
        mexicoGoalDifference.textContent = mexicoStats.dg
        coreaGoalDifference.textContent = coreaStats.dg
        //actualiza los puntos de ambos
        mexicoPoints.textContent = mexicoStats.pts
        coreaPoints.textContent = coreaStats.pts


    } else if (resultlMatch3.mexico < resultlMatch3.corea) {
        result = resultlMatch3.corea - resultlMatch3.mexico
        //console.log(`Gano Sudafrica ${resultlMatch1.sudafrica} - ${resultlMatch1.mexico} y quedo con diferencia de gol de + ${result}`)

        //actualizando stats de mexico
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pp = mexicoStats.pp + 1
        mexicoStats.dg = mexicoStats.dg - result

        //actualizando stats de corea
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pg = coreaStats.pg + 1
        coreaStats.dg = coreaStats.dg + result
        coreaStats.pts = coreaStats.pts + 3

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        mexicoPlayedGames.textContent = mexicoStats.pj
        coreaPlayedGames.textContent = coreaStats.pj
        //actualiza los partidos ganados de corea
        coreaWonGames.textContent = coreaStats.pg
        //actualiza los partidos perdidos de mexico
        mexicoLostGames.textContent = mexicoStats.pp
        //actualiza la diferencia de gol de ambos
        mexicoGoalDifference.textContent = mexicoStats.dg
        coreaGoalDifference.textContent = coreaStats.dg
        //actualiza los puntos de ambo
        mexicoPoints.textContent = mexicoStats.pts
        coreaPoints.textContent = coreaStats.pts

    } else {


        //actualizando stats de mexico
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pe = mexicoStats.pe + 1
        mexicoStats.pts = mexicoStats.pts + 1

        //actualizando stats de sudafrica
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pe = coreaStats.pe + 1
        coreaStats.pts = coreaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        mexicoPlayedGames.textContent = mexicoStats.pj
        coreaPlayedGames.textContent = coreaStats.pj
        //actualiza los partidos empatados de mexico
        mexicoDrawGames.textContent = mexicoStats.pe
        coreaDrawGames.textContent = coreaStats.pe
        //actualiza los puntos de ambos
        mexicoPoints.textContent = mexicoStats.pts
        coreaPoints.textContent = coreaStats.pts

    }
}

match3();

//accedemos a la card con el marcador
const matchThree = document.getElementById("match3")

//inyectamos el resultado actualizado
saveBtn3.addEventListener("click", (e) => {
    e.preventDefault();

    let gameThreeSaved = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Mexico</div>
                        <p class="rival2score">${resultlMatch3.mexico}<p/>
                        <p class="rival2score">${resultlMatch3.corea}<p/>
                        <div class="rival2team">Corea del sur</div>
                    </div>`

    matchThree.innerHTML = gameThreeSaved;

    saveToLocal3();

});



function saveToLocal3() {
    localStorage.setItem("resultlMatch3", JSON.stringify(resultlMatch3));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("mexicoSavedStats", JSON.stringify(mexicoStats));
    localStorage.setItem("coreaSavedStats", JSON.stringify(coreaStats));
}

function loadFromLocal3() {
    //carga los datos guardados previamente 
    resultlMatch3 = JSON.parse(localStorage.getItem("resultlMatch3"));
    mexicoStats = JSON.parse(localStorage.getItem("mexicoSavedStats"));
    coreaStats = JSON.parse(localStorage.getItem("coreaSavedStats"));

    //recarga la UI con los datos cargados
    matchThree.innerHTML = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Mexico</div>
                        <p class="rival2score">${resultlMatch3.mexico}<p/>
                        <p class="rival2score">${resultlMatch3.corea}<p/>
                        <div class="rival2team">Corea del sur</div>
                    </div>`

    mexicoPlayedGames.textContent = mexicoStats.pj
    mexicoWonGames.textContent = mexicoStats.pg
    mexicoDrawGames.textContent = mexicoStats.pe
    mexicoLostGames.textContent = mexicoStats.pp
    mexicoGoalDifference.textContent = mexicoStats.dg
    mexicoPoints.textContent = mexicoStats.pts

    coreaPlayedGames.textContent = coreaStats.pj
    coreaWonGames.textContent = coreaStats.pg
    coreaDrawGames.textContent = coreaStats.pe
    coreaLostGames.textContent = coreaStats.pp
    coreaGoalDifference.textContent = coreaStats.dg
    coreaPoints.textContent = coreaStats.pts
}

//PARTIDO 4//

//funcion para caputrar el valor de los imputs--resultado final del partido//
function match4() {
    scoreTeam7.addEventListener("change", function (e) {
        resultlMatch4.chequia = e.target.value
        checkWinner4();

    })

    scoreTeam8.addEventListener("change", function (e) {
        resultlMatch4.sudafrica = e.target.value
        checkWinner4();
    })

};

//funcion para validar quien gano y actualizar la UI
function checkWinner4() {
    if (resultlMatch4.chequia === 0 || resultlMatch4.sudafrica === 0) return;
    if (resultlMatch4.chequia > resultlMatch4.sudafrica) {
        result = resultlMatch4.chequia - resultlMatch4.sudafrica
        //actualizando stats del ganador
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pg = chequiaStats.pg + 1
        chequiaStats.dg = chequiaStats.dg + result
        chequiaStats.pts = chequiaStats.pts + 3
        //actualizando stats del perdedor
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pp = sudafricaStats.pp + 1
        sudafricaStats.dg = sudafricaStats.dg - result
        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS
        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos ganados de mexico
        chequiaWonGames.textContent = chequiaStats.pg
        //actualiza los partidos perdidos de corea
        sudafricaLostGames.textContent = sudafricaStats.pp
        //actualiza la diferencia de gol de ambos
        chequiaGoalDifference.textContent = chequiaStats.dg
        sudafricaGoalDifference.textContent = sudafricaStats.dg
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

    } else if (resultlMatch4.chequia < resultlMatch4.sudafrica) {
        result = resultlMatch4.sudafrica - resultlMatch3.chequia
        //actualizando stats del ganador
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pg = sudafricaStats.pg + 1
        sudafricaStats.dg = sudafricaStats.dg + result
        sudafricaStats.pts = sudafricaStats.pts + 3
        //actualizando stats del perdedor
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pp = chequiaStats.pp + 1
        chequiaStats.dg = chequiaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos ganados del ganador
        sudafricaWonGames.textContent = sudafricaStats.pg
        //actualiza los partidos perdidos del perdedor
        chequiaLostGames.textContent = chequiaStats.pp
        //actualiza la diferencia de gol de ambos
        chequiaGoalDifference.textContent = chequiaStats.dg
        sudafricaGoalDifference.textContent = sudafricaStats.dg
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

    } else {
        //actualizando stats de ambos
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pe = chequiaStats.pe + 1
        chequiaStats.pts = chequiaStats.pts + 1

        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pe = sudafricaStats.pe + 1
        sudafricaStats.pts = sudafricaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos empatados de mexico
        chequiaDrawGames.textContent = chequiaStats.pe
        sudafricaDrawGames.textContent = sudafricaStats.pe
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

    }
}

match4();

//accedemos a la card con el marcador
const matchFour = document.getElementById("match4");

//inyectamos el resultado actualizado
saveBtn4.addEventListener("click", (e) => {
    e.preventDefault();

    let gameFourSaved = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Chequia</div>
                        <p class="rival2score">${resultlMatch4.chequia}<p/>
                        <p class="rival2score">${resultlMatch4.sudafrica}<p/>
                        <div class="rival2team">Sudafrica</div>
                    </div>`

    matchFour.innerHTML = gameFourSaved;

    saveToLocal4();

});

//funcion para guardar los datos y actualizarlos
function saveToLocal4() {
    localStorage.setItem("resultlMatch4", JSON.stringify(resultlMatch4));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("chequiaSavedStats", JSON.stringify(chequiaStats));
    localStorage.setItem("sudafricaSavedStats", JSON.stringify(sudafricaStats));
};

//funcion para cargar los datos y actualizar la UI
function loadFromLocal4() {
    //carga los datos guardados previamente 
    resultlMatch4 = JSON.parse(localStorage.getItem("resultlMatch4"));
    chequiaStats = JSON.parse(localStorage.getItem("chequiaSavedStats"));
    sudafricaStats = JSON.parse(localStorage.getItem("sudafricaSavedStats"));

    //recarga la UI con los datos cargados
    matchFour.innerHTML = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Chequia</div>
                        <p class="rival2score">${resultlMatch4.chequia}<p/>
                        <p class="rival2score">${resultlMatch4.sudafrica}<p/>
                        <div class="rival2team">Sudafrica</div>
                    </div>`

    chequiaPlayedGames.textContent = chequiaStats.pj
    chequiaWonGames.textContent = chequiaStats.pg
    chequiaDrawGames.textContent = chequiaStats.pe
    chequiaLostGames.textContent = chequiaStats.pp
    chequiaGoalDifference.textContent = chequiaStats.dg
    chequiaPoints.textContent = chequiaStats.pts

    sudafricaPlayedGames.textContent = sudafricaStats.pj
    sudafricaWonGames.textContent = sudafricaStats.pg
    sudafricaDrawGames.textContent = sudafricaStats.pe
    sudafricaLostGames.textContent = sudafricaStats.pp
    sudafricaGoalDifference.textContent = sudafricaStats.dg
    sudafricaPoints.textContent = sudafricaStats.pts
}

//PARTIDO 5//

//funcion para caputrar el valor de los imputs--resultado final del partido//
function match5() {
    scoreTeam9.addEventListener("change", function (e) {
        resultlMatch5.mexico = e.target.value
        checkWinner5();

    })

    scoreTeam10.addEventListener("change", function (e) {
        resultlMatch5.chequia = e.target.value
        checkWinner5();
    })

};

//funcion para validar quien gano y actualizar la UI
function checkWinner5() {
    if (resultlMatch5.mexico === 0 || resultlMatch5.chequia === 0) return;
    if (resultlMatch5.mexico > resultlMatch5.chequia) {
        result = resultlMatch5.mexico - resultlMatch5.chequia
        //actualizando stats del ganador
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pg = mexicoStats.pg + 1
        mexicoStats.dg = mexicoStats.dg + result
        mexicoStats.pts = mexicoStats.pts + 3
        //actualizando stats del perdedor
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pp = chequiaStats.pp + 1
        chequiaStats.dg = chequiaStats.dg - result
        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS
        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        mexicoPlayedGames.textContent = mexicoStats.pj
        //actualiza los partidos ganados de mexico
        mexicoWonGames.textContent = mexicoStats.pg
        //actualiza los partidos perdidos de chequia
        chequiaLostGames.textContent = chequiaStats.pp
        //actualiza la diferencia de gol de ambos
        chequiaGoalDifference.textContent = chequiaStats.dg
        mexicoGoalDifference.textContent = mexicoStats.dg
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        mexicoPoints.textContent = mexicoStats.pts

    } else if (resultlMatch5.mexico < resultlMatch5.chequia) {
        result = resultlMatch5.chequia - resultlMatch5.mexico
        //actualizando stats del ganador
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pg = chequiaStats.pg + 1
        chequiaStats.dg = chequiaStats.dg + result
        chequiaStats.pts = chequiaStats.pts + 3
        //actualizando stats del perdedor
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pp = mexicoStats.pp + 1
        mexicoStats.dg = mexicoStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        mexicoPlayedGames.textContent = mexicoStats.pj
        //actualiza los partidos ganados del ganador
        chequiaWonGames.textContent = chequiaStats.pg
        //actualiza los partidos perdidos del perdedor
        mexicoLostGames.textContent = mexicoStats.pp
        //actualiza la diferencia de gol de ambos
        chequiaGoalDifference.textContent = chequiaStats.dg
        mexicoGoalDifference.textContent = mexicoStats.dg
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        mexicoPoints.textContent = mexicoStats.pts

    } else {
        //actualizando stats de ambos
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pe = chequiaStats.pe + 1
        chequiaStats.pts = chequiaStats.pts + 1

        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pe = mexicoStats.pe + 1
        mexicoStats.pts = mexicoStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        chequiaPlayedGames.textContent = chequiaStats.pj
        mexicoPlayedGames.textContent = mexicoStats.pj
        //actualiza los partidos empatados de mexico
        chequiaDrawGames.textContent = chequiaStats.pe
        mexicoDrawGames.textContent = mexicoStats.pe
        //actualiza los puntos de ambos
        chequiaPoints.textContent = chequiaStats.pts
        mexicoPoints.textContent = mexicoStats.pts

    }
}

match5();

//accedemos a la card con el marcador
const matchFive = document.getElementById("match5");

//inyectamos el resultado actualizado
saveBtn5.addEventListener("click", (e) => {
    e.preventDefault();

    let gameFiveSaved = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Mexico</div>
                        <p class="rival2score">${resultlMatch5.mexico}<p/>
                        <p class="rival2score">${resultlMatch5.chequia}<p/>
                        <div class="rival2team">Chequia</div>
                    </div>`

    matchFive.innerHTML = gameFiveSaved;

    saveToLocal5();

});

//funcion para guardar los datos y actualizarlos
function saveToLocal5() {
    localStorage.setItem("resultlMatch5", JSON.stringify(resultlMatch5));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("chequiaSavedStats", JSON.stringify(chequiaStats));
    localStorage.setItem("mexicoSavedStats", JSON.stringify(mexicoStats));
};

//funcion para cargar los datos y actualizar la UI
function loadFromLocal5() {
    //carga los datos guardados previamente 
    resultlMatch5 = JSON.parse(localStorage.getItem("resultlMatch5"));
    chequiaStats = JSON.parse(localStorage.getItem("chequiaSavedStats"));
    mexicoStats = JSON.parse(localStorage.getItem("mexicoSavedStats"));

    //recarga la UI con los datos cargados
    matchFive.innerHTML = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Mexico</div>
                        <p class="rival2score">${resultlMatch5.mexico}<p/>
                        <p class="rival2score">${resultlMatch5.chequia}<p/>
                        <div class="rival2team">Chequia</div>
                    </div>`

    chequiaPlayedGames.textContent = chequiaStats.pj
    chequiaWonGames.textContent = chequiaStats.pg
    chequiaDrawGames.textContent = chequiaStats.pe
    chequiaLostGames.textContent = chequiaStats.pp
    chequiaGoalDifference.textContent = chequiaStats.dg
    chequiaPoints.textContent = chequiaStats.pts

    mexicoPlayedGames.textContent = mexicoStats.pj
    mexicoWonGames.textContent = mexicoStats.pg
    mexicoDrawGames.textContent = mexicoStats.pe
    mexicoLostGames.textContent = mexicoStats.pp
    mexicoGoalDifference.textContent = mexicoStats.dg
    mexicoPoints.textContent = mexicoStats.pts
}


//PARTIDO 6//

//funcion para caputrar el valor de los imputs--resultado final del partido//
function match6() {
    scoreTeam11.addEventListener("change", function (e) {
        resultlMatch6.corea = e.target.value
        checkWinner6();

    })

    scoreTeam12.addEventListener("change", function (e) {
        resultlMatch6.sudafrica = e.target.value
        checkWinner6();
    })

};

//funcion para validar quien gano y actualizar la UI
function checkWinner6() {
    if (resultlMatch6.corea === 0 || resultlMatch6.sudafrica === 0) return;
    if (resultlMatch6.corea > resultlMatch6.sudafrica) {
        result = resultlMatch6.corea - resultlMatch6.sudafrica
        //actualizando stats del ganador
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pg = coreaStats.pg + 1
        coreaStats.dg = coreaStats.dg + result
        coreaStats.pts = coreaStats.pts + 3
        //actualizando stats del perdedor
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pp = sudafricaStats.pp + 1
        sudafricaStats.dg = sudafricaStats.dg - result
        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS
        //actualiza partidos jugados de ambos
        coreaPlayedGames.textContent = coreaStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos ganados de mexico
        coreaWonGames.textContent = coreaStats.pg
        //actualiza los partidos perdidos de chequia
        sudafricaLostGames.textContent = sudafricaStats.pp
        //actualiza la diferencia de gol de ambos
        coreaGoalDifference.textContent = coreaStats.dg
        sudafricaGoalDifference.textContent = sudafricaStats.dg
        //actualiza los puntos de ambos
        coreaPoints.textContent = coreaStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

    } else if (resultlMatch6.corea < resultlMatch6.sudafrica) {
        result = resultlMatch6.sudafrica - resultlMatch5.corea
        //actualizando stats del ganador
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pg = sudafricaStats.pg + 1
        sudafricaStats.dg = sudafricaStats.dg + result
        sudafricaStats.pts = sudafricaStats.pts + 3
        //actualizando stats del perdedor
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pp = coreaStats.pp + 1
        coreaStats.dg = coreaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        coreaPlayedGames.textContent = coreaStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos ganados del ganador
        sudafricaWonGames.textContent = sudafricaStats.pg
        //actualiza los partidos perdidos del perdedor
        coreaLostGames.textContent = coreaStats.pp
        //actualiza la diferencia de gol de ambos
        coreaGoalDifference.textContent = coreaStats.dg
        sudafricaGoalDifference.textContent = sudafricaStats.dg
        //actualiza los puntos de ambos
        coreaPoints.textContent = coreaStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

    } else {
        //actualizando stats de ambos
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pe = coreaStats.pe + 1
        coreaStats.pts = coreaStats.pts + 1

        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pe = sudafricaStats.pe + 1
        sudafricaStats.pts = sudafricaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        coreaPlayedGames.textContent = coreaStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos empatados de mexico
        coreaDrawGames.textContent = coreaStats.pe
        sudafricaDrawGames.textContent = sudafricaStats.pe
        //actualiza los puntos de ambos
        coreaPoints.textContent = coreaStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts

    }
}

match6();

//accedemos a la card con el marcador
const matchSix = document.getElementById("match6");

//inyectamos el resultado actualizado
saveBtn6.addEventListener("click", (e) => {
    e.preventDefault();

    let gameSixSaved = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Corea del sur</div>
                        <p class="rival2score">${resultlMatch6.corea}<p/>
                        <p class="rival2score">${resultlMatch6.sudafrica}<p/>
                        <div class="rival2team">Sudafrica</div>
                    </div>`

    matchSix.innerHTML = gameSixSaved;

    saveToLocal6();

});

//funcion para guardar los datos y actualizarlos
function saveToLocal6() {
    localStorage.setItem("resultlMatch6", JSON.stringify(resultlMatch6));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("coreaSavedStats", JSON.stringify(coreaStats));
    localStorage.setItem("sudafricaSavedStats", JSON.stringify(sudafricaStats));
};

//funcion para cargar los datos y actualizar la UI
function loadFromLocal6() {
    //carga los datos guardados previamente 
    resultlMatch6 = JSON.parse(localStorage.getItem("resultlMatch6"));
    coreaStats = JSON.parse(localStorage.getItem("coreaSavedStats"));
    sudafricaStats = JSON.parse(localStorage.getItem("sudafricaSavedStats"));

    //recarga la UI con los datos cargados
    matchSix.innerHTML = `  <div class="match-date">11/06/2026</div>
                    <div class="match-time">16:00</div>
                    <div class="match-rivals">
                        <div class="rival1team">Corea del sur</div>
                        <p class="rival2score">${resultlMatch6.corea}<p/>
                        <p class="rival2score">${resultlMatch6.sudafrica}<p/>
                        <div class="rival2team">Sudafrica</div>
                    </div>`

    coreaPlayedGames.textContent = coreaStats.pj
    coreaWonGames.textContent = coreaStats.pg
    coreaDrawGames.textContent = coreaStats.pe
    coreaLostGames.textContent = coreaStats.pp
    coreaGoalDifference.textContent = coreaStats.dg
    coreaPoints.textContent = coreaStats.pts

    sudafricaPlayedGames.textContent = sudafricaStats.pj
    sudafricaWonGames.textContent = sudafricaStats.pg
    sudafricaDrawGames.textContent = sudafricaStats.pe
    sudafricaLostGames.textContent = sudafricaStats.pp
    sudafricaGoalDifference.textContent = sudafricaStats.dg
    sudafricaPoints.textContent = sudafricaStats.pts
}




