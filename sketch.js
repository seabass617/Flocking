//============================================
// Sketch File 
//============================================


const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
	// SET UP TO DISPLAY FULL SCREEN ON BROWSER
	createCanvas (800, 600);
	alignSlider = createSlider(0,5,1,0.1);
	alignSlider.position(20, 625);
	cohesionSlider = createSlider(0,5,1,0.1);
	cohesionSlider.position(20,650);
	separationSlider = createSlider(0,5,1,0.1);
	separationSlider.position(20,675);

	for (let i = 0; i < 100; i++){
		flock.push(new Boid());
	}

	
}
  
function draw() {
	background(51);

	for (let boid of flock) {
		boid.edges();
		boid.flock(flock);
		boid.update();
		boid.show();
	}

}

