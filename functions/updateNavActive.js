
var updateActive = function() {
// Compares the HTML <title> tag to the text content of the <a> element of each <li> element in the navbar.
// Bootstrap class 'active' is added to whichever <li> whose <a> element matches <title>.
    var links = document.getElementsByClassName('page')

    for (var i = 0; i <links.length; i++) {
        tabContent = links[i].firstChild.textContent.toString();
        title = document.title;
        if (tabContent == title) {
            links[i].classList.add("active");
        }
    }
}

updateActive();
