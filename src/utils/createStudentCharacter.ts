import * as THREE from 'three';

interface CharacterParts {
  head: THREE.Group;
  body: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftForearm: THREE.Group;
  rightForearm: THREE.Group;
  leftHand: THREE.Group;
  rightHand: THREE.Group;
}

export function createStudentCharacter(): { character: THREE.Group; parts: CharacterParts } {
  const student = new THREE.Group();

  const skinMaterial = new THREE.MeshStandardMaterial({
    color: 0xffdbac,
    roughness: 0.8,
    metalness: 0.1
  });

  const hairMaterial = new THREE.MeshStandardMaterial({
    color: 0x3d2817,
    roughness: 0.9,
    metalness: 0.05
  });

  const shirtMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a90e2,
    roughness: 0.7,
    metalness: 0.1
  });

  const pantsMaterial = new THREE.MeshStandardMaterial({
    color: 0x34495e,
    roughness: 0.8,
    metalness: 0.05
  });

  const shoeMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 0.3,
    metalness: 0.6
  });

  const backpackMaterial = new THREE.MeshStandardMaterial({
    color: 0xe74c3c,
    roughness: 0.7,
    metalness: 0.1
  });

  const head = new THREE.Group();

  const headGeometry = new THREE.SphereGeometry(0.28, 32, 32);
  const headMesh = new THREE.Mesh(headGeometry, skinMaterial);
  headMesh.scale.set(0.95, 1, 0.85);
  headMesh.castShadow = true;
  head.add(headMesh);

  const hairTopGeometry = new THREE.SphereGeometry(0.3, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55);
  const hairTop = new THREE.Mesh(hairTopGeometry, hairMaterial);
  hairTop.position.y = 0.08;
  hairTop.scale.set(0.95, 1, 0.85);
  hairTop.castShadow = true;
  head.add(hairTop);

  const bangGeometry = new THREE.BoxGeometry(0.38, 0.12, 0.18);
  const bang = new THREE.Mesh(bangGeometry, hairMaterial);
  bang.position.set(0, 0.16, 0.22);
  bang.rotation.x = -0.1;
  bang.castShadow = true;
  head.add(bang);

  const eyeWhiteGeometry = new THREE.SphereGeometry(0.05, 20, 20);
  const eyeWhiteMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });

  const leftEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
  leftEyeWhite.position.set(-0.09, 0.06, 0.22);
  leftEyeWhite.scale.set(1.1, 1, 0.5);
  head.add(leftEyeWhite);

  const rightEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
  rightEyeWhite.position.set(0.09, 0.06, 0.22);
  rightEyeWhite.scale.set(1.1, 1, 0.5);
  head.add(rightEyeWhite);

  const irisGeometry = new THREE.SphereGeometry(0.025, 20, 20);
  const irisMaterial = new THREE.MeshStandardMaterial({ color: 0x2E7D32, roughness: 0.4 });

  const leftIris = new THREE.Mesh(irisGeometry, irisMaterial);
  leftIris.position.set(-0.09, 0.06, 0.24);
  head.add(leftIris);

  const rightIris = new THREE.Mesh(irisGeometry, irisMaterial);
  rightIris.position.set(0.09, 0.06, 0.24);
  head.add(rightIris);

  const pupilGeometry = new THREE.SphereGeometry(0.015, 16, 16);
  const pupilMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.2 });

  const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  leftPupil.position.set(-0.09, 0.06, 0.25);
  head.add(leftPupil);

  const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  rightPupil.position.set(0.09, 0.06, 0.25);
  head.add(rightPupil);

  const glassesMaterial = new THREE.MeshStandardMaterial({ color: 0x2c2c2c, metalness: 0.8, roughness: 0.2 });
  const frameThickness = 0.012;
  const glassRadius = 0.07;

  const leftFrameGeometry = new THREE.TorusGeometry(glassRadius, frameThickness, 16, 32);
  const leftFrame = new THREE.Mesh(leftFrameGeometry, glassesMaterial);
  leftFrame.position.set(-0.09, 0.06, 0.23);
  leftFrame.rotation.y = Math.PI / 2;
  head.add(leftFrame);

  const rightFrame = new THREE.Mesh(leftFrameGeometry, glassesMaterial);
  rightFrame.position.set(0.09, 0.06, 0.23);
  rightFrame.rotation.y = Math.PI / 2;
  head.add(rightFrame);

  const bridgeGeometry = new THREE.CylinderGeometry(frameThickness, frameThickness, 0.12, 8);
  const bridge = new THREE.Mesh(bridgeGeometry, glassesMaterial);
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, 0.06, 0.23);
  head.add(bridge);

  const noseGeometry = new THREE.ConeGeometry(0.035, 0.08, 8);
  const nose = new THREE.Mesh(noseGeometry, skinMaterial);
  nose.position.set(0, 0.01, 0.26);
  nose.rotation.x = Math.PI / 2;
  head.add(nose);

  const smileShape = new THREE.Shape();
  smileShape.absarc(0, 0, 0.09, Math.PI * 1.2, Math.PI * 1.8, false);
  const smileGeometry = new THREE.ExtrudeGeometry(smileShape, { depth: 0.01, bevelEnabled: false });
  const smileMaterial = new THREE.MeshStandardMaterial({ color: 0xcc5555 });
  const smile = new THREE.Mesh(smileGeometry, smileMaterial);
  smile.position.set(0, -0.09, 0.24);
  smile.rotation.x = Math.PI;
  head.add(smile);

  const earGeometry = new THREE.SphereGeometry(0.05, 16, 16);
  const leftEar = new THREE.Mesh(earGeometry, skinMaterial);
  leftEar.position.set(-0.27, 0.02, 0);
  leftEar.scale.set(0.6, 1, 0.8);
  leftEar.castShadow = true;
  head.add(leftEar);

  const rightEar = new THREE.Mesh(earGeometry, skinMaterial);
  rightEar.position.set(0.27, 0.02, 0);
  rightEar.scale.set(0.6, 1, 0.8);
  rightEar.castShadow = true;
  head.add(rightEar);

  head.position.y = 1.7;
  student.add(head);

  const neckGeometry = new THREE.CylinderGeometry(0.09, 0.1, 0.18, 16);
  const neck = new THREE.Mesh(neckGeometry, skinMaterial);
  neck.position.y = 1.51;
  neck.castShadow = true;
  student.add(neck);

  const body = new THREE.Group();

  const torsoGeometry = new THREE.BoxGeometry(0.55, 0.7, 0.28);
  const torso = new THREE.Mesh(torsoGeometry, shirtMaterial);
  torso.castShadow = true;
  body.add(torso);

  const collarGeometry = new THREE.BoxGeometry(0.57, 0.1, 0.29);
  const collarMaterial = new THREE.MeshStandardMaterial({ color: 0x3a7bc8 });
  const collar = new THREE.Mesh(collarGeometry, collarMaterial);
  collar.position.y = 0.3;
  body.add(collar);

  const tieKnotGeometry = new THREE.BoxGeometry(0.06, 0.06, 0.04);
  const tieMaterial = new THREE.MeshStandardMaterial({ color: 0xc0392b });
  const tieKnot = new THREE.Mesh(tieKnotGeometry, tieMaterial);
  tieKnot.position.set(0, 0.24, 0.16);
  body.add(tieKnot);

  const tieBodyGeometry = new THREE.BoxGeometry(0.1, 0.35, 0.02);
  const tieBody = new THREE.Mesh(tieBodyGeometry, tieMaterial);
  tieBody.position.set(0, 0.03, 0.155);
  body.add(tieBody);

  for (let i = 0; i < 4; i++) {
    const buttonGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.01, 16);
    const buttonMaterial = new THREE.MeshStandardMaterial({ color: 0xf8f8f8, metalness: 0.3, roughness: 0.4 });
    const button = new THREE.Mesh(buttonGeometry, buttonMaterial);
    button.position.set(0, 0.2 - i * 0.13, 0.155);
    button.rotation.x = Math.PI / 2;
    body.add(button);
  }

  body.position.y = 1.05;
  student.add(body);

  const leftArm = new THREE.Group();
  const shoulderGeometry = new THREE.SphereGeometry(0.08, 16, 16);
  const leftShoulder = new THREE.Mesh(shoulderGeometry, shirtMaterial);
  leftShoulder.castShadow = true;
  leftArm.add(leftShoulder);

  const upperArmGeometry = new THREE.CylinderGeometry(0.07, 0.065, 0.38, 16);
  const leftUpperArm = new THREE.Mesh(upperArmGeometry, shirtMaterial);
  leftUpperArm.position.y = -0.19;
  leftUpperArm.castShadow = true;
  leftArm.add(leftUpperArm);

  const leftForearm = new THREE.Group();
  const elbowGeometry = new THREE.SphereGeometry(0.065, 16, 16);
  const leftElbow = new THREE.Mesh(elbowGeometry, shirtMaterial);
  leftForearm.add(leftElbow);

  const forearmGeometry = new THREE.CylinderGeometry(0.06, 0.055, 0.32, 16);
  const leftForearmMesh = new THREE.Mesh(forearmGeometry, skinMaterial);
  leftForearmMesh.position.y = -0.16;
  leftForearmMesh.castShadow = true;
  leftForearm.add(leftForearmMesh);

  const leftHand = new THREE.Group();
  const handGeometry = new THREE.BoxGeometry(0.08, 0.12, 0.05);
  const leftHandMesh = new THREE.Mesh(handGeometry, skinMaterial);
  leftHandMesh.castShadow = true;
  leftHand.add(leftHandMesh);

  for (let i = 0; i < 4; i++) {
    const fingerGeometry = new THREE.BoxGeometry(0.015, 0.06, 0.015);
    const finger = new THREE.Mesh(fingerGeometry, skinMaterial);
    finger.position.set(-0.025 + i * 0.018, -0.09, 0);
    leftHand.add(finger);
  }

  leftHand.position.y = -0.38;
  leftForearm.add(leftHand);
  leftForearm.position.y = -0.38;
  leftArm.add(leftForearm);
  leftArm.position.set(-0.35, 1.38, 0);
  leftArm.rotation.z = 0.15;
  student.add(leftArm);

  const rightArm = new THREE.Group();
  const rightShoulder = new THREE.Mesh(shoulderGeometry, shirtMaterial);
  rightShoulder.castShadow = true;
  rightArm.add(rightShoulder);

  const rightUpperArm = new THREE.Mesh(upperArmGeometry, shirtMaterial);
  rightUpperArm.position.y = -0.19;
  rightUpperArm.castShadow = true;
  rightArm.add(rightUpperArm);

  const rightForearm = new THREE.Group();
  const rightElbow = new THREE.Mesh(elbowGeometry, shirtMaterial);
  rightForearm.add(rightElbow);

  const rightForearmMesh = new THREE.Mesh(forearmGeometry, skinMaterial);
  rightForearmMesh.position.y = -0.16;
  rightForearmMesh.castShadow = true;
  rightForearm.add(rightForearmMesh);

  const rightHand = new THREE.Group();
  const rightHandMesh = new THREE.Mesh(handGeometry, skinMaterial);
  rightHandMesh.castShadow = true;
  rightHand.add(rightHandMesh);

  for (let i = 0; i < 4; i++) {
    const fingerGeometry = new THREE.BoxGeometry(0.015, 0.06, 0.015);
    const finger = new THREE.Mesh(fingerGeometry, skinMaterial);
    finger.position.set(-0.025 + i * 0.018, -0.09, 0);
    rightHand.add(finger);
  }

  rightHand.position.y = -0.38;
  rightForearm.add(rightHand);
  rightForearm.position.y = -0.38;
  rightArm.add(rightForearm);
  rightArm.position.set(0.35, 1.38, 0);
  rightArm.rotation.z = -0.15;
  student.add(rightArm);

  const backpack = new THREE.Group();
  const backpackBodyGeometry = new THREE.BoxGeometry(0.4, 0.5, 0.18);
  const backpackBody = new THREE.Mesh(backpackBodyGeometry, backpackMaterial);
  backpackBody.castShadow = true;
  backpack.add(backpackBody);

  const frontPocketGeometry = new THREE.BoxGeometry(0.32, 0.2, 0.08);
  const pocketMaterial = new THREE.MeshStandardMaterial({ color: 0xc0392b });
  const frontPocket = new THREE.Mesh(frontPocketGeometry, pocketMaterial);
  frontPocket.position.set(0, 0.05, 0.13);
  backpack.add(frontPocket);

  const strapGeometry = new THREE.BoxGeometry(0.06, 0.55, 0.03);
  const strapMaterial = new THREE.MeshStandardMaterial({ color: 0xa93226 });

  const leftStrap = new THREE.Mesh(strapGeometry, strapMaterial);
  leftStrap.position.set(-0.12, 0.02, -0.095);
  leftStrap.rotation.x = 0.15;
  backpack.add(leftStrap);

  const rightStrap = new THREE.Mesh(strapGeometry, strapMaterial);
  rightStrap.position.set(0.12, 0.02, -0.095);
  rightStrap.rotation.x = 0.15;
  backpack.add(rightStrap);

  backpack.position.set(0, 1.05, -0.25);
  student.add(backpack);

  const leftLeg = new THREE.Group();
  const hipGeometry = new THREE.SphereGeometry(0.09, 16, 16);
  const leftHip = new THREE.Mesh(hipGeometry, pantsMaterial);
  leftLeg.add(leftHip);

  const thighGeometry = new THREE.CylinderGeometry(0.09, 0.08, 0.5, 16);
  const leftThigh = new THREE.Mesh(thighGeometry, pantsMaterial);
  leftThigh.position.y = -0.25;
  leftThigh.castShadow = true;
  leftLeg.add(leftThigh);

  const shinGeometry = new THREE.CylinderGeometry(0.075, 0.07, 0.48, 16);
  const leftShin = new THREE.Mesh(shinGeometry, pantsMaterial);
  leftShin.position.y = -0.74;
  leftShin.castShadow = true;
  leftLeg.add(leftShin);

  const shoeBodyGeometry = new THREE.BoxGeometry(0.16, 0.1, 0.28);
  const leftShoe = new THREE.Mesh(shoeBodyGeometry, shoeMaterial);
  leftShoe.position.set(0, -1.03, 0.06);
  leftShoe.castShadow = true;
  leftLeg.add(leftShoe);

  leftLeg.position.set(-0.14, 0.8, 0);
  student.add(leftLeg);

  const rightLeg = new THREE.Group();
  const rightHip = new THREE.Mesh(hipGeometry, pantsMaterial);
  rightLeg.add(rightHip);

  const rightThigh = new THREE.Mesh(thighGeometry, pantsMaterial);
  rightThigh.position.y = -0.25;
  rightThigh.castShadow = true;
  rightLeg.add(rightThigh);

  const rightShin = new THREE.Mesh(shinGeometry, pantsMaterial);
  rightShin.position.y = -0.74;
  rightShin.castShadow = true;
  rightLeg.add(rightShin);

  const rightShoe = new THREE.Mesh(shoeBodyGeometry, shoeMaterial);
  rightShoe.position.set(0, -1.03, 0.06);
  rightShoe.castShadow = true;
  rightLeg.add(rightShoe);

  rightLeg.position.set(0.14, 0.8, 0);
  student.add(rightLeg);

  student.castShadow = true;
  student.receiveShadow = true;

  return {
    character: student,
    parts: {
      head,
      body,
      leftArm,
      rightArm,
      leftLeg,
      rightLeg,
      leftForearm,
      rightForearm,
      leftHand,
      rightHand
    }
  };
}
