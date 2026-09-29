"use client";
import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Octahedron } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating particles ── */
function Particles({ count = 120 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: 0.1 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
      size: 0.02 + Math.random() * 0.04,
    }));
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      const t = state.clock.elapsedTime * p.speed + p.offset;
      dummy.position.set(
        p.position[0] + Math.sin(t * 0.5) * 0.3,
        p.position[1] + Math.cos(t * 0.4) * 0.4,
        p.position[2]
      );
      dummy.scale.setScalar(p.size * (0.8 + Math.sin(t) * 0.2));
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial color="#5569ff" transparent opacity={0.5} />
    </instancedMesh>
  );
}

/* ── Glowing orb ── */
function GlowOrb({
  position,
  color,
  size = 1,
  speed = 0.5,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

/* ── Rotating geometric shape ── */
function GeometricShape({
  position,
  type,
  color,
  wireframe = true,
}: {
  position: [number, number, number];
  type: "torus" | "octahedron" | "box";
  color: string;
  wireframe?: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.4;
  });

  const mat = (
    <meshBasicMaterial
      color={color}
      wireframe={wireframe}
      transparent
      opacity={0.35}
    />
  );

  return (
    <Float speed={1.5} floatIntensity={0.4} rotationIntensity={0.2}>
      {type === "torus" && (
        <Torus ref={mesh} args={[0.5, 0.15, 8, 32]} position={position}>
          {mat}
        </Torus>
      )}
      {type === "octahedron" && (
        <Octahedron ref={mesh} args={[0.5]} position={position}>
          {mat}
        </Octahedron>
      )}
      {type === "box" && (
        <Box ref={mesh} args={[0.6, 0.6, 0.6]} position={position}>
          {mat}
        </Box>
      )}
    </Float>
  );
}

/* ── Code brackets floating ── */
function FloatingRing({
  position,
  radius,
  color,
  speed,
}: {
  position: [number, number, number];
  radius: number;
  color: string;
  speed: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * speed;
    mesh.current.rotation.z = state.clock.elapsedTime * speed * 0.6;
  });

  return (
    <Float speed={1} floatIntensity={0.3}>
      <Torus ref={mesh} args={[radius, 0.02, 8, 64]} position={position}>
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </Torus>
    </Float>
  );
}

/* ── Central hero object: abstract developer workspace ── */
function CentralObject() {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    // Gentle mouse parallax
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.3,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.y * 0.15,
      0.05
    );
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={group}>
      {/* Main glowing sphere */}
      <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#5569ff"
          transparent
          opacity={0.12}
          distort={0.25}
          speed={1.5}
          roughness={0}
          metalness={1}
        />
      </Sphere>

      {/* Inner core */}
      <Sphere args={[0.6, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#22d3ee"
          transparent
          opacity={0.08}
          roughness={0}
          metalness={1}
        />
      </Sphere>

      {/* Orbiting ring 1 */}
      <FloatingRing position={[0, 0, 0]} radius={1.8} color="#5569ff" speed={0.4} />
      {/* Orbiting ring 2 */}
      <group rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <FloatingRing position={[0, 0, 0]} radius={2.2} color="#a78bfa" speed={-0.3} />
      </group>
      {/* Orbiting ring 3 */}
      <group rotation={[Math.PI / 2, Math.PI / 5, 0]}>
        <FloatingRing position={[0, 0, 0]} radius={2.6} color="#22d3ee" speed={0.2} />
      </group>
    </group>
  );
}

/* ── Grid plane ── */
function GridPlane() {
  return (
    <gridHelper
      args={[30, 30, "#5569ff", "#5569ff"]}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
    >
      <meshBasicMaterial color="#5569ff" transparent opacity={0.06} />
    </gridHelper>
  );
}

/* ── Camera movement ── */
function CameraRig() {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.3 + 0.5, 0.02);
  });
  return null;
}

/* ── Main Scene ── */
export default function HeroScene() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#5569ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#a78bfa" />
      <pointLight position={[0, 0, 5]} intensity={0.2} color="#22d3ee" />

      <CentralObject />
      <GridPlane />
      <Particles count={100} />

      {/* Geometric decorations */}
      <GeometricShape position={[-4, 1.5, -2]} type="torus" color="#5569ff" />
      <GeometricShape position={[4, -1, -3]} type="octahedron" color="#a78bfa" />
      <GeometricShape position={[-3, -2, -1]} type="box" color="#22d3ee" />
      <GeometricShape position={[3.5, 2, -4]} type="torus" color="#22d3ee" />
      <GeometricShape position={[-5, 0.5, -5]} type="octahedron" color="#5569ff" />

      {/* Glowing orbs */}
      <GlowOrb position={[-6, 2, -6]} color="#5569ff" size={1.5} speed={0.3} />
      <GlowOrb position={[6, -2, -8]} color="#a78bfa" size={2} speed={0.2} />
      <GlowOrb position={[0, 4, -10]} color="#22d3ee" size={2.5} speed={0.15} />
    </>
  );
}
