let num = 0;

function addList() {
    //create box
    let ourLists = document.getElementById("lists");
    let newDiv = document.createElement("div");
    let newPara = document.createElement("p");
    newPara.setAttribute("style", "width: 90%");
    newPara.setAttribute("id", "para-"+num);
    let newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    newCheckBox.setAttribute("class", "check-box");
    newCheckBox.setAttribute("id", "check-box-"+num);
    newCheckBox.setAttribute("value", num);
    newCheckBox.setAttribute("onclick", "strikeList(this.value)");
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "button-box");
    deleteButton.setAttribute("value", num);
    deleteButton.setAttribute("onclick", "delList(this.value)");

    let input = document.getElementById("ourInput").value;
    if (input != "") {
        let copy = document.createTextNode(input);
        newPara.appendChild(copy);
        deleteButton.value = num;
        newDiv.appendChild(newCheckBox);
        newDiv.appendChild(newPara);
        newDiv.appendChild(deleteButton);
        ourLists.appendChild(newDiv);
        newDiv.setAttribute("class", "list");
        newDiv.setAttribute("id", "list-"+num);

        num++;
    }
    
}

function delList(num) {
    let ourLists = document.getElementById("lists");
    let currDiv = document.getElementById("list-"+num);
    ourLists.removeChild(currDiv);
}

function strikeList(num) {
    let currCheckBox = document.getElementById("check-box-"+num);
    let currPara = document.getElementById("para-"+num);
    if (currCheckBox.checked) {
        currPara.style.textDecoration = 'line-through';
    }
    else {
        currPara.style.textDecoration = 'none';
    }
}


