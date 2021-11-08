let www = document.getElementById("www");
let js = document.getElementById("js");
let kostky = document.getElementById("kostky");
let rocnikovaprace = document.getElementById("rocnikovaprace");


function search(){
    let dots = document.forms["vyhledavac"]["hledat"].value;
    if(dots.toLowerCase() == "www"){
        www.scrollIntoView();
    }
    else if(dots.toLowerCase() == "javascript" || dots.toLowerCase() == "js"){
        js.scrollIntoView();
    }
    else if(dots.toLowerCase() == "kostky" || dots.toLowerCase() == "hazardnihra"){
        kostky.scrollIntoView();
    }
    else if(dots.toLowerCase() == "rocnikovaprace" || dots.toLowerCase() == "leagueoflegends" || dots.toLowerCase() == "lol"){
        rocnikovaprace.scrollIntoView();
    }
}