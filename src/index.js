import './style.css'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Experience from './Experience.js'
import './gebruikers.js'
import './uitgaanders.js'
import './kostte.js'
import './leeftijdsgroep.js'
import './ziekenhuis.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ - 4, 3, 6 ]
            } }
            onPointerMissed={ () => { console.log('You missed!') } }
        >
            <Suspense fallback={ null }>
                <Experience />
            </Suspense>
        </Canvas>

        <Loader
            containerStyles={ {
                background: 'radial-gradient(circle at 50% 40%, #1c1111 0%, #0a0606 100%)'
            } }
            innerStyles={ {
                width: '240px',
                height: '6px',
                background: '#3a2626',
                borderRadius: '99px',
                overflow: 'hidden'
            } }
            barStyles={ {
                height: '6px',
                background: '#F54E4F',
                borderRadius: '99px'
            } }
            dataStyles={ {
                marginTop: '16px',
                color: '#f3e4e4',
                fontFamily: 'monospace',
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
            } }
            dataInterpolation={ (p) => `De kelder laadt… ${p.toFixed(0)}%` }
        />
    </>
)

var wietKnop = document.querySelector(".wietdata button");
var alcoholKnop = document.querySelector(".alcoholdata button");
var cokeKnop = document.querySelector(".cokedata button");
var xtcKnop = document.querySelector(".xtcdata button");
var amfetamineKnop = document.querySelector(".amfetaminedata button");
var ghbKnop = document.querySelector(".ghbdata button");
var lachgasKnop = document.querySelector(".lachgasdata button");
var ketaKnop = document.querySelector(".ketadata button");
var tabakKnop = document.querySelector(".tabakdata button");

var dataSectie = document.querySelector(".data");
var wietSpan = document.querySelector(".wietdata");
var alcoholSpan = document.querySelector(".alcoholdata");
var cokeSpan = document.querySelector(".cokedata");
var xtcSpan = document.querySelector(".xtcdata");
var amfetamineSpan = document.querySelector(".amfetaminedata");
var ghbSpan = document.querySelector(".ghbdata");
var lachgasSpan = document.querySelector(".lachgasdata");
var ketaSpan = document.querySelector(".ketadata");
var tabakSpan = document.querySelector(".tabakdata");

function afsluiten(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    wietSpan.classList.add("hide");
    wietSpan.classList.remove("show");
}
wietKnop.addEventListener("click", afsluiten)

function sluitalcohol(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    alcoholSpan.classList.add("hide");
    alcoholSpan.classList.remove("show");
}
alcoholKnop.addEventListener("click", sluitalcohol)

function sluitCoke(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    cokeSpan.classList.add("hide");
    cokeSpan.classList.remove("show");
}
cokeKnop.addEventListener("click", sluitCoke)

function sluitxtc(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    xtcSpan.classList.add("hide");
    xtcSpan.classList.remove("show");
}
xtcKnop.addEventListener("click", sluitxtc)

function sluitAmfetamine(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    amfetamineSpan.classList.add("hide");
    amfetamineSpan.classList.remove("show");
}
amfetamineKnop.addEventListener("click", sluitAmfetamine)

function sluitGhb(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    ghbSpan.classList.add("hide");
    ghbSpan.classList.remove("show");
}
ghbKnop.addEventListener("click", sluitGhb)

function sluitLachgas(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    lachgasSpan.classList.add("hide");
    lachgasSpan.classList.remove("show");
}
lachgasKnop.addEventListener("click", sluitLachgas)

function sluitKeta(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    ketaSpan.classList.add("hide");
    ketaSpan.classList.remove("show");
}
ketaKnop.addEventListener("click", sluitKeta)

function sluitTabak(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
    tabakSpan.classList.add("hide");
    tabakSpan.classList.remove("show");
}
tabakKnop.addEventListener("click", sluitTabak)

var video = document.querySelector(".video")
function videohide(){
    video.classList.add("hide")
    video.pause(); 
    video.currentTime = 0;
}
video.addEventListener("click", videohide)