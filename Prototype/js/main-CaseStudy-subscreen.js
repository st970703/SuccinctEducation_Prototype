function signOut() {
    confirm("Are you sure you want to sign out?");
}

function ansSubmitted() {
    var ansTextArea = document.getElementById("ansTextArea").value = '';
    alert("Your answer is submitted!");
}

function submitComment() {
    var comment = document.getElementById("comment-input").value;
    document.getElementById("comment-input").value = "";
    $('#myNewComment').contents().first().replaceWith(comment);
}