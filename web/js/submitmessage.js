/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * (From http://javascript.info)
 * 
 * Fetch: 
 * 
 *  send network requests to the server and load 
 *  new information whenever it’s needed.
 * 
 * The basic syntax is:
 *
 *    - let promise = fetch(url, [options])
 *         - url – the URL to access.
 *         - options – optional parameters: method, headers etc.
 *                     Without options, that is a simple GET request, 
 *                     downloading the contents of the url.
 * 
 *                                         
 * The browser starts the request right away and returns a promise 
 * that the calling code should use to get the result.
 * 
 * Getting a response is usually a two-stage process.
 * 
 *     - First, the promise, returned by fetch, resolves with an object of the
 *       built-in Response class AS SOON AS THE SERVER RESPONDS WITH HEADERS.
 *      
 *             - At this stage we can check HTTP status, 
 *               to see whether it is successful or not, check headers, 
 *               but don’t have the body yet.
 *       
 *     - Second, to get the response body, 
 *       we need to use an additional method call.
 *       
 *          - Response provides multiple promise-based methods 
 *            to access the body in various formats:
 *            
 *                - response.text() – read the response and return as text,
 *                - response.json() – parse the response as JSON,
 * 
 * Example:
 *     
 *    let response = await fetch(url);
 *    let answer = await response.json(); //read response body and parse as JSON
 *    console.log(JSON.stringify(answer));// print answer in console
 *    
 *    This is the same as:
 *   
 *    fetch(messageAddr)
 *    .then(res => res.json()) // or res.text()
 *    .then(res => console.log(res));
 */

// Adds a listener to the form <form id="newmessage"> in the wall.html file

function submitMessage(){
    console.log("executing submit message "+document.getElementById("newmessage"));
    
    // We retrieve the form as a reference to a JS Object
    let submitForm = document.getElementById("newmessage");

    // We add a listener to the form, when the user presses the submit button
    // this function will be executed    
    submitForm.onsubmit = async (e) => {
        e.preventDefault();
        
        let global = JSON.parse(sessionStorage.global);
        console.log("executing submit message listener " + 
                                document.getElementById("newmessage"));
        console.log("login nick stored global : "+global.nick);

        // To set the owner of the message we need to retrieve the Publicuser
        // information by nick 
        
        // Use the global object to que the REST nick address 
        let nickAddress = global.getByNickAddress;
 
        // Use the global object to get the nick
        let name = global.nick;
//
//  *************** Part 1 *********************************
// 
// use fetch with method POST to get the Publicuser object
// and store the result in a variable called
// publicUserFromServer
// 
// Complete:
//
// fetch
//
// let publicUserFromServer = body from the reply in JSON
//

        
        console.log("received user "+JSON.stringify(publicUserFromServer));

        // We now create a message object  
        let message = {};
        
        // we give it a property owner
        message.owner = publicUserFromServer;

//
//  *************** Part 2 *********************************
//         
// Populate the message object with the user input from 
// the submitForm FormData and store in an object called data
//
// Complete!!
// 

        
        // Convert the message object to JSON to be used as the 
        // body of the POST method
        var jsonMessage = JSON.stringify(message);
        console.log("content to send "+JSON.stringify(jsonMessage));

        // We can take the REST messageAddress from the global object we keep in
        // sessionStorage        
        let submitAddress = global.messageAddress;

        
//
//  *************** Part 3 *********************************
//         
// Use the function fetch to POST the message
// 
// Complete !!!!!!
//
        let responseMessage = await fetch(submitAddress, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonMessage
        });
        
        // We retrieve message to see the new message in the table
        retrieveMessages();

//
//  *************** Part 4 *********************************
// 
// Complete !!!!!!
//        
// Empty the 
// <input type="text" id="idcontent" name="content" size=10 required>


    };
}
