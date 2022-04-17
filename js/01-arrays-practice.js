//STEP 1
let movieArray = ['Clueless', 'Office Space', 'A Star Is Born', 'Spirited Away', 'Bridesmaids']
console.log(movieArray[1])
//STEP 2
let movies = new Array(5)
movies[0] = 'Clueless'
movies[1] = 'Office Space'
movies[2] = 'A Star Is Born'
movies[3] = 'Spirited Away'
movies[4] = 'Bridesmaids'
console.log(movies[0])
//STEP 3
movies.splice(2, 0, 'Moonstruck')
console.log(movies.length)
//STEP 4
movies = movieArray
delete movies[0]
console.log(movies)
//STEP 5
movies = ['Clueless', 'Office Space', 'A Star Is Born', 'Spirited Away', 'Bridesmaids', 'Moonstruck', 'Saved']
for (let movie in movies) {
    console.log(movies[movie])
}
//STEP 6
for (let movie of movies) {
    console.log(movie)
}
//STEP 7
for (let movie of movies.sort()) {
    console.log(movie)
}
//STEP 8
movies = ['Clueless', 'Office Space', 'A Star Is Born', 'Spirited Away', 'Bridesmaids', 'Moonstruck', 'Saved']
leastFavMovies = ['Little Man', 'Gotti', 'The Boss Baby']
console.log('Movies I like: \n\n')
for (let movie in movies) {
    console.log(movies[movie])
}
console.log('\n\nMovies I regret watching: \n\n')
for (let movie in leastFavMovies) {
    console.log(leastFavMovies[movie])
}
//STEP 9
moviesAll = movies.concat(leastFavMovies)
console.log(moviesAll.sort().reverse())
//STEP 10
moviesAll = movies.concat(leastFavMovies)
console.log(moviesAll.reverse()[0])
//STEP 11
moviesAll = movies.concat(leastFavMovies)
console.log(moviesAll[0])
//STEP 12
console.log('new ----------')
let m1 = moviesAll.indexOf('Little Man')
let m2 = moviesAll.indexOf('Gotti')
let m3 = moviesAll.indexOf('The Boss Baby')
moviesAll[m1] = 'Garden State'
moviesAll[m2] = 'Best in Show'
moviesAll[m3] = 'Elf'
console.log(moviesAll)
//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17