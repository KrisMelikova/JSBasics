'use strict';

const settings = {
    rowCount: 9,
    colCount: 9,
}

const chess = {
    settings,
    containerElement: null,
    cellElements: [],

    run() {
        this.containerElement = document.querySelector('#chess');
        this.initCells();
    },

    initCells() {
        this.containerElement.innerHTML = '';
        this.cellElements = [];
        let letters = "ABCDEFGH";

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);


            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);

                if (col === 0) {
                    cell.textContent = 8 - row || '';
                    continue;
                }
                if (row === 8) {
                    cell.textContent = letters.charAt(col - 1);
                    continue;
                }

                if (row % 2 === (col+1) % 2) {
                    cell.style.backgroundColor = 'white';
                } else {
                    cell.style.backgroundColor = 'black';
                }

                this.cellElements.push(cell);
            }
        }
    },
}
chess.run();
