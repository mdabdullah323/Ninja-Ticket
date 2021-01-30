//to get value from Input Element
function getValue(inputId){
    const value = parseInt(document.getElementById(inputId).value);
    return value;
}


//to set Text into HTML Element
function setInnerText(id, text){
    document.getElementById(id).innerText = text;
}

//variable declared outside functions because of re-use them [updateCost() & addBookBtnEventHandler()]
let firstClassTicket = 0;
let economyTicket = 0;
let firstClassCost = 0;
let economyCost = 0;
let subTotalCost = 0;
let tax = 0;
let totalCost = 0;

//function to Update Sub-total, tax & Total Cost acording to Number of Ticket
function updateCost(){
    firstClassTicket = getValue("firstClass-Ticket");
    economyTicket = getValue("economy-Ticket");
    firstClassCost = 150 * firstClassTicket;
    economyCost = 100 * economyTicket;

    subTotalCost = firstClassCost + economyCost;
    tax = Math.round(subTotalCost * 0.1);
    totalCost = subTotalCost + tax;

    setInnerText("sub-total", subTotalCost);
    setInnerText("tax", tax);
    setInnerText("total", totalCost);
}


// Function to add Event Listener to plus & minus Button
function addEventHandler(btnId, inputId, isIncrease){
    document.getElementById(btnId).addEventListener("click", function(){
        let numberOfTicket = getValue(inputId);

        if(isIncrease == true){
            numberOfTicket++;
        }
        else{
            //Prevent the value become negative. because, Number of Ticket never be a negative value
            if(numberOfTicket > 0){
                numberOfTicket--;
            }
        }

        document.getElementById(inputId).value = numberOfTicket;
        updateCost();
    });
}

addEventHandler("first-plusBtn", "firstClass-Ticket", true);
addEventHandler("first-minusBtn", "firstClass-Ticket", false);
addEventHandler("economy-plusBtn", "economy-Ticket", true);
addEventHandler("economy-minusBtn", "economy-Ticket", false);
addBookBtnEventHandler("bookNow-Btn");