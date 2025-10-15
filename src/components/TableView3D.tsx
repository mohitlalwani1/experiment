import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ExperimentStep } from '../types/experiments';
import { createStudentCharacter } from '../utils/createStudentCharacter';

interface TableView3DProps {
  currentStep: ExperimentStep;
  isAnimating: boolean;
  showVisual: boolean;
}

export function TableView3D({ currentStep, isAnimating, showVisual }: TableView3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const objectsRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4, 8);
    camera.lookAt(0, 1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const tableGeometry = new THREE.BoxGeometry(6, 0.15, 3);
    const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.y = 1.5;
    table.castShadow = true;
    table.receiveShadow = true;
    scene.add(table);

    const legGeometry = new THREE.CylinderGeometry(0.08, 0.08, 1.5, 8);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const positions = [
      [-2.8, 0.75, -1.3],
      [2.8, 0.75, -1.3],
      [-2.8, 0.75, 1.3],
      [2.8, 0.75, 1.3],
    ];
    positions.forEach(pos => {
      const leg = new THREE.Mesh(legGeometry, legMaterial);
      leg.position.set(pos[0], pos[1], pos[2]);
      leg.castShadow = true;
      scene.add(leg);
    });

    const { character, parts } = createStudentCharacter();
    character.position.set(-3, 0, 2);
    character.scale.set(1, 1, 1);
    scene.add(character);

    const rightHand = parts.rightHand;
    objectsRef.current.push(rightHand);

    const createEquipment = () => {
      objectsRef.current.forEach(obj => scene.remove(obj));
      objectsRef.current = [];

      const action = currentStep.action?.type;

      if (action === 'mix' || action === 'measure' || action === 'heat') {
        const beakerGeometry = new THREE.CylinderGeometry(0.4, 0.35, 0.9, 16);
        const beakerMaterial = new THREE.MeshStandardMaterial({
          color: isAnimating ? 0xff6b6b : 0x88ccff,
          transparent: true,
          opacity: 0.7
        });
        const beaker = new THREE.Mesh(beakerGeometry, beakerMaterial);
        beaker.position.set(0, 2, 0);
        beaker.castShadow = true;
        scene.add(beaker);
        objectsRef.current.push(beaker);

        if (action === 'heat' && isAnimating) {
          const flameGeometry = new THREE.ConeGeometry(0.3, 0.6, 8);
          const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xff4500 });
          const flame = new THREE.Mesh(flameGeometry, flameMaterial);
          flame.position.set(0, 1.2, 0);
          scene.add(flame);
          objectsRef.current.push(flame);
        }
      }

      if (action === 'shake' || action === 'observe') {
        const sphereGeometry = new THREE.SphereGeometry(0.35, 16, 16);
        const sphereMaterial = new THREE.MeshStandardMaterial({
          color: 0xffcc00,
          transparent: true,
          opacity: 0.8
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(1, 2, 0);
        sphere.castShadow = true;
        scene.add(sphere);
        objectsRef.current.push(sphere);
      }

      if (action === 'wait') {
        const clockGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
        const clockMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const clock = new THREE.Mesh(clockGeometry, clockMaterial);
        clock.position.set(-1.5, 1.65, 0);
        clock.rotation.x = Math.PI / 2;
        clock.castShadow = true;
        scene.add(clock);
        objectsRef.current.push(clock);
      }

      if (showVisual && currentStep.visual) {
        const resultGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const resultMaterial = new THREE.MeshStandardMaterial({
          color: 0x00ff00,
          emissive: 0x00ff00,
          emissiveIntensity: 0.3
        });
        const result = new THREE.Mesh(resultGeometry, resultMaterial);
        result.position.set(0, 2.5, 0);
        result.castShadow = true;
        scene.add(result);
        objectsRef.current.push(result);
      }
    };

    createEquipment();

    let time = 0;
    const animate = () => {
      time += 0.016;

      if (isAnimating) {
        objectsRef.current.forEach((obj, idx) => {
          if (currentStep.action?.type === 'shake') {
            obj.position.x += Math.sin(time * 10) * 0.1;
            obj.rotation.z = Math.sin(time * 10) * 0.2;
          } else if (currentStep.action?.type === 'mix') {
            obj.rotation.y += 0.05;
          } else if (currentStep.action?.type === 'heat') {
            if (obj instanceof THREE.Mesh && obj.geometry instanceof THREE.ConeGeometry) {
              obj.scale.y = 1 + Math.sin(time * 5) * 0.2;
            }
          }
        });

        rightHand.position.y = 1.8 + Math.sin(time * 3) * 0.1;
      }

      if (showVisual) {
        objectsRef.current.forEach(obj => {
          obj.rotation.y += 0.02;
          obj.position.y += Math.sin(time * 2) * 0.005;
        });
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [currentStep, isAnimating, showVisual]);

  return <div ref={mountRef} className="w-full h-full rounded-xl overflow-hidden shadow-2xl" />;
}
