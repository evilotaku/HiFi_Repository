//  unityScriptStructure.js
//
//  Created by Alexia Mandeville on 3 May 2018
//  Copyright 2018 High Fidelity, Inc.
//
//  A script for people familiar with Unity's methods to get started in High Fidelity
//  Throughout the script I write about 'Entities' - think of these as 'GameObjects'
//  This script would be attached to an entity, just like how you would add a script to a gameObject in the hierarchy
//  You might also want to check out our Unity to High Fidelity exporter! https://github.com/highfidelity/unity-to-hifi-exporter
//
//  High Fidelity docs: https://docs.highfidelity.com/
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html

(function() { // For entity scripts, we wrap it in an anon function
    

    /*  Start() (kind of) */

    this.preload = function(entityID) { // This runs the first time an avatar encounters the entity over the network
        print("start" + entityID);
    };

    /*  Update() */

    /*function update(dt) { // This runs update at a rate of 60hz, but isn't synced on a frame
        print("Called until disconnected @", dt, "ms");
    }
    Script.update.connect(update);*/

    /*  Input.GetKeyDown() */

    Controller.keyPressEvent.connect(function (event) { // Do something on key input

        if (event.text === "x") {
            print(JSON.stringify(event.text));
        }

    });

    /*  Input.GetMouseButtonDown() */

    Controller.mousePressEvent.connect(function (event) { // Do something on mousepress (any button)
        print(JSON.stringify(event));
    });

    /*  Coroutines */

    /*
    var coroutine = Script.setInterval(function() { // This acts like 'yield return new WaitForSeconds(1)' does in a coroutine
      print("coroutine");
    }, 1000); //ms

    /*  Stop the coroutine */
    // Script.clearInterval(coroutine);

    /*  OnCollisionEnter() */

    MyAvatar.collisionWithEntity.connect(function (collision) { // Do something when my avatar collides with an entity
        print("Your avatar collided with an entity.");
    });

    this.collisionWithEntity = function (myID, otherID, collision) { // When another object collides with this object
        print("Collision of " + myID + " and " + otherID);    
    };

    /*  Instantiate() */

    /*
    var entityID = Entities.addEntity({
      type: "Box",
      position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
      dimensions: { x: 0.5, y: 0.5, z: 0.5 },
      color: { red: 128, green: 128, blue: 128 },
      gravity: { x: 0, y: -9.8, z: 0 },
      velocity: { x: 0, y: 0.1, z: 0 },  // Kick off physics.
      dynamic: true,
      collisionless: false,  // So that collision events are generated.
      script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
      lifetime: 300  // Delete after 5 minutes.
    });
    */
	
	function onEnding () {
        Script.update.disconnect(update);
        // And other bindings here
    }
    Script.scriptEnding.connect(onEnding);

});