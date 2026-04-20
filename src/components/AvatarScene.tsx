"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════
   GLB AVATAR MODEL
   Drop your avatar.glb into /public/ and
   it will automatically load here.
   ═══════════════════════════════════════ */
function AvatarModel({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.003;
            // Subtle breathing float
            modelRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.05;
        }
    });

    return (
        <group ref={modelRef} scale={1.8} position={[0, -1.2, 0]}>
            <primitive object={scene} />
        </group>
    );
}

/* ═══════════════════════════════════════
   FALLBACK: CYBER CORE (no GLB needed)
   ═══════════════════════════════════════ */
function CyberCore() {
    const groupRef = useRef<THREE.Group>(null);
    const innerRef = useRef<THREE.Mesh>(null);
    const outerRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) groupRef.current.rotation.y = t * 0.3;
        if (innerRef.current) {
            innerRef.current.rotation.x = t * 0.5;
            innerRef.current.rotation.z = t * 0.3;
        }
        if (outerRef.current) {
            outerRef.current.rotation.x = -t * 0.2;
            outerRef.current.rotation.y = t * 0.4;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <group ref={groupRef}>
                {/* Core */}
                <mesh>
                    <icosahedronGeometry args={[0.8, 1]} />
                    <meshStandardMaterial
                        color="#00d4ff"
                        emissive="#0066ff"
                        emissiveIntensity={0.6}
                        wireframe
                        transparent
                        opacity={0.7}
                    />
                </mesh>
                {/* Inner Ring */}
                <mesh ref={innerRef}>
                    <torusGeometry args={[1.2, 0.02, 16, 64]} />
                    <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} transparent opacity={0.6} />
                </mesh>
                {/* Outer Ring */}
                <mesh ref={outerRef}>
                    <torusGeometry args={[1.6, 0.015, 16, 80]} />
                    <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} transparent opacity={0.4} />
                </mesh>
                {/* Particle Ring */}
                <mesh rotation={[Math.PI / 3, 0, 0]}>
                    <torusGeometry args={[2, 0.008, 8, 100]} />
                    <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} transparent opacity={0.25} />
                </mesh>
            </group>
        </Float>
    );
}

/* ═══════════════════════════════════════
   LOADING SPINNER
   ═══════════════════════════════════════ */
function LoadingFallback() {
    return (
        <mesh>
            <ringGeometry args={[0.8, 1, 32]} />
            <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.3} />
        </mesh>
    );
}

/* ═══════════════════════════════════════
   MAIN SCENE
   ═══════════════════════════════════════ */
export default function AvatarScene() {
    const [hasGLB, setHasGLB] = useState(false);
    const glbPath = "/avatar.glb";

    // Check if GLB file exists
    useEffect(() => {
        fetch(glbPath, { method: "HEAD" })
            .then((res) => {
                if (res.ok && res.headers.get("content-type")?.includes("model")) {
                    setHasGLB(true);
                } else if (res.ok && res.headers.get("content-length") !== "0") {
                    setHasGLB(true);
                }
            })
            .catch(() => setHasGLB(false));
    }, []);

    return (
        <div className="w-full h-[450px] md:h-[550px] relative">
            {/* Ambient Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-56 h-56 bg-cyan-500/[0.08] rounded-full blur-[100px] animate-pulse" />
            </div>

            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                className="relative z-10"
                style={{ background: "transparent" }}
                gl={{ antialias: true, alpha: true }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
                <pointLight position={[-3, 2, 4]} intensity={0.6} color="#22d3ee" distance={10} />
                <pointLight position={[3, -2, -4]} intensity={0.4} color="#a855f7" distance={10} />
                {/* Rim light for cinematic edge glow */}
                <pointLight position={[0, 3, -5]} intensity={0.3} color="#00f5ff" distance={15} />

                <Suspense fallback={<LoadingFallback />}>
                    {hasGLB ? <AvatarModel url={glbPath} /> : <CyberCore />}
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 1.5}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>

            {/* Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <p className="text-cyan-500/30 font-mono text-[9px] tracking-[0.3em] uppercase">
                    {hasGLB ? "Avatar Loaded" : "Cyber Core Active"}
                </p>
            </div>
        </div>
    );
}
