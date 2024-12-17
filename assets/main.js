// const canvas = document.querySelector("canvas");
// const c = canvas.getContext("2d");

// // Canvasiin size
// canvas.width = 1100;
// canvas.height = 401;

// Game Over
let gameOver = false;

// const testlvl = new Image();
// testlvl.src = "assets/mario-assets/test-lvl.png"; // Testing level for canvas

// // Playeriin model
// const marioIdle = new Image();
// marioIdle.src = "assets/mario-assets/mario/small/mario-idle.png"; // Mario Idle

// const marioRun1 = new Image();
// marioRun1.src = "assets/mario-assets/mario/small/mario-run1.png"; // Mario run 1

// const marioRun2 = new Image();
// marioRun2.src = "assets/mario-assets/mario/small/mario-run2.png"; // Mario run 2

// const marioRun3 = new Image();
// marioRun3.src = "assets/mario-assets/mario/small/mario-run3.png"; // Mario run 3

// const marioJump = new Image();
// marioJump.src = "assets/mario-assets/mario/small/mario-jump.png"; // Mario run 4

// const marioDeath = new Image();
// marioDeath.src = "assets/mario-assets/mario/small/mario-death.png"; // Mario death

// const goombaImageL = new Image();
// goombaImageL.src = "assets/mario-assets/goomba-l.png"; // Goomba left

// const goombaImageR = new Image();
// goombaImageR.src = "assets/mario-assets/goomba-r.png"; // Goomba right

// // Objectuudiin model

// const obstacleImage1 = new Image();
// obstacleImage1.src = "assets/mario-assets/pipe-s.png"; // Small Pipe

// const obstacleImage2 = new Image();
// obstacleImage2.src = "assets/mario-assets/pipe-m.png"; // Medium pipe

// const obstacleImage0 = new Image();
// obstacleImage0.src = "assets/mario-assets/brick.png"; // Brick

// const obstacleImageL = new Image();
// obstacleImageL.src = "assets/mario-assets/luckybox/1.png"; // Luckybox default

// // Luckybox array
// const luckyBoxImages = [
//   "assets/mario-assets/luckybox/1.png",
//   "assets/mario-assets/luckybox/2.png",
//   "assets/mario-assets/luckybox/3.png",
//   "assets/mario-assets/luckybox/4.png",
//   "assets/mario-assets/luckybox/5.png",
// ];

// let luckyBoxIndex = 0;

// // Luckybox animate function
// function updateLuckyBoxImage() {
//   luckyBoxIndex = (luckyBoxIndex + 1) % luckyBoxImages.length; // Array
//   obstacleImageL.src = luckyBoxImages[luckyBoxIndex]; // Update the lucky box image
// }

// setInterval(updateLuckyBoxImage, 190);

// // Player object
// const player = {
//   position: { x: 100, y: 100 },
//   velocity: { x: 0, y: 0 },
//   width: 25,
//   height: 25,
//   gravity: 0.5,
//   jumpVelocity: -7,
//   ani: [marioRun1, marioRun2, marioRun3], // Mario running animation array
//   marioIdle: marioIdle,
//   frameIndex: 0,
//   frameCounter: 0,
//   dir: "right", // Default right checking Left ! Right

  // draw: function () {
  //   c.save(); // Save the canvas state

  //   // Flip the player when moving left
    // if (this.dir === "left") {
    //   c.scale(-1, 1); // Flip horizontally
    //   c.drawImage(
    //     this.marioIdle,
    //     -this.position.x - this.width, // Adjust for flipped image
    //     this.position.y,
    //     this.width,
    //     this.height
    //   );
    } else if (gameOver) {
      c.drawImage(
        marioDeath,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else {
      c.drawImage(
        this.marioIdle,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }

  //   c.restore(); // Restore the canvas state

  //   // Debug border
  //   c.strokeStyle = "green";
  //   c.strokeRect(this.position.x, this.position.y, this.width, this.height);
  // },

  // update: function () {
  //   // Update position
  //   this.position.x += this.velocity.x;
  //   this.position.y += this.velocity.y;

    if (gameOver) {
      this.velocity.y += this.gravity;
      return;
    }

    // // Player gravity // Velocity = hurd // Gravity = undur
    // if (this.position.y + this.height < canvas.height - 75) {
    //   // 75 Spacing from bottom ground canvas
    //   this.velocity.y += this.gravity;
    // } else {
    //   this.velocity.y = 0;
    //   this.position.y = canvas.height - this.height - 75; // 75 Spacing from bottom ground canvas
    // }

    // If player jump change idle img to Jumping img
//     if (this.velocity.y < 0 || this.velocity.y > 0) {
//       this.marioIdle = marioJump;
//     } else if (this.velocity.x !== 0) {
//       // If player running change idle img to Jumping img
//       this.frameCounter++;
//       if (this.frameCounter % 20 === 0) {
//         // Zurag soligdoh hurd default 20 frame
//         this.frameIndex = (this.frameIndex + 1) % this.ani.length;
//         this.marioIdle = this.ani[this.frameIndex];
//       }
//     } else {
//       this.marioIdle = marioIdle; // Yuch hiigeegu uyd butsd idle img
//     }
//   },
// };

// Goomba object
// const goomba = {
//   position: { x: 800, y: 370 },
//   velocity: { x: 0.4, y: 0 }, // Goomba speed
//   width: 26,
//   height: 26,
//   gravity: 0.2,
//   goombaIdle: goombaImageL, // Goomba default img

//   draw: function () {
//      if (!this.dead){
//     c.drawImage(
//       this.goombaIdle,
//       this.position.x,
//       this.position.y,
//       this.width,
//       this.height
//     );
//     } else {
//       goomba.velocity.x = 0; // hodolgoongui bolno

//       // alga bolno
//       goomba.width = 0;
//       oomba.height = 0;
//     }

//     // Debug border
//     c.strokeStyle = "red";
//     c.strokeRect(this.position.x, this.position.y, this.width, this.height);
//   },

//   update: function () {
//     //if(!this.dead) {
//     this.position.x += this.velocity.x; // Zuun baruun hudulguun
//     this.position.y += this.velocity.y; // Usreh unah (odoohondoo hereggu)
//     //}

//     // Gravity
//     if (this.position.y + this.height < canvas.height - 75) {
//       // 75 Spacing from bottom ground canvas
//       this.velocity.y += this.gravity;
//     } else {
//       this.velocity.y = 0;
//       this.position.y = canvas.height - this.height - 75; // 75 Spacing from bottom ground canvas
//     }
//   },

//   // Animation
//   toggleImage: function () {
//     if (this.goombaIdle === goombaImageL) {
//       // Goomba idle
//       this.goombaIdle = goombaImageR; // Idle iin utgiig right img bolgono
//     } else {
//       this.goombaIdle = goombaImageL; // Idle iin utgiig left img bolgono
//     }
//   },
// };
// // Change animation by inverval
// setInterval(() => {
//   goomba.toggleImage();
// }, 300);

// // Controller keys boolean check (default)
// const keys = {
//   w: { pressed: false },
//   a: { pressed: false },
//   d: { pressed: false },
// };

// function handleKeyDown(e) {
//   switch (e.key) {
//     case "w":
//       if (player.velocity.y === 0) player.velocity.y = player.jumpVelocity;
//       break;
//     case "a":
//       keys.a.pressed = true;
//       player.dir = "left"; // Zuun
//       break;
//     case "d":
//       keys.d.pressed = true;
//       player.dir = "right"; // Baruun
//       break;
//   }
// }

// // Key up listener
// function handleKeyUp(e) {
//   switch (e.key) {
//     case "a":
//       keys.a.pressed = false;
//       break;
//     case "d":
//       keys.d.pressed = false;
//       break;
//   }
// }

// function updatePlayerVelocity() {
//   player.velocity.x = 0; // Stop movement by default
//   if (
//     keys.a.pressed
//     // && player.position.x > 100
//   ) {
//     player.velocity.x -= 2; // Move left
//   } else if (
//     keys.d.pressed
//     // && player.position.x < 400
//   ) {
//     player.velocity.x += 2; // Move right
//   } else {
//     player.velocity.x = 0;
//   }
// }

// // Clear the canvas
// function clearCanvas() {
//   c.drawImage(testlvl, 0, 0, canvas.width, canvas.height);
// }

// // Obstacles
// const obstacles = [
//   {
//     position: { x: 600, y: 275 },
//     width: 50,
//     height: 50,
//     image: obstacleImage1,
//   }, // Small pipe
//   {
//     position: { x: 850, y: 245 },
//     width: 50,
//     height: 80,
//     image: obstacleImage2,
//   }, // Medium pipe
//   {
//     position: { x: 400, y: 224 },
//     width: 27,
//     height: 27,
//     image: obstacleImage0,
//   }, // Brick
//   {
//     position: { x: 454, y: 224 },
//     width: 27,
//     height: 27,
//     image: obstacleImage0,
//   }, // Brick
//   {
//     position: { x: 427, y: 224 },
//     width: 27,
//     height: 27.5,
//     image: obstacleImageL,
//   }, // Luckybox
// ];

// // Draw obstacles
// function drawObstacles() {
//   obstacles.forEach((obstacle) => {
//     c.drawImage(
//       obstacle.image,
//       obstacle.position.x,
//       obstacle.position.y,
//       obstacle.width,
//       obstacle.height
//     );
//   });
// }

// // Collision Detection and Resolution by (CHATGPT)
// function resolveCollisions() {
//   obstacles.forEach((obstacle) => {
//     // Horizontal collisions (left and right)
//     if (
//       player.position.y + player.height > obstacle.position.y &&
//       player.position.y < obstacle.position.y + obstacle.height
//     ) {
//       if (
//         player.velocity.x > 0 && // Moving right
//         player.position.x + player.width <= obstacle.position.x &&
//         player.position.x + player.width + player.velocity.x >=
//           obstacle.position.x
//       ) {
//         player.velocity.x = 0; // Stop moving right
//         player.position.x = obstacle.position.x - player.width; // Snap to obstacle left
//       }

//       if (
//         player.velocity.x < 0 && // Moving left
//         player.position.x >= obstacle.position.x + obstacle.width &&
//         player.position.x + player.velocity.x <=
//           obstacle.position.x + obstacle.width
//       ) {
//         player.velocity.x = 0; // Stop moving left
//         player.position.x = obstacle.position.x + obstacle.width; // Snap to obstacle right
//       }
//     }

//     // Vertical collisions (top and bottom)
//     if (
//       player.position.x + player.width > obstacle.position.x &&
//       player.position.x < obstacle.position.x + obstacle.width
//     ) {
//       if (
//         player.velocity.y > 0 && // Falling
//         player.position.y + player.height <= obstacle.position.y &&
//         player.position.y + player.height + player.velocity.y >=
//           obstacle.position.y
//       ) {
//         player.velocity.y = 0; // Stop falling
//         player.position.y = obstacle.position.y - player.height; // Snap to obstacle top
//       }

//       if (
//         player.velocity.y < 0 && // Jumping
//         player.position.y >= obstacle.position.y + obstacle.height &&
//         player.position.y + player.velocity.y <=
//           obstacle.position.y + obstacle.height
//       ) {
//         player.velocity.y = 0; // Stop upward movement
//         player.position.y = obstacle.position.y + obstacle.height; // Snap below obstacle
//       }
//     }
//   });
// }

// // Collision Detection for Goomba
// function resolveGoombaCollisions() {
//   obstacles.forEach((obstacle) => {
//     // Check goomba right side
//     if (
//       goomba.position.y + goomba.height > obstacle.position.y &&
//       goomba.position.y < obstacle.position.y + obstacle.height
//     ) {
//       if (
//         goomba.velocity.x > 0 && // Move right
//         goomba.position.x + goomba.width <= obstacle.position.x &&
//         goomba.position.x + goomba.width + goomba.velocity.x >=
//           obstacle.position.x
//       ) {
//         goomba.velocity.x = -0.4; // Hursen uyd butsah (reverse)
//       }

//       // Check goomba left side
//       if (
//         goomba.velocity.x < 0 && // Move left
//         goomba.position.x >= obstacle.position.x + obstacle.width &&
//         goomba.position.x + goomba.velocity.x <=
//           obstacle.position.x + obstacle.width
//       ) {
//         goomba.velocity.x = 0.4; // Hursen uyd butsah (reverse)
//       }
//     }
//   });
// }

function checkCollision() {
  if (
    player.position.y + player.height > goomba.position.y &&
    player.position.y < goomba.position.y + goomba.height &&
    player.position.x + player.width > goomba.position.x &&
    player.position.x < goomba.position.x + goomba.width
  ) {
    if (player.position.y + player.height <= goomba.position.y + 5) {
      handleGoombaDeath();
      player.velocity.y = player.jumpVelocity;
    } else {
      handleGameOver();
    }
  }

  function handleGoombaDeath() {
    //goomba.dead = true;
    goomba.velocity.x = 0; // hodolgoongui bolno

    // alga bolno
    goomba.width = 0;
    goomba.height = 0;
  }

  function handleGameOver() {
    gameOver = true;
    //player.velocity.y = -7;
    // goomba.dead = false
  }
}

// frame by frame window updater
// function animate() {
//   window.requestAnimationFrame(animate);
//   clearCanvas(); // Canvas arilgana
//   drawObstacles(); // Obj gargana
//   updatePlayerVelocity(); // Player horizontal movement
//   resolveCollisions(); // Handle collisions
//   resolveGoombaCollisions(); // Goomba colission
  checkCollision();
//   player.update(); // Player update
//   player.draw(); // Create player
//   goomba.draw(); // Create goomba
//   goomba.update(); // Goomba update
// }

// // Event listener
// addEventListener("keydown", handleKeyDown);
// addEventListener("keyup", handleKeyUp);


// animate();



