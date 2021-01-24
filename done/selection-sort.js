//swap indexes

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//find index of smallest value in array
function indexOfMinimum (array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var sortArray = function(array) {
    var minIndex = 0;
    
    for (var i = 0; i < array.length; i++) {
        minIndex = indexOfMinimum(array, i);
        swap(array, minIndex, i);
    }
    return array;
};