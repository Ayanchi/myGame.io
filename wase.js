let canva = document.querySelector('canvas');
let cnt = canva.getContext("2d");

let CELL_SIZE = 50;
let COLMN = 10;
let ROW = 10;
let PADDING = 30;



function creareSetka(colmn, rows){
    let setka = [];
    for(y = 0; y < rows; y++){
        let row = [];
        for(x = 0; x < colmn; x++){
            row.push(false);
        }

        setka.push(row);
    }
    return setka

}

let set = creareSetka(COLMN,ROW) ;
 console.log(set);

function drawSetka() {
    canva.width = COLMN * CELL_SIZE ;
    canva.height = ROW * CELL_SIZE ;
    
    cnt.beginPath();
    cnt.rect(0, 0, canva.width, canva.height);
    cnt.fillStyle = 'brown';
    cnt.fill();
}    
drawSetka();