let redTurn = true;
let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]
// console.log(board[0].length);
function makeTable(array){
    var newTable = document.createElement('table');
    for(let row in board){
        let newRow = document.createElement('tr')
        // console.log("Row: "+row);
        // console.log(board[row]);
        for(let cell in board[row]){
            // console.log("Cell: "+ board[row][cell]);
            let newCell = document.createElement('td');
            // Check who is playing and set class of element
            // newCell.textContent = array[row][cell];
            // console.log(newCell);
            newCell.id = ('cell:'+cell+','+row);
            newCell.className=('blank');
            newCell.addEventListener('click', handleClick);
            newRow.appendChild(newCell);
        }
        newTable.appendChild(newRow);
    }
    // body.appendChild(table);
    document.body.appendChild(newTable);
}
// for(cell in board){
//     console.log(cell);
// }
handleClick = function (event){
    let target = event.target;
    // console.log("Clicked: "+target);
    let cellClickedId = target.getAttribute('id');
    // alert(cellClickedId);
    //Check who is playing with if statement
    if(redTurn){
        // alert(redTurn);
        cellClickedId.className=('red');
        redTurn = false;
    }else{
        // alert(redTurn);
        cellClickedId.className=('black');
        redTurn = true;
    }
}
makeTable(board);