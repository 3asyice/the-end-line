const links = [
{ url: "../../script/article/001.html", text: "Carlos Henrique Teixeira da Silva" },
{ url: "../../script/season-1/15-million-merits.html", text: "15 Milhões de Méritos" },
{ url: "../../script/season-1/the-entire-history-of-you.html", text: "Toda A Sua História" },
{ url: "../../script/season-2/be-right-back.html", text: "Volto Já" }
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