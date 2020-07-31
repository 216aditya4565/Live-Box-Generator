var count = 0;

function greater() {
    var number1 = document.getElementById('num1').value;  //Get the number of boxes from HTML file
    var color = document.getElementById('color').value;   //Get the colour from HTML file

    //The for loop runs as many times as the input given by the user.
    for (let i = 0; i < number1; i++) {    
        count++; 
        var btn = document.createElement("button");  //Creating a variable btn of button type
        btn.className = "btn1"; 
        btn.innerHTML = "new Button " + count; //Creating the required number of buttons as input given by user
        btn.style = "background-color:" + (color) + ";" //Giving colour to the boxes
        document.body.appendChild(btn);  //Inserting the button into the document
    }

}
