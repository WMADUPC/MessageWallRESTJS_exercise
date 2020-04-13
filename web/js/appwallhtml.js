// In the html/wall.html file we have
// <script type="text/javascript" src="../js/appwallhtml.js" defer></script>

console.log("init wall html executed");
// This function sets up the listeners 
function initwallhtml(){
    
    // submitMessage adds a listener to the form 
    // <form id="newmessage"> in the wall.html file
    submitMessage();
    
    addRefreshListener();
    // uncomment to retrieve messages automatically
    //autoRetrieve();
}

initwallhtml();

