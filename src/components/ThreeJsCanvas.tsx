
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJsCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create objects
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    
    const meshes = [];
    
    for (let i = 0; i < 5; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );
      mesh.scale.set(
        Math.random() + 0.5,
        Math.random() + 0.5,
        Math.random() + 0.5
      );
      scene.add(mesh);
      meshes.push(mesh);
    }
    
    // Add scroll interaction
    let scrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    });
    
    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate objects
      meshes.forEach((mesh, i) => {
        mesh.rotation.x = elapsedTime * 0.1 * (i + 1) * 0.1;
        mesh.rotation.y = elapsedTime * 0.15 * (i + 1) * 0.1;
        
        // Respond to scroll
        mesh.position.y = -scrollY * 0.002 + Math.sin(elapsedTime * 0.5) * 0.5;
      });
      
      // Render
      renderer.render(scene, camera);
      
      // Call animate again on the next frame
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  
  return <div ref={containerRef} className="absolute inset-0" />;
};

export default ThreeJsCanvas;
