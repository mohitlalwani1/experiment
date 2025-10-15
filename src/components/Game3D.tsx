import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Experiment } from '../types/experiments';
import { createStudentCharacter } from '../utils/createStudentCharacter';

interface Game3DProps {
  experiments: Experiment[];
  onSelectExperiment: (experiment: Experiment) => void;
}

export function Game3D({ experiments, onSelectExperiment }: Game3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const characterRef = useRef<THREE.Mesh | null>(null);
  const tableRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const keysPressed = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xb8e6f5);
    scene.fog = new THREE.Fog(0xb8e6f5, 20, 50);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const floorGeometry = new THREE.PlaneGeometry(50, 50);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0xc4e6c4,
      roughness: 0.7,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff8dc,
      roughness: 0.9
    });

    const backWall = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 15),
      wallMaterial
    );
    backWall.position.set(0, 7.5, -25);
    backWall.receiveShadow = true;
    scene.add(backWall);

    const leftWall = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 15),
      wallMaterial
    );
    leftWall.position.set(-25, 7.5, 0);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 15),
      wallMaterial
    );
    rightWall.position.set(25, 7.5, 0);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    const { character, parts } = createStudentCharacter();
    character.position.set(0, 0, 10);
    scene.add(character);
    characterRef.current = parts.body as any;

    const table = new THREE.Group();
    const tableTopGeometry = new THREE.BoxGeometry(8, 0.2, 4);
    const tableTopMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
    tableTop.position.y = 1.5;
    tableTop.castShadow = true;
    table.add(tableTop);

    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });

    const positions = [
      [-3.5, 0.75, -1.5],
      [3.5, 0.75, -1.5],
      [-3.5, 0.75, 1.5],
      [3.5, 0.75, 1.5],
    ];

    positions.forEach(pos => {
      const leg = new THREE.Mesh(legGeometry, legMaterial);
      leg.position.set(pos[0], pos[1], pos[2]);
      leg.castShadow = true;
      table.add(leg);
    });

    table.position.set(0, 0, -5);
    scene.add(table);
    tableRef.current = table;

    const bookGeometry = new THREE.BoxGeometry(2, 0.3, 1.5);
    const bookMaterial = new THREE.MeshStandardMaterial({ color: 0xff6b6b });
    const book = new THREE.Mesh(bookGeometry, bookMaterial);
    book.position.set(0, 1.75, -5);
    book.castShadow = true;
    scene.add(book);

    const beakerGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16);
    const beakerMaterial = new THREE.MeshStandardMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.6
    });
    const beaker = new THREE.Mesh(beakerGeometry, beakerMaterial);
    beaker.position.set(-2, 2, -5);
    beaker.castShadow = true;
    scene.add(beaker);

    const flaskGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const flaskMaterial = new THREE.MeshStandardMaterial({
      color: 0xff88cc,
      transparent: true,
      opacity: 0.6
    });
    const flask = new THREE.Mesh(flaskGeometry, flaskMaterial);
    flask.position.set(2, 1.9, -5);
    flask.castShadow = true;
    scene.add(flask);

    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = true;

      if (e.key.toLowerCase() === 'e') {
        const charPos = character.position;
        const tablePos = table.position;
        const distance = Math.sqrt(
          Math.pow(charPos.x - tablePos.x, 2) +
          Math.pow(charPos.z - tablePos.z, 2)
        );

        if (distance < 8) {
          onSelectExperiment(experiments[selectedIndex]);
        }
      }

      if (e.key.toLowerCase() === 'q') {
        setSelectedIndex(prev => (prev - 1 + experiments.length) % experiments.length);
      }

      if (e.key.toLowerCase() === 'r') {
        setSelectedIndex(prev => (prev + 1) % experiments.length);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const moveSpeed = 0.15;
    const animate = () => {
      if (keysPressed.current['w']) {
        character.position.z -= moveSpeed;
      }
      if (keysPressed.current['s']) {
        character.position.z += moveSpeed;
      }
      if (keysPressed.current['a']) {
        character.position.x -= moveSpeed;
      }
      if (keysPressed.current['d']) {
        character.position.x += moveSpeed;
      }

      character.position.x = Math.max(-20, Math.min(20, character.position.x));
      character.position.z = Math.max(-20, Math.min(20, character.position.z));

      camera.position.x = character.position.x;
      camera.position.z = character.position.z + 15;
      camera.lookAt(character.position.x, 2, character.position.z);

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    setTimeout(() => setShowInstructions(false), 5000);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [experiments, selectedIndex, onSelectExperiment]);

  return (
    <div className="relative w-full h-screen">
      <div ref={mountRef} className="w-full h-full" />

      {showInstructions && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-10 py-6 rounded-3xl shadow-2xl border-4 border-cyan-400 animate-pulse">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Welcome to the Science Lab!</h2>
          <div className="space-y-3 text-base">
            <p className="flex items-center gap-3"><span className="font-bold text-green-400 text-xl bg-green-900 px-3 py-1 rounded">W A S D</span> Move Character</p>
            <p className="flex items-center gap-3"><span className="font-bold text-blue-400 text-xl bg-blue-900 px-3 py-1 rounded">Q / R</span> Switch Experiments</p>
            <p className="flex items-center gap-3"><span className="font-bold text-yellow-400 text-xl bg-yellow-900 px-3 py-1 rounded">E</span> Start Experiment (near table)</p>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-white to-gray-50 px-8 py-5 rounded-3xl shadow-2xl max-w-3xl border-4 border-blue-300">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setSelectedIndex(prev => (prev - 1 + experiments.length) % experiments.length)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 font-bold shadow-lg transform transition hover:scale-105 text-lg"
          >
            ← Q
          </button>

          <div className="flex-1 text-center px-4">
            <h3 className="font-bold text-2xl text-gray-900 mb-2">{experiments[selectedIndex].title}</h3>
            <p className="text-base text-gray-700 mt-2 leading-relaxed">{experiments[selectedIndex].description}</p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 rounded-full text-sm font-bold shadow">
                {experiments[selectedIndex].category}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-900 rounded-full text-sm font-bold shadow">
                {experiments[selectedIndex].difficulty}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900 rounded-full text-sm font-bold shadow">
                {experiments[selectedIndex].duration}
              </span>
            </div>
          </div>

          <button
            onClick={() => setSelectedIndex(prev => (prev + 1) % experiments.length)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 font-bold shadow-lg transform transition hover:scale-105 text-lg"
          >
            R →
          </button>
        </div>
      </div>

      <div className="absolute top-8 right-8 bg-gradient-to-br from-white to-gray-50 px-6 py-4 rounded-2xl shadow-2xl border-4 border-green-400">
        <p className="text-base text-gray-800 font-semibold">
          <span className="font-bold text-green-600 text-lg">Walk to the table</span> and press <span className="font-bold text-yellow-600 text-xl bg-yellow-100 px-2 py-1 rounded">E</span> to start!
        </p>
        <p className="text-sm text-gray-600 mt-2 font-medium">
          Experiment {selectedIndex + 1} of {experiments.length}
        </p>
      </div>
    </div>
  );
}
