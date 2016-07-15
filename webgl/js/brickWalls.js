var brickWall = new THREE.Object3D();
var brickWalls = [];
var brickWallsDisplay = [];

function createBrickWalls() {
    var loader = new THREE.TextureLoader();

    var myGeo = [[19.04969098236334, 60, 28.890999594511513],
        [4.652249145904612, 60, 118.48143269979612],
        [11.388539330707573, 60, 41.97496840931554],
        [6.984507434757008, 60, 27.60652050702605],
        [6.424168016880558, 60, 14.056581495493967],
        [11.091340182978335, 60, 4.420825037530873],
        [1.5013407384920407, 60, 28.214081922626704],
        [3.10748728600871, 60, 45.378419362493396],
        [15.25057568912953, 60, 119.95187998567513],
        [14.192351152688722, 60, 8.273680764573088],
        [14.432463128797623, 60, 10.314008480670216],
        [2.141835576705984, 60, 26.053382439717268],
        [16.98149103364233, 60, 99.80164777268604],
        [11.304457239489828, 60, 105.17576763316615],
        [16.545230622478954, 60, 80.08766015515661],
        [3.684627375676266, 60, 107.49650068364976],
        [15.897475176615373, 60, 18.02329054306295],
        [5.018276315806975, 60, 14.582379202108973],
        [16.153852282972142, 60, 20.774399529128466],
        [9.151110991822122, 60, 109.36294535830876],
        [15.960278017965779, 60, 65.54221144251258],
        [0.7113516757535265, 60, 70.84484279340634],
        [1.9366749927490767, 60, 80.39144569894619],
        [17.67587076556233, 60, 12.099705282888884],
        [14.09780283675742, 60, 104.38921036222072],
        [12.94725156973005, 60, 49.9848154737062],
        [17.434837828685417, 60, 61.228880420639165],
        [16.485939882846875, 60, 116.7534927836669],
        [10.68163845233547, 60, 95.68223243087535],
        [0.9443591351587166, 60, 72.87131756902026]];

    var myPos = [[305.1110571114495, 30, 230.3224979843057],
        [54.36776799094234, 30, 52.166091931915126],
        [389.46647895920717, 30, 96.71666538120948],
        [404.50011120584185, 30, 105.74725012232078],
        [334.9745913086979, 30, 197.90213479383956],
        [68.45484187445838, 30, 391.95873091658586],
        [197.32550576277208, 30, 227.59278745103128],
        [416.19819415174476, 30, 10.990536179726561],
        [126.41837390127209, 30, 184.52032964943066],
        [232.252014713775, 30, 135.22208385285873],
        [308.54725567610353, 30, 416.81215000444416],
        [3.010795802490085, 30, 482.19204976371253],
        [441.470218365222, 30, 173.39452739387028],
        [131.620750604013, 30, 303.18189330539536],
        [444.9642680235736, 30, 57.01231350726754],
        [205.53507616922406, 30, 25.442035387433393],
        [336.0068077073495, 30, 464.328981812292],
        [441.47576335370684, 30, 212.12425774963683],
        [392.1685994985321, 30, 210.60657345534085],
        [24.06005798493016, 30, 5.776741951689535],
        [384.8206053911146, 30, 128.363539084399],
        [455.55476211849987, 30, 62.66020876619549],
        [22.922433526861074, 30, 326.29375312519903],
        [125.02699105189608, 30, 300.4319348241358],
        [267.0657339529062, 30, 377.7482744186338],
        [212.8024072202428, 30, 303.59492597512195],
        [295.4778286778771, 30, 458.8493466459178],
        [12.754405882545505, 30, 402.8234313203467],
        [401.82160121316804, 30, 17.03367396705935],
        [42.41664269740142, 30, 219.66305630456816]];

    var myRot = [31.41592653589793, 31.41592653589793, 15.707963267948966,
        47.12388980384689, 15.707963267948966, 31.41592653589793, 47.12388980384689, 0,
        15.707963267948966, 31.41592653589793, 47.12388980384689, 0, 31.41592653589793,
        31.41592653589793, 47.12388980384689,15.707963267948966, 15.707963267948966,
        31.41592653589793, 15.707963267948966, 47.12388980384689, 15.707963267948966,
        0, 47.12388980384689, 0, 0, 0, 47.12388980384689,
        47.12388980384689, 0, 15.707963267948966];


    loader.load(
        // resource URL
        'images/brick.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshLambertMaterial( {
                map: texture
             } );
            console.log(numWalls);

            for (var i = 0; i < numWalls; i++) {
                var x = myGeo[i][0];
                var y = myGeo[i][1];
                var z = myGeo[i][2];
                myGeo[i] = [x,y,z];
                geometry = new THREE.BoxGeometry( x, y, z );
                
                var brick = new THREE.Mesh( geometry, material );

                x = myPos[i][0];
                y = myPos[i][1];
                z = myPos[i][2];
                myPos[i] = [x, y, z];
                brick.position.set(x, y, z);

                brick.rotation.y = myRot[i];
                
                var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
                brickWallBox.setFromObject(brick);
                brickWalls.push(brickWallBox);

                brickWall.add(brick);
            }

        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );

    loader.load(
        // resource URL
        'images/wall0.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshLambertMaterial( {
                map: texture
             } );

            for (var i = 0; i < numWalls; i++) {
                var x = myGeo[i+5][0];
                var y = myGeo[i+5][1];
                var z = myGeo[i+5][2];
                geometry = new THREE.BoxGeometry( x, y, z );

                var brick = new THREE.Mesh( geometry, material );

                x = myPos[i+5][0];
                y = myPos[i+5][1];
                z = myPos[i+5][2];
                brick.position.set(x, y, z);

                brick.rotation.y = myRot[i+5];

                var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
                brickWallBox.setFromObject(brick);
                brickWalls.push(brickWallBox);

                brickWall.add(brick);
            }

        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );

    loader.load(
        // resource URL
        'images/wall1.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshLambertMaterial( {
                map: texture
             } );

            for (var i = 0; i < numWalls; i++) {
                var x = myGeo[i+10][0];
                var y = myGeo[i+10][1];
                var z = myGeo[i+10][2];
                geometry = new THREE.BoxGeometry( x, y, z );

                var brick = new THREE.Mesh( geometry, material );

                x = myPos[i+10][0];
                y = myPos[i+10][1];
                z = myPos[i+10][2];
                brick.position.set(x, y, z);

                brick.rotation.y = myRot[i+10];

                var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
                brickWallBox.setFromObject(brick);
                brickWalls.push(brickWallBox);

                brickWall.add(brick);
            }

        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );

    loader.load(
        // resource URL
        'images/wall2.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshLambertMaterial( {
                map: texture
             } );

            for (var i = 0; i < numWalls; i++) {
                var x = myGeo[i+15][0];
                var y = myGeo[i+15][1];
                var z = myGeo[i+15][2];
                geometry = new THREE.BoxGeometry( x, y, z );
                var brick = new THREE.Mesh( geometry, material );

                x = myPos[i+15][0];
                y = myPos[i+15][1];
                z = myPos[i+15][2];
                brick.position.set(x, y, z);

                brick.rotation.y = myRot[i+15];

                var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
                brickWallBox.setFromObject(brick);
                brickWalls.push(brickWallBox);

                brickWall.add(brick);
            }

        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );

    loader.load(
        // resource URL
        'images/wall3.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshLambertMaterial( {
                map: texture
             } );

            for (var i = 0; i < numWalls; i++) {
                var x = myGeo[i+20][0];
                var y = myGeo[i+20][1];
                var z = myGeo[i+20][2];
                geometry = new THREE.BoxGeometry( x, y, z );
                var brick = new THREE.Mesh( geometry, material );

                x = myPos[i+20][0];
                y = myPos[i+20][1];
                z = myPos[i+20][2];
                brick.position.set(x, y, z);

                brick.rotation.y = myRot[i+20];

                var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
                brickWallBox.setFromObject(brick);
                brickWalls.push(brickWallBox);

                brickWall.add(brick);
            }

        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );

    loader.load(
        // resource URL
        'images/wall4.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshLambertMaterial( {
                map: texture
             } );
            console.log(numWalls);
            for (var i = 0; i < numWalls; i++) {
                var x = myGeo[i+25][0];
                var y = myGeo[i+25][1];
                var z = myGeo[i+25][2];
                geometry = new THREE.BoxGeometry( x, y, z );
                var brick = new THREE.Mesh( geometry, material );

                x = myPos[i+25][0];
                y = myPos[i+25][1];
                z = myPos[i+25][2];
                brick.position.set(x, y, z);

                brick.rotation.y = myRot[i+25];

                var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
                brickWallBox.setFromObject(brick);
                brickWalls.push(brickWallBox);

                brickWall.add(brick);
            }

        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );

        }
    );
}