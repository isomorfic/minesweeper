import {Game} from "./Game";
import {Display} from "./Display";

const c = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = c.getContext("2d") as CanvasRenderingContext2D;

const game = new Game(100, 100, 2000);
const display = new Display(c, ctx, game);

display.draw();