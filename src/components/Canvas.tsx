import { Canvas, CanvasProps } from '@react-three/fiber';

export type CanvaProps = CanvasProps & {
  children: JSX.Element[];
}

export default function Canva({children, ...props}: CanvaProps) {
  return (
    <Canvas {...props}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
}
