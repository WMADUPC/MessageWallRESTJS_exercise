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



function login(){
    
    console.log("executing login "+document.getElementById("loginform"));
    
    // We retrieve the form as a reference to a JS Object
    let submitForm = document.getElementById("loginform");
    
    // We add a listener to the form, when the user presses the submit button
    // this function will be executed
    submitForm.onsubmit = async (e) => {
        e.preventDefault();
        console.log("executing login listener");

        // data holds the login information from the user
        let data = new FormData(submitForm);

        var loginObj = {};
        // We populate the login object with the user input from FormData
        data.forEach((value, key) => {loginObj[key] = value});

        // Convert the message object to JSON to be used as the 
        // body of the POST method        
        var jsonLogin = JSON.stringify(loginObj);
        console.log("login object : "+jsonLogin);
        
        // We can take the REST loginAddress from the global object we keep in
        // sessionStorage
        let global = JSON.parse(sessionStorage.global);
        let loginAddress = global.loginAddress;
  
        
        /*
        * Fetch: 
        * 
        *  send/retrieve network requests to/from the server

        *    - let promise = fetch(url, [options])
        *         - url – the URL to access.
        *         - options – optional parameters: method, headers etc.
        *         
        *   See comments above too      
        *         
        */        
        let response = await fetch(loginAddress, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: jsonLogin
        });
       
        // we have to await for the reply body
        let publicUser = await response.json();
        console.log("login -> public user info received : " + publicUser);
        
        if(publicUser.nick === loginObj.login){
            //Set global property nick, 
            // and reset the sessionStorage global variable
            // It has to be done this way because in sessionStorage
            // both key and value must be strings
            global.nick = publicUser.nick;
            sessionStorage.global = JSON.stringify(global); 

            // go to next view!! which is the message wall
            window.location.assign("html/wall.html");

        }else{
            window.alert("Login not ok");
            window.location = "index.html";
      }
    };
}


