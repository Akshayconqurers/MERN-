const movies = ['The Matrix', 'The Godfather', 'The Dark Knight', 'Pulp Fiction'];

console.log(movies.length);
console.log(movies[0]);
console.log(Array. isArray(movies));

// Indexing 

console.log(movies[2]);
console.log(movies[movies.length-1]);

// slicing

console.log(movies. slice(1, 3));
console.log(movies.slice(1));
console.log(movies.slice());
console.log(movies.slice(2, -1));


// push, pop, shift, unshift

movies.push('Dhoom');
console.log(movies);

movies.unshift('Sholay');
console.log(movies);


// Splicing

movies.splice(3, 2);
console.log(movies);
