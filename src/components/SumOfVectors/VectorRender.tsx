import React, { useEffect, useRef, useState } from "react";
import { Button, DatePicker, Typography } from "antd";
import { Canvas } from "@react-three/fiber";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated, a } from "@react-spring/three";
import { useDrag } from "react-use-gesture";
import { Vector3 } from "three";
import { CatmullRomCurve3 } from "three";
import { ComponentVector } from "src/types";
// import { Tube } from "@react-three/drei";
import { OrbitControls, Html } from "@react-three/drei";
import type { OrthographicCamera } from "three";

const { Title } = Typography;

function Vectors({
    vectors,
    resultingVector,
}: {
    vectors: ComponentVector[];
    resultingVector: ComponentVector;
}) {
    const lineRef = useRef(null);
    const lineRef2 = useRef(null);
    const bufferRef = useRef(null);
    const testRef = useRef(null);
    const xAxisRef = useRef(null);
    const yAxisRef = useRef(null);
    const zAxisRef = useRef(null);
    const controlsRef = useRef(null);
    const [zoom, setZoom] = useState(0);
    const [active, setActive] = React.useState(false);
    // const { scale } = useSpring({ scale: active ? 1.5 : 1 });
    const [{ rotation }, set] = useSpring(() => ({ rotation: [0, 0, 0] }));
    const state = useThree();
    state.camera.manual = true;
    const AXIS_LENGTH = 3;
    const vectorValuesTracker = {
        x: 0,
        y: 0,
        z: 0,
    };

    const vectorObjs = vectors?.map((item) => {
        vectorValuesTracker.x += item.x;
        vectorValuesTracker.y += item.y;
        vectorValuesTracker.z += item.z;
        return new Vector3(
            vectorValuesTracker.x,
            vectorValuesTracker.y,
            vectorValuesTracker.z
        );
    });

    useEffect(() => {
        state.set({
            size: {
                width: 250,
                height: 250,
                top: 250,
                left: 250,
            },
        });

        xAxisRef.current.setFromPoints([
            new Vector3(0, 0, 0),
            new Vector3(AXIS_LENGTH, 0, 0),
        ]);
        yAxisRef.current.setFromPoints([
            new Vector3(0, 0, 0),
            new Vector3(0, AXIS_LENGTH, 0),
        ]);
        zAxisRef.current.setFromPoints([
            new Vector3(0, 0, 0),
            new Vector3(0, 0, AXIS_LENGTH),
        ]);
    }, []);

    useFrame(() => {
        console.log("updated");
        controlsRef.current.update();
    });

    useEffect(() => {
        const handleCameraZoomChange = () => {
            setZoom(state.camera.zoom);
        };
        console.log("camera");
        console.log(zoom);
        state.camera.addEventListener("change", handleCameraZoomChange);
        return () => {
            state.camera.removeEventListener("change", handleCameraZoomChange);
        };
    }, [state.camera]);

    useEffect(() => {
        if (vectorObjs) {
            console.log({ vectorObjs });
            bufferRef.current.setFromPoints([
                new Vector3(0, 0, 0),
                ...vectorObjs,
                new Vector3(0, 0, 0),
            ]);
        }
        if (resultingVector && testRef.current) {
            console.log({ resultingVector });
            testRef.current.setFromPoints([
                new Vector3(0, 0, 0),
                new Vector3(
                    resultingVector.x,
                    resultingVector.y,
                    resultingVector.z
                ),
            ]);
        }
    }, [vectors]);

    const bind = useDrag(({ offset: [x, y] }) => {
        set({ rotation: [y / 100, x / 100, 0] });
    });

    // useFrame(({ clock }) => {
    //     meshRef.current.rotation.x = clock.getElapsedTime();
    //     meshRef.current.rotation.y = clock.getElapsedTime();
    // });

    return (
        <>
            <a.mesh {...bind()} rotation={rotation} scale={2}>
                {/* // X-axis */}
                <Html position={[AXIS_LENGTH, 0, 0]}>
                    <div style={{ color: "red" }}>X</div>
                    {/* <Button
                        onClick={() => {
                            setZoom((prev) => prev + 1);
                        }}
                    >
                        Zoom
                    </Button> */}
                </Html>
                <line>
                    <bufferGeometry attach="geometry" ref={xAxisRef} />
                    <lineBasicMaterial attach="material" color="red" />
                </line>
                {/* // Y-axis */}
                <Html position={[0, AXIS_LENGTH, 0]}>
                    <div style={{ color: "green" }}>Y</div>
                </Html>
                <line>
                    <bufferGeometry attach="geometry" ref={yAxisRef} />
                    <lineBasicMaterial attach="material" color="green" />
                </line>
                {/* // Z-axis */}
                <Html position={[0, 0, AXIS_LENGTH]}>
                    <div style={{ color: "blue" }}>Z</div>
                </Html>
                <line>
                    <bufferGeometry attach="geometry" ref={zAxisRef} />
                    <lineBasicMaterial attach="material" color="blue" />
                </line>
                {/* // VECTORS */}
                <line ref={lineRef}>
                    <bufferGeometry ref={bufferRef} />

                    <lineBasicMaterial color="white" linewidth={1} />
                </line>
                {/* // RESULTING VECTOR */}
                <line ref={lineRef2}>
                    <bufferGeometry ref={testRef} />

                    <lineBasicMaterial color="orange" linewidth={1} />
                </line>
            </a.mesh>
            <OrbitControls camera={state.camera} ref={controlsRef} />
        </>
    );
}

export default function VectorRender({
    vectors,
    resultingVector,
}: {
    vectors: ComponentVector[];
    resultingVector: ComponentVector;
}) {
    return (
        <div className="h-max w-max flex justify-center items-center border-blue-500 border rounded-md my-3">
            <Canvas className="">
                <ambientLight intensity={0.1} />
                {/* <directionalLight color="red" position={[5, 0, 10]} /> */}
                <Vectors vectors={vectors} resultingVector={resultingVector} />
            </Canvas>
        </div>
    );
}
