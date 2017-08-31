
$(document).ready(function(){
    $("#error1").hide();
    $("#error2").hide();
    var user = "Mackenzie";
    var pass = "bbq";

    $('#button').click(function(){
        var userName = $("#input");
        var myPass = $("#password");
        

        userName.css("box-shadow", "0px 0px 0px 5px transparent")
        myPass.css("box-shadow", "0px 0px 0px 5px transparent")
        
        

        if(!userName.val()){
            userName.css("box-shadow", "0px 0px 0px 5px red");
            
            
        }
        
        if(!myPass.val()){
            myPass.css("box-shadow", "0px 0px 0px 5px red");
            $("#error1").show();
            $("#error1").css("color", "red");
            $("#error1").css("font-size", "12px")
            
        }

        // $(this).css("display","none");
        if (userName.val() === user && myPass.val() === pass) {
            $("#error1").hide();
            $("#error2").hide();
            console.log("hackervoice: IM IN");
            $("#button").css("backgroundColor", randomColor());
            $("#container").css("backgroundColor", randomColor());
            $("#welcome").css("color", randomColor());
            $("body").css("backgroundColor", randomColor());
        }
        else if( userName.val() && userName.val()){
            $("#error1").hide();
            $("#error2").show();
            $("#error2").css("color", "red");
            $("#error2").css("font-size", "12px")
            
        }
        else{
            
            $("#error1").show();
            $("#error1").css("color", "red");
            $("#error1").css("font-size", "12px")
        }
        
    //    $(#input)
    })

var button = document.getElementById("button");
var password = document.getElementById("password");
var input = document.getElementById("input");
var div = document.getElementById("container");

function randomColor() {
  var rgb1 = Math.floor(Math.random() * 10);
  var rgb2 = Math.floor(Math.random() * 10);
  var rgb3 = Math.floor(Math.random() * 10);
  return `#${rgb1}${rgb2}${rgb3}`;
}

// var userName = "Mackenzie";
// var myPass = "bbq";

// button.onclick = function() {
//   button.style.backgroundColor = randomColor();
//   if (userName == input.value && myPass == password.value) {
//       div.style.backgroundColor = randomColor();
//   }
// };


console.log("Ready")

})