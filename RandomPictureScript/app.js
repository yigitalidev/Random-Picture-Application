const refresh = document.getElementById("refresh");


function myResim(aydi){
    document.getElementById("resimdiv").innerHTML = "<img name=\"myresim\" src=\""+ aydi +"\" />";
    console.log('Picture is selected')
}

refresh.onclick=function() {
    var question = confirm('Are You Sure ?')
    if (question) {
        window.location.reload()   
        console.log('Page is reload')    
    }else{
        console.log('okay :(')
    }
}



// CREDİT : https://random.responsiveimages.io/ ( THX FOR Random Image API )