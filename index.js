window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop
    var header = document.getElementById("header-nav")
    var tagA = document.getElementsByClassName("nav-a")
    var logo = document.getElementById("logo")
    if(top > 15)
    {
        header.style.backgroundColor = "rgba(255,255,255,0.8)"
        for(var i = 0; i < tagA.length; i++){
            tagA[i].style.color= "#FF6821"
        }
        logo.src="./img/SEBAUER.png"
    }
    else {
        header.style.backgroundColor = "initial"
        for(var i = 0; i < tagA.length; i++){
            tagA[i].style.color= "#FFF"
        }
        logo.src="./img/Logo.png"
    }
    
 }