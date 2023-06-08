// Data una matrice 4 x 4 renderla triangolare superiore

let matrice = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
/*
X  Y  Y  Y  (0,0)
0  X  Y  Y  (1,1)
0  0  X  Y  (2,2)
0  0  0  X  (3,3)
*/
for(let i = 0; i < matrice.length; i++){
    for(let y = i; y < matrice[i].length; y++){
        matrice[i][y] = Math.floor(Math.random() * 100); 
    } 
}

console.log(matrice);