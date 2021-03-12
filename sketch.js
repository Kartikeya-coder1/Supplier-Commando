var helicopter,box,ground; 
var himg,boximg,boxBody;
 const Engine = Matter.Engine; 
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
  const Body = Matter.Body; 
  var engine,world;

  function preload()
  { himg = loadImage("helicopter.png"); 
  boximg = loadImage("package.png"); }


   function setup() 
   { createCanvas(800,700); 
	rectMode(CENTER);
	 box = createSprite(width/2,80,10,10);
	 box.addImage(boximg);
	  box.scale = 0.2; 
	  helicopter = createSprite(width/2,200,10,10); 
	  helicopter.addImage(himg); 
	  helicopter.scale = 0.6; 
	  ground = createSprite(width/2,height-35,width,10); 
	  ground.shapeColor = color(255);
	   box1 = createSprite(500,610,20,100); 
	   box1.shapeColor = color("black");

	   box2 = createSprite(300,610, 20,100);
	    box2.shapeColor=color("black");
		 box3 = createSprite(400,650, 200,20);
		  box3.shapeColor=color("black"); 
		engine = Engine.create();
		world = engine.world;
		 boxBody = Bodies.circle(width/2,200,5,{restitution:0.8});
		 Matter.Body.setStatic(boxBody,true); World.add(world,boxBody);

		 var ground_options = { isStatic: true }
		  ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
		   World.add(world,ground);
		    box1 = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
			 World.add(world,box1); 
			 box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
			  World.add(world, box2);
			   box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
			 World.add(world, box3); //console.log(ground);
			  Engine.run(engine); 
			}


			function draw() {
				//helicopter.x = box.x
				//=-()*&^%%$box.x = helicopter.x
				
				// helicopter.x = packageSprite.x
				 rectMode(CENTER);
				  background("red"); 
				  //Engine.update(engine); 
				  box.x = boxBody.position.x
				   box.y = boxBody.position.y
				   box.x = helicopter.x

				   if(keyDown("left")){
					helicopter.x = helicopter.x-5
					//box.x = box.x-5
					// boxBody.position.x = boxBody.position.x-1
				}

				if(keyDown("right")){
					helicopter.x = helicopter.x+5
					// boxBody.position.x = boxBody.position.x+1
					
				}

				// =-()boxBody.x = helicopter.x

				    drawSprites();
					 keyPressed();
					 } 
					 function keyPressed() { 
						 if (keyCode == DOWN_ARROW)
						  { console.log("down"); 
						 Matter.Body.setStatic(boxBody,false); }
						 box.x = boxBody.position.x
						// box.x != helicopter.x
						 }













// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
// var packageBody,ground,package1,ground1
// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

// function preload()
// {
// 	helicopterIMG=loadImage("helicopter.png")
// 	packageIMG=loadImage("package.png")
// }

// function setup() {
// 	createCanvas(800, 700);
// 	engine = Engine.create();
// 	world = engine.world;
// 	rectMode(CENTER);
	
// 	// ground1 = new Ground(400,690,800,20)

// 	packageSprite=createSprite(width/2, 200, 10,10);
// 	packageSprite.addImage(packageIMG)
// 	packageSprite.scale=0.2

// 	helicopterSprite=createSprite(width/2, 200, 10,10);
// 	helicopterSprite.addImage(helicopterIMG)
// 	helicopterSprite.scale=0.6

// 	groundSprite=createSprite(width/2, height-35, width,10);
// 	groundSprite.shapeColor=color(255)

// 	boxPosition=width/2-100
//  	boxY=610;

// 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
//  	boxleftSprite.shapeColor=color(255,0,0);

// 	 boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
//  	boxBase.shapeColor=color(255,0,0);

// 	 boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
//  	boxrightSprite.shapeColor=color(255,0,0);

// ////////////////////////////////////////////
// 	engine = Engine.create();
// 	world = engine.world;
// ///////////////////////////////////////////
// 	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
// 	World.add(world, packageBody);
	

// 	//Create a Ground
// 	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
// 	 World.add(world, ground);
	 


 	


 	

//  	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
//  	World.add(world, boxLeftBody);
// ///////////////
 	

//  	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
//  	World.add(world, boxBottomBody);

 	

//  	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
//  	World.add(world, boxRightBody);

// //package1 = new Package(100,100,30,30)

// 	Engine.run(engine);
  
// }


// function draw() {
//   rectMode(CENTER);
//   background(0);
//  	packageSprite.x = helicopterSprite.x
// // 	//packageSprite.x= packageBody.position.x 
// // //packageSprite.y= packageBody.position.y 
// // //packageSprite.x = helicopterSprite.x
  
// //   //package1.display()

// //   if(keyDown("left")){
// // 	helicopterSprite.x = helicopterSprite.x - 10	  
// // 	//packageSprite.x = helicopterSprite.x  

// // }

// //   if(keyDown("right")){
// // 	helicopterSprite.x = helicopterSprite.x + 10
// // 	//packageSprite.x = helicopterSprite.x	  
// //   }

// //   //if(keyDown("down")){

// // //packageSprite.x= packageBody.position.x 
// //   //packageSprite.y= packageBody.position.y
// //   //packageSprite.velocityY = 10
   
// // //}//

// // // ground1.display() 
//   drawSprites(); 
//  keyPressed()
// }


// function keyPressed(){
// 	if(keyCode == DOWN_ARROW ){
// 		console.log("hlo")
// 		Matter.Body.setStatic(packageBody , false);}
// 	}
	