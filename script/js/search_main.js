const links = [
{ url: "../script/article/001.html", text: "Carlos Henrique Teixeira da Silva" },
{ url: "../script/article/002.html", text: "Militar Expulso" },
{ url: "../script/article/002.html", text: "Família Inteira Morre em Acidente" },
{ url: "../script/article/004.html", text: "Brasileiro Morre Afogado ao Salvar Parente" },
{ url: "../script/article/005.html", text: "Navio RMS - Titanic afunda no oceano" },
{ url: "../script/article/006.html", text: "Fim da Primeira Guerra Mundial" }


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
if (!document.getElementById('search').contains(event.target)) {
suggestions.style.display = 'none';
}
});