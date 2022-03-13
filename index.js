function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}


function sayHiToHeadphonedRoommate(string) {
    var canthear = "I can't hear you!";
    var hear = "YES INDEED!";
    var accept = "I would love to!";
    var invite = "Let's have dinner together!";

    if (string.toUpperCase() === string){
        return hear;
    }
    
    if (string.toLowerCase() === string){
        return canthear;
    }
    
    if (string === invite){
        return accept;
    }
}