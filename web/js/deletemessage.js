/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Deletes messages 
// It is a listener. Check retrievemessages.js file 
/*
      removebutton.setAttribute("id", item.idmessage);
      // item :{"content":"this is a message",
      //        "idmessage":1,
      //        "owner":{"idpublicuser":2,"nick":"Cervantes"}}        
      removebutton.addEventListener("click", function(){
            let idElem = event.srcElement.id;
            deleteMessage(idElem);
            console.log("button");
        });
*/
async function deleteMessage(position){
    console.log("executing delete message position "+position);
    // Since one user can only delete its own messages
    // to delete a message we need to first retrieve it
    // and chec if the current user is the owner 
    
    // From global we will be able to retrieve the current user
    let global = JSON.parse(sessionStorage.global);  
    
    
    // Compose the address to get the message
    // The id associated to the listener is the id of the message in the 
    // database table
    // See the retrievemessages file:
    /*
     *  removebutton.setAttribute("id", item.idmessage);
        // item :{"content":"this is a message",
        //        "idmessage":1,
        //        "owner":{"idpublicuser":2,"nick":"Cervantes"}}        
        removebutton.addEventListener("click", function(){
        let idElem = event.srcElement.id;
                deleteMessage(idElem);
                console.log("button");
        });
     * 
     */
    let messageAddr = global.messageAddress + position;

//
// **************   Part 1 ********************************
// 
// Make the GET fetch call as usual to messageAddr
// and store the result in a variable called message
//
// 
// Complete:
//
// fetch
//
//
// let message = body from the reply in JSON
//


       
       
    console.log("executing delete message message received "+
                                                      JSON.stringify(message));
       
    // the format of the received message is:
    // {"content":"tt","idmessage":2,
    // "owner":{"idpublicuser":2,"nick":"Cervantes"}}
    
    
    
// ************************** Part 2 ************************************
//     
// if the nick stored in global is the nick of the
// message owner make a fetch DELETE call to messageAddr
//
// Complete :
//
    if(/* Complete */){
        // Deleting a message is done through the rest call
        // 'http://localhost:32185/MessageWallRESTJS/entity.message/"{id}"';
        // to execute in the server the method
        /*     @DELETE
                @Path("{id}")
                public void remove(@PathParam("id") Integer id) {
                    super.remove(super.find(id));
                }
        */

// fetch DELETE call!        

        //  Since the body to the repley of a DELETE fetch is empty
        //    await response.json();
        //    FAILS!!!!!
        let responseBody = await response.text();
        
        console.log("deleteMessage -> calling retrieveMessages ");
        // Call retreiveMessages to update the table
        retrieveMessages();
    }else{
        alert(global.nick + ", you are not the owner of the message");
    }
};
  

