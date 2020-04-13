/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function logout(){
    // access the global variable as an object
    let global = JSON.parse(sessionStorage.global);
    // we go to the login page (home page)
    window.location.assign(global.homePage);
    sessionStorage.clear();
}

