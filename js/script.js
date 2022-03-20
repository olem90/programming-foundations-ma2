//Question1//

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];

  for( var i = 0; i < pets.length; i++) {
      var age = pets[i].age;
      var type = pets[i].type;

      if(age >= 4) {
          console.log(type);
      }
  }

//Question2//

function checkValue (word) {
    var typeOfValue = typeof word;
    
    if (typeOfValue === "boolean"){
        console.log(typeOfValue);
    }
    else{
        console.log("please pass a boolean value in");
}
}

checkValue(2);

//Question3//

var heading = document.querySelector("h2");
var button = document.querySelector("button");

button.onclick = function() {
    heading.style.color = "blue";
    heading.innerHTML = "Updated subheading";

};