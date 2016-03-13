//Skapa lista med län och initiera denna.
var alla_lan = [];
init_lan();
var SELECTED_LAN_ID = -1;

var first = true;

//Load json files
loadData();

var renderer = new THREE.WebGLRenderer({ alpha: true, antialiasing: false });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0xFFFFFF, 0.2 );
var EventsControls = new EventsControls( camera, renderer.domElement );
// TODO - render inside div


sceneGraph.add(sweden);
scene.add(sceneGraph);


EventsControls.attachEvent( 'onclick', function() {

	activeLan = this.focused.name;
	
	activeLan = parseInt(this.focused.name);

	var temp = SELECTED_LAN_ID;
	SELECTED_LAN_ID = selectedId(activeLan);




	if(SELECTED_LAN_ID == temp){
		SELECTED_LAN_ID = -1;
		activeLan = 22;
	}
	
	createCharts();
	createCharts2();
	createCharts3();

	document.getElementById("markerat_lan_title").innerHTML = getLan(SELECTED_LAN_ID).namn;
	document.getElementById("markerat_lan_title_h3").innerHTML = getLan(SELECTED_LAN_ID).namn;
	document.getElementById("markerat_lan_title_h3_2").innerHTML = getLan(SELECTED_LAN_ID).namn;
	document.getElementById("markerat_lan_title_h3_3").innerHTML = getLan(SELECTED_LAN_ID).namn;
	
});

EventsControls.attachEvent( 'mouseOver', function() {
    	this.mouseOvered.material.opacity = 0.8;
    	this.mouseOvered.scale.set(1,1.1,1);
		this.mouseOvered.material.color.setHex(0x00ff00);

		document.getElementById("hover_lan_title").innerHTML = getLan(selectedId(this.mouseOvered.name)).namn ;
		document.getElementById("hover_lan_title").style.left = String(parseInt(((mouse.x + 0.5) * window.innerWidth)) + 15) + "px";
		document.getElementById("hover_lan_title").style.top = String(parseInt(((mouse.y + 0.5) * window.innerHeight))) + "px";

});

EventsControls.attachEvent( 'mouseMove', function() {
	document.getElementById("hover_lan_title").style.left = String(parseInt(((mouse.x + 0.5) * window.innerWidth)) + 15) + "px";
	document.getElementById("hover_lan_title").style.top = String(parseInt(((mouse.y + 0.5) * window.innerHeight))) + "px";


});

EventsControls.attachEvent( 'mouseOut', function() {
    	this.mouseOvered.material.opacity = 1;
    	this.mouseOvered.scale.set(1,1,1);
		this.mouseOvered.material.color.setHex(0xffffff);

		document.getElementById("hover_lan_title").innerHTML = "";
		document.getElementById("hover_lan_title").style.left = -100 + "px";
		document.getElementById("hover_lan_title").style.top = -100 + "px";
});

//KLUMP START ========================================
document.getElementById('btn_map_1').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar antalet arbetslösa personer i varje län (alla åldrar). Högre position på länet motsvarar fler arbetslösa.";
}
document.getElementById('btn_map_1').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_2').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar antalet arbetslösa mellan 18-24 år i varje län. Högre position på länet motsvarar fler arbetslösa.";
}
document.getElementById('btn_map_2').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_3').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar antalet personer med någon studieskuld i varje län. Högre position på länet motsvarar fler personer.";
}
document.getElementById('btn_map_3').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_4').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar den totala studieskulden i länet mätt i kronor. Högre position på länet motsvarar en högre summa.";
}
document.getElementById('btn_map_4').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_5').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar antalet lediga jobb i länet. Högre position på länet motsvarar fler lediga jobb.";
}
document.getElementById('btn_map_5').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_6').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar skillnad i arbetslöshet mellan män och kvinnor (alla åldrar). Högre position på länet motsvarar fler arbetslösa kvinnor och lägre position på länet motsvarar fler arbetslösa män.";
}
document.getElementById('btn_map_6').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_7').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar skillnad i arbetslöshet mellan män och kvinnor (åldrarna 18-24). Högre position på länet motsvarar fler arbetslösa kvinnor och lägre position på länet motsvarar fler arbetslösa män.";
}
document.getElementById('btn_map_7').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_8').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Visar skillnad i studieskuld mellan män och kvinnor (alla åldrar). Högre position på länet motsvarar fler kvinnor med studieskuld och lägre position på länet motsvarar fler män med studieskuld.";
}
document.getElementById('btn_map_8').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}

document.getElementById('btn_map_9').onmouseover = function () {
	document.getElementById("hover_button_explanation").innerHTML = "Återställer alla län till deras ursprungliga position.";
}
document.getElementById('btn_map_9').onmouseout = function () {
	document.getElementById("hover_button_explanation").innerHTML = "";
}
//KLUMP STOP =======================================


camera.position.z = 18;
camera.position.y = 15;
camera.position.x = -5;
camera.lookAt( new THREE.Vector3( 0, -0, 0 ) );

sweden.scale.set(1,3,1);
sweden.rotation.y = -0.7;
sweden.rotation.x = 0.4;
sweden.rotation.z = -0.1;

camera.up = new THREE.Vector3(0,1,0);
camera.lookAt(new THREE.Vector3(0,5,7));

for(var lan = 1; lan < 22; lan++){
	getLan(selectedId(lan)).mesh = mesh_array[lan];
}

start_time = getCurrentTime;
var diff_time = getCurrentTime;
var move_time = 1.0;




var render = function () {


	time = getCurrentTime();
	diff_time = time - start_time;


	if(diff_time < move_time){

		switch(VILKEN_KNAPP) {
		    case 1: // Totalt arbetslösa
			    for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, alla_lan[lan].n_totalt_arbetslosa/100000);
				}
		       	break;
		    case 2: // Unga arbetslösa
		        for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, alla_lan[lan].n_unga_arbetslosa/100000);
				}
		        break;
		    case 3: // Personer med studieskuld
		        for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_man_studieskuld + alla_lan[lan].n_kvinnor_studieskuld)/100000);
				}
		        break;
		    case 4: // Total studieskuld
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].studieskuld_man + alla_lan[lan].studieskuld_kvinnor)/12000000000);
		       	}
		        break;
		    case 5: // Lediga jobb
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, alla_lan[lan].n_lediga_jobb/100000);
		       	}
		        break;
		    case 6: // Jmfr total arbetslöshet
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_kvinnor_arbetslosa - alla_lan[lan].n_man_arbetslosa)/10000);
		       	}
		        break;
		    case 7: // Jmfr unga arbetslöshet
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_unga_kvinnor_arbetslosa - alla_lan[lan].n_unga_man_arbetslosa)/10000);
		       	}
		    	break;
		    case 8: // Jmfr antal med studieskuld
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_kvinnor_studieskuld - alla_lan[lan].n_man_studieskuld)/10000);
		       	}
		        break;
			case 9: // Jmfr antal med studieskuld
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, 0);
		       	}
		        break;
		    default:
		        console.log("vad vill du");
		}
	}else{
		for(var lan = 0; lan < 21; lan++){
        	alla_lan[lan].current_mesh_position = alla_lan[lan].mesh.position.y;
		}
	}

	//alla_lan[20].mesh.position.y= Math.sin(time);

	//camera.position.y = Math.sin(10*time) + 17;

	for(var lan = 1; lan < 22; lan++){
		// Mesh
		//mesh_array[lan].position.set(0, ((Math.sin(time + lan*0.1)+1)/2)*1,0);
		// Color
		//material_array[lan].color.setRGB(1, ((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7,((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7);
		material_array[lan].color.setRGB(1, 1, 1);
	}

		material_array[activeLan].color.setRGB(0.9,0.9,0.9);
	

	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

render();