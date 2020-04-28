var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click",replaceIt);

function replaceIt() {
    var storyDiv = document.getElementById("story");
    var name = "<span class='replacement'>"+ document.getElementById("name").value + "</span>";
    var nameOfaPlace = "<span class='replacement'>"+ document.getElementById("nameOfaPlace").value + "</span>";
    var Height = "<span class='replacement'>"+ document.getElementById("Height").value + "</span>";
    var Weight = "<span class='replacement'>"+ document.getElementById("Weight").value + "</span>";
    var colourOfEyes = "<span class='replacement'>"+ document.getElementById("colourOfEyes").value + "</span>";
    var smile = "<span class='replacement'>"+ document.getElementById("smile").value + "</span>";
    var beverage = "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";
    var musicType = "<span class='replacement'>"+ document.getElementById("musicType").value + "</span>";
    var partner = "<span class='replacement'>"+ document.getElementById("partner").value + "</span>";
    var favouriteCity = "<span class='replacement'>"+ document.getElementById("favouriteCity").value + "</span>";
    var favouriteMovie = "<span class='replacement'>"+ document.getElementById("favouriteMovie").value + "</span>";
    var education = "<span class='replacement'>"+ document.getElementById("education").value + "</span>";
    var animal = "<span class='replacement'>"+ document.getElementById("animal").value + "</span>";
    var city = "<span class='replacement'>"+ document.getElementById("city").value + "</span>";
    var feelingNow = "<span class='replacement'>"+ document.getElementById("feelingNow").value + "</span>";
    
    var theStory = "<h1>Dating Profile</h1>";
    theStory += "My name is " + name + ", I'm from " + nameOfaPlace + ", my height is " + Height + ", I weigh " + Weight + " and the colour of my eyes is " + colourOfEyes + ".<br><br>";
    theStory += "What makes me smile is " + smile + ", my favourite drink is " + beverage + ", my music choice is " + musicType + ", what I prefer in a partner is " + partner + ".<br><br>";
    theStory += favouriteCity + " is my favourite city, " + favouriteMovie + " is my favourite movie. " + education + " is what I went to school to study as a profession.<br><br>";
    theStory += animal + "; I do like animals, both in nature and as pets " +". My second favourite city is " + city + ". The future looks " + feelingNow + ".<br><br>";
    
    storyDiv.innerHTML = theStory;
        
}
