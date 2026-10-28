import { useEffect, useRef, useState } from 'react'
import { useProgress } from '@react-three/drei'

// Eigen laadscherm: de balk loopt ALLEEN vooruit (nooit terug) en animeert
// soepel, ook al groeit het item-totaal van de LoadingManager in golven.
export default function LoadingScreen() {
    const { active, progress } = useProgress()

    // onthoud of het laden daadwerkelijk begonnen is
    const started = useRef(false)
    if (active) started.current = true

    const target = useRef(0)
    target.current = progress

    const [shown, setShown] = useState(0)
    const [visible, setVisible] = useState(true)
    const [fading, setFading] = useState(false)

    useEffect(() => {
        let raf
        const tick = () => {
            setShown((prev) => {
                const done = started.current && !active
                // nooit terug: neem het maximum van wat we al toonden en de echte voortgang,
                // en blijf onder 100% tot het laden écht klaar is
                const goal = done ? 100 : Math.min(99, Math.max(prev, active ? target.current : 8))
                const next = prev + (goal - prev) * 0.07 + (done ? 0.6 : 0.04)
                return Math.min(next, goal)
            })
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [active])

    useEffect(() => {
        if (started.current && !active && shown >= 99.5) {
            setFading(true)
            const t = setTimeout(() => setVisible(false), 700)
            return () => clearTimeout(t)
        }
    }, [active, shown])

    if (!visible) return null

    return (
        <div className={ `loader${ fading ? ' loader--done' : '' }` }>
            <div className="loader__inner">
                <p className="loader__eyebrow">Plaats delict · Beverwijk</p>
                <h1 className="loader__title">De Drugskelder</h1>
                <p className="loader__intro">
                    Je daalt af naar een kelder vol sporen — flesjes, peuken, pillen, poeder.
                    Klik op de <strong>drugs</strong> die je vindt en ontdek hoeveel er écht
                    van wordt gebruikt.
                </p>
                <div className="loader__bar">
                    <div className="loader__fill" style={ { width: `${ shown }%` } } />
                </div>
                <p className="loader__status">Sporen veiligstellen… { Math.round(shown) }%</p>
            </div>
        </div>
    )
}
