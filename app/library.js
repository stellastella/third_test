module.exports = {
  findMissing: function (arr1, arr2) {
  var diff;
  var empty=[];
    for (var i in arr2){
    if (arr1.indexOf(arr2[i]) === -1) {
     
     diff= (arr2[i]);
    } else if ((arr1 && arr2 )=== empty){
      return 0;
    } else if (arr1 === arr2){
      return 0;
    } 
      }
  return diff;
}
}