function lostSheep(friday,saturday,total){
  let sumFri = friday.reduce((a, b) => a + b, 0);
  let sumSat = saturday.reduce((a, b) => a + b, 0);
  let totalSum = sumFri + sumSat;
 return total - totalSum
}
