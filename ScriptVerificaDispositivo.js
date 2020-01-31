


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
        return document.getElementsByClassName("gPlay").style.display = "none";
    }
    else if( userAgent.match( /Android/i ) )
    {
        return document.getElementsByClassName("iosPlay").style.display = "none";
    }
    else
    {
      return 'unknown';
    }
} 

console.log(getMobileOperatingSystem());
