// ======================================================================
//  Low-level canvas access. 
// ======================================================================

var canvas = document.getElementById("canvas");
var canvas_context = canvas.getContext("2d");
var canvas_buffer = canvas_context.getImageData(0, 0, canvas.width, canvas.height);
var canvas_pitch = canvas_buffer.width * 4;

export { canvas, canvas_context, canvas_buffer, canvas_pitch }