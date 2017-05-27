submitted = false;

function ansSubmitted() {
    var ansTextArea = document.getElementById("ansTextArea").value;
    if (ansTextArea !== "") {
        alert("Your answer is submitted!");
        submitted = true;
        document.getElementById("ansTextArea").value = ''
    }
}

function submitComment() {
    if (submitted === false) {
        var comment = document.getElementById("comment-input").value;
        if (comment !== "") {
            document.getElementById("comment-input").value = "";
            $('#myNewComment').contents().first().replaceWith(comment);
            submitted = true;
        }
    }
}