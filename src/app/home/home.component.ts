import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'rxjs';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  gl: WebGLRenderingContext;
  cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

  constructor() { 
    console.log('constructor has called');
  }
  @ViewChild('canvas') canvasElem: ElementRef | undefined;

  ngOnInit() {

   }



 ngAfterViewInit()
  {
    // Create a canvas element and add to the tag
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    this.gl = canvas.getContext( 'webgl', {xrCompatible: true}) as WebGLRenderingContext;
    this.scene = new THREE.Scene();
    const materials = [
      new THREE.MeshBasicMaterial({color: 0xff0000}),
      new THREE.MeshBasicMaterial({color: 0x0000ff}),
      new THREE.MeshBasicMaterial({color: 0x00ff00}),
      new THREE.MeshBasicMaterial({color: 0xff00ff}),
      new THREE.MeshBasicMaterial({color: 0x00ffff}),
      new THREE.MeshBasicMaterial({color: 0xffff00})
    ];

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add( this.cube );

    

    this.renderer = new THREE.WebGLRenderer( );
    this.renderer.autoClear = false;

    this.camera = new THREE.PerspectiveCamera();
    this.camera.matrixAutoUpdate = false;
    this.camera.position.z = 5;
    document.body.appendChild( ARButton.createButton(this.renderer));
    // Initialize the XR Session using immersive-ar
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType('local');

// Create a render loop that allows us to draw on the AR view.
    // const onXRFrame = (time, frame) => {
    //   // Queue up the next draw request.
    //   this.renderer.setAnimationLoop(this.animate);

    //   // Bind the graphics framebuffer to the baseLayer's framebuffer
    //   // this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.renderer.xr.getSession().renderState.baseLayer.framebuffer);

    //   // // Retrieve the pose of the device.
    //   // // XRFrame.getViewerPose can return null while the session attempts to establish tracking.
    //   // const pose = frame.getViewerPose(this.renderer.xr.getReferenceSpace());
    //   // if (pose) {
    //   //   // In mobile AR, we only have one view.
    //   //   const view = pose.views[0];

    //   //   const viewport = this.renderer.xr.getSession().renderState.baseLayer.getViewport(view);
    //   //   this.renderer.setSize(viewport.width, viewport.height);

    //   //   // Use the view's transform matrix and projection matrix to configure the THREE.camera.
    //   //   this.camera.matrix.fromArray(view.transform.matrix)
    //   //   this.camera.projectionMatrix.fromArray(view.projectionMatrix);
    //   //   this.camera.updateMatrixWorld(true);

    //   //   // Render the scene with THREE.WebGLRenderer.
        
    //   // }
    //   this.renderer.render(this.scene, this.camera);
    // };
    this.animate();
  }


  animate()
  {
    this.renderer.setAnimationLoop(this.animate);

    this.cube.rotation.x += 0.01;
	  this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);

  }

  ngOnDestroy()
  {
  }

}
