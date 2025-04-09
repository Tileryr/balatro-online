import * as TWEEN from "@tweenjs/tween.js"
import { MouseEvent, useRef } from "react"

function Card() {
    const card = useRef<HTMLDivElement>(null)
    const width = 170
    const height = width * 1.4

    const scale = {
        x: 1,
        y: 1
    }


    const animate_tween = (target_tween: TWEEN.Tween) => {
        const handleTick = (time: number) => {
            target_tween.update(time)
            if (target_tween.isPlaying()) {
                requestAnimationFrame(handleTick)
            }
        }

        requestAnimationFrame(handleTick)
        return handleTick
    }

    const handleMouseOver = () => {
        const size_tween = new TWEEN.Tween(scale)
            .to({x: 1.1, y: 1.1}, 200)
            .easing(TWEEN.Easing.Elastic.Out)
            .onUpdate(updateScale)
            
        
        
        animate_tween(size_tween)
        size_tween.start()
    }

    const handleMouseExit = () => {
        const size_tween = new TWEEN.Tween(scale)
            .to({x: 1.0, y: 1.0}, 200)
            .easing(TWEEN.Easing.Elastic.Out)
            .onUpdate(updateScale)
        
        animate_tween(size_tween)
        size_tween.start()

        card.current!.style.transform = `none`
    }
    
    const updateScale = () => {
        card.current!.style.scale = `${scale.x} ${scale.y}`
    }
    
    const handleMouseMove = (event: MouseEvent) => {
        const boundingBox = card.current!.getBoundingClientRect()
        const relativePosition = {
            x: event.clientX - boundingBox.left,
            y: event.clientY - boundingBox.top
        }
        
        const normalizedRelativePosition = {
            x: ((relativePosition.x / boundingBox.width) * 2) - 1,
            y: ((relativePosition.y / boundingBox.height) * 2) - 1
        }
       
        const centerDistance = Math.hypot(
            normalizedRelativePosition.x,
            normalizedRelativePosition.y
        )

        card.current!.style.transform = `
            perspective(800px) 
            rotate3d(${normalizedRelativePosition.y}, ${-normalizedRelativePosition.x}, 0, ${centerDistance * 20}deg) 
            `

        // console.log(normalizedRelativePosition.y)
        // card.current!.style.transform = `rotateY(${normalizedRelativePosition.x * -45}deg)`
    }

    return (
    <div className="bg-white opacity-100 rounded-xl p-2 pb-4 outline-2 outline-slate-400 grid grid-cols-[auto_1fr_auto]"
    style={{
        width: `${width}px`,
        height: `${height}px`,
    }}
    onMouseEnter={handleMouseOver}
    onMouseLeave={handleMouseExit}
    onMouseMove={handleMouseMove}
    ref={card}
    >
        <p className="card-text spade">8</p>
        <div></div>
        <p className="card-text spade transform-[scale(1,_-1)]">8</p>
    </div>
    )
}

export default Card