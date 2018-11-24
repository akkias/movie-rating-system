export const sortDesc = (array) => {
    return array.sort(function(a, b){
        return b.rating - a.rating;
    })
}

export const getRandomNum = (num) => {
    return Math.floor(Math.random() * num) + 1;
}