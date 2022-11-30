import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import gebruikers from './gebruikers.js'
import uitgaanders from './uitgaanders.js'
import kostten from './kostte.js'
import leeftijdsgroep from './leeftijdsgroep.js'
import ziekenhuis from './ziekenhuis.js'
import alcohol from './alcohol.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
        onPointerMissed={ () => { console.log('You missed!') } }
    >
        <Experience />
    </Canvas>
)

var kruisKnop = document.querySelector(".cross");
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
    alcoholSpan.classList.add("hide");
    alcoholSpan.classList.remove("show");
    cokeSpan.classList.add("hide");
    cokeSpan.classList.remove("show");
    xtcSpan.classList.add("hide");
    xtcSpan.classList.remove("show");
    amfetamineSpan.classList.add("hide");
    amfetamineSpan.classList.remove("show");
    ghbSpan.classList.add("hide");
    ghbSpan.classList.remove("show");
    lachgasSpan.classList.add("hide");
    lachgasSpan.classList.remove("show");
    ketaSpan.classList.add("hide");
    ketaSpan.classList.remove("show");
    tabakSpan.classList.add("hide");
    tabakSpan.classList.remove("show");
}

kruisKnop.addEventListener("click", afsluiten)
 
var video = document.querySelector(".video")
function videohide(){
    video.classList.add("hide")
    video.pause(); 
    video.currentTime = 0;
}
video.addEventListener("click", videohide)