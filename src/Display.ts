import {Game} from "./Game";
export class Display {
    c: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    game: Game;

    constructor(c: HTMLCanvasElement, ctx: CanvasRenderingContext2D, game: Game) {
        this.c = c
        this.ctx = ctx
        this.game = game
    }

    draw() {
        for (let x = 0; x < this.game.cells.length; x++) {
            for (let y = 0; y < this.game.cells[0].length; y++) {
                if (this.game.cells[x][y].isRevealed) {
                    switch(this.game.cells[x][y].type) {
                        case -1:
                            this.ctx.fillStyle = "black";
                            break;
                        case 0:
                            this.ctx.fillStyle = "white";
                            break;
                        case 1:
                            this.ctx.fillStyle = "lime";
                            break;
                        case 2:
                            this.ctx.fillStyle = "yellow";
                            break;
                        case 3:
                            this.ctx.fillStyle = "orange";
                            break;
                        case 4:
                            this.ctx.fillStyle = "red";
                            break;
                        case 5:
                            this.ctx.fillStyle = "maroon";
                            break;
                        case 6:
                            this.ctx.fillStyle = "fuchsia";
                            break;
                        case 7:
                            this.ctx.fillStyle = "purple";
                            break;
                        case 8:
                            this.ctx.fillStyle = "grey";
                            break;
                    }
                } else {
                    this.ctx.fillStyle = "silver";
                }
                this.ctx.fillRect(x * 10, y * 10, 10, 10);
            }
        }
    }
}