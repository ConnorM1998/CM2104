$(function(){
  //document ready
  alert("Document Ready");

  $('#searchform').submit(function() {
    //get current value and add to items submitToList
    var searchterms = $("#searchterms").val();
    //call our search youtube function;
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  //call Youtube API using ajax
  //build URL for the Request
  var url = "http://www.omdbapi.com/?apikey=a47870d4&s=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata){
    //handle the resultsbox
    prettyPrintJSON(jsondata);
  });
}

function prettyPrintJSON(jsondata){
  //Prints the prettyJSON to the Screen
  var pretty = JSON.stringify(jsondata, null, 4);
  $('#resultsbox').append("<pre>" + pretty + "<pre>");
}
