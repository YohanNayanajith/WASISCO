import React, { useEffect } from "react";
import * as THREE from "three";

const Sample = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl");

    const scene = new THREE.Scene();

    const geometry = new THREE.TorusGeometry(1, 0.2, 16, 100);
    const particleGeometry = new THREE.BufferGeometry();
    const particleCounts = 100;
    const posArray = new Float32Array(particleCounts * 3);
    for (let i = 0; i < particleCounts * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 0.005,
    });
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      //   transparent: true,
      // color: "blue",
    });
    material.color = new THREE.Color(0x919191);

    const sphere = new THREE.Points(geometry, material);
    const particleMesh = new THREE.Points(particleGeometry, particlesMaterial);
    scene.add(sphere, particleMesh);

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 3;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // renderer.setClearColor(new THREE.Color("#041C4C"), 1);

    document.addEventListener("mousemove", animateParticles);
    let mouseX = 0;
    let mouseY = 0;
    function animateParticles(event) {
      mouseY = event.clientY;
      mouseX = event.clientX;
    }

    const clock = new THREE.Clock();
    console.log(clock.getElapsedTime());
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      sphere.rotation.y = 0.5 * elapsedTime;
      particleMesh.rotation.y = -0.1 * elapsedTime;

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };
    tick();
  }, []);
  return (
    <div>
      <canvas class="webgl"></canvas>
    </div>
  );
};

export default Sample;
