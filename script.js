$(document).ready(function(){
  $("#dogclicker").click(function(){
    $.ajax({
      datatype: "json",
      url: "https://random.dog/woof.json",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".mp4")) {
          $("#dog").attr("src", "images/blank.jpg");
        } else {
          $("#dog").attr("src", results["url"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    })
  })
})

$(document).ready(function(){
  $("#catclicker").click(function(){
    $.ajax({
      datatype: "json",
      url: "http://random.cat/meow",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".mp4")) {
          $("#cat").attr("src", "images/blank.jpg");
        } else {
          $("#cat").attr("src", results["url"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    })
  })
})
