import { PutPixel, UpdateCanvas } from "./canvasfunctions.js"

// ======================================================================
//  Rasterization code.
// ======================================================================
let DrawLineBroken = function (x0, y0, x1, y1, color) {
    let a = (y1 - y0) / (x1 - x0)
    let y = y0
    for (let x = x0; x <= x1; x++) {
        PutPixel(x, y, color)
        y += a
    }
}

let Render = function () {
    DrawLineBroken(-200, -100, 240, 120, [0, 0, 0])
    DrawLineBroken(-50, -200, 60, 240, [0, 0, 0])
    UpdateCanvas()
}

export { Render }
