'use strict';


let MatrixToRotate: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

]

function rotateMatrix (inputMatrix: number[][]): number[][] {
    let rotatedMatrix: number[][] = [];
    for (let i: number = 0; i < inputMatrix.length; i++) {
        let newRow: number[] = [];
        for (let j: number = inputMatrix.length - 1; j >= 0; j--) {
            newRow.push(inputMatrix[j][i]);
        }
        rotatedMatrix.push(newRow);
    }
    return rotatedMatrix;
}

console.log(rotateMatrix(MatrixToRotate));
console.table(rotateMatrix(MatrixToRotate))