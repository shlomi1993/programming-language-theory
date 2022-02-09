// Shlomi Ben-Shushan & Gal Ben-Arush

// The following code contact servers concurrently using XMLHttpRequest object.
// This code should run from the browser, e.g., with file.html.

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").addEventListener("click", function () {
    var index = [
      "https://lemida.biu.ac.il/",
      "https://ims.gov.il/",
      "https://www.mizrahi-tefahot.co.il/",
      "https://www.maariv.co.il/",
      "https://www.wikipedia.org/",
    ];
    (function loop(i) {
      if (i >= index.length) {
        return;
      }
      var url = index[i];
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          var data = request.responseText;
          console.log("-->" + i + " id: " + data.substring(1, 1500));
          console.log("---------------------------\n");
        }
      };
      request.send();
      loop(i + 1);
    })(0);
  });
});
