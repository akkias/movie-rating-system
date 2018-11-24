export const sortDesc = (array) => {
    return array.sort(function(a, b){
        return b.rating - a.rating;
    })
}