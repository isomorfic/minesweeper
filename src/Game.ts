import {Cell} from "./Cell";
export class Game {

    protected mines: number;
    cells: Cell[][];
    
    constructor(height: number, width: number, mines: number) {
        this.mines = mines;
        this.cells = new Array(width);
        for (let x = 0; x < width; x++) {
            this.cells[x] = new Array(height);
            for (let y = 0; y < height; y++) {
                this.cells[x][y] = new Cell();
            }
        }
        this.initCells();
    }

    initCells() {
        for (let i = 0; i < this.mines; i++) {
            while (true) {
                let x = Math.floor(this.cells.length * Math.random());
                let y = Math.floor(this.cells[0].length * Math.random());
                if (this.cells[x][y].type != -1) {
                    this.cells[x][y].type = -1;
                    console.log("x: " + x + ", y: " + y);
                    break;
                }
            }
        }
        for (let x = 0; x < this.cells.length; x++) {
            for (let y = 0; y < this.cells[0].length; y++) {
                if (this.cells[x][y].type != -1)
                    this.cells[x][y].type = this.checkBombs(x, y);
            }
        }
    }
    
    checkBombs(x: number, y: number): number {
        let count: number = 0;
        count += Number(this.cells[x - 1] != undefined && this.cells[x - 1][y - 1] != undefined && this.cells[x - 1][y - 1].type == -1);
        count += Number(this.cells[x] != undefined && this.cells[x][y - 1] != undefined && this.cells[x][y - 1].type == -1);
        count += Number(this.cells[x + 1] != undefined && this.cells[x + 1][y - 1] != undefined && this.cells[x + 1][y - 1].type == -1);
        count += Number(this.cells[x + 1] != undefined && this.cells[x + 1][y] != undefined && this.cells[x + 1][y].type == -1);
        count += Number(this.cells[x + 1] != undefined && this.cells[x + 1][y + 1] != undefined && this.cells[x + 1][y + 1].type == -1);
        count += Number(this.cells[x] != undefined && this.cells[x][y + 1] != undefined && this.cells[x][y + 1].type == -1);
        count += Number(this.cells[x - 1] != undefined && this.cells[x - 1][y + 1] != undefined && this.cells[x - 1][y + 1].type == -1);
        count += Number(this.cells[x - 1] != undefined && this.cells[x - 1][y] != undefined && this.cells[x - 1][y].type == -1);
        return count;
    }
}