import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import { lerp } from "three/src/math/MathUtils";
import { CameraControls } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { Color } from "three";
const bloomColor = new Color("#red");
bloomColor.multiplyScalar(2);
export const Experience = () => {
  const controls = useRef();
  const textRef = useRef();
  const textTarget = useRef({
    position: { x: 0, y: -1.5, z: 0 }, // Текст будет двигаться к позиции z: -3 (ближе к нам)
    scale: 2.5, // Увеличится при приближении
  });

  const intro = async () => {
    // Сначала отодвигаем камеру
    controls.current.smoothTime = 3.8;
    await controls.current.dolly(19, true); // Камера отъезжает

    // Ждем немного
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Активируем приближение текста
    textTarget.current.position.z = 8; // Цель - текст на позиции -3 (ближе к нам)
    textTarget.current.scale = 1; // Увеличиваем текст

    // Ждем, пока текст приблизится
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Возвращаем камеру
    await controls.current.dolly(19, true);
  };

  useEffect(() => {
    intro();
  }, []);

  useFrame((state, delta) => {
    if (textRef.current) {
      // Плавное приближение текста по Z (от 0 к -3)
      textRef.current.position.z = lerp(
        textRef.current.position.z,
        textTarget.current.position.z,
        2 * delta
      );}
  },

      
  );

  return (
    <>
      <CameraControls
        ref={controls}
        enabled={false}
        maxPolarAngle={Math.PI * 0.8}
        fov={120}
      />

      <Text
        ref={textRef}
        font={"fonts/Geologica_Cursive-ExtraBold.ttf"}
        position={[0, -1.5, -18]} // Начальная позиция
        lineHeight={1}
        fontSize={1.9}
        curveSegments={7}
        bevelEnabled={true}
        bevelThickness={0.05}
        bevelSize={0.09}
        bevelSegments={7}
        textAlign="center"
        // rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
        Cмотреть{"\n"}портфолио
        <meshBasicMaterial color={bloomColor} toneMapped={false} />
      </Text>
      <mesh position-y={-1.7} rotation-x={-Math.PI / 2}>
        <ambientLight intensity={1} />
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[50, 50]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={1}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
    </>
  );
};
