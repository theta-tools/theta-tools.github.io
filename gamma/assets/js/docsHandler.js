function handle(source) {
    var fullSrc = "./src/" + source + ".md";
    var pageMD = document.getElementById("pageMD");
    var container = document.getElementById("pageContent");
    if (pageMD.getAttribute("src") = fullSrc) {
        return
    } else {
        pageMD.setAttribute("src", fullSrc);
        var content = container.innerHTML;
        container.innerHTML = content;
    }
}

async function handleFromURL() {
    var fullURL = window.location.hash;
    var URL = fullURL.slice(1);
    console.log(URL);
    handle(URL);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function search() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("menuSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menuBar");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

let timerId = setInterval(() => handleFromURL(), 1000);