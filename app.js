
//CARDS DE LOS PARTIDOS//

//--GRUPO A --//

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
//CARD PARTIDO 6 COREA VS SUDAFRICA//
const scoreTeam11 = document.getElementById("scoreteam11");
const scoreTeam12 = document.getElementById("scoreteam12");
const saveBtn6 = document.getElementById("btn6");
//ACTUALIZACION DE PUESTOS ENTRE LOS EQUIPOS--GRUPO A //
const firstTeam = document.getElementById('1');
const secondTeam = document.getElementById('2');
const thirdTeam = document.getElementById('3');
const fourthTeam = document.getElementById('4');

//--GRUPO B --//

//CARD PARTIDO 7 CANADA VS BOSNIA//
const scoreTeam13 = document.getElementById("scoreteam13");
const scoreTeam14 = document.getElementById("scoreteam14");
const saveBtn7 = document.getElementById("btn7")
//CARD PARTIDO 8 QATAR VS SUIZA//
const scoreTeam15 = document.getElementById("scoreteam15");
const scoreTeam16 = document.getElementById("scoreteam16");
const saveBtn8 = document.getElementById("btn8")
//CARD PARTIDO 9 SUZIA VS BOSNIA//
const scoreTeam17 = document.getElementById("scoreteam17");
const scoreTeam18 = document.getElementById("scoreteam18");
const saveBtn9 = document.getElementById("btn9")
//CARD PARTIDO 10 CANADA VS QATAR//
const scoreTeam19 = document.getElementById("scoreteam19");
const scoreTeam20 = document.getElementById("scoreteam20");
const saveBtn10 = document.getElementById("btn10")
//CARD PARTIDO 11 SUIZA VS CANADA//
const scoreTeam21 = document.getElementById("scoreteam21");
const scoreTeam22 = document.getElementById("scoreteam22");
const saveBtn11 = document.getElementById("btn11")
//CARD PARTIDO 12 BOSNIA VS QATAR//
const scoreTeam23 = document.getElementById("scoreteam23");
const scoreTeam24 = document.getElementById("scoreteam24");
const saveBtn12 = document.getElementById("btn12")
//ACTUALIZACION DE PUESTOS ENTRE LOS EQUIPOS--GRUPO B //
const fiveTeam = document.getElementById('5');
const sixTeam = document.getElementById('6');
const sevenTeam = document.getElementById('7');
const eightTeam = document.getElementById('8');

//--GRUPO C --//

//CARD PARTIDO 13//
const scoreTeam25 = document.getElementById("scoreteam25");
const scoreTeam26 = document.getElementById("scoreteam26");
const saveBtn13 = document.getElementById("btn13")
//CARD PARTIDO 14//
const scoreTeam27 = document.getElementById("scoreteam27");
const scoreTeam28 = document.getElementById("scoreteam28");
const saveBtn14 = document.getElementById("btn14")
//CARD PARTIDO 15//
const scoreTeam29 = document.getElementById("scoreteam29");
const scoreTeam30 = document.getElementById("scoreteam30");
const saveBtn15 = document.getElementById("btn15")
//CARD PARTIDO 16//
const scoreTeam31 = document.getElementById("scoreteam31");
const scoreTeam32 = document.getElementById("scoreteam32");
const saveBtn16 = document.getElementById("btn16")
//CARD PARTIDO 17//
const scoreTeam33 = document.getElementById("scoreteam33");
const scoreTeam34 = document.getElementById("scoreteam34");
const saveBtn17 = document.getElementById("btn17")
//CARD PARTIDO 18//
const scoreTeam35 = document.getElementById("scoreteam35");
const scoreTeam36 = document.getElementById("scoreteam36");
const saveBtn18 = document.getElementById("btn18")
//ACTUALIZACION DE PUESTOS ENTRE LOS EQUIPOS--GRUPO C //
const nineTeam = document.getElementById('9');
const tenTeam = document.getElementById('10');
const elevenTeam = document.getElementById('11');
const twelveTeam = document.getElementById('12');

//BOTON PARA BORRAR EL LOCAL STORAGE Y REINICIAR //
const deleteAll = document.getElementById("deleteBtn")

deleteAll.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear()

})

//CARGAR LOCAL STORAGE//
document.addEventListener("DOMContentLoaded", function () {

    //GRUPO A

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

    //GRUPO B

    const raw7 = localStorage.getItem('resultlMatch7');
    const raw8 = localStorage.getItem('resultlMatch8');
    const raw9 = localStorage.getItem('resultlMatch9');
    const raw10 = localStorage.getItem('resultlMatch10');
    const raw11 = localStorage.getItem('resultlMatch11');
    const raw12 = localStorage.getItem('resultlMatch12');

    if (raw7) {
        const match7 = JSON.parse(raw7);
        if (match7.canada !== 0 && match7.bosnia !== 0) {
            loadFromLocal7();
        }

    }

    if (raw8) {
        const match8 = JSON.parse(raw8);
        if (match8.qatar !== 0 && match8.suiza !== 0) {
            loadFromLocal8();
        }
    }

    if (raw9) {
        const match9 = JSON.parse(raw9);
        if (match9.suiza !== 0 && match9.bosnia !== 0) {
            loadFromLocal9();
        }
    }

    if (raw10) {
        const match10 = JSON.parse(raw10);
        if (match10.canada !== 0 && match10.qatar !== 0) {
            loadFromLocal10();
        }
    }

    if (raw11) {
        const match11 = JSON.parse(raw11);
        if (match11.suiza !== 0 && match11.canada !== 0) {
            loadFromLocal11();
        }
    }

    if (raw12) {
        const match12 = JSON.parse(raw12);
        if (match12.bosnia !== 0 && match12.qatar !== 0) {
            loadFromLocal12();
        }
    }

    const keys2 = [
        'canadaSavedStats',
        'bosniaSavedStats',
        'catarSavedStats',
        'suizaSavedStats'
    ];

    const items2 = keys2.map(k => {
        const raw2 = localStorage.getItem(k);
        return raw2 ? { key: k, obj: JSON.parse(raw2) } : null;
    }).filter(Boolean);

    // Ordenar por pts desc, luego dg desc
    items2.sort((a, b) => {
        if (b.obj.pts !== a.obj.pts) return b.obj.pts - a.obj.pts;
        return b.obj.dg - a.obj.dg;

    });


    // Actualizar index y guardar en su clave original
    items2.forEach((entry, i) => {
        entry.obj.index = i + 1;
        localStorage.setItem(entry.key, JSON.stringify(entry.obj));
    });


    if (canadaStats.index === 1) {
        fiveTeam.innerHTML = `                        <p class="country"> <span><img src="images/canada-bandera.png"
                                    alt=""></span>${canadaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${canadaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${canadaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${canadaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${canadaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${canadaStats.dg}</div>
                        <div class="points" id="mexico-points">${canadaStats.pts}</div>
                    </div>`
    }
    else if (bosniaStats.index === 1) {
        fiveTeam.innerHTML = `                        <p class="country"> <span><img src="images/bosnia-bandera.png"
                                    alt=""></span>${bosniaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${bosniaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${bosniaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${bosniaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${bosniaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${bosniaStats.dg}</div>
                        <div class="points" id="mexico-points">${bosniaStats.pts}</div>
                    </div>`

    }
    else if (catarStats.index === 1) {
        fiveTeam.innerHTML = `                        <p class="country"> <span><img src="images/catar-bandera.png"
                                    alt=""></span>${catarStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${catarStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${catarStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${catarStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${catarStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${catarStats.dg}</div>
                        <div class="points" id="mexico-points">${catarStats.pts}</div>
                    </div>`

    }
    else if (suizaStats.index === 1) {
        fiveTeam.innerHTML = `                        <p class="country"> <span><img src="images/suiza-bandera.png"
                                    alt=""></span>${suizaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${suizaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${suizaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${suizaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${suizaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${suizaStats.dg}</div>
                        <div class="points" id="mexico-points">${suizaStats.pts}</div>
                    </div>`

    }
    if (canadaStats.index === 2) {
        sixTeam.innerHTML = `                        <p class="country"> <span><img src="images/canada-bandera.png"
                                    alt=""></span>${canadaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${canadaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${canadaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${canadaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${canadaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${canadaStats.dg}</div>
                        <div class="points" id="mexico-points">${canadaStats.pts}</div>
                    </div>`
    }
    else if (bosniaStats.index === 2) {
        sixTeam.innerHTML = `                        <p class="country"> <span><img src="images/bosnia-bandera.png"
                                    alt=""></span>${bosniaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${bosniaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${bosniaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${bosniaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${bosniaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${bosniaStats.dg}</div>
                        <div class="points" id="mexico-points">${bosniaStats.pts}</div>
                    </div>`

    }
    else if (catarStats.index === 2) {
        sixTeam.innerHTML = `                        <p class="country"> <span><img src="images/catar-bandera.png"
                                    alt=""></span>${catarStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${catarStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${catarStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${catarStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${catarStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${catarStats.dg}</div>
                        <div class="points" id="mexico-points">${catarStats.pts}</div>
                    </div>`

    }
    else if (suizaStats.index === 2) {
        sixTeam.innerHTML = `                        <p class="country"> <span><img src="images/suiza-bandera.png"
                                    alt=""></span>${suizaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${suizaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${suizaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${suizaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${suizaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${suizaStats.dg}</div>
                        <div class="points" id="mexico-points">${suizaStats.pts}</div>
                    </div>`

    }
    if (canadaStats.index === 3) {
        sevenTeam.innerHTML = `                        <p class="country"> <span><img src="images/canada-bandera.png"
                                    alt=""></span>${canadaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${canadaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${canadaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${canadaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${canadaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${canadaStats.dg}</div>
                        <div class="points" id="mexico-points">${canadaStats.pts}</div>
                    </div>`
    }
    else if (bosniaStats.index === 3) {
        sevenTeam.innerHTML = `                        <p class="country"> <span><img src="images/bosnia-bandera.png"
                                    alt=""></span>${bosniaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${bosniaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${bosniaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${bosniaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${bosniaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${bosniaStats.dg}</div>
                        <div class="points" id="mexico-points">${bosniaStats.pts}</div>
                    </div>`

    }
    else if (catarStats.index === 3) {
        sevenTeam.innerHTML = `                        <p class="country"> <span><img src="images/catar-bandera.png"
                                    alt=""></span>${catarStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${catarStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${catarStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${catarStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${catarStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${catarStats.dg}</div>
                        <div class="points" id="mexico-points">${catarStats.pts}</div>
                    </div>`

    }
    else if (suizaStats.index === 3) {
        sevenTeam.innerHTML = `                        <p class="country"> <span><img src="images/suiza-bandera.png"
                                    alt=""></span>${suizaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${suizaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${suizaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${suizaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${suizaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${suizaStats.dg}</div>
                        <div class="points" id="mexico-points">${suizaStats.pts}</div>
                    </div>`

    }
    if (canadaStats.index === 4) {
        eightTeam.innerHTML = `                        <p class="country"> <span><img src="images/canada-bandera.png"
                                    alt=""></span>${canadaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${canadaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${canadaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${canadaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${canadaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${canadaStats.dg}</div>
                        <div class="points" id="mexico-points">${canadaStats.pts}</div>
                    </div>`
    }
    else if (bosniaStats.index === 4) {
        eightTeam.innerHTML = `                        <p class="country"> <span><img src="images/bosnia-bandera.png"
                                    alt=""></span>${bosniaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${bosniaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${bosniaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${bosniaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${bosniaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${bosniaStats.dg}</div>
                        <div class="points" id="mexico-points">${bosniaStats.pts}</div>
                    </div>`

    }
    else if (catarStats.index === 4) {
        eightTeam.innerHTML = `                        <p class="country"> <span><img src="images/catar-bandera.png"
                                    alt=""></span>${catarStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${catarStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${catarStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${catarStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${catarStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${catarStats.dg}</div>
                        <div class="points" id="mexico-points">${catarStats.pts}</div>
                    </div>`

    }
    else if (suizaStats.index === 4) {
        eightTeam.innerHTML = `                        <p class="country"> <span><img src="images/suiza-bandera.png"
                                    alt=""></span>${suizaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${suizaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${suizaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${suizaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${suizaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${suizaStats.dg}</div>
                        <div class="points" id="mexico-points">${suizaStats.pts}</div>
                    </div>`

    }

    //GRUPO C

    const raw13 = localStorage.getItem('resultlMatch13');
    const raw14 = localStorage.getItem('resultlMatch14');
    const raw15 = localStorage.getItem('resultlMatch15');
    const raw16 = localStorage.getItem('resultlMatch16');
    const raw17 = localStorage.getItem('resultlMatch17');
    const raw18 = localStorage.getItem('resultlMatch18');

    if (raw13) {
        const match13 = JSON.parse(raw13);
        if (match13.brasil !== 0 && match13.marruecos !== 0) {
            loadFromLocal13();
        }

    }

    if (raw14) {
        const match14 = JSON.parse(raw14);
        if (match14.haiti !== 0 && match14.escocia !== 0) {
            loadFromLocal14();
        }
    }

    if (raw15) {
        const match15 = JSON.parse(raw15);
        if (match15.escocia !== 0 && match15.marruecos !== 0) {
            loadFromLocal15();
        }
    }

    if (raw16) {
        const match16 = JSON.parse(raw16);
        if (match16.brasil !== 0 && match16.haiti !== 0) {
            loadFromLocal16();
        }
    }

    if (raw17) {
        const match17 = JSON.parse(raw17);
        if (match17.escocia !== 0 && match17.brasil !== 0) {
            loadFromLocal17();
        }
    }

    if (raw18) {
        const match18 = JSON.parse(raw18);
        if (match18.marruecos !== 0 && match18.haiti !== 0) {
            loadFromLocal18();
        }
    }

    const keys3 = [
        'brasilSavedStats',
        'marruecosSavedStats',
        'haitiSavedStats',
        'escociaSavedStats'
    ];

    const items3 = keys3.map(k => {
        const raw3 = localStorage.getItem(k);
        return raw3 ? { key: k, obj: JSON.parse(raw3) } : null;
    }).filter(Boolean);

    // Ordenar por pts desc, luego dg desc
    items3.sort((a, b) => {
        if (b.obj.pts !== a.obj.pts) return b.obj.pts - a.obj.pts;
        return b.obj.dg - a.obj.dg;

    });


    // Actualizar index y guardar en su clave original
    items3.forEach((entry, i) => {
        entry.obj.index = i + 1;
        localStorage.setItem(entry.key, JSON.stringify(entry.obj));
    });

    if (brasilStats.index === 1) {
        nineTeam.innerHTML = `<p class="country"> <span><img src="images/brasil-bandera.png" alt="brasil"></span>${brasilStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${brasilStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${brasilStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${brasilStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${brasilStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${brasilStats.dg}</div>
                        <div class="points" id="mexico-points">${brasilStats.pts}</div>
                    </div>`
    }
    else if (marruecosStats.index === 1) {
        nineTeam.innerHTML = `<p class="country"> <span><img src="images/marruecos-bandera.png" alt="marruecos"></span>${marruecosStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${marruecosStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${marruecosStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${marruecosStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${marruecosStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${marruecosStats.dg}</div>
                        <div class="points" id="mexico-points">${marruecosStats.pts}</div>
                    </div>`

    }
    else if (haitiStats.index === 1) {
        nineTeam.innerHTML = `<p class="country"> <span><img src="images/haiti-bandera.png" alt="haiti"></span>${haitiStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${haitiStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${haitiStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${haitiStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${haitiStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${haitiStats.dg}</div>
                        <div class="points" id="mexico-points">${haitiStats.pts}</div>
                    </div>`

    }
    else if (escociaStats.index === 1) {
        nineTeam.innerHTML = `<p class="country"> <span><img src="images/escocia-bandera.png" alt="escocia"></span>${escociaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${escociaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${escociaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${escociaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${escociaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${escociaStats.dg}</div>
                        <div class="points" id="mexico-points">${escociaStats.pts}</div>
                    </div>`

    }
    if (brasilStats.index === 2) {
        tenTeam.innerHTML = `<p class="country"> <span><img src="images/brasil-bandera.png" alt="brasil"></span>${brasilStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${brasilStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${brasilStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${brasilStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${brasilStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${brasilStats.dg}</div>
                        <div class="points" id="mexico-points">${brasilStats.pts}</div>
                    </div>`
    }
    else if (marruecosStats.index === 2) {
        tenTeam.innerHTML = `<p class="country"> <span><img src="images/marruecos-bandera.png" alt="marruecos"></span>${marruecosStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${marruecosStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${marruecosStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${marruecosStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${marruecosStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${marruecosStats.dg}</div>
                        <div class="points" id="mexico-points">${marruecosStats.pts}</div>
                    </div>`

    }
    else if (haitiStats.index === 2) {
        tenTeam.innerHTML = `<p class="country"> <span><img src="images/haiti-bandera.png" alt="haiti"></span>${haitiStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${haitiStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${haitiStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${haitiStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${haitiStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${haitiStats.dg}</div>
                        <div class="points" id="mexico-points">${haitiStats.pts}</div>
                    </div>`

    }
    else if (escociaStats.index === 2) {
        tenTeam.innerHTML = `<p class="country"> <span><img src="images/escocia-bandera.png" alt="escocia"></span>${escociaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${escociaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${escociaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${escociaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${escociaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${escociaStats.dg}</div>
                        <div class="points" id="mexico-points">${escociaStats.pts}</div>
                    </div>`

    }
    if (brasilStats.index === 3) {
        elevenTeam.innerHTML = `<p class="country"> <span><img src="images/brasil-bandera.png" alt=""brasil></span>${brasilStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${brasilStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${brasilStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${brasilStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${brasilStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${brasilStats.dg}</div>
                        <div class="points" id="mexico-points">${brasilStats.pts}</div>
                    </div>`
    }
    else if (marruecosStats.index === 3) {
        elevenTeam.innerHTML = `<p class="country"> <span><img src="images/marruecos-bandera.png" alt="marruecos"></span>${marruecosStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${marruecosStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${marruecosStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${marruecosStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${marruecosStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${marruecosStats.dg}</div>
                        <div class="points" id="mexico-points">${marruecosStats.pts}</div>
                    </div>`

    }
    else if (haitiStats.index === 3) {
        elevenTeam.innerHTML = `<p class="country"> <span><img src="images/haiti-bandera.png"  alt="haiti"></span>${haitiStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${haitiStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${haitiStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${haitiStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${haitiStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${haitiStats.dg}</div>
                        <div class="points" id="mexico-points">${haitiStats.pts}</div>
                    </div>`

    }
    else if (escociaStats.index === 3) {
        elevenTeam.innerHTML = `<p class="country"> <span><img src="images/escocia-bandera.png" alt="escocia"></span>${escociaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${escociaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${escociaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${escociaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${escociaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${escociaStats.dg}</div>
                        <div class="points" id="mexico-points">${escociaStats.pts}</div>
                    </div>`

    }
    if (brasilStats.index === 4) {
        twelveTeam.innerHTML = `<p class="country"> <span><img src="images/brasil-bandera.png" alt="brasil"></span>${brasilStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${brasilStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${brasilStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${brasilStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${brasilStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${brasilStats.dg}</div>
                        <div class="points" id="mexico-points">${brasilStats.pts}</div>
                    </div>`
    }
    else if (marruecosStats.index === 4) {
        twelveTeam.innerHTML = `<p class="country"> <span><img src="images/marruecos-bandera.png" alt="marruecos"></span>${marruecosStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${marruecosStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${marruecosStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${marruecosStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${marruecosStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${marruecosStats.dg}</div>
                        <div class="points" id="mexico-points">${marruecosStats.pts}</div>
                    </div>`
    }
    else if (haitiStats.index === 4) {
        twelveTeam.innerHTML = `<p class="country"> <span><img src="images/haiti-bandera.png" alt="haiti"></span>${haitiStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${haitiStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${haitiStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${haitiStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${haitiStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${haitiStats.dg}</div>
                        <div class="points" id="mexico-points">${haitiStats.pts}</div>
                    </div>`
    }
    else if (escociaStats.index === 4) {
        twelveTeam.innerHTML = `<p class="country"> <span><img src="images/escocia-bandera.png" alt="escocia"></span>${escociaStats.country}</p>
                        <p class="matches" id="mexico-playedGames">${escociaStats.pj}</p>
                        <div class="matches" id="mexico-wonGames">${escociaStats.pg}</div>
                        <div class="matches" id="mexico-drawGames">${escociaStats.pe}</div>
                        <div class="matches" id="mexico-lostGames">${escociaStats.pp}</div>
                        <div class="matches" id="mexico-goalDifference">${escociaStats.dg}</div>
                        <div class="points" id="mexico-points">${escociaStats.pts}</div>
                    </div>`
    }


});

//-- STATS --//

//GRUPO A

const mexicoPlayedGames = document.getElementById("mexico-playedGames")
const mexicoWonGames = document.getElementById("mexico-wonGames")
const mexicoDrawGames = document.getElementById("mexico-drawGames")
const mexicoLostGames = document.getElementById("mexico-lostGames")
const mexicoGoalDifference = document.getElementById("mexico-goalDifference")
const mexicoPoints = document.getElementById("mexico-points")

let mexicoStats = {
    "index": 1,
    "country": "mexico",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const sudafricaPlayedGames = document.getElementById("sudafrica-playedGames")
const sudafricaWonGames = document.getElementById("sudafrica-wonGames")
const sudafricaDrawGames = document.getElementById("sudafrica-drawGames")
const sudafricaLostGames = document.getElementById("sudafrica-lostGames")
const sudafricaGoalDifference = document.getElementById("sudafrica-goalDifference")
const sudafricaPoints = document.getElementById("sudafrica-points")

let sudafricaStats = {
    "index": 2,
    "country": "sudáfrica",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const coreaPlayedGames = document.getElementById("corea-playedGames")
const coreaWonGames = document.getElementById("corea-wonGames")
const coreaDrawGames = document.getElementById("corea-drawGames")
const coreaLostGames = document.getElementById("corea-lostGames")
const coreaGoalDifference = document.getElementById("corea-goalDifference")
const coreaPoints = document.getElementById("corea-points")

let coreaStats = {
    "index": 3,
    "country": "corea del sur",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const chequiaPlayedGames = document.getElementById("chequia-playedGames")
const chequiaWonGames = document.getElementById("chequia-wonGames")
const chequiaDrawGames = document.getElementById("chequia-drawGames")
const chequiaLostGames = document.getElementById("chequia-lostGames")
const chequiaGoalDifference = document.getElementById("chequia-goalDifference")
const chequiaPoints = document.getElementById("chequia-points")

let chequiaStats = {
    "index": 4,
    "country": "CHEQUIA",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

//GRUPO B

const canadaPlayedGames = document.getElementById("canada-playedGames")
const canadaWonGames = document.getElementById("canada-wonGames")
const canadaDrawGames = document.getElementById("canada-drawGames")
const canadaLostGames = document.getElementById("canada-lostGames")
const canadaGoalDifference = document.getElementById("canada-goalDifference")
const canadaPoints = document.getElementById("canada-points")

let canadaStats = {
    "index": 5,
    "country": "canadá",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const bosniaPlayedGames = document.getElementById("bosnia-playedGames")
const bosniaWonGames = document.getElementById("bosnia-wonGames")
const bosniaDrawGames = document.getElementById("bosnia-drawGames")
const bosniaLostGames = document.getElementById("bosnia-lostGames")
const bosniaGoalDifference = document.getElementById("bosnia-goalDifference")
const bosniaPoints = document.getElementById("bosnia-points")

let bosniaStats = {
    "index": 6,
    "country": "bosnia y herz",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const catarPlayedGames = document.getElementById("qatar-playedGames")
const catarWonGames = document.getElementById("qatar-wonGames")
const catarDrawGames = document.getElementById("qatar-drawGames")
const catarLostGames = document.getElementById("qatar-lostGames")
const catarGoalDifference = document.getElementById("qatar-goalDifference")
const catarPoints = document.getElementById("qatar-points")

let catarStats = {
    "index": 7,
    "country": "qatar",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const suizaPlayedGames = document.getElementById("suiza-playedGames")
const suizaWonGames = document.getElementById("suiza-wonGames")
const suizaDrawGames = document.getElementById("suiza-drawGames")
const suizaLostGames = document.getElementById("suiza-lostGames")
const suizaGoalDifference = document.getElementById("suiza-goalDifference")
const suizaPoints = document.getElementById("suiza-points")

let suizaStats = {
    "index": 8,
    "country": "suiza",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

//GRUPO C

const brasilPlayedGames = document.getElementById("brasil-playedGames")
const brasilWonGames = document.getElementById("brasil-wonGames")
const brasilDrawGames = document.getElementById("brasil-drawGames")
const brasilLostGames = document.getElementById("brasil-lostGames")
const brasilGoalDifference = document.getElementById("brasil-goalDifference")
const brasilPoints = document.getElementById("brasil-points")

let brasilStats = {
    "index": 9,
    "country": "brasil",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const marruecosPlayedGames = document.getElementById("marruecos-playedGames")
const marruecosWonGames = document.getElementById("marruecos-wonGames")
const marruecosDrawGames = document.getElementById("marruecos-drawGames")
const marruecosLostGames = document.getElementById("marruecos-lostGames")
const marruecosGoalDifference = document.getElementById("marruecos-goalDifference")
const marruecosPoints = document.getElementById("marruecos-points")

let marruecosStats = {
    "index": 10,
    "country": "marruecos",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const haitiPlayedGames = document.getElementById("haiti-playedGames")
const haitiWonGames = document.getElementById("haiti-wonGames")
const haitiDrawGames = document.getElementById("haiti-drawGames")
const haitiLostGames = document.getElementById("haiti-lostGames")
const haitiGoalDifference = document.getElementById("haiti-goalDifference")
const haitiPoints = document.getElementById("haiti-points")

let haitiStats = {
    "index": 11,
    "country": "haiti",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

const escociaPlayedGames = document.getElementById("escocia-playedGames")
const escociaWonGames = document.getElementById("escocia-wonGames")
const escociaDrawGames = document.getElementById("escocia-drawGames")
const escociaLostGames = document.getElementById("escocia-lostGames")
const escociaGoalDifference = document.getElementById("escocia-goalDifference")
const escociaPoints = document.getElementById("escocia-points")

let escociaStats = {
    "index": 12,
    "country": "escocia",
    "pj": 0,
    "pg": 0,
    "pe": 0,
    "pp": 0,
    "dg": 0,
    "pts": 0
}

//-- MARCADORES --//

let result = null

//GRUPO A

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

//GRUPO B

let resultlMatch7 = {
    "canada": 0,
    "bosnia": 0
}

let resultlMatch8 = {
    "qatar": 0,
    "suiza": 0
}

let resultlMatch9 = {
    "suiza": 0,
    "bosnia": 0
}

let resultlMatch10 = {
    "canada": 0,
    "qatar": 0
}

let resultlMatch11 = {
    "suiza": 0,
    "canada": 0
}

let resultlMatch12 = {
    "bosnia": 0,
    "qatar": 0
}

//GRUPO C

let resultlMatch13 = {
    "brasil": 0,
    "marruecos": 0
}

let resultlMatch14 = {
    "haiti": 0,
    "escocia": 0
}

let resultlMatch15 = {
    "escocia": 0,
    "marruecos": 0
}

let resultlMatch16 = {
    "brasil": 0,
    "haiti": 0
}

let resultlMatch17 = {
    "escocia": 0,
    "brasil": 0
}

let resultlMatch18 = {
    "marruecos": 0,
    "haiti": 0
}


//-- PARTIDOS --//

//GRUPO A //

//PRIMER PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match1() {
    scoreTeam1.addEventListener("change", function (e) {
        resultlMatch1.mexico = e.target.value
        checkWinner1();

    });

    scoreTeam2.addEventListener("change", function (e) {
        resultlMatch1.sudafrica = e.target.value
        checkWinner1();
    });

}


//funcion para validar quien gano y actualizar la UI
function checkWinner1() {
    if (resultlMatch1.mexico === 0 || resultlMatch1.sudafrica === 0) return;
    if (resultlMatch1.mexico > resultlMatch1.sudafrica) {
        result = resultlMatch1.mexico - resultlMatch1.sudafrica

        //actualizando stats del ganador
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pg = mexicoStats.pg + 1
        mexicoStats.dg = result
        mexicoStats.pts = mexicoStats.pts + 3

        //actualizando stats del perdedor
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

        //actualizando stats del perdedor
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pp = mexicoStats.pp + 1
        mexicoStats.dg = -result

        //actualizando stats del ganador
        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pg = sudafricaStats.pg + 1
        sudafricaStats.pts = sudafricaStats.pts + 3
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
        //actualizando stats de ambos
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pe = mexicoStats.pe + 1
        mexicoStats.pts = mexicoStats.pts + 1

        sudafricaStats.pj = sudafricaStats.pj + 1
        sudafricaStats.pe = sudafricaStats.pe + 1
        sudafricaStats.pts = sudafricaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        mexicoPlayedGames.textContent = mexicoStats.pj
        sudafricaPlayedGames.textContent = sudafricaStats.pj
        //actualiza los partidos empatados de ambos
        mexicoDrawGames.textContent = mexicoStats.pe
        sudafricaDrawGames.textContent = sudafricaStats.pe
        //actualiza los puntos de ambos
        mexicoPoints.textContent = mexicoStats.pts
        sudafricaPoints.textContent = sudafricaStats.pts
    }
}

match1();

//accedemos a la card con el marcador
const matchOne = document.getElementById("match1")

//inyectamos el resultado actualizado
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let gameOneSaved = ` 
                    <div class="match-rivals">
                        <div><img src="images/mexico-bandera.png" ></div>
                        <div class="rival1team">${mexicoStats.country}</div>
                        <p class="rival1score">${resultlMatch1.mexico}<p/>
                        <p class="rival2score">${resultlMatch1.sudafrica}<p/>
                        <div class="rival2team">${sudafricaStats.country}</div>
                        <div><img src="images/sudafrica-bandera.png" ></div>
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
    matchOne.innerHTML = ` 
                    <div class="match-rivals">
                        <div><img src="images/mexico-bandera.png" ></div>
                        <div class="rival1team">${mexicoStats.country}</div>
                        <p class="rival1score">${resultlMatch1.mexico}<p/>
                        <p class="rival2score">${resultlMatch1.sudafrica}<p/>
                        <div class="rival2team">${sudafricaStats.country}</div>
                        <div><img src="images/sudafrica-bandera.png" ></div>
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

        //actualizando stats del ganador
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pg = coreaStats.pg + 1
        coreaStats.dg = result
        coreaStats.pts = coreaStats.pts + 3

        //actualizando stats del perdedor
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
        result = resultlMatch2.chequia - resultlMatch2.corea

        //actualizando stats del perdedor
        coreaStats.pj = coreaStats.pj + 1
        coreaStats.pp = coreaStats.pp + 1
        coreaStats.dg = - result

        //actualizando stats del ganador
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pg = chequiaStats.pg + 1
        chequiaStats.pts = chequiaStats.pts + 3
        chequiaStats.dg = result

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
        //actualizando stats de ambos
        chequiaStats.pj = chequiaStats.pj + 1
        chequiaStats.pe = chequiaStats.pe + 1
        chequiaStats.pts = chequiaStats.pts + 1

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

    let gameTwoSaved = ` 
                    <div class="match-rivals">
                    <div><img src="images/coreadelsur-bandera.png" ></div>
                        <div class="rival1team">${coreaStats.country}</div>
                        <p class="rival2score">${resultlMatch2.corea}<p/>
                        <p class="rival2score">${resultlMatch2.chequia}<p/>
                        <div class="rival2team">${chequiaStats.country}</div>
                        <div><img src="images/chequia-bandera.png" ></div>
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
    matchTwo.innerHTML = ` 
                    <div class="match-rivals">
                    <div><img src="images/coreadelsur-bandera.png" ></div>
                        <div class="rival1team">${coreaStats.country}</div>
                        <p class="rival2score">${resultlMatch2.corea}<p/>
                        <p class="rival2score">${resultlMatch2.chequia}<p/>
                        <div class="rival2team">${chequiaStats.country}</div>
                        <div><img src="images/chequia-bandera.png" ></div>
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

        //actualizando stats del ganador
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pg = mexicoStats.pg + 1
        mexicoStats.dg = mexicoStats.dg + result
        mexicoStats.pts = mexicoStats.pts + 3

        //actualizando stats del perdedor
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

        //actualizando stats del perdedor
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pp = mexicoStats.pp + 1
        mexicoStats.dg = mexicoStats.dg - result

        //actualizando stats del ganador
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


        //actualizando stats de ambos
        mexicoStats.pj = mexicoStats.pj + 1
        mexicoStats.pe = mexicoStats.pe + 1
        mexicoStats.pts = mexicoStats.pts + 1

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

    let gameThreeSaved = `  
                    <div class="match-rivals">
                    <div><img src="images/mexico-bandera.png" ></div>
                        <div class="rival1team">${mexicoStats.country}</div>
                        <p class="rival2score">${resultlMatch3.mexico}<p/>
                        <p class="rival2score">${resultlMatch3.corea}<p/>
                        <div class="rival2team">${coreaStats.country}</div>
                        <div><img src="images/coreadelsur-bandera.png" ></div>
                    </div>`

    matchThree.innerHTML = gameThreeSaved;

    saveToLocal3();

});

function saveToLocal3() {
    localStorage.setItem("resultlMatch3", JSON.stringify(resultlMatch3));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("mexicoSavedStats", JSON.stringify(mexicoStats));
    localStorage.setItem("coreaSavedStats", JSON.stringify(coreaStats));
};

function loadFromLocal3() {
    //carga los datos guardados previamente 
    resultlMatch3 = JSON.parse(localStorage.getItem("resultlMatch3"));
    mexicoStats = JSON.parse(localStorage.getItem("mexicoSavedStats"));
    coreaStats = JSON.parse(localStorage.getItem("coreaSavedStats"));

    //recarga la UI con los datos cargados
    matchThree.innerHTML = `  
                    <div class="match-rivals">
                    <div><img src="images/mexico-bandera.png" ></div>
                        <div class="rival1team">${mexicoStats.country}</div>
                        <p class="rival2score">${resultlMatch3.mexico}<p/>
                        <p class="rival2score">${resultlMatch3.corea}<p/>
                        <div class="rival2team">${coreaStats.country}</div>
                        <div><img src="images/coreadelsur-bandera.png" ></div>
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
};

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
};

match4();

//accedemos a la card con el marcador
const matchFour = document.getElementById("match4");

//inyectamos el resultado actualizado
saveBtn4.addEventListener("click", (e) => {
    e.preventDefault();

    let gameFourSaved = `
                    <div class="match-rivals">
                    <div><img src="images/chequia-bandera.png" ></div>
                        <div class="rival1team">${chequiaStats.country}</div>
                        <p class="rival2score">${resultlMatch4.chequia}<p/>
                        <p class="rival2score">${resultlMatch4.sudafrica}<p/>
                        <div class="rival2team">${sudafricaStats.country}</div>
                        <div><img src="images/sudafrica-bandera.png" ></div>
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
    matchFour.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/chequia-bandera.png" ></div>
                        <div class="rival1team">${chequiaStats.country}</div>
                        <p class="rival2score">${resultlMatch4.chequia}<p/>
                        <p class="rival2score">${resultlMatch4.sudafrica}<p/>
                        <div class="rival2team">${sudafricaStats.country}</div>
                        <div><img src="images/sudafrica-bandera.png" ></div>
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

    let gameFiveSaved = `
                    <div class="match-rivals">
                    <div><img src="images/mexico-bandera.png" ></div>
                        <div class="rival1team">${mexicoStats.country}</div>
                        <p class="rival2score">${resultlMatch5.mexico}<p/>
                        <p class="rival2score">${resultlMatch5.chequia}<p/>
                        <div class="rival2team">${chequiaStats.country}</div>
                        <div><img src="images/chequia-bandera.png" ></div>
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
    matchFive.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/mexico-bandera.png" ></div>
                        <div class="rival1team">${mexicoStats.country}</div>
                        <p class="rival2score">${resultlMatch5.mexico}<p/>
                        <p class="rival2score">${resultlMatch5.chequia}<p/>
                        <div class="rival2team">${chequiaStats.country}</div>
                        <div><img src="images/chequia-bandera.png" ></div>
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

    let gameSixSaved = `
                    <div class="match-rivals">
                    <div><img src="images/coreadelsur-bandera.png" ></div>
                        <div class="rival1team">${coreaStats.country}</div>
                        <p class="rival2score">${resultlMatch6.corea}<p/>
                        <p class="rival2score">${resultlMatch6.sudafrica}<p/>
                        <div class="rival2team">${sudafricaStats.country}</div>
                        <div><img src="images/sudafrica-bandera.png" ></div>
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
    matchSix.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/coreadelsur-bandera.png" ></div>
                        <div class="rival1team">${coreaStats.country}</div>
                        <p class="rival2score">${resultlMatch6.corea}<p/>
                        <p class="rival2score">${resultlMatch6.sudafrica}<p/>
                        <div class="rival2team">${sudafricaStats.country}</div>
                        <div><img src="images/sudafrica-bandera.png" ></div>
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

//GRUPO B //

//PRIMER PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match7() {
    scoreTeam13.addEventListener("change", function (e) {
        resultlMatch7.canada = e.target.value
        checkWinner7();

    })

    scoreTeam14.addEventListener("change", function (e) {
        resultlMatch7.bosnia = e.target.value
        checkWinner7();
    })

}

//funcion para validar quien gano y actualizar la UI
function checkWinner7() {
    if (resultlMatch7.canada === 0 || resultlMatch7.bosnia === 0) return;
    if (resultlMatch7.canada > resultlMatch7.bosnia) {
        result = resultlMatch7.canada - resultlMatch7.bosnia

        //actualizando stats del ganador
        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pg = canadaStats.pg + 1
        canadaStats.pts = canadaStats.pts + 3
        canadaStats.dg = result

        //actualizando stats del perdedor
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pp = bosniaStats.pp + 1
        bosniaStats.dg = -result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        canadaPlayedGames.textContent = canadaStats.pj
        bosniaPlayedGames.textContent = bosniaStats.pj
        //actualiza los partidos del ganador
        canadaWonGames.textContent = canadaStats.pg
        //actualiza los partidos del perdedor
        bosniaLostGames.textContent = bosniaStats.pp
        //actualiza la diferencia de gol de ambos
        canadaGoalDifference.textContent = canadaStats.dg
        bosniaGoalDifference.textContent = bosniaStats.dg
        //actualiza los puntos de ambos
        canadaPoints.textContent = canadaStats.pts
        bosniaPoints.textContent = bosniaStats.pts


    } else if (resultlMatch7.canada < resultlMatch7.bosnia) {
        result = resultlMatch7.bosnia - resultlMatch7.canada
        //console.log(`Gano Sudafrica ${resultlMatch1.sudafrica} - ${resultlMatch1.mexico} y quedo con diferencia de gol de + ${result}`)

        //actualizando stats del perdedor
        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pp = canadaStats.pp + 1
        canadaStats.dg = -result

        //actualizando stats del ganador
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pg = bosniaStats.pg + 1
        bosniaStats.pts = bosniaStats.pts + 3
        bosniaStats.dg = result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        canadaPlayedGames.textContent = canadaStats.pj
        bosniaPlayedGames.textContent = bosniaStats.pj
        //actualiza los partidos ganados de sudafrica
        bosniaWonGames.textContent = bosniaStats.pg
        //actualiza los partidos perdidos de mexico
        canadaLostGames.textContent = canadaStats.pp
        //actualiza la diferencia de gol de ambos
        canadaGoalDifference.textContent = canadaStats.dg
        bosniaGoalDifference.textContent = bosniaStats.dg
        //actualiza los puntos de ambo
        canadaPoints.textContent = canadaStats.pts
        bosniaPoints.textContent = bosniaStats.pts

    } else {


        //actualizando stats de mexico
        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pe = canadaStats.pe + 1
        canadaStats.pts = canadaStats.pts + 1

        //actualizando stats de sudafrica
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pe = bosniaStats.pe + 1
        bosniaStats.pts = bosniaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        canadaPlayedGames.textContent = canadaStats.pj
        bosniaPlayedGames.textContent = bosniaStats.pj
        //actualiza los partidos empatados de mexico
        canadaDrawGames.textContent = canadaStats.pe
        bosniaDrawGames.textContent = bosniaStats.pe
        //actualiza los puntos de ambos
        canadaPoints.textContent = canadaStats.pts
        bosniaPoints.textContent = bosniaStats.pts

    }
}

match7();

//accedemos a la card con el marcador
const matchSeven = document.getElementById("match7")

//inyectamos el resultado actualizado
saveBtn7.addEventListener("click", (e) => {
    e.preventDefault();

    let gameSevenSaved = `
                    <div class="match-rivals">
                        <div><img src="images/canada-bandera.png" ></div>
                        <div class="rival1team">${canadaStats.country}</div>
                        <p class="rival2score">${resultlMatch7.canada}<p/>
                        <p class="rival2score">${resultlMatch7.bosnia}<p/>
                        <div class="rival2team">${bosniaStats.country}</div>
                        <div><img src="images/bosnia-bandera.png" ></div>
                    </div>`

    matchSeven.innerHTML = gameSevenSaved;

    saveToLocal7();

});

//LOCAL STORAGE//

function saveToLocal7() {
    localStorage.setItem("resultlMatch7", JSON.stringify(resultlMatch7));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("canadaSavedStats", JSON.stringify(canadaStats));
    localStorage.setItem("bosniaSavedStats", JSON.stringify(bosniaStats));
};

function loadFromLocal7() {
    //carga los datos guardados previamente 
    //scoreTeam1Value = localStorage.getItem("ScoreTeam1Value");
    //scoreTeam2Value = localStorage.getItem("ScoreTeam2Value");
    resultlMatch7 = JSON.parse(localStorage.getItem("resultlMatch7"));
    canadaStats = JSON.parse(localStorage.getItem("canadaSavedStats"));
    bosniaStats = JSON.parse(localStorage.getItem("bosniaSavedStats"));

    //recarga la UI con los datos cargados
    matchSeven.innerHTML = `
                    <div class="match-rivals">
                        <div><img src="images/canada-bandera.png" ></div>
                        <div class="rival1team">${canadaStats.country}</div>
                        <p class="rival2score">${resultlMatch7.canada}<p/>
                        <p class="rival2score">${resultlMatch7.bosnia}<p/>
                        <div class="rival2team">${bosniaStats.country}</div>
                        <div><img src="images/bosnia-bandera.png" ></div>
                    </div>`

    canadaPlayedGames.textContent = canadaStats.pj
    canadaWonGames.textContent = canadaStats.pg
    canadaDrawGames.textContent = canadaStats.pe
    canadaLostGames.textContent = canadaStats.pp
    canadaGoalDifference.textContent = canadaStats.dg
    canadaPoints.textContent = canadaStats.pts

    bosniaPlayedGames.textContent = bosniaStats.pj
    bosniaWonGames.textContent = bosniaStats.pg
    bosniaDrawGames.textContent = bosniaStats.pe
    bosniaLostGames.textContent = bosniaStats.pp
    bosniaGoalDifference.textContent = bosniaStats.dg
    bosniaPoints.textContent = bosniaStats.pts
};

//SEGUNDO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match8() {
    scoreTeam15.addEventListener("change", function (e) {
        resultlMatch8.qatar = e.target.value
        checkWinner8();

    })

    scoreTeam16.addEventListener("change", function (e) {
        resultlMatch8.suiza = e.target.value
        checkWinner8();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner8() {
    if (resultlMatch8.qatar === 0 || resultlMatch8.suiza === 0) return;
    if (resultlMatch8.qatar > resultlMatch8.suiza) {
        result = resultlMatch8.qatar - resultlMatch8.suiza

        //actualizando stats del ganador
        catarStats.pj = catarStats.pj + 1
        catarStats.pg = catarStats.pg + 1
        catarStats.pts = catarStats.pts + 3
        catarStats.dg = result

        //actualizando stats del perdedor
        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pp = suizaStats.pp + 1
        suizaStats.dg = -result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        catarPlayedGames.textContent = catarStats.pj
        suizaPlayedGames.textContent = suizaStats.pj
        //actualiza los partidos ganados del ganador
        catarWonGames.textContent = catarStats.pg
        //actualiza los partidos perdidos del perdedor
        suizaLostGames.textContent = suizaStats.pp
        //actualiza la diferencia de gol de ambos
        catarGoalDifference.textContent = catarStats.dg
        suizaGoalDifference.textContent = suizaStats.dg
        //actualiza los puntos de ambos
        catarPoints.textContent = catarStats.pts
        suizaPoints.textContent = suizaStats.pts


    } else if (resultlMatch8.qatar < resultlMatch8.suiza) {
        result = resultlMatch8.suiza - resultlMatch8.qatar

        //actualizando stats del ganador
        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pg = suizaStats.pg + 1
        suizaStats.pts = suizaStats.pts + 3
        suizaStats.dg = result

        //actualizando stats del perdedor
        catarStats.pj = catarStats.pj + 1
        catarStats.pp = catarStats.pp + 1
        catarStats.dg = -result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        catarPlayedGames.textContent = catarStats.pj
        suizaPlayedGames.textContent = suizaStats.pj
        //actualiza los partidos ganados
        suizaWonGames.textContent = suizaStats.pg
        //actualiza los partidos perdidos
        catarLostGames.textContent = catarStats.pp
        //actualiza la diferencia de gol de ambos
        catarGoalDifference.textContent = catarStats.dg
        suizaGoalDifference.textContent = suizaStats.dg
        //actualiza los puntos de ambos
        catarPoints.textContent = catarStats.pts
        suizaPoints.textContent = suizaStats.pts

    } else {
        //actualizando stats ambos
        catarStats.pj = catarStats.pj + 1
        catarStats.pe = catarStats.pe + 1
        catarStats.pts = catarStats.pts + 1

        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pe = suizaStats.pe + 1
        suizaStats.pts = suizaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        catarPlayedGames.textContent = catarStats.pj
        suizaPlayedGames.textContent = suizaStats.pj
        //actualiza los partidos empatados de mexico
        catarDrawGames.textContent = catarStats.pe
        suizaDrawGames.textContent = suizaStats.pe
        //actualiza los puntos de ambos
        catarPoints.textContent = catarStats.pts
        suizaPoints.textContent = suizaStats.pts

    }
}

match8();

//accedemos a la card con el marcador
const matchEight = document.getElementById("match8")

//inyectamos el resultado actualizado
saveBtn8.addEventListener("click", (e) => {
    e.preventDefault();

    let gameEightSaved = `
                    <div class="match-rivals">
                    <div><img src="images/catar-bandera.png" ></div>
                        <div class="rival1team">${catarStats.country}</div>
                        <p class="rival2score">${resultlMatch8.qatar}<p/>
                        <p class="rival2score">${resultlMatch8.suiza}<p/>
                        <div class="rival2team">${suizaStats.country}</div>
                        <div><img src="images/suiza-bandera.png" ></div>
                    </div>`

    matchEight.innerHTML = gameEightSaved;

    saveToLocal8();

});

//LOCAL STORAGE//

function saveToLocal8() {
    localStorage.setItem("resultlMatch8", JSON.stringify(resultlMatch8));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("catarSavedStats", JSON.stringify(catarStats));
    localStorage.setItem("suizaSavedStats", JSON.stringify(suizaStats));
}

function loadFromLocal8() {
    //carga los datos guardados previamente 
    //scoreTeam1Value = localStorage.getItem("ScoreTeam1Value");
    //scoreTeam2Value = localStorage.getItem("ScoreTeam2Value");
    resultlMatch8 = JSON.parse(localStorage.getItem("resultlMatch8"));
    catarStats = JSON.parse(localStorage.getItem("catarSavedStats"));
    suizaStats = JSON.parse(localStorage.getItem("suizaSavedStats"));

    //recarga la UI con los datos cargados
    matchEight.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/catar-bandera.png" ></div>
                        <div class="rival1team">${catarStats.country}</div>
                        <p class="rival2score">${resultlMatch8.qatar}<p/>
                        <p class="rival2score">${resultlMatch8.suiza}<p/>
                        <div class="rival2team">${suizaStats.country}</div>
                        <div><img src="images/suiza-bandera.png" ></div>
                    </div>`

    catarPlayedGames.textContent = catarStats.pj
    catarWonGames.textContent = catarStats.pg
    catarDrawGames.textContent = catarStats.pe
    catarLostGames.textContent = catarStats.pp
    catarGoalDifference.textContent = catarStats.dg
    catarPoints.textContent = catarStats.pts

    suizaPlayedGames.textContent = suizaStats.pj
    suizaWonGames.textContent = suizaStats.pg
    suizaDrawGames.textContent = suizaStats.pe
    suizaLostGames.textContent = suizaStats.pp
    suizaGoalDifference.textContent = suizaStats.dg
    suizaPoints.textContent = suizaStats.pts
}

//TERCER PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match9() {
    scoreTeam17.addEventListener("change", function (e) {
        resultlMatch9.suiza = e.target.value
        checkWinner9();

    })

    scoreTeam18.addEventListener("change", function (e) {
        resultlMatch9.bosnia = e.target.value
        checkWinner9();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner9() {
    if (resultlMatch9.suiza === 0 || resultlMatch9.bosnia === 0) return;
    if (resultlMatch9.suiza > resultlMatch9.bosnia) {
        result = resultlMatch9.suiza - resultlMatch9.bosnia

        //actualizando stats del ganador
        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pg = suizaStats.pg + 1
        suizaStats.pts = suizaStats.pts + 3
        suizaStats.dg = suizaStats.dg + result

        //actualizando stats del perdedor
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pp = bosniaStats.pp + 1
        bosniaStats.dg = bosniaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        suizaPlayedGames.textContent = suizaStats.pj
        bosniaPlayedGames.textContent = bosniaStats.pj
        //actualiza los partidos ganados del ganador
        suizaWonGames.textContent = suizaStats.pg
        //actualiza los partidos perdidos del perdedor
        bosniaLostGames.textContent = bosniaStats.pp
        //actualiza la diferencia de gol de ambos
        suizaGoalDifference.textContent = suizaStats.dg
        bosniaGoalDifference.textContent = bosniaStats.dg
        //actualiza los puntos de ambos
        suizaPoints.textContent = suizaStats.pts
        bosniaPoints.textContent = bosniaStats.pts


    } else if (resultlMatch9.suiza < resultlMatch9.bosnia) {
        result = resultlMatch9.bosnia - resultlMatch9.suiza

        //actualizando stats del ganador
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pg = bosniaStats.pg + 1
        bosniaStats.pts = bosniaStats.pts + 3
        bosniaStats.dg = bosniaStats.dg + result

        //actualizando stats del perdedor
        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pp = suizaStats.pp + 1
        suizaStats.dg = suizaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        suizaPlayedGames.textContent = suizaStats.pj
        bosniaPlayedGames.textContent = bosniaStats.pj
        //actualiza los partidos ganados
        bosniaWonGames.textContent = bosniaStats.pg
        //actualiza los partidos perdidos
        suizaLostGames.textContent = suizaStats.pp
        //actualiza la diferencia de gol de ambos
        suizaGoalDifference.textContent = suizaStats.dg
        bosniaGoalDifference.textContent = bosniaStats.dg
        //actualiza los puntos de ambos
        suizaPoints.textContent = suizaStats.pts
        bosniaPoints.textContent = bosniaStats.pts

    } else {

        //actualizando stats ambos
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pe = bosniaStats.pe + 1
        bosniaStats.pts = bosniaStats.pts + 1

        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pe = suizaStats.pe + 1
        suizaStats.pts = suizaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        suizaPlayedGames.textContent = suizaStats.pj
        bosniaPlayedGames.textContent = bosniaStats.pj
        //actualiza los partidos empatados de mexico
        suizaDrawGames.textContent = suizaStats.pe
        bosniaDrawGames.textContent = bosniaStats.pe
        //actualiza los puntos de ambos
        suizaPoints.textContent = suizaStats.pts
        bosniaPoints.textContent = bosniaStats.pts

    }
}

match9();

//accedemos a la card con el marcador
const matchNine = document.getElementById("match9")

//inyectamos el resultado actualizado
saveBtn9.addEventListener("click", (e) => {
    e.preventDefault();

    let gameNineSaved = `
                    <div class="match-rivals">
                    <div><img src="images/suiza-bandera.png" ></div>
                        <div class="rival1team">${suizaStats.country}</div>
                        <p class="rival2score">${resultlMatch9.suiza}<p/>
                        <p class="rival2score">${resultlMatch9.bosnia}<p/>
                        <div class="rival2team">${bosniaStats.country}</div>
                        <div><img src="images/bosnia-bandera.png" ></div>
                    </div>`

    matchNine.innerHTML = gameNineSaved;

    saveToLocal9();

});

//LOCAL STORAGE//

function saveToLocal9() {
    localStorage.setItem("resultlMatch9", JSON.stringify(resultlMatch9));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("suizaSavedStats", JSON.stringify(suizaStats));
    localStorage.setItem("bosniaSavedStats", JSON.stringify(bosniaStats));
}

function loadFromLocal9() {
    //carga los datos guardados previamente 
    //scoreTeam1Value = localStorage.getItem("ScoreTeam1Value");
    //scoreTeam2Value = localStorage.getItem("ScoreTeam2Value");
    resultlMatch9 = JSON.parse(localStorage.getItem("resultlMatch9"));
    suizaStats = JSON.parse(localStorage.getItem("suizaSavedStats"));
    bosniaStats = JSON.parse(localStorage.getItem("bosniaSavedStats"));

    //recarga la UI con los datos cargados
    matchNine.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/suiza-bandera.png" ></div>
                        <div class="rival1team">${suizaStats.country}</div>
                        <p class="rival2score">${resultlMatch9.suiza}<p/>
                        <p class="rival2score">${resultlMatch9.bosnia}<p/>
                        <div class="rival2team">${bosniaStats.country}</div>
                        <div><img src="images/bosnia-bandera.png" ></div>
                    </div>`

    suizaPlayedGames.textContent = suizaStats.pj
    suizaWonGames.textContent = suizaStats.pg
    suizaDrawGames.textContent = suizaStats.pe
    suizaLostGames.textContent = suizaStats.pp
    suizaGoalDifference.textContent = suizaStats.dg
    suizaPoints.textContent = suizaStats.pts

    bosniaPlayedGames.textContent = bosniaStats.pj
    bosniaWonGames.textContent = bosniaStats.pg
    bosniaDrawGames.textContent = bosniaStats.pe
    bosniaLostGames.textContent = bosniaStats.pp
    bosniaGoalDifference.textContent = bosniaStats.dg
    bosniaPoints.textContent = bosniaStats.pts
}

//CUARTO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match10() {
    scoreTeam19.addEventListener("change", function (e) {
        resultlMatch10.canada = e.target.value
        checkWinner10();

    })

    scoreTeam20.addEventListener("change", function (e) {
        resultlMatch10.qatar = e.target.value
        checkWinner10();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner10() {
    if (resultlMatch10.canada === 0 || resultlMatch10.qatar === 0) return;
    if (resultlMatch10.canada > resultlMatch10.qatar) {
        result = resultlMatch10.canada - resultlMatch10.qatar

        //actualizando stats del ganador
        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pg = canadaStats.pg + 1
        canadaStats.pts = canadaStats.pts + 3
        canadaStats.dg = canadaStats.dg + result

        //actualizando stats del perdedor
        catarStats.pj = catarStats.pj + 1
        catarStats.pp = catarStats.pp + 1
        catarStats.dg = catarStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        canadaPlayedGames.textContent = canadaStats.pj
        catarPlayedGames.textContent = catarStats.pj
        //actualiza los partidos ganados del ganador
        canadaWonGames.textContent = canadaStats.pg
        //actualiza los partidos perdidos del perdedor
        catarLostGames.textContent = catarStats.pp
        //actualiza la diferencia de gol de ambos
        canadaGoalDifference.textContent = canadaStats.dg
        catarGoalDifference.textContent = catarStats.dg
        //actualiza los puntos de ambos
        canadaPoints.textContent = canadaStats.pts
        catarPoints.textContent = catarStats.pts


    } else if (resultlMatch10.canada < resultlMatch10.qatar) {
        result = resultlMatch10.qatar - resultlMatch10.canada

        //actualizando stats del ganador
        catarStats.pj = catarStats.pj + 1
        catarStats.pg = catarStats.pg + 1
        catarStats.pts = catarStats.pts + 3
        catarStats.dg = catarStats.dg + result

        //actualizando stats del perdedor
        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pp = canadaStats.pp + 1
        canadaStats.dg = canadaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        canadaPlayedGames.textContent = canadaStats.pj
        catarPlayedGames.textContent = catarStats.pj
        //actualiza los partidos ganados
        catarWonGames.textContent = catarStats.pg
        //actualiza los partidos perdidos
        canadaLostGames.textContent = canadaStats.pp
        //actualiza la diferencia de gol de ambos
        canadaGoalDifference.textContent = canadaStats.dg
        catarGoalDifference.textContent = catarStats.dg
        //actualiza los puntos de ambos
        canadaPoints.textContent = canadaStats.pts
        catarPoints.textContent = catarStats.pts

    } else {

        //actualizando stats ambos
        catarStats.pj = catarStats.pj + 1
        catarStats.pe = catarStats.pe + 1
        catarStats.pts = catarStats.pts + 1

        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pe = canadaStats.pe + 1
        canadaStats.pts = canadaStats.pts + 1
        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        canadaPlayedGames.textContent = canadaStats.pj
        catarPlayedGames.textContent = catarStats.pj

        canadaDrawGames.textContent = canadaStats.pe
        catarDrawGames.textContent = catarStats.pe
        //actualiza los puntos de ambos
        canadaPoints.textContent = canadaStats.pts
        catarPoints.textContent = catarStats.pts

    }
}

match10();

//accedemos a la card con el marcador
const matchTen = document.getElementById("match10")

//inyectamos el resultado actualizado
saveBtn10.addEventListener("click", (e) => {
    e.preventDefault();

    let gameTenSaved = ` 
                    <div class="match-rivals">
                    <div><img src="images/canada-bandera.png" ></div>
                        <div class="rival1team">${canadaStats.country}</div>
                        <p class="rival2score">${resultlMatch10.canada}<p/>
                        <p class="rival2score">${resultlMatch10.qatar}<p/>
                        <div class="rival2team">${catarStats.country}</div>
                        <div><img src="images/catar-bandera.png" ></div>
                    </div>`

    matchTen.innerHTML = gameTenSaved;

    saveToLocal10();

});

//LOCAL STORAGE//

function saveToLocal10() {
    localStorage.setItem("resultlMatch10", JSON.stringify(resultlMatch10));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("canadaSavedStats", JSON.stringify(canadaStats));
    localStorage.setItem("catarSavedStats", JSON.stringify(catarStats));
}

function loadFromLocal10() {
    //carga los datos guardados previamente 
    //scoreTeam1Value = localStorage.getItem("ScoreTeam1Value");
    //scoreTeam2Value = localStorage.getItem("ScoreTeam2Value");
    resultlMatch10 = JSON.parse(localStorage.getItem("resultlMatch10"));
    canadaStats = JSON.parse(localStorage.getItem("canadaSavedStats"));
    catarStats = JSON.parse(localStorage.getItem("catarSavedStats"));

    //recarga la UI con los datos cargados
    matchTen.innerHTML = ` 
                    <div class="match-rivals">
                    <div><img src="images/canada-bandera.png" ></div>
                        <div class="rival1team">${canadaStats.country}</div>
                        <p class="rival2score">${resultlMatch10.canada}<p/>
                        <p class="rival2score">${resultlMatch10.qatar}<p/>
                        <div class="rival2team">${catarStats.country}</div>
                        <div><img src="images/catar-bandera.png" ></div>
                    </div>`

    canadaPlayedGames.textContent = canadaStats.pj
    canadaWonGames.textContent = canadaStats.pg
    canadaDrawGames.textContent = canadaStats.pe
    canadaLostGames.textContent = canadaStats.pp
    canadaGoalDifference.textContent = canadaStats.dg
    canadaPoints.textContent = canadaStats.pts

    catarPlayedGames.textContent = catarStats.pj
    catarWonGames.textContent = catarStats.pg
    catarDrawGames.textContent = catarStats.pe
    catarLostGames.textContent = catarStats.pp
    catarGoalDifference.textContent = catarStats.dg
    catarPoints.textContent = catarStats.pts
}

//QINTO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match11() {
    scoreTeam21.addEventListener("change", function (e) {
        resultlMatch11.suiza = e.target.value
        checkWinner11();

    })

    scoreTeam22.addEventListener("change", function (e) {
        resultlMatch11.canada = e.target.value
        checkWinner11();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner11() {
    if (resultlMatch11.suiza === 0 || resultlMatch11.canada === 0) return;
    if (resultlMatch11.suiza > resultlMatch11.canada) {
        result = resultlMatch11.suiza - resultlMatch11.canada

        //actualizando stats del ganador
        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pg = suizaStats.pg + 1
        suizaStats.pts = suizaStats.pts + 3
        suizaStats.dg = suizaStats.dg + result

        //actualizando stats del perdedor
        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pp = canadaStats.pp + 1
        canadaStats.dg = canadaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        suizaPlayedGames.textContent = suizaStats.pj
        canadaPlayedGames.textContent = canadaStats.pj
        //actualiza los partidos ganados del ganador
        suizaWonGames.textContent = suizaStats.pg
        //actualiza los partidos perdidos del perdedor
        canadaLostGames.textContent = canadaStats.pp
        //actualiza la diferencia de gol de ambos
        suizaGoalDifference.textContent = suizaStats.dg
        canadaGoalDifference.textContent = canadaStats.dg
        //actualiza los puntos de ambos
        suizaPoints.textContent = suizaStats.pts
        canadaPoints.textContent = canadaStats.pts


    } else if (resultlMatch11.suiza < resultlMatch11.canada) {
        result = resultlMatch11.canada - resultlMatch11.suiza

        //actualizando stats del ganador
        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pg = canadaStats.pg + 1
        canadaStats.pts = canadaStats.pts + 3
        canadaStats.dg = canadaStats.dg + result

        //actualizando stats del perdedor
        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pp = suizaStats.pp + 1
        suizaStats.dg = suizaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        suizaPlayedGames.textContent = suizaStats.pj
        canadaPlayedGames.textContent = canadaStats.pj
        //actualiza los partidos ganados
        canadaWonGames.textContent = canadaStats.pg
        //actualiza los partidos perdidos
        suizaLostGames.textContent = suizaStats.pp
        //actualiza la diferencia de gol de ambos
        suizaGoalDifference.textContent = suizaStats.dg
        canadaGoalDifference.textContent = canadaStats.dg
        //actualiza los puntos de ambos
        suizaPoints.textContent = suizaStats.pts
        canadaPoints.textContent = canadaStats.pts

    } else {

        //actualizando stats ambos
        suizaStats.pj = suizaStats.pj + 1
        suizaStats.pe = suizaStats.pe + 1
        suizaStats.pts = suizaStats.pts + 1

        canadaStats.pj = canadaStats.pj + 1
        canadaStats.pe = canadaStats.pe + 1
        canadaStats.pts = canadaStats.pts + 1
        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        canadaPlayedGames.textContent = canadaStats.pj
        suizaPlayedGames.textContent = suizaStats.pj

        canadaDrawGames.textContent = canadaStats.pe
        suizaDrawGames.textContent = suizaStats.pe
        //actualiza los puntos de ambos
        canadaPoints.textContent = canadaStats.pts
        suizaPoints.textContent = suizaStats.pts

    }
}

match11();

//accedemos a la card con el marcador
const matchEleven = document.getElementById("match11")

//inyectamos el resultado actualizado
saveBtn11.addEventListener("click", (e) => {
    e.preventDefault();

    let gameElevenSaved = `
                    <div class="match-rivals">
                    <div><img src="images/suiza-bandera.png" ></div>
                        <div class="rival1team">${suizaStats.country}</div>
                        <p class="rival2score">${resultlMatch11.suiza}<p/>
                        <p class="rival2score">${resultlMatch11.canada}<p/>
                        <div class="rival2team">${canadaStats.country}</div>
                        <div><img src="images/canada-bandera.png" ></div>
                    </div>`
    matchEleven.innerHTML = gameElevenSaved;

    saveToLocal11();

});

//LOCAL STORAGE//

function saveToLocal11() {
    localStorage.setItem("resultlMatch11", JSON.stringify(resultlMatch11));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("canadaSavedStats", JSON.stringify(canadaStats));
    localStorage.setItem("suizaSavedStats", JSON.stringify(suizaStats));
}

function loadFromLocal11() {
    //carga los datos guardados previamente 
    resultlMatch11 = JSON.parse(localStorage.getItem("resultlMatch11"));
    canadaStats = JSON.parse(localStorage.getItem("canadaSavedStats"));
    suizaStats = JSON.parse(localStorage.getItem("suizaSavedStats"));

    //recarga la UI con los datos cargados
    matchEleven.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/suiza-bandera.png" ></div>
                        <div class="rival1team">${suizaStats.country}</div>
                        <p class="rival2score">${resultlMatch11.suiza}<p/>
                        <p class="rival2score">${resultlMatch11.canada}<p/>
                        <div class="rival2team">${canadaStats.country}</div>
                        <div><img src="images/canada-bandera.png" ></div>
                    </div>`

    canadaPlayedGames.textContent = canadaStats.pj
    canadaWonGames.textContent = canadaStats.pg
    canadaDrawGames.textContent = canadaStats.pe
    canadaLostGames.textContent = canadaStats.pp
    canadaGoalDifference.textContent = canadaStats.dg
    canadaPoints.textContent = canadaStats.pts

    suizaPlayedGames.textContent = suizaStats.pj
    suizaWonGames.textContent = suizaStats.pg
    suizaDrawGames.textContent = suizaStats.pe
    suizaLostGames.textContent = suizaStats.pp
    suizaGoalDifference.textContent = suizaStats.dg
    suizaPoints.textContent = suizaStats.pts
}

//SEXTO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match12() {
    scoreTeam23.addEventListener("change", function (e) {
        resultlMatch12.bosnia = e.target.value
        checkWinner12();

    })

    scoreTeam24.addEventListener("change", function (e) {
        resultlMatch12.qatar = e.target.value
        checkWinner12();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner12() {
    if (resultlMatch12.bosnia === 0 || resultlMatch12.qatar === 0) return;
    if (resultlMatch12.bosnia > resultlMatch12.qatar) {
        result = resultlMatch12.bosnia - resultlMatch12.qatar

        //actualizando stats del ganador
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pg = bosniaStats.pg + 1
        bosniaStats.pts = bosniaStats.pts + 3
        bosniaStats.dg = bosniaStats.dg + result

        //actualizando stats del perdedor
        catarStats.pj = catarStats.pj + 1
        catarStats.pp = catarStats.pp + 1
        catarStats.dg = catarStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        bosniaPlayedGames.textContent = bosniaStats.pj
        catarPlayedGames.textContent = catarStats.pj
        //actualiza los partidos ganados del ganador
        bosniaWonGames.textContent = bosniaStats.pg
        //actualiza los partidos perdidos del perdedor
        catarLostGames.textContent = catarStats.pp
        //actualiza la diferencia de gol de ambos
        bosniaGoalDifference.textContent = bosniaStats.dg
        catarGoalDifference.textContent = catarStats.dg
        //actualiza los puntos de ambos
        bosniaPoints.textContent = bosniaStats.pts
        catarPoints.textContent = catarStats.pts


    } else if (resultlMatch12.bosnia < resultlMatch12.qatar) {
        result = resultlMatch12.qatar - resultlMatch12.bosnia

        //actualizando stats del ganador
        catarStats.pj = catarStats.pj + 1
        catarStats.pg = catarStats.pg + 1
        catarStats.pts = catarStats.pts + 3
        catarStats.dg = catarStats.dg + result

        //actualizando stats del perdedor
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pp = bosniaStats.pp + 1
        bosniaStats.dg = bosniaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        bosniaPlayedGames.textContent = bosniaStats.pj
        catarPlayedGames.textContent = catarStats.pj
        //actualiza los partidos ganados
        catarWonGames.textContent = catarStats.pg
        //actualiza los partidos perdidos
        bosniaLostGames.textContent = bosniaStats.pp
        //actualiza la diferencia de gol de ambos
        bosniaGoalDifference.textContent = bosniaStats.dg
        catarGoalDifference.textContent = catarStats.dg
        //actualiza los puntos de ambos
        bosniaPoints.textContent = bosniaStats.pts
        catarPoints.textContent = catarStats.pts

    } else {

        //actualizando stats ambos
        bosniaStats.pj = bosniaStats.pj + 1
        bosniaStats.pe = bosniaStats.pe + 1
        bosniaStats.pts = bosniaStats.pts + 1

        catarStats.pj = catarStats.pj + 1
        catarStats.pe = catarStats.pe + 1
        catarStats.pts = catarStats.pts + 1
        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        catarPlayedGames.textContent = catarStats.pj
        bosniaPlayedGames.textContent = bosniaStats.pj

        catarDrawGames.textContent = catarStats.pe
        bosniaDrawGames.textContent = bosniaStats.pe
        //actualiza los puntos de ambos
        catarPoints.textContent = catarStats.pts
        bosniaPoints.textContent = bosniaStats.pts

    }
}

match12();

//accedemos a la card con el marcador
const matchTwelve = document.getElementById("match12")

//inyectamos el resultado actualizado
saveBtn12.addEventListener("click", (e) => {
    e.preventDefault();

    let gameTwelveSaved = `
                    <div class="match-rivals">
                    <div><img src="images/bosnia-bandera.png" ></div>
                        <div class="rival1team">${bosniaStats.country}</div>
                        <p class="rival2score">${resultlMatch12.bosnia}<p/>
                        <p class="rival2score">${resultlMatch12.qatar}<p/>
                        <div class="rival2team">${catarStats.country}</div>
                        <div><img src="images/catar-bandera.png" ></div>
                    </div>`
    matchTwelve.innerHTML = gameTwelveSaved;

    saveToLocal12();

});

//LOCAL STORAGE//

function saveToLocal12() {
    localStorage.setItem("resultlMatch12", JSON.stringify(resultlMatch12));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("bosniaSavedStats", JSON.stringify(bosniaStats));
    localStorage.setItem("catarSavedStats", JSON.stringify(catarStats));
}

function loadFromLocal12() {
    //carga los datos guardados previamente 
    resultlMatch12 = JSON.parse(localStorage.getItem("resultlMatch12"));
    bosniaStats = JSON.parse(localStorage.getItem("bosniaSavedStats"));
    catarStats = JSON.parse(localStorage.getItem("catarSavedStats"));

    //recarga la UI con los datos cargados
    matchTwelve.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/bosnia-bandera.png" ></div>
                        <div class="rival1team">${bosniaStats.country}</div>
                        <p class="rival2score">${resultlMatch12.bosnia}<p/>
                        <p class="rival2score">${resultlMatch12.qatar}<p/>
                        <div class="rival2team">${catarStats.country}</div>
                        <div><img src="images/catar-bandera.png" ></div>
                    </div>`

    bosniaPlayedGames.textContent = bosniaStats.pj
    bosniaWonGames.textContent = bosniaStats.pg
    bosniaDrawGames.textContent = bosniaStats.pe
    bosniaLostGames.textContent = bosniaStats.pp
    bosniaGoalDifference.textContent = bosniaStats.dg
    bosniaPoints.textContent = bosniaStats.pts

    catarPlayedGames.textContent = catarStats.pj
    catarWonGames.textContent = catarStats.pg
    catarDrawGames.textContent = catarStats.pe
    catarLostGames.textContent = catarStats.pp
    catarGoalDifference.textContent = catarStats.dg
    catarPoints.textContent = catarStats.pts
}

//GRUPO C //

//PRIMER PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match13() {
    scoreTeam25.addEventListener("change", function (e) {
        resultlMatch13.brasil = e.target.value
        checkWinner13();

    })

    scoreTeam26.addEventListener("change", function (e) {
        resultlMatch13.marruecos = e.target.value
        checkWinner13();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner13() {
    if (resultlMatch13.brasil === 0 || resultlMatch13.marruecos === 0) return;
    if (resultlMatch13.brasil > resultlMatch13.marruecos) {
        result = resultlMatch13.brasil - resultlMatch13.marruecos

        //actualizando stats del ganador
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pg = brasilStats.pg + 1
        brasilStats.pts = brasilStats.pts + 3
        brasilStats.dg = result

        //actualizando stats del perdedor
        marruecosStats.pj = marruecosStats.pj + 1
        marruecosStats.pp = marruecosStats.pp + 1
        marruecosStats.dg = -result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        brasilPlayedGames.textContent = brasilStats.pj
        marruecosPlayedGames.textContent = marruecosStats.pj
        //actualiza los partidos del ganador
        brasilWonGames.textContent = brasilStats.pg
        //actualiza los partidos del perdedor
        marruecosLostGames.textContent = marruecosStats.pp
        //actualiza la diferencia de gol de ambos
        brasilGoalDifference.textContent = brasilStats.dg
        marruecosGoalDifference.textContent = marruecosStats.dg
        //actualiza los puntos de ambos
        brasilPoints.textContent = brasilStats.pts
        marruecosPoints.textContent = marruecosStats.pts


    } else if (resultlMatch13.brasil < resultlMatch13.marruecos) {
        result = resultlMatch13.marruecos - resultlMatch13.brasil

        //actualizando stats del perdedor
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pp = brasilStats.pp + 1
        brasilStats.dg = -result

        //actualizando stats del ganador
        marruecosStats.pj = marruecosStats.pj + 1
        marruecosStats.pg = marruecosStats.pg + 1
        marruecosStats.pts = marruecosStats.pts + 3
        marruecosStats.dg = result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        brasilPlayedGames.textContent = brasilStats.pj
        marruecosPlayedGames.textContent = marruecosStats.pj
        //actualiza los partidos ganados de sudafrica
        marruecosWonGames.textContent = marruecosStats.pg
        //actualiza los partidos perdidos de mexico
        brasilLostGames.textContent = brasilStats.pp
        //actualiza la diferencia de gol de ambos
        brasilGoalDifference.textContent = brasilStats.dg
        marruecosGoalDifference.textContent = marruecosStats.dg
        //actualiza los puntos de ambo
        brasilPoints.textContent = brasilStats.pts
        marruecosPoints.textContent = marruecosStats.pts

    } else {


        //actualizando stats de mexico
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pe = brasilStats.pe + 1
        brasilStats.pts = brasilStats.pts + 1

        //actualizando stats de sudafrica
        marruecosStats.pj = marruecosStats.pj + 1
        marruecosStats.pe = marruecosStats.pe + 1
        marruecosStats.pts = marruecosStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        brasilPlayedGames.textContent = brasilStats.pj
        marruecosPlayedGames.textContent = marruecosStats.pj
        //actualiza los partidos empatados de mexico
        brasilDrawGames.textContent = brasilStats.pe
        marruecosDrawGames.textContent = marruecosStats.pe
        //actualiza los puntos de ambos
        brasilPoints.textContent = brasilStats.pts
        marruecosPoints.textContent = marruecosStats.pts

    }
}

match13();

//accedemos a la card con el marcador
const matchThirdteen = document.getElementById("match13")

//inyectamos el resultado actualizado
saveBtn13.addEventListener("click", (e) => {
    e.preventDefault();

    let game13Saved = ` 
                    <div class="match-rivals">
                    <div><img src="images/brasil-bandera.png" ></div>
                        <div class="rival1team">${brasilStats.country}</div>
                        <p class="rival2score">${resultlMatch13.brasil}<p/>
                        <p class="rival2score">${resultlMatch13.marruecos}<p/>
                        <div class="rival2team">${marruecosStats.country}</div>
                        <div><img src="images/marruecos-bandera.png" ></div>
                    </div>`

    matchThirdteen.innerHTML = game13Saved;

    saveToLocal13();

});

//LOCAL STORAGE//

function saveToLocal13() {
    //guarda el resultado del partido y las stats de ambos equipos
    localStorage.setItem("resultlMatch13", JSON.stringify(resultlMatch13));
    localStorage.setItem("brasilSavedStats", JSON.stringify(brasilStats));
    localStorage.setItem("marruecosSavedStats", JSON.stringify(marruecosStats));
};

function loadFromLocal13() {
    //carga los datos guardados previamente 
    resultlMatch13 = JSON.parse(localStorage.getItem("resultlMatch13"));
    brasilStats = JSON.parse(localStorage.getItem("brasilSavedStats"));
    marruecosStats = JSON.parse(localStorage.getItem("marruecosSavedStats"));

    //recarga la UI con los datos cargados
    matchThirdteen.innerHTML = ` 
                    <div class="match-rivals">
                    <div><img src="images/brasil-bandera.png" ></div>
                        <div class="rival1team">${brasilStats.country}</div>
                        <p class="rival2score">${resultlMatch13.brasil}<p/>
                        <p class="rival2score">${resultlMatch13.marruecos}<p/>
                        <div class="rival2team">${marruecosStats.country}</div>
                        <div><img src="images/marruecos-bandera.png" ></div>
                    </div>`

    brasilPlayedGames.textContent = brasilStats.pj
    brasilWonGames.textContent = brasilStats.pg
    brasilDrawGames.textContent = brasilStats.pe
    brasilLostGames.textContent = brasilStats.pp
    brasilGoalDifference.textContent = brasilStats.dg
    brasilPoints.textContent = brasilStats.pts

    marruecosPlayedGames.textContent = marruecosStats.pj
    marruecosWonGames.textContent = marruecosStats.pg
    marruecosDrawGames.textContent = marruecosStats.pe
    marruecosLostGames.textContent = marruecosStats.pp
    marruecosGoalDifference.textContent = marruecosStats.dg
    marruecosPoints.textContent = marruecosStats.pts
};

//SEGUNDO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match14() {
    scoreTeam27.addEventListener("change", function (e) {
        resultlMatch14.haiti = e.target.value
        checkWinner14();

    })

    scoreTeam28.addEventListener("change", function (e) {
        resultlMatch14.escocia = e.target.value
        checkWinner14();
    })

}

//funcion para validar quien gano y actualizar la UI
function checkWinner14() {
    if (resultlMatch14.haiti === 0 || resultlMatch14.escocia === 0) return;
    if (resultlMatch14.haiti > resultlMatch14.escocia) {
        result = resultlMatch14.haiti - resultlMatch14.escocia

        //actualizando stats del ganador
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pg = haitiStats.pg + 1
        haitiStats.pts = haitiStats.pts + 3
        haitiStats.dg = result

        //actualizando stats del perdedor
        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pp = escociaStats.pp + 1
        escociaStats.dg = -result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        haitiPlayedGames.textContent = haitiStats.pj
        escociaPlayedGames.textContent = escociaStats.pj
        //actualiza los partidos del ganador
        haitiWonGames.textContent = haitiStats.pg
        //actualiza los partidos del perdedor
        escociaLostGames.textContent = escociaStats.pp
        //actualiza la diferencia de gol de ambos
        haitiGoalDifference.textContent = haitiStats.dg
        escociaGoalDifference.textContent = escociaStats.dg
        //actualiza los puntos de ambos
        haitiPoints.textContent = haitiStats.pts
        escociaPoints.textContent = escociaStats.pts


    } else if (resultlMatch14.haiti < resultlMatch14.escocia) {
        result = resultlMatch14.escocia - resultlMatch14.haiti

        //actualizando stats del perdedor
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pp = haitiStats.pp + 1
        haitiStats.dg = -result

        //actualizando stats del ganador
        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pg = escociaStats.pg + 1
        escociaStats.pts = escociaStats.pts + 3
        escociaStats.dg = result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        haitiPlayedGames.textContent = haitiStats.pj
        escociaPlayedGames.textContent = escociaStats.pj
        //actualiza los partidos ganados de sudafrica
        escociaWonGames.textContent = escociaStats.pg
        //actualiza los partidos perdidos de mexico
        haitiLostGames.textContent = haitiStats.pp
        //actualiza la diferencia de gol de ambos
        haitiGoalDifference.textContent = haitiStats.dg
        escociaGoalDifference.textContent = escociaStats.dg
        //actualiza los puntos de ambo
        haitiPoints.textContent = haitiStats.pts
        escociaPoints.textContent = escociaStats.pts

    } else {

        //actualizando stats de mexico
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pe = haitiStats.pe + 1
        haitiStats.pts = haitiStats.pts + 1

        //actualizando stats de sudafrica
        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pe = escociaStats.pe + 1
        escociaStats.pts = escociaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        haitiPlayedGames.textContent = haitiStats.pj
        escociaPlayedGames.textContent = escociaStats.pj
        //actualiza los partidos empatados de mexico
        haitiDrawGames.textContent = haitiStats.pe
        escociaDrawGames.textContent = escociaStats.pe
        //actualiza los puntos de ambos
        haitiPoints.textContent = haitiStats.pts
        escociaPoints.textContent = escociaStats.pts

    }
}

match14();

//accedemos a la card con el marcador
const matchFourTeen = document.getElementById("match14")

//inyectamos el resultado actualizado
saveBtn14.addEventListener("click", (e) => {
    e.preventDefault();

    let game14Saved = `
                    <div class="match-rivals">
                    <div><img src="images/haiti-bandera.png" ></div>
                        <div class="rival1team">${haitiStats.country}</div>
                        <p class="rival2score">${resultlMatch14.haiti}<p/>
                        <p class="rival2score">${resultlMatch14.escocia}<p/>
                        <div class="rival2team">${escociaStats.country}</div>
                        <div><img src="images/escocia-bandera.png" ></div>
                    </div>`

    matchFourTeen.innerHTML = game14Saved;

    saveToLocal14();

});

//LOCAL STORAGE//

function saveToLocal14() {
    //guarda el resultado del partido y las stats de ambos equipos
    localStorage.setItem("resultlMatch14", JSON.stringify(resultlMatch14));
    localStorage.setItem("haitiSavedStats", JSON.stringify(haitiStats));
    localStorage.setItem("escociaSavedStats", JSON.stringify(escociaStats));
};

function loadFromLocal14() {
    //carga los datos guardados previamente 
    resultlMatch14 = JSON.parse(localStorage.getItem("resultlMatch14"));
    haitiStats = JSON.parse(localStorage.getItem("haitiSavedStats"));
    escociaStats = JSON.parse(localStorage.getItem("escociaSavedStats"));

    //recarga la UI con los datos cargados
    matchFourTeen.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/haiti-bandera.png" ></div>
                        <div class="rival1team">${haitiStats.country}</div>
                        <p class="rival2score">${resultlMatch14.haiti}<p/>
                        <p class="rival2score">${resultlMatch14.escocia}<p/>
                        <div class="rival2team">${escociaStats.country}</div>
                        <div><img src="images/escocia-bandera.png" ></div>
                    </div>`

    haitiPlayedGames.textContent = haitiStats.pj
    haitiWonGames.textContent = haitiStats.pg
    haitiDrawGames.textContent = haitiStats.pe
    haitiLostGames.textContent = haitiStats.pp
    haitiGoalDifference.textContent = haitiStats.dg
    haitiPoints.textContent = haitiStats.pts

    escociaPlayedGames.textContent = escociaStats.pj
    escociaWonGames.textContent = escociaStats.pg
    escociaDrawGames.textContent = escociaStats.pe
    escociaLostGames.textContent = escociaStats.pp
    escociaGoalDifference.textContent = escociaStats.dg
    escociaPoints.textContent = escociaStats.pts
};

//TERCER PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match15() {
    scoreTeam29.addEventListener("change", function (e) {
        resultlMatch15.escocia = e.target.value
        checkWinner15();

    })

    scoreTeam30.addEventListener("change", function (e) {
        resultlMatch15.marruecos = e.target.value
        checkWinner15();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner15() {
    if (resultlMatch15.escocia === 0 || resultlMatch15.marruecos === 0) return;
    if (resultlMatch15.escocia > resultlMatch15.marruecos) {
        result = resultlMatch15.escocia - resultlMatch15.marruecos

        //actualizando stats del ganador
        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pg = escociaStats.pg + 1
        escociaStats.pts = escociaStats.pts + 3
        escociaStats.dg = escociaStats.dg + result

        //actualizando stats del perdedor
        marruecosStats.pj = marruecosStats.pj + 1
        marruecosStats.pp = marruecosStats.pp + 1
        marruecosStats.dg = marruecosStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        escociaPlayedGames.textContent = escociaStats.pj
        marruecosPlayedGames.textContent = marruecosStats.pj
        //actualiza los partidos ganados del ganador
        escociaWonGames.textContent = escociaStats.pg
        //actualiza los partidos perdidos del perdedor
        marruecosLostGames.textContent = marruecosStats.pp
        //actualiza la diferencia de gol de ambos
        escociaGoalDifference.textContent = escociaStats.dg
        marruecosGoalDifference.textContent = marruecosStats.dg
        //actualiza los puntos de ambos
        escociaPoints.textContent = escociaStats.pts
        marruecosPoints.textContent = marruecosStats.pts


    } else if (resultlMatch15.escocia < resultlMatch15.marruecos) {
        result = resultlMatch15.marruecos - resultlMatch15.escocia

        //actualizando stats del ganador
        marruecosStats.pj = marruecosStats.pj + 1
        marruecosStats.pg = marruecosStats.pg + 1
        marruecosStats.pts = marruecosStats.pts + 3
        marruecosStats.dg = marruecosStats.dg + result

        //actualizando stats del perdedor
        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pp = escociaStats.pp + 1
        escociaStats.dg = escociaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        escociaPlayedGames.textContent = escociaStats.pj
        marruecosPlayedGames.textContent = marruecosStats.pj
        //actualiza los partidos ganados
        marruecosWonGames.textContent = marruecosStats.pg
        //actualiza los partidos perdidos
        escociaLostGames.textContent = escociaStats.pp
        //actualiza la diferencia de gol de ambos
        escociaGoalDifference.textContent = escociaStats.dg
        marruecosGoalDifference.textContent = marruecosStats.dg
        //actualiza los puntos de ambos
        escociaPoints.textContent = escociaStats.pts
        marruecosPoints.textContent = marruecosStats.pts

    } else {

        //actualizando stats ambos
        marruecosStats.pj = marruecosStats.pj + 1
        marruecosStats.pe = marruecosStats.pe + 1
        marruecosStats.pts = marruecosStats.pts + 1

        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pe = escociaStats.pe + 1
        escociaStats.pts = escociaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        escociaPlayedGames.textContent = escociaStats.pj
        marruecosPlayedGames.textContent = marruecosStats.pj
        //actualiza los partidos empatados de mexico
        escociaDrawGames.textContent = escociaStats.pe
        marruecosDrawGames.textContent = marruecosStats.pe
        //actualiza los puntos de ambos
        escociaPoints.textContent = escociaStats.pts
        marruecosPoints.textContent = marruecosStats.pts

    }
}

match15();

//accedemos a la card con el marcador
const matchFiveTeen = document.getElementById("match15")

//inyectamos el resultado actualizado
saveBtn15.addEventListener("click", (e) => {
    e.preventDefault();

    let game15Saved = `
                    <div class="match-rivals">
                    <div><img src="images/escocia-bandera.png" ></div>
                        <div class="rival1team">${escociaStats.country}</div>
                        <p class="rival2score">${resultlMatch15.escocia}<p/>
                        <p class="rival2score">${resultlMatch15.marruecos}<p/>
                        <div class="rival2team">${marruecosStats.country}</div>
                        <div><img src="images/marruecos-bandera.png" ></div>
                    </div>`

    matchFiveTeen.innerHTML = game15Saved;

    saveToLocal15();

});

//LOCAL STORAGE//

function saveToLocal15() {
    localStorage.setItem("resultlMatch15", JSON.stringify(resultlMatch15));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("escociaSavedStats", JSON.stringify(escociaStats));
    localStorage.setItem("marruecosSavedStats", JSON.stringify(marruecosStats));
}

function loadFromLocal15() {
    //carga los datos guardados previamente 
    resultlMatch15 = JSON.parse(localStorage.getItem("resultlMatch15"));
    escociaStats = JSON.parse(localStorage.getItem("escociaSavedStats"));
    marruecosStats = JSON.parse(localStorage.getItem("marruecosSavedStats"));

    //recarga la UI con los datos cargados
    matchFiveTeen.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/escocia-bandera.png" ></div>
                        <div class="rival1team">${escociaStats.country}</div>
                        <p class="rival2score">${resultlMatch15.escocia}<p/>
                        <p class="rival2score">${resultlMatch15.marruecos}<p/>
                        <div class="rival2team">${marruecosStats.country}</div>
                        <div><img src="images/marruecos-bandera.png" ></div>
                    </div>`

    escociaPlayedGames.textContent = escociaStats.pj
    escociaWonGames.textContent = escociaStats.pg
    escociaDrawGames.textContent = escociaStats.pe
    escociaLostGames.textContent = escociaStats.pp
    escociaGoalDifference.textContent = escociaStats.dg
    escociaPoints.textContent = escociaStats.pts

    marruecosPlayedGames.textContent = marruecosStats.pj
    marruecosWonGames.textContent = marruecosStats.pg
    marruecosDrawGames.textContent = marruecosStats.pe
    marruecosLostGames.textContent = marruecosStats.pp
    marruecosGoalDifference.textContent = marruecosStats.dg
    marruecosPoints.textContent = marruecosStats.pts
}

//CUARTO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match16() {
    scoreTeam31.addEventListener("change", function (e) {
        resultlMatch16.brasil = e.target.value
        checkWinner16();

    })

    scoreTeam32.addEventListener("change", function (e) {
        resultlMatch16.haiti = e.target.value
        checkWinner16();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner16() {
    if (resultlMatch16.brasil === 0 || resultlMatch16.haiti === 0) return;
    if (resultlMatch16.brasil > resultlMatch16.haiti) {
        result = resultlMatch16.brasil - resultlMatch16.haiti

        //actualizando stats del ganador
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pg = brasilStats.pg + 1
        brasilStats.pts = brasilStats.pts + 3
        brasilStats.dg = brasilStats.dg + result

        //actualizando stats del perdedor
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pp = haitiStats.pp + 1
        haitiStats.dg = haitiStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        brasilPlayedGames.textContent = brasilStats.pj
        haitiPlayedGames.textContent = haitiStats.pj
        //actualiza los partidos ganados del ganador
        brasilWonGames.textContent = brasilStats.pg
        //actualiza los partidos perdidos del perdedor
        haitiLostGames.textContent = haitiStats.pp
        //actualiza la diferencia de gol de ambos
        brasilGoalDifference.textContent = brasilStats.dg
        haitiGoalDifference.textContent = haitiStats.dg
        //actualiza los puntos de ambos
        brasilPoints.textContent = brasilStats.pts
        haitiPoints.textContent = haitiStats.pts


    } else if (resultlMatch16.brasil < resultlMatch16.haiti) {
        result = resultlMatch16.haiti - resultlMatch16.brasil

        //actualizando stats del ganador
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pg = haitiStats.pg + 1
        haitiStats.pts = haitiStats.pts + 3
        haitiStats.dg = haitiStats.dg + result

        //actualizando stats del perdedor
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pp = brasilStats.pp + 1
        brasilStats.dg = brasilStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        brasilPlayedGames.textContent = brasilStats.pj
        haitiPlayedGames.textContent = haitiStats.pj
        //actualiza los partidos ganados
        haitiWonGames.textContent = haitiStats.pg
        //actualiza los partidos perdidos
        brasilLostGames.textContent = brasilStats.pp
        //actualiza la diferencia de gol de ambos
        brasilGoalDifference.textContent = brasilStats.dg
        haitiGoalDifference.textContent = haitiStats.dg
        //actualiza los puntos de ambos
        brasilPoints.textContent = brasilStats.pts
        haitiPoints.textContent = haitiStats.pts

    } else {

        //actualizando stats ambos
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pe = haitiStats.pe + 1
        haitiStats.pts = haitiStats.pts + 1

        brasilStats.pj = brasilStats.pj + 1
        brasiltats.pe = brasilStats.pe + 1
        brasilStats.pts = brasilStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        brasilPlayedGames.textContent = brasilStats.pj
        haitiPlayedGames.textContent = haitiStats.pj
        //actualiza los partidos empatados de mexico
        brasilDrawGames.textContent = brasilStats.pe
        haitiDrawGames.textContent = haitiStats.pe
        //actualiza los puntos de ambos
        brasilPoints.textContent = brasilStats.pts
        haitiPoints.textContent = haitiStats.pts

    }
}

match16();

//accedemos a la card con el marcador
const matchSixTeen = document.getElementById("match16")

//inyectamos el resultado actualizado
saveBtn16.addEventListener("click", (e) => {
    e.preventDefault();

    let game16Saved = `
                    <div class="match-rivals">
                    <div><img src="images/brasil-bandera.png" ></div>
                        <div class="rival1team">${brasilStats.country}</div>
                        <p class="rival2score">${resultlMatch16.brasil}<p/>
                        <p class="rival2score">${resultlMatch16.haiti}<p/>
                        <div class="rival2team">${haitiStats.country}</div>
                        <div><img src="images/haiti-bandera.png" ></div>
                    </div>`

    matchSixTeen.innerHTML = game16Saved;

    saveToLocal16();

});

//LOCAL STORAGE//

function saveToLocal16() {
    localStorage.setItem("resultlMatch16", JSON.stringify(resultlMatch16));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("brasilSavedStats", JSON.stringify(brasilStats));
    localStorage.setItem("haitiSavedStats", JSON.stringify(haitiStats));
}

function loadFromLocal16() {
    //carga los datos guardados previamente 
    resultlMatch16 = JSON.parse(localStorage.getItem("resultlMatch16"));
    brasilStats = JSON.parse(localStorage.getItem("brasilSavedStats"));
    haitiStats = JSON.parse(localStorage.getItem("haitiSavedStats"));

    //recarga la UI con los datos cargados
    matchSixTeen.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/brasil-bandera.png" ></div>
                        <div class="rival1team">${brasilStats.country}</div>
                        <p class="rival2score">${resultlMatch16.brasil}<p/>
                        <p class="rival2score">${resultlMatch16.haiti}<p/>
                        <div class="rival2team">${haitiStats.country}</div>
                        <div><img src="images/haiti-bandera.png" ></div>
                    </div>`

    brasilPlayedGames.textContent = brasilStats.pj
    brasilWonGames.textContent = brasilStats.pg
    brasilDrawGames.textContent = brasilStats.pe
    brasilLostGames.textContent = brasilStats.pp
    brasilGoalDifference.textContent = brasilStats.dg
    brasilPoints.textContent = brasilStats.pts

    haitiPlayedGames.textContent = haitiStats.pj
    haitiWonGames.textContent = haitiStats.pg
    haitiDrawGames.textContent = haitiStats.pe
    haitiLostGames.textContent = haitiStats.pp
    haitiGoalDifference.textContent = haitiStats.dg
    haitiPoints.textContent = haitiStats.pts
}

//QUINTO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match17() {
    scoreTeam33.addEventListener("change", function (e) {
        resultlMatch17.escocia = e.target.value
        checkWinner17();

    })

    scoreTeam34.addEventListener("change", function (e) {
        resultlMatch17.brasil = e.target.value
        checkWinner17();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner17() {
    if (resultlMatch17.escocia === 0 || resultlMatch17.brasil === 0) return;
    if (resultlMatch17.escocia > resultlMatch17.brasil) {
        result = resultlMatch17.escocia - resultlMatch17.brasil

        //actualizando stats del ganador
        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pg = escociaStats.pg + 1
        escociaStats.pts = escociaStats.pts + 3
        escociaStats.dg = escociaStats.dg + result

        //actualizando stats del perdedor
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pp = brasilStats.pp + 1
        brasilStats.dg = brasilStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        escociaPlayedGames.textContent = escociaStats.pj
        brasilPlayedGames.textContent = brasilStats.pj
        //actualiza los partidos ganados del ganador
        escociaWonGames.textContent = escociaStats.pg
        //actualiza los partidos perdidos del perdedor
        brasilLostGames.textContent = brasilStats.pp
        //actualiza la diferencia de gol de ambos
        escociaGoalDifference.textContent = escociaStats.dg
        brasilGoalDifference.textContent = brasilStats.dg
        //actualiza los puntos de ambos
        escociaPoints.textContent = escociaStats.pts
        brasilPoints.textContent = brasilStats.pts


    } else if (resultlMatch17.escocia < resultlMatch17.brasil) {
        result = resultlMatch17.brasil - resultlMatch17.escocia

        //actualizando stats del ganador
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pg = brasilStats.pg + 1
        brasilStats.pts = brasilStats.pts + 3
        brasilStats.dg = brasilStats.dg + result

        //actualizando stats del perdedor
        escociaStats.pj = escociaStats.pj + 1
        escociaStats.pp = escociaStats.pp + 1
        escociaStats.dg = escociaStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        escociaPlayedGames.textContent = escociaStats.pj
        brasilPlayedGames.textContent = brasilStats.pj
        //actualiza los partidos ganados
        brasilWonGames.textContent = brasilStats.pg
        //actualiza los partidos perdidos
        escociaLostGames.textContent = escociaStats.pp
        //actualiza la diferencia de gol de ambos
        escociaGoalDifference.textContent = escociaStats.dg
        brasilGoalDifference.textContent = brasilStats.dg
        //actualiza los puntos de ambos
        escociaPoints.textContent = escociaStats.pts
        brasilPoints.textContent = brasilStats.pts

    } else {

        //actualizando stats ambos
        brasilStats.pj = brasilStats.pj + 1
        brasilStats.pe = brasilStats.pe + 1
        brasilStats.pts = brasilStats.pts + 1

        escociaStats.pj = escociaStats.pj + 1
        escociatats.pe = escociaStats.pe + 1
        escociaStats.pts = escociaStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        escociaPlayedGames.textContent = escociaStats.pj
        brasilPlayedGames.textContent = brasilStats.pj
        //actualiza los partidos empatados de mexico
        escociaDrawGames.textContent = escociaStats.pe
        brasilDrawGames.textContent = brasilStats.pe
        //actualiza los puntos de ambos
        escociaPoints.textContent = escociaStats.pts
        brasilPoints.textContent = brasilStats.pts

    }
}

match17();

//accedemos a la card con el marcador
const matchSevenTeen = document.getElementById("match17")

//inyectamos el resultado actualizado
saveBtn17.addEventListener("click", (e) => {
    e.preventDefault();

    let game17Saved = `
                    <div class="match-rivals">
                    <div><img src="images/escocia-bandera.png" ></div>
                        <div class="rival1team">${escociaStats.country}</div>
                        <p class="rival2score">${resultlMatch17.escocia}<p/>
                        <p class="rival2score">${resultlMatch17.brasil}<p/>
                        <div class="rival2team">${brasilStats.country}</div>
                        <div><img src="images/brasil-bandera.png" ></div>
                    </div>`

    matchSevenTeen.innerHTML = game17Saved;

    saveToLocal17();

});

//LOCAL STORAGE//

function saveToLocal17() {
    localStorage.setItem("resultlMatch17", JSON.stringify(resultlMatch17));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("brasilSavedStats", JSON.stringify(brasilStats));
    localStorage.setItem("escociaSavedStats", JSON.stringify(escociaStats));
}

function loadFromLocal17() {
    //carga los datos guardados previamente 
    resultlMatch17 = JSON.parse(localStorage.getItem("resultlMatch17"));
    brasilStats = JSON.parse(localStorage.getItem("brasilSavedStats"));
    escociaStats = JSON.parse(localStorage.getItem("escociaSavedStats"));

    //recarga la UI con los datos cargados
    matchSevenTeen.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/escocia-bandera.png" ></div>
                        <div class="rival1team">${escociaStats.country}</div>
                        <p class="rival2score">${resultlMatch17.escocia}<p/>
                        <p class="rival2score">${resultlMatch17.brasil}<p/>
                        <div class="rival2team">${brasilStats.country}</div>
                        <div><img src="images/brasil-bandera.png" ></div>
                    </div>`

    brasilPlayedGames.textContent = brasilStats.pj
    brasilWonGames.textContent = brasilStats.pg
    brasilDrawGames.textContent = brasilStats.pe
    brasilLostGames.textContent = brasilStats.pp
    brasilGoalDifference.textContent = brasilStats.dg
    brasilPoints.textContent = brasilStats.pts

    escociaPlayedGames.textContent = escociaStats.pj
    escociaWonGames.textContent = escociaStats.pg
    escociaDrawGames.textContent = escociaStats.pe
    escociaLostGames.textContent = escociaStats.pp
    escociaGoalDifference.textContent = escociaStats.dg
    escociaPoints.textContent = escociaStats.pts
}

//SEXTO PARTIDO//

//funcion para caputrar el valor de los imputs--resultado final del partido//

function match18() {
    scoreTeam35.addEventListener("change", function (e) {
        resultlMatch18.marruecos = e.target.value
        checkWinner18();

    })

    scoreTeam36.addEventListener("change", function (e) {
        resultlMatch18.haiti = e.target.value
        checkWinner18();
    })

}


//funcion para validar quien gano y actualizar la UI
function checkWinner18() {
    if (resultlMatch18.marruecos === 0 || resultlMatch18.haiti === 0) return;
    if (resultlMatch18.marruecos > resultlMatch18.haiti) {
        result = resultlMatch18.marruecos - resultlMatch18.haiti

        //actualizando stats del ganador
        marruecosStats.pj = marruecosStats.pj + 1
        marruecosStats.pg = marruecosStats.pg + 1
        marruecosStats.pts = marruecosStats.pts + 3
        marruecosStats.dg = marruecosStats.dg + result

        //actualizando stats del perdedor
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pp = haitiStats.pp + 1
        haitiStats.dg = haitiStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        marruecosPlayedGames.textContent = marruecosStats.pj
        haitiPlayedGames.textContent = haitiStats.pj
        //actualiza los partidos ganados del ganador
        marruecosWonGames.textContent = marruecosStats.pg
        //actualiza los partidos perdidos del perdedor
        haitiLostGames.textContent = haitiStats.pp
        //actualiza la diferencia de gol de ambos
        marruecosGoalDifference.textContent = marruecosStats.dg
        haitiGoalDifference.textContent = haitiStats.dg
        //actualiza los puntos de ambos
        marruecosPoints.textContent = marruecosStats.pts
        haitiPoints.textContent = haitiStats.pts


    } else if (resultlMatch18.marruecos < resultlMatch18.haiti) {
        result = resultlMatch18.haiti - resultlMatch18.marruecos

        //actualizando stats del ganador
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pg = haitiStats.pg + 1
        haitiStats.pts = haitiStats.pts + 3
        haitiStats.dg = haitiStats.dg + result

        //actualizando stats del perdedor
        emarruecostats.pj = marruecosStats.pj + 1
        marruecosStats.pp = marruecosStats.pp + 1
        marruecosStats.dg = marruecosStats.dg - result

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        marruecosPlayedGames.textContent = marruecosStats.pj
        haitiPlayedGames.textContent = haitiStats.pj
        //actualiza los partidos ganados
        haitiWonGames.textContent = haitiStats.pg
        //actualiza los partidos perdidos
        marruecosLostGames.textContent = marruecosStats.pp
        //actualiza la diferencia de gol de ambos
        marruecosGoalDifference.textContent = marruecosStats.dg
        haitiGoalDifference.textContent = haitiStats.dg
        //actualiza los puntos de ambos
        marruecosPoints.textContent = marruecosStats.pts
        haitiPoints.textContent = haitiStats.pts

    } else {

        //actualizando stats ambos
        haitiStats.pj = haitiStats.pj + 1
        haitiStats.pe = haitiStats.pe + 1
        haitiStats.pts = haitiStats.pts + 1

        marruecosStats.pj = marruecosStats.pj + 1
        marruecostats.pe = marruecosStats.pe + 1
        marruecosStats.pts = marruecosStats.pts + 1

        //ACTUALIZANDO LA UI CON LAS STATS DE AMBOS

        //actualiza partidos jugados de ambos
        marruecosPlayedGames.textContent = marruecosStats.pj
        haitiPlayedGames.textContent = haitiStats.pj
        //actualiza los partidos empatados de mexico
        marruecosDrawGames.textContent = marruecosStats.pe
        haitiDrawGames.textContent = haitiStats.pe
        //actualiza los puntos de ambos
        marruecosPoints.textContent = marruecosStats.pts
        haitiPoints.textContent = haitiStats.pts

    }
}

match18();

//accedemos a la card con el marcador
const matchEightTeen = document.getElementById("match18")

//inyectamos el resultado actualizado
saveBtn18.addEventListener("click", (e) => {
    e.preventDefault();

    let game18Saved = `
                    <div class="match-rivals">
                    <div><img src="images/marruecos-bandera.png" ></div>
                        <div class="rival1team">${marruecosStats.country}</div>
                        <p class="rival2score">${resultlMatch18.marruecos}<p/>
                        <p class="rival2score">${resultlMatch18.haiti}<p/>
                        <div class="rival2team">${haitiStats.country}</div>
                        <div><img src="images/haiti-bandera.png" ></div>
                    </div>`

    matchEightTeen.innerHTML = game18Saved;

    saveToLocal18();

});

//LOCAL STORAGE//

function saveToLocal18() {
    localStorage.setItem("resultlMatch18", JSON.stringify(resultlMatch18));
    //guarda las stats de amgbos luego del partido en local storage
    localStorage.setItem("haitiSavedStats", JSON.stringify(haitiStats));
    localStorage.setItem("marruecosSavedStats", JSON.stringify(marruecosStats));
}

function loadFromLocal18() {
    //carga los datos guardados previamente 
    resultlMatch18 = JSON.parse(localStorage.getItem("resultlMatch18"));
    haitiStats = JSON.parse(localStorage.getItem("haitiSavedStats"));
    marruecosStats = JSON.parse(localStorage.getItem("marruecosSavedStats"));

    //recarga la UI con los datos cargados
    matchEightTeen.innerHTML = `
                    <div class="match-rivals">
                    <div><img src="images/marruecos-bandera.png" ></div>
                        <div class="rival1team">${marruecosStats.country}</div>
                        <p class="rival2score">${resultlMatch18.marruecos}<p/>
                        <p class="rival2score">${resultlMatch18.haiti}<p/>
                        <div class="rival2team">${haitiStats.country}</div>
                        <div><img src="images/haiti-bandera.png" ></div>
                    </div>`


    haitiPlayedGames.textContent = haitiStats.pj
    haitiWonGames.textContent = haitiStats.pg
    haitiDrawGames.textContent = haitiStats.pe
    haitiLostGames.textContent = haitiStats.pp
    haitiGoalDifference.textContent = haitiStats.dg
    haitiPoints.textContent = haitiStats.pts

    marruecosPlayedGames.textContent = marruecosStats.pj
    marruecosWonGames.textContent = marruecosStats.pg
    marruecosDrawGames.textContent = marruecosStats.pe
    marruecosLostGames.textContent = marruecosStats.pp
    marruecosGoalDifference.textContent = marruecosStats.dg
    marruecosPoints.textContent = marruecosStats.pts
}















