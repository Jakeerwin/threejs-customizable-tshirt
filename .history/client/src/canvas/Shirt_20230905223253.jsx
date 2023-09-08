import { easing } from 'maath'
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'

const Shirt = () => {
    const snap = useSnapshot(state)
    const { node, materials } = useGLTF('/shirt_baked.glb');

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);


  return (
    <group>
        <mesh
        castShadow
        geometry={NodeList.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        >

        </mesh>
    </group>
  );
};

export default Shirt;