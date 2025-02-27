import nodeFS from "node:fs"
import { JSDOM } from "jsdom"

const html = nodeFS.readFileSync("./SakuraBackground/index.html").toString()
const parser = new JSDOM(html)
const doc = parser.window.document
const scripts = doc.body.querySelectorAll("script[type]")
for (const script of scripts) {
    const id = script.getAttribute("id")
    const type = script.getAttribute("type") ?? ""
    if (!type.startsWith("x-shader/")) continue

    console.log(`export const ${id} = \`${script.textContent?.trim()}\``)
    console.log()
}
