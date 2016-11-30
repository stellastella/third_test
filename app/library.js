module.exports = {
  findMissing: function (arr1, arr2) {
var diff;
for (var i in arr2){
   if (arr1.indexOf(arr2[i]) === -1){
    var diff = arr2[i];
  }
    else if(arr1.length === arr2.length) {
       return 0;
   }
 
}
if (arr1.length === 0 && arr2.length === 0){
       return 0;
   }
return diff;
}

}