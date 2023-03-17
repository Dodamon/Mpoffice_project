import React, {useEffect} from "react";
import * as THREE from "three";
interface TableProps{
  table: React.MutableRefObject<THREE.Object3D>;
  pushMesh: (mesh: THREE.Mesh) => void;
}

const Table: React.FC<TableProps> = ({table, pushMesh}) => {
  const tableMesh = new THREE.Mesh(
    new THREE.BoxGeometry(20, 3, 8),
    new THREE.MeshStandardMaterial({ 
        color: "#03A9F4",
        metalness: 0.2
    })
  );
    tableMesh.position.set(-1,0,-25)
    tableMesh.name = 'table'
    tableMesh.castShadow = true
    tableMesh.receiveShadow = true
    table.current = tableMesh
    useEffect(()=>{
      pushMesh(tableMesh)
    },[])
  return (<>
  <primitive object={tableMesh}/>
  </>);
};

export default Table;
