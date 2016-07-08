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

function connect2Peer() {
    peerUserName = $("#peerUsername").val();

    var conn = peer.connect(peerUserName);

    conn.on('open', function(){
        conn.send('hi!');
    });

    $("#getPeerUsername").addClass('hide');
    gameSettings();
}

function receivePeer() {

    peer.on('connection', function(conn) {
        conn.on('data', function(data){
            console.log(data);
            });
    });
}