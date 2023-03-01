const img = document.querySelectorAll('.commandes img');
const tab = ['pierre', 'feuille', 'ciseaux'];
const resultat = document.getElementById('resultat');
const msgResult = document.getElementById('msgResult');
const score = document.getElementById('score');
var scoreJ = 0;
var scoreO = 0;
var ordinateur = '';
var joueur = '';function getMsgResult() {
    switch (msgResult.textContent) {
        case 'win':
            scoreJ += 1;
            break;
        case 'loose':
            scoreO += 1;
            break;
        default:
            scoreJ += 0;
            scoreO += 0;
            break;
    }
    score.innerHTML = scoreJ + '/' + scoreO;
}function regles() {
    if (joueur == ordinateur) {
        msgResult.innerHTML = 'égalité';
    } else if (
        joueur == 'pierre' && ordinateur == 'ciseaux' ||
        joueur == 'feuille' && ordinateur == 'pierre' ||
        joueur == 'ciseaux' && ordinateur == 'feuille'
    ) {
        msgResult.innerHTML = 'win';
    } else {
        msgResult.innerHTML = 'loose';
    }
}function setImgAttr() {
    resultat.setAttribute('src', 'img/' + ordinateur + '.png');
    resultat.setAttribute('alt', ordinateur);
}function getOrdiDesktop() {
    ordinateur = tab[Math.floor(Math.random() * 3)];
    setImgAttr();
    return ordinateur;
}function getCurrentTarget(e) {
    joueur = e.currentTarget.id;
    getOrdiDesktop();
    return joueur
}function getElement(element) {
    element.addEventListener('click', e => {
        getCurrentTarget(e);
        regles();
        getMsgResult();
    });
}img.forEach(element => getElement(element));