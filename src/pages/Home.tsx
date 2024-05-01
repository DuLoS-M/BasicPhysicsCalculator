import React, { useEffect, useRef } from "react";
import { DatePicker, Typography } from "antd";
import { Canvas } from "@react-three/fiber";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated, a } from "@react-spring/three";
import { useDrag } from "react-use-gesture";
import { Vector3 } from "three";
import { CatmullRomCurve3 } from "three";
import { Tube } from "@react-three/drei";

const { Title } = Typography;

function Box() {
    const lineRef = useRef(null);
    const testRef = useRef(null);
    const [active, setActive] = React.useState(false);
    // const { scale } = useSpring({ scale: active ? 1.5 : 1 });
    const [{ rotation }, set] = useSpring(() => ({ rotation: [0, 0, 0] }));
    const state = useThree();
    const vectors = [
        new Vector3(0, 0, 0),
        new Vector3(0, 0, 1),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 1),
        new Vector3(1, 0, 0),
        new Vector3(1, 0, 1),
        // new Vector3(1, 1, 0),
        // new Vector3(1, 1, 1),
    ];
    const resultingVector = new Vector3(1, 1, 1);
    useEffect(() => {
        state.set({
            size: {
                width: 500,
                height: 500,
                top: 250,
                left: 250,
            },
        });
        // lineRef.current.geometry.setFromPoints(points);
        testRef.current.setFromPoints(vectors);
    }, []);

    const bind = useDrag(({ offset: [x, y] }) => {
        set({ rotation: [y / 100, x / 100, 0] });
    });

    // useFrame(({ clock }) => {
    //     meshRef.current.rotation.x = clock.getElapsedTime();
    //     meshRef.current.rotation.y = clock.getElapsedTime();
    // });

    return (
        <a.mesh {...bind()} rotation={rotation} scale={2}>
            {/* <boxGeometry args={[1, 1, 1]} /> */}

            <line ref={lineRef}>
                <bufferGeometry ref={testRef} />

                {/* <wireframeGeometry /> */}
                <lineBasicMaterial
                    color="white"
                    linewidth={1}

                    // linecap="round"
                    // linejoin="round"
                />

                {/* <tubeGeometry /> */}
            </line>

            {/* <meshStandardMaterial color="red" /> */}
            {/* <meshStandardMaterial /> */}
        </a.mesh>
    );
}

export default function Home() {
    return (
        <div className="h-max w-max flex justify-center items-center">
            <Canvas className="">
                <ambientLight intensity={0.1} />
                {/* <directionalLight color="red" position={[5, 0, 10]} /> */}
                <Box />
            </Canvas>
        </div>
    );
}
