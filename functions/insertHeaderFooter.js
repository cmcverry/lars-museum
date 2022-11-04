
var insertFooter = function() {
  // Finds element with id 'footer' and adds HTML content into it
    document.getElementById("footer").innerHTML = "<div class='col-lg-2'> \
    <p>Contact Us:</p> \
    <p>3605 Maud Street, Philadelphia, DE 19107</p> \
    <p>302-668-3004</p> \
    <p>contact@larsartmuseum.org</p> \
    </div> \
    <span>Follow us on Twitter: </span>    \
    <a href='https://twitter.com/LarsArtMuseum' target='_blank'> \
      <img id='twitter' src='images/logo/twitter.jpg' alt='twitter' height='30' width='30'> \
    </a>"
}

var insertHeader = function() {
  // Finds element with id 'headerNav' and adds HTML content into it
  // Bootstrap 3 navbar implemented
    document.getElementById("headerNav").innerHTML = "<div class='container-fluid'> \
    <div class='navbar-header'> \
      <img id='logo' src='images/logo/logo.jpg' alt='logo' width='20' height='20'> \
      <a class='navbar-brand'>Lar's Art Museum</a> \
    </div> \
    <ul id='pageLinks' class='nav navbar-nav'> \
      <li class='page'><a href='index.html'>Home</a></li> \
      <li class='page'><a href='collection.html'>Our Collections</a></li> \
      <li class='page'><a href='special.html'>Special Exhibit</a></li> \
      <li class='page'><a href='newsletter.html'>Newsletter</a></li> \
    </ul> \
  </div>"
}

insertFooter();
insertHeader();