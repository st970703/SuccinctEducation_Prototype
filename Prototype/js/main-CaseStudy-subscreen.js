function signOut() {
    confirm("Are you sure you want to sign out?");
}

submitted = false;

function ansSubmitted() {
    var ansTextArea = document.getElementById("ansTextArea").value = '';
    alert("Your answer is submitted!");
    submitted = true;
}

function submitComment() {
    if (submitted == false) {
        var comment = document.getElementById("comment-input").value;
        document.getElementById("comment-input").value = "";
        $('#myNewComment').contents().first().replaceWith(comment);
        submitted = true;
    }
}