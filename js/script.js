var players = ['O', 'X'];
var player = players[0];

var case1 = document.getElementById('case1');
var case2 = document.getElementById('case2');
var case3 = document.getElementById('case3');
var case4 = document.getElementById('case4');
var case5 = document.getElementById('case5');
var case6 = document.getElementById('case6');
var case7 = document.getElementById('case7');
var case8 = document.getElementById('case8');
var case9 = document.getElementById('case9');

var res = document.getElementById('res');
var replay = document.getElementById('replay');
var bool = true;

var nbClick = 0;
// function qui déclenche lors du clic
function add(){
    var test = this;
    //condition servant à bloquer les évènements clic après la victoire d'un joueur
    if(bool === true){
        // Si le joueur est 0
        if(player === players[0]){
        // Si la case à déjà une "valeur"(X ou O)
            if(this.className.indexOf('filled') >= 0){

            } else {
                this.style.background = "url('img/cercle.png')";
                this.className += ' filled';
                test.textContent = ' ';
                player = players[1];
                nbClick = nbClick+ 1;
            }
        }else if(player === players[1]){ //Si on est au tour du joueur X
            if(this.className.indexOf('filled') >= 0){

            }else{
                this.style.background = "url('img/X.png')";
                this.className += ' filled';
                test.textContent = '  ';
                //Au tour du joueur X
                player = players[0];
                nbClick = nbClick+ 1;
            }
        }
    }
    win();
}

function win(){
    //Pour réduire la taille de la condition
    var one = document.getElementById('case1').textContent,
        two = document.getElementById('case2').textContent,
        three = document.getElementById('case3').textContent,
        four = document.getElementById('case4').textContent,
        five= document.getElementById('case5').textContent,
        six = document.getElementById('case6').textContent,
        seven = document.getElementById('case7').textContent,
        eight = document.getElementById('case8').textContent,
        nine = document.getElementById('case9').textContent;

    if((one === two && one === three) ||
        (four === five && four === six) ||
        (seven === eight && seven === nine) ||
        (one === five && one === nine) ||
        (three === five && three === seven) ||
        (one === four && one === seven) ||
        (two === five && two === eight) ||
        (three === six && three === nine)){

        if(player === players[1]){
            res.innerHTML = 'Joueur O à gagné !';
            bool = false;
        }else{
            res.innerHTML = 'Joueur X à gagné !';
            bool = false;
        }
        replay.style.visibility = 'visible';

        replay.addEventListener('click', function () {
            location.reload();
        });
    }else{
        if(nbClick === 9){
            res.innerHTML = 'Match nul? C\'est pathétique, recommencez !!';
            replay.style.visibility = 'visible';

            replay.addEventListener('click', function () {
                location.reload();
            });
        }
    }
}

case1.addEventListener('click', add);
case2.addEventListener('click', add);
case3.addEventListener('click', add);
case4.addEventListener('click', add);
case5.addEventListener('click', add);
case6.addEventListener('click', add);
case7.addEventListener('click', add);
case8.addEventListener('click', add);
case9.addEventListener('click', add);