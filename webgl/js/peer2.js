var myUserName;
var peerUserName;
var peer;

function connect2Server() {
    myUserName = $("#myUsername").val();


    peer = new Peer(myUserName, {key: 'mm63227qa567ds4i'});
    peer.on('open', function (id) {
        console.log('My peer ID is: ' + id);
    });

    $("#getMyUsername").addClass('hide');
    $("#getPeerUsername").removeClass('hide');

}

function hideStuff() {
    $("#getPeerUsername").addClass('hide');
    $("#playerControls").removeClass('hide');
    gameSettings();
}

var conn;
function connect2Peer(data) {
    peerUserName = $("#peerUsername").val();

    conn = peer.connect(peerUserName);
    conn.on('open', function(){
        //conn.send(data);
    });
}
function sendData(data) {
    // console.log("SEND DATA");
    
        conn.send(data);

}

function receivePeer() {
    // console.log("RECEIVE DATA");
    peer.on('connection', function(conn) {
        conn.on('data', function(data){
            console.log(data);
            });
    });
}