/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Retrieves messages from the server and updates the <body> of
// <table id="messageTable"  >
// in wall.html file
async function retrieveMessages () {
    console.log("retrieveMessages executing");
    
    let global = JSON.parse(sessionStorage.global);
    // sets the user nick in the <em id="userNick"></em> in wall.html file
    setNick(global.nick);
    
    /*
    * Fetch: 
    * 
    *  send/retrieve network requests to/from the server

    *    - let promise = fetch(url, [options])
    *         - url – the URL to access.
    *         - options – optional parameters: method, headers etc.
    *         
    *   See comments in login.js file      
    *         
    */
    let response = await fetch(global.messageAddress);
    let messageList = await response.json(); //extract JSON from the http response
    
    // declare and initialize objects to update the table
    let tableRef = document.getElementById('messageTable');
    let tableBody = tableRef.getElementsByTagName('tbody')[0];
    let newTbody = document.createElement('tbody');
    tableBody.parentNode.replaceChild(newTbody, tableBody);
    
    // sets the user nick in the <em id="numberMessages"></em> in wall.html file

    setNumberOfMessages(messageList.length);
    
    
    for (var i = 0; i < messageList.length; i++){
        // the item below has this (JSON) format:
        // item :{"content":"this is a message",
        //        "idmessage":1,
        //        "owner":{"idpublicuser":2,"nick":"Cervantes"}}

        let item = messageList[i];
        console.log("retrievedMessages :" + JSON.stringify(item));
        
        // Insert a row in the table at the last row
        let newRow = newTbody.insertRow();
        
        // Insert content cell in the row at index 0
        // It will contain the content of the message
        let newCell = newRow.insertCell(0);
        // item :{"content":"this is a message",
        //        "idmessage":1,
        //        "owner":{"idpublicuser":2,"nick":"Cervantes"}}        
        let newText = document.createTextNode(item.content);
        newCell.appendChild(newText);
        
        // Insert owner cell in the row at index 1
        // It will contain the owner of the message
        newCell = newRow.insertCell(1);
        // item :{"content":"this is a message",
        //        "idmessage":1,
        //        "owner":{"idpublicuser":2,"nick":"Cervantes"}}        
        newText = document.createTextNode(item.owner.nick);
        newCell.appendChild(newText);
        
        // Insert button cell in the row at index 2
        // It will contain the button to delete the message  
        newCell = newRow.insertCell(2);
        let removebutton = document.createElement("button");
        removebutton.innerHTML = "remove";
        removebutton.setAttribute("id", item.idmessage);
        // item :{"content":"this is a message",
        //        "idmessage":1,
        //        "owner":{"idpublicuser":2,"nick":"Cervantes"}}        
        removebutton.addEventListener("click", function(){
            let idElem = event.srcElement.id;
            // deleteMessage is defined in file deletemessages.js
            deleteMessage(idElem);
        });
        newCell = newRow.insertCell(2);
        newCell.appendChild(removebutton);
    }
}


// sets the user nick in the <em id="userNick"></em> in wall.html file
function setNick(nick){
    // Complete:
    // 
    // Get a reference to the DOM object in the appwall.html file
    
    // change the html of the object

}

// sets the user nick in the <em id="numberMessages"></em> in wall.html file
function setNumberOfMessages(nm){
    // Complete:
    // 
    // Get a reference to the DOM object in the appwall.html file
    
    // change the html of the object

}

function addRefreshListener(){
    document.getElementById("refresh").addEventListener("click", 
                                                        retrieveMessages);
}


function autoRetrieve(){
    // set the autoclick function to execute every 10 secondd
    
    function autoClick() {
        //simulate a click of <button id="refresh">Refresh</button>
        
    }
}

