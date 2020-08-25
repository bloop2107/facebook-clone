function settingmenu(){
    document.getElementById("setting-menu").classList.toggle("show");
}

function notifimenu(){
    document.getElementById("notifi").classList.toggle("show");
}


window.onclick = function(event){
    if(!event.target.matches('.btn')){
       
        // var dropdowns = document.getElementsByClassName("dropdown-content");
        // var i; 
        // for (i = 0; i < dropdowns.length; i++){
        //     var openDropdown = dropdowns[i];
        //     if(openDropdown.classList.contains("show")){
        //         openDropdown.classList.remove("show");
        //     }
        // }
        if(document.getElementById("setting-menu").classList.contains("show")){
            document.getElementById("setting-menu").classList.remove("show");
        }
        if(document.getElementById("notifi").classList.contains("show")){
            document.getElementById("notifi").classList.remove("show");
        }   
        
    }
    if(event.target.matches('.btn-noti')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i; 
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }

    if(event.target.matches('.btn-sort')){
        var dropdowns = document.getElementsByClassName("dropdown-notifi");
        var i; 
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }

}
