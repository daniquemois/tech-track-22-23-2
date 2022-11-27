import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import gebruikers from './gebruikers.js'
import uitgaanders from './uitgaanders.js'
import kostten from './kostte.js'
import leeftijdsgroep from './leeftijdsgroep.js'

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

function afsluiten(){
    dataSectie.classList.add("hide");
    dataSectie.classList.remove("show");
}

kruisKnop.addEventListener("click", afsluiten)
 