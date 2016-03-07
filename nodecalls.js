require("node-jquery-xhr")

var endpoint = getEndpoint();
var timeStart = Date.now();
var totalServerDelay = 0;


writeLine("starting non multi threaded calls.");
newLine();
for (var i = 0; i < 1000; i++) {
  makeCall("http://localhost:3000/async")
    .then(function(data) {
      var timeElapsed = (Date.now() - timeStart) / 1000;
      var serverDelay = data.delay;
      totalServerDelay += serverDelay;
      writeLine("A call returned " + timeElapsed + " seconds after being called. Server set delay was " + serverDelay + ". Total server delay so far is " + totalServerDelay + ".");
      newLine();
    },
    function(err) {
          console.log(err);
        });
}

function getEndpoint() {
  return '';
}

function writeLine(string) {
  console.log(string);
}

function newLine() {
  console.log("\r\n");
}

function makeCall(endpoint) {
  return $.get(endpoint)
}

(function wait () {
   if (1 == 1) setTimeout(wait, 1000);
})();