const links = [
{ url: "script/article/001.html", text: "Carlos Henrique Teixeira da Silva" },
{ url: "script/article/002.html", text: "Militar Expulso" },
{ url: "script/article/003.html", text: "Família Inteira Morre em Acidente" },
{ url: "script/article/004.html", text: "Brasileiro Morre Afogado ao Salvar Parente"},
{ url: "script/article/005.html", text: "Navio RMS - Titanic afunda no oceano" },
{ url: "script/article/007.html", text: "Tragédia: Boate Kiss" },
{ url: "script/article/006.html", text: "Fim da Primeira Guerra Mundial" },
{ url: "script/article/010.html", text: "Jovem morre após explosão de churrasqueira em SC; vítima ficou um mês internado" },
{ url: "script/article/009.html", text: "Dançarino Augusto Bergmann da Cunha" },
{ url: "script/article/008.html", text: "Após desistir de festa na boate Kiss, jovem morre em acidente no Paraná" }
    ];
function showSuggestions(value) {
const suggestions = document.getElementById('suggestions');
suggestions.innerHTML = '';
if (!value) {
suggestions.style.display = 'none';
return;
}
const lowerCaseValue = value.toLowerCase();
const filteredLinks = links.filter(link => link.text.toLowerCase().includes(lowerCaseValue));
if (filteredLinks.length > 0) {
suggestions.style.display = 'block';
filteredLinks.forEach(link => {
const item = document.createElement('div');
item.className = 'suggestion-item'; 
item.innerText = link.text;
item.onclick = () => redirectToLink(link.url);
suggestions.appendChild(item);
});
} 
else {
suggestions.style.display = 'none';
}
}
function redirectToLink(link) {
window.location.href = link;
}
document.addEventListener('click', function(event) {
const suggestions = document.getElementById('suggestions');
if (!document.getElementById('linkInput').contains(event.target)) {
suggestions.style.display = 'none';
}
});

var x = document.getElementById('menu_hidden');
var y = false;

function menu() {
    y = !y;
    x.style.display = y ?
        'block' : 'none';
}