import React from "react"
import { SakuraBackground } from "sakura-background"

import "./App.css"

export default function App() {
    return (
        <div className="SakuraBackgroundDoc">
            <SakuraBackground>
                <h1>Hello world!</h1>
                <p>Lorem ipsum...</p>
            </SakuraBackground>
            <div>
                <p>
                    I converted this animation into a React component library
                    that you can use in any React project.
                </p>
                <p>
                    You can even put it on <code>npmjs.com</code> if you want
                    to.
                </p>
                <pre>
                    {[
                        `import { SakuraBackground } from "sakura-background"`,
                        "",
                        "export function LeftComponent() {",
                        "  return <SakuraBackground>",
                        "    <h1>Hello World!</h1>",
                        "    <p>Lorem ipsum...</p>",
                        "  </SakuraBackground>",
                        "}",
                        "",
                        "export function BottomComponent() {",
                        "  return <SakuraBackground>",
                        "    <h1>How are you!</h1>",
                        "  </SakuraBackground>",
                        "}",
                    ].join("\n")}
                </pre>
            </div>
            <SakuraBackground>
                <h1>How are you?</h1>
            </SakuraBackground>
        </div>
    )
}
