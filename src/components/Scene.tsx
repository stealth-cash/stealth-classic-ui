import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader } from "three";

const Scene = () => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        meshRef.current!.rotation.y += 0.01;
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh  
                ref={meshRef}
                position={[1,1,1]}
                geometry={new PlaneGeometry(5,5)}
                material={new MeshBasicMaterial({ 
                    map: new TextureLoader().load("uncle-sam.jpg"), 
                    side: DoubleSide
                })}
            />
        </>
    );
};

export default Scene;