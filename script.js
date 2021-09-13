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
          $("#dogcount").html(0);
          $("#dog").attr("src", results["url"]);
          var catcounthtml = Number($("#catcount").html());
          $("#catcount").html(catcounthtml+1);
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
      url: "https://thatcopy.pw/catapi/rest/",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".mp4")) {
          $("#cat").attr("src", "images/blank.jpg");
        } else {
          $("#catcount").html("0");
          $("#cat").attr("src", results["url"]);
          var dogcounthtml = Number($("#dogcount").html());
          $("#dogcount").html(dogcounthtml+1);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    })
  })
})
