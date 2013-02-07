var fbControl,
    settings = require("./settings.js"),
    Miuri = require("../../dependencies/miuri.js"),
    apiUrl = settings.apiUrl,
    _isPlaying = false;

function buildUrl(command, params) {
    var params = params || {},
        url;
    
    params.cmd = command;
    url = new Miuri(apiUrl).query(params); 
    console.log(url);
    return url.toString();
}

function sendCommand(url, callback) {
    console.log(url);
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    if (callback) {
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200)
            {
                callback(request.responseText);
            }
        };
    }
    request.send();
}

function playOrPause(callback) {
    var requestUrl = buildUrl("PlayOrPause");
    sendCommand(requestUrl, callback); 
}

function nextSong(callback) {
    var requestUrl = buildUrl("StartNext");
    sendCommand(requestUrl, callback); 
}

function prevSong(callback) {
    var requestUrl = buildUrl("StartPrevious");
    sendCommand(requestUrl, callback); 
}

fbControl = {
    playOrPause: playOrPause,
    nextSong: nextSong,
    prevSong: prevSong
};

module.exports = fbControl;

window.fbControl = fbControl; 
