import { useGLTF, OrbitControls } from '@react-three/drei'


export default function Experience()
{
    const tafel = useGLTF('../models/wooden_table/scene.gltf')

    const bank = useGLTF('../models/old_couch/scene.gltf')

    const corpse = useGLTF('../models/corpse/scene.gltf')

    const gun = useGLTF('../models/walther_p88_gun/scene.gltf')

    const money = useGLTF('../models/money_stacks_low_poly/scene.gltf')

    const music = useGLTF('../models/music_cassette/scene.gltf')

    const wiet = useGLTF('../models/new_weed_model/scene.gltf')

    const joint = useGLTF('../models/joint_scan/scene.gltf')

    const beer = useGLTF('../models/johnnys_beer/scene.gltf')
    
    const tabak = useGLTF('../models/cigarette_packs/scene.gltf')

    const ghb = useGLTF('../models/syringe/scene.gltf')

    const amfetamine = useGLTF('../models/bottle_of_monteiro_pills/scene.gltf')
    
    const xtc = useGLTF('../models/pills/scene.gltf')

    const lachgas = useGLTF('../models/balloon/scene.gltf')

    const bord1 = useGLTF('../models/bord1.gltf')

    const bord2 = useGLTF('../models/bord2.gltf')
    
    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <primitive
            object={ tafel.scene }
            scale={ 1.5 }
            position-y={ -.5 }
        />

        <primitive
            object={ corpse.scene }
            scale={ 1.7 }
            position-y={ -1.1 }
            position-x={ 4.5 }
        />

        <primitive
            object={ gun.scene }
            scale={ .025 }
            position-y={ .27 }
            position-x={ .5 }
            position-z={ -1.1 }
            rotation-x={ 1.55 }
            rotation-z={ 1 }
        />

        <primitive
            object={ bank.scene }
            scale={ .018 }
            position-y={ -1.1 }
            position-x={ 3.2 }
            rotation-y={ -1.55 }
        />  

        <primitive
            object={ money.scene }
            scale={ .14 }
            position-y={ .25 }
            position-x={ -.5 }
            position-z={ -.8 }
            rotation-y={ 0 }
        /> 

        <primitive
            object={ music.scene }
            scale={ 3 }
            position-x={ .6 }
            position-z={ 1.4 }
            position-y={ .25 }
            rotation-y={ 1 }
            onClick={ (audio) =>
            {
                var audio = document.getElementById("audio");
                audio.play();
            } }
        />

        <primitive
            object={ joint.scene }
            scale={ .1 }
            position-x={ .6 }
            position-z={ -1.4 }
            position-y={ .25}
            rotation-z={ 1.5 }
            rotation-y={ 1 }
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                dataSectie.classList.add("show");
            }}
        />

        <primitive
            object={ wiet.scene }
            scale={ .1 }
            position-z={ -2.1 }
            position-y={ .26}
            position-x={ .75}
            rotation-z={ 1.5 }
        />

        <primitive
            object={ xtc.scene }
            scale={ .05 }
            position-z={ .6 }
            position-y={ .28}
            position-x={ .45}
        />

        <primitive
            object={ amfetamine.scene }
            scale={ .025 }
            position-z={ 1.3 }
            position-y={ .28}
            position-x={ -.25}
            rotation-y={ -2.5}
        />


        <primitive
            object={ tabak.scene }
            scale={ .1 }
            position-z={ .1 }
            position-y={ .30}
            position-x={ -.2}
        />

        <primitive
            object={ ghb.scene }
            scale={ .002 }
            position-z={ 1 }
            position-y={ .09}
            position-x={ -.2}
            rotation-x={ -1.55}
            rotation-y={ 0}
            rotation-z={ .5}
        />

        <primitive
            object={ lachgas.scene }
            scale={ .007 }
            position-z={ 1.55 }
            position-y={ -.46}
            position-x={ 3.3}
        />

        <primitive
            object={ beer.scene }
            scale={ .2 }
            position-z={ 1.8 }
            position-x={ -.4 }
            position-y={ -1.16}
            rotation-y={ 1.5 }
        />


        <primitive
            object={ bord1.scene }
            scale={ .01 }
            position-z={ 1.8 }
            position-x={ -.8}
            position-y={ -1.16}
            rotation-y={ -1.5 }
        />  

        <primitive
            object={ bord2.scene }
            scale={ .01 }
            position-z={ -1.6 }
            position-x={ .85}
            position-y={ .25}
            rotation-y={ -1.5 }
        /> 

    </>
}