

function initGlobal(){
 
  var module = {};
  
  module.homePage = 'http://localhost:32185/MessageWallRESTJS_exercise/'; 
  module.restAddress = module.homePage + 'webresources/';
  module.loginAddress = module.restAddress + 'entity.user/login/';
  module.getByNickAddress = module.restAddress + 'entity.publicuser/retrievebynick/';
  module.messageAddress = module.restAddress +  'entity.message/';
    
  module.okLogin = 'okLogin';

  module.nick = "";

  return module;
}

// We store the global variable in sessionStorage because we need to pass 
// the nick from the index.html page to the wall page.
/*
 * To access a global property, for instance nick:
 *    
 *    let global = JSON.parse(sessionStorage.global);
 *    let storedNick = global.nick
 *    
 *    Now storedNick contains the nick in global
 */
var globalvariables = initGlobal();
// It has to be done this way because in sessionStorage
// both key and value must be strings
// So we use the JSON format
sessionStorage.global = JSON.stringify(globalvariables); 

