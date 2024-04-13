
document.getElementById("searchButton").addEventListener("click", function() {
    var searchQuery = document.getElementById("searchBox").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
});