function pageName() {
    var body = document.getElementById("body");
    var name = body.getAttribute("pagetitle");
    var htmlTitle = document.getElementById("title");
    document.getElementById("pageHeaderName").innerHTML = name;
    var oldTitle = htmlTitle.innerHTML
    htmlTitle.innerHTML = oldTitle + " - " + name;
}

function goToPage(page) {
    var destination = "/" + page;
    console.log(destination);
    window.location.href = destination;
}