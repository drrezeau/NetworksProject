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

function connect2Peer(data) {
    peerUserName = $("#peerUsername").val();

    var conn = peer.connect(peerUserName);
    sendData(data, conn);
    receivePeer(conn);
    
}
function sendData(data, conn) {
    console.log("SEND DATA");
    conn.on('open', function(){
        conn.send(data);
    });
}

function receivePeer(conn) {
    console.log("RECEIVE DATA");
    peer.on('connection', function(conn) {
        conn.on('data', function(data){
            console.log(data);
            });
    });
}