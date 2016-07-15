/**
 * Created by david_000 on 7/14/2016.
 */

var myGeo = [];
var myPos = [];
var myRot = [];

for (var i = 0; i < 15; i++)
{
    var x = Math.random() * 20;
    var y = 60;
    var z = Math.random() * 120;
    myGeo[i] = [x,y,z];

    x = Math.random() * X_SIZE;
    y = 30;
    z = Math.random() * Z_SIZE;
    myPos[i] = [x, y, z];

    myRot[i] = (Math.floor(Math.random() * 4)) * 90 * Math.PI/18;
}

// for (i in myGeo)
// {
//     console.log(myGeo[i])
// }
// for (i in myPos)
// {
//     console.log(myPos[i])
// }
for (i in myRot)
{
    console.log(myRot);
}

