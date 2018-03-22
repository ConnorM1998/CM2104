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
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata){
  //create a string to contain our HTML code to inject
  var htmlstring = "";
  //iterate over the collection of resultsbox
  for (var i = 0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title;
  }

  //inject the HTML into our empty list
  $("#results").html(htmlstring);
}
