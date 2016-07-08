var myUserName;
var peerUserName;

function connect2Server() {
    myUserName = $("#myUsername").value;


    var peer = new Peer(myUserName, {key: 'mm63227qa567ds4i'})
    peer.on('open', function (id) {
        console.log('My peer ID is: ' + id);
    });

    document.getElementById("getMyUsername").display = "none";
    document.getElementById("getPeerUsername").display = "block";

}

function connect2Peer() {
    peerUserName = $("#peerUsername").value;

    var conn = peer.connect(peerUserName);

    conn.on('open', function(){
        conn.send('hi!');
    });

    document.getElementById("getPeerUsername").display = "none";
}

function receivePeer() {

    peer.on('connection', function(conn) {
        conn.on('data', function(data){
            console.log(data);
            });
    });
}