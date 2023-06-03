// Selecting content with jquery

// $("h3").css({border: "3px solid blue"});

// //Selecting classes
// $(".wrapper").css({border: "2px solid lightblue"})

// $("#clients").css({border: "3px solid red"})

//JQuery FILTERS

// $("header nav li:first").css({border: "2px solid red"})
// $("header nav li:last").css({border:"3px solid yellow"})
// $("img[alt=quote").css({border: "2px solid red"})

//$("#contact-methods").css({border: "2px solid red"})
// $("#social-nav").prev().css({border: "2px solid blue"})
//$(".banner-title").parents().css({border: "2px solid pink"})
// $("#social-nav").children().css({border: "2px solid green"})
// $("#contact").find(".twitter").css({border: "2px solid red"})

//CHAINING
// $("#contact-methods").css({border: "2px solid green"}).next().css({border: "2px solid brown"})
//  .closest("section").css({border:"2px solid red"})

// ADDING  AND CHANGING CONTENT OF DIVS
var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'> The big fight live: Ham vs Cheese! </div>"

//$("#tweets div").append(tweet)
//$("#tweets div").prepend(tweet)
//$("#tweets div p").before(tweet)
//$("#tweets div p").after(tweet)

//REPLACE THE CONTENT OF <p> tag

$("#tweets div").html(tweet)

// WRAP and UNWRAP
//wrap each section with div
// $("section").wrap("<div>")// each one individually

// $("section").wrapAll("<div>")// Get all the section and wrap them collectively

// $("section").unwrap() //unwrap div

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick=function(){
    if(wrapped){
        $("section").unwrap()
        wrapped = false;
        button.text("Wrapped")
    }else{
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("Unwrapped")
    }
}

//Removing Content from Page
$(".button").empty()
$(".button").remove()