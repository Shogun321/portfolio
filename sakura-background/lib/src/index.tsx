import React from "react"

import { initWebGL } from "./webgl"

import "./index.css"

export interface SakuraBackgroundProps {
    children: React.ReactNode
}

export function SakuraBackground(props: SakuraBackgroundProps) {
    return (
        <div className="SakuraBackground">
            <canvas ref={handleMount}></canvas>
            <div>{props.children}</div>
        </div>
    )
}

function handleMount(canvas: HTMLCanvasElement | null) {
    if (!canvas) return

    initWebGL(canvas)
}
