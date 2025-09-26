"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere, setSphere] = useState<Float32Array | null>(null);

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    // Using built-in Math.random() instead of maath for better performance
    const generateSphere = (count: number, radius: number) => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * radius;

        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi);
      }
      return positions;
    };

    setSphere(generateSphere(3000, 1.2)); // Reduced from 5000 to 3000 stars
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    }
  })

  // Don't render until stars are generated to avoid hydration mismatch
  if (!sphere) {
    return null;
  }

  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Always render the container div to avoid hydration mismatch
  return (
    <div className="w-full h-auto fixed inset-0 z-[1] pointer-events-none">
      {isMounted && (
        <Canvas camera={{position: [0, 0, 1]}} style={{pointerEvents: 'none'}}>
          <Suspense fallback={null}>
            <StarBackground />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
