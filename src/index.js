module.exports = function solveSudoku(matrix) {
  const size = 9
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] == 0) {
        for (let n = 1; n <= size; n++) {
          if (isValid(matrix, i, j, n)) {
            matrix[i][j] = n
            if (solveSudoku(matrix)) {
              return matrix
            } else {
              matrix[i][j] = 0
            }
          }
        }
        return false
      }
    }
  }
  return matrix
}

function isValid(matrix, row, col, n) {
  const size = 9
  for (let i = 0; i < size; i++) {
    const sqr = size**(1/2) * Math.floor(row / size**(1/2)) + Math.floor(i / size**(1/2))
    const sqc = size**(1/2) * Math.floor(col / size**(1/2)) + i % size**(1/2)
    if (matrix[row][i] == n || matrix[i][col] == n || matrix[sqr][sqc] == n) {
      return false
    }
  }
  return true
  }


















































  // your solution
  //const maxn = 9
  //for (let i = 0; i < maxn; i++) {
  //  for (let j = 0; j < maxn; j++) {
  //    if (matrix[i][j] == 0) {
  //      for (let n = 1; n <= maxn; n++) {
  //        if (isValid(matrix, i, j, n)) {
  //          matrix[i][j] = n
  //          if (solveSudoku(matrix)) {
  //            return matrix
  //          } else {
  //            matrix[i][j] = 0
  //          }
  //        }
  //      }
  //      return false
  //    }
  //  }
  //}
  //return matrix
//}


//function isValid(matrix, row, col, kand) {
 // for (let i = 0; i < 9; i++) {
 //   const sqr = 3 * Math.floor(row / 3) + Math.floor(i / 3)
 //   const sqc = 3 * Math.floor(col / 3) + i % 3
 //   if (matrix[row][i] == kand || matrix[i][col] == kand || matrix[sqr][sqc] == kand) {
 //     return false
 //   }
 // }
 // return true
//}
