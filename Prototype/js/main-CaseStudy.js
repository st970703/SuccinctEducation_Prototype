function signOut() {
    confirm("Are you sure you want to sign out?");
}

function search() {
    var searchText = document.getElementById("searchText ").value;
    alert("Searching...\n" + searchText);
    document.getElementById("searchText ").value = "";
}

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});