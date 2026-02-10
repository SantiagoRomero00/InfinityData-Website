import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
    const { mouse, viewport } = useThree();
    const pointsRef = useRef<THREE.Points>(null!);
    const count = 2000;

    const [particles] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const velocities = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

            velocities[i * 3] = (Math.random() - 0.5) * 0.01;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;

            colors[i * 3] = 0.06; // Emerald-like base
            colors[i * 3 + 1] = 0.72;
            colors[i * 3 + 2] = 0.5;

            sizes[i] = Math.random() * 2 + 1;
        }
        return [{ positions, colors, sizes, velocities }];
    }, []);

    useFrame((state) => {
        const { positions, velocities, colors } = particles;

        // Convert mouse to world coords roughly
        const mx = (mouse.x * viewport.width) / 2;
        const my = (mouse.y * viewport.height) / 2;

        for (let i = 0; i < count; i++) {
            const idx = i * 3;

            // Update position based on velocity
            positions[idx] += velocities[idx];
            positions[idx + 1] += velocities[idx + 1];
            positions[idx + 2] += velocities[idx + 2];

            // Interaction: distance from mouse
            const dx = positions[idx] - mx;
            const dy = positions[idx + 1] - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 1.5) {
                // Repulsion
                positions[idx] += dx * 0.02;
                positions[idx + 1] += dy * 0.02;

                // Color shift to Azure/Violet
                colors[idx] = THREE.MathUtils.lerp(colors[idx], 0.4, 0.1); // R
                colors[idx + 1] = THREE.MathUtils.lerp(colors[idx + 1], 0.2, 0.1); // G
                colors[idx + 2] = THREE.MathUtils.lerp(colors[idx + 2], 0.9, 0.1); // B
            } else {
                // Return to Emerald base
                colors[idx] = THREE.MathUtils.lerp(colors[idx], 0.06, 0.05);
                colors[idx + 1] = THREE.MathUtils.lerp(colors[idx + 1], 0.72, 0.05);
                colors[idx + 2] = THREE.MathUtils.lerp(colors[idx + 2], 0.5, 0.05);
            }

            // Boundary check
            if (Math.abs(positions[idx]) > 5) velocities[idx] *= -1;
            if (Math.abs(positions[idx + 1]) > 5) velocities[idx + 1] *= -1;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.geometry.attributes.color.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation={true}
            />
        </points>
    );
};

export default ParticleField;
