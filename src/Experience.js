import { useGLTF, OrbitControls } from '@react-three/drei'


export default function Experience()
{
    const tafel = useGLTF('./models/wooden_table/scene.gltf')

    const bank = useGLTF('./models/old_couch/scene.gltf')

    const corpse = useGLTF('./models/corpse/scene.gltf')

    const gun = useGLTF('./models/walther_p88_gun/scene.gltf')

    const money = useGLTF('./models/money_stacks_low_poly/scene.gltf')

    const music = useGLTF('./models/music_cassette/scene.gltf')

    const wiet = useGLTF('./models/new_weed_model/scene.gltf')

    const joint = useGLTF('./models/joint_scan/scene.gltf')

    const beer = useGLTF('./models/johnnys_beer/scene.gltf')
    
    const tabak = useGLTF('./models/cigarette_packs/scene.gltf')

    const ghb = useGLTF('./models/syringe/scene.gltf')

    const amfetamine = useGLTF('./models/bottle_of_monteiro_pills/scene.gltf')
    
    const xtc = useGLTF('./models/pills/scene.gltf')

    const lachgas = useGLTF('./models/balloon/scene.gltf')

    const coke = useGLTF('./models/coke.gltf')

    const keta = useGLTF('./models/keta.gltf')

    const bord1 = useGLTF('./models/bord1.gltf')

    const bord2 = useGLTF('./models/bord2.gltf')

    const bord3 = useGLTF('./models/bord3.gltf')

    const bord4 = useGLTF('./models/bord4.gltf')

    const bord5 = useGLTF('./models/bord5.gltf')

    const bord6 = useGLTF('./models/bord6.gltf')

    const bord7 = useGLTF('./models/bord7.gltf')

    const bord8 = useGLTF('./models/bord8.gltf')

    const bord9 = useGLTF('./models/9bord.gltf')
    
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
            onClick={ () => {
                var video = document.querySelector(".video");
                video.classList.remove("hide");
                video.play();
            }}
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
                var wietSpan = document.querySelector(".wietdata");
                wietSpan.classList.add("show");
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
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var wietSpan = document.querySelector(".wietdata");
                wietSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
        />

        <primitive
            object={ xtc.scene }
            scale={ .05 }
            position-z={ .6 }
            position-y={ .28}
            position-x={ .45}
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var xtcSpan = document.querySelector(".xtcdata");
                xtcSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
        />

        <primitive
            object={ coke.scene }
            scale={ .5 }
            position-z={ .6 }
            position-y={ .234}
            position-x={ .45}
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var cokeSpan = document.querySelector(".cokedata");
                cokeSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
        />

        <primitive
            object={ keta.scene }
            scale={ .5 }
            position-z={ .1 }
            rotation-y={ 1 }
            position-y={ .2335}
            position-x={ -.25}
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var ketaSpan = document.querySelector(".ketadata");
                ketaSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
        />

        <primitive
            object={ amfetamine.scene }
            scale={ .025 }
            position-z={ 1.3 }
            position-y={ .28}
            position-x={ -.25}
            rotation-y={ -2.5}
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var amfetamineSpan = document.querySelector(".amfetaminedata");
                amfetamineSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
        />


        <primitive
            object={ tabak.scene }
            scale={ .1 }
            position-z={ .1 }
            position-y={ .30}
            position-x={ -.2}
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var tabakSpan = document.querySelector(".tabakdata");
                tabakSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
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
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var ghbSpan = document.querySelector(".ghbdata");
                ghbSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
        />

        <primitive
            object={ lachgas.scene }
            scale={ .007 }
            position-z={ 1.55 }
            position-y={ -.46}
            position-x={ 3.3}
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var lachgasSpan = document.querySelector(".lachgasdata");
                lachgasSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
        />

        <primitive
            object={ beer.scene }
            scale={ .2 }
            position-z={ 1.8 }
            position-x={ -.4 }
            position-y={ -1.16}
            rotation-y={ 1.5 }
            onClick={ () => {
                var dataSectie = document.querySelector(".data");
                var alcoholSpan = document.querySelector(".alcoholdata");
                alcoholSpan.classList.add("show");
                dataSectie.classList.add("show");
            }}
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

        <primitive
            object={ bord3.scene }
            scale={ .01 }
            position-z={ 1.4 }
            position-x={ 3.35}
            position-y={ -.25}
            rotation-y={ -1.5 }
        /> 

        <primitive
            object={ bord4.scene }
            scale={ .01 }
            position-z={ .1 }
            position-x={ .85}
            position-y={ .25}
            rotation-y={ -1.5 }
        /> 

        <primitive
            object={ bord5.scene }
            scale={ .01 }
            position-z={ .9 }
            position-x={ .85}
            position-y={ .25}
            rotation-y={ -1.5 }
        /> 

        <primitive
            object={ bord6.scene }
            scale={ .01 }
            position-z={ -.3 }
            position-x={ .35}
            position-y={ .25}
            rotation-y={ -1.5 }
        /> 

        <primitive
            object={ bord7.scene }
            scale={ .01 }
            position-z={ -.3 }
            position-x={ -.45}
            position-y={ .25}
            rotation-y={ -1.5 }
        /> 

        <primitive
            object={ bord8.scene }
            scale={ .01 }
            position-z={ .7 }
            position-x={ -.05}
            position-y={ .25}
            rotation-y={ -1.5 }
        /> 

        <primitive
            object={ bord9.scene }
            scale={ .01 }
            position-z={ 1.6 }
            position-x={ .05}
            position-y={ .25}
            rotation-y={ -1.5 }
        /> 

    </>
}