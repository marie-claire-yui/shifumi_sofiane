const img = document.querySelectorAll('.commandes img');
const tab = ['pierre', 'feuille', 'ciseaux'];
const resultat = document.getElementById('resultat');
const msgResult = document.getElementById('msgResult');
const score = document.getElementById('score');
var scoreJ = 0;
var scoreOrdi = 0;


img.forEach(element => {
    element.addEventListener(
        'click',
        function (e) {
            var joueur = e.currentTarget.id;
            var ordinateur = tab[Math.floor(Math.random() * 3)];
            resultat.setAttribute('src', 'img/' + ordinateur + '.png');
            resultat.setAttribute('alt', ordinateur);
            if (joueur == ordinateur) {
                console.log(msgResult.textContent);
                msgResult.innerHTML = 'égalité';
            } else if (
                joueur == 'pierre' && ordinateur == 'ciseaux' ||
                joueur == 'feuille' && ordinateur == 'pierre' ||
                joueur == 'ciseaux' && ordinateur == 'feuille'
            ) {
                console.log(msgResult.textContent);
                msgResult.innerHTML = 'win';
            } else {
                console.log(msgResult.textContent);
                msgResult.innerHTML = 'loose';
            }

            switch (msgResult.textContent){
                case 'win':
                    scoreJ +=1;
                    console.log(scoreJ);
                    break;
                case'loose':
                    scoreOrdi +=1;
                    console.log(scoreOrdi);
                    break;
                default:
                    scoreJ +=0;
                    scoreOrdi += 0;
                    console.log(scoreJ,scoreOrdi);
                    break;
            }
            score.innerHTML =`score du joueur:${scoreJ}/ score de l'ordinateur:${scoreOrdi}`;
        }
    )
});


