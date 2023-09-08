import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useRef } from 'react'

import state from '../store'

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);

    useFrame((state, delta) => {

        easing.dampE(
            group.current.rotaion, 
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        )

    })

  return (
    <group ref={group}>{children}</group>
  )
};

export default CameraRig;
