import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Cyan particles — primary layer
    const count1 = 800;
    const geo1 = new THREE.BufferGeometry();
    const pos1 = new Float32Array(count1 * 3);
    for (let i = 0; i < count1; i++) {
      pos1[i * 3] = (Math.random() - 0.5) * 12;
      pos1[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos1[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    geo1.setAttribute('position', new THREE.BufferAttribute(pos1, 3));
    const mat1 = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles1 = new THREE.Points(geo1, mat1);
    scene.add(particles1);

    // Purple particles — depth layer
    const count2 = 400;
    const geo2 = new THREE.BufferGeometry();
    const pos2 = new Float32Array(count2 * 3);
    for (let i = 0; i < count2; i++) {
      pos2[i * 3] = (Math.random() - 0.5) * 14;
      pos2[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos2[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    geo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3));
    const mat2 = new THREE.PointsMaterial({
      color: 0x7b2ff7,
      size: 0.015,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles2 = new THREE.Points(geo2, mat2);
    scene.add(particles2);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles1.rotation.y = t * 0.04 + mouseX * 0.08;
      particles1.rotation.x = t * 0.02 - mouseY * 0.08;

      particles2.rotation.y = t * 0.02 - mouseX * 0.04;
      particles2.rotation.x = t * 0.01 + mouseY * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geo1.dispose();
      mat1.dispose();
      geo2.dispose();
      mat2.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="particle-background" />;
}
