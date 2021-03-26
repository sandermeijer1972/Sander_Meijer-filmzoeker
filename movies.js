const movies = [
    
{
Title: "Stephen King's The Shawshank Redemption",
Year: "1994",
imdbID: "tt0111161",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Philosopher's Stone",
Year: "2001",
imdbID: "tt0241527",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
},
{
Title: "Die hard",
Year: "1988",
imdbID: "tt0095016",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
Title: "Stephen King's The Green Mile",
Year: "1999",
imdbID: "tt0120689",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg"
},
{
Title: "The Muppet Christmas Carol",
Year: "1992",
imdbID: "tt0104940",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BN2Y0NWRkNWItZWEwNi00MDNlLWJmZDYtNTkwYzI5Nzg4MjVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Chamber of Secrets",
Year: "2002",
imdbID: "tt0295297",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
},
{
Title: "Stephen King's Misery",
Year: "1990",
imdbID: "tt0100157",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BNzY0ODQ3MTMxN15BMl5BanBnXkFtZTgwMDkwNTg4NjE@._V1_SX300.jpg"
},
{
Title: "Muppets from Space",
Year: "1999",
imdbID: "tt0158811",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BODI2Zjc5YzMtNzQ1NS00NGVmLWExYzgtMzFlY2NiMGMzZjRjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
},
{
Title: "Die Hard 2",
Year: "1990",
imdbID: "tt0099423",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMzMzYzk3ZTEtZDg0My00MTY5LWE3ZmQtYzNhYjhjN2RhZGRjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Prisoner of Azkaban",
Year: "2004",
imdbID: "tt0304141",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
},
{
Title: "Stephen King's It",
Year: "1990",
imdbID: "tt0099864",
Type: "serie",
Poster: "https://m.media-amazon.com/images/M/MV5BYjg1YTRkNzQtODgyYi00MTQ5LThiMDYtNDJjMWRjNTdjZDZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
Title: "Die Hard with a Vengeance",
Year: "1995",
imdbID: "tt0112864",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BZjI0ZWFiMmQtMjRlZi00ZmFhLWI4NmYtMjQ5YmY0MzIyMzRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
Title: "Stephen King's The Shining",
Year: "1980",
imdbID: "tt0081505",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
Title: "The Muppets",
Year: "2011",
imdbID: "tt1204342",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMjE0MTM4NTc3NF5BMl5BanBnXkFtZTcwMjYzOTIxNg@@._V1_SX300.jpg"
},
{
Title: "Stand by Me",
Year: "1986",
imdbID: "tt0092005",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
Title: "The Muppet Movie",
Year: "1979",
imdbID: "tt0079588",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMGQ0OGM5YjItYzYyMi00NmVmLWI3ODMtMTY2NGRkZmI5MWU2XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Goblet of Fire",
Year: "2005",
imdbID: "tt0330373",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
},
{
Title: "Stephen King's The Langoliers",
Year: "1995",
imdbID: "tt0112040",
Type: "serie",
Poster: "https://m.media-amazon.com/images/M/MV5BNWNmNmVhZDYtM2Y1Yi00ZmNjLThlNTEtN2JiNjY4NGVhOTcyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
Title: "Stephen King's Doctor Sleep",
Year: "2019",
imdbID: "tt5606664",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_SX300.jpg"
},
{
Title: "The Muppets' Wizard of Oz",
Year: "2005",
imdbID: "tt0422778",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMjE0OTUzOTMyNF5BMl5BanBnXkFtZTcwNTk5NDAzMQ@@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Order of the Phoenix",
Year: "2007",
imdbID: "tt0373889",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"
},
{
Title: "Muppet Treasure Island",
Year: "1996",
imdbID: "tt0117110",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTlmNzhiMWEtOWVjZC00NmM0LTgxNDItMDJmYTkxYTZkY2FjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
},
{
Title: "Die Hard 4.0",
Year: "2007",
imdbID: "tt0337978",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BNDQxMDE1OTg4NV5BMl5BanBnXkFtZTcwMTMzOTQzMw@@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Half-Blood Prince",
Year: "2009",
imdbID: "tt0417741",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
},
{
Title: "Stephen King's The Stand",
Year: "1994",
imdbID: "tt0108941",
Type: "serie",
Poster: "https://m.media-amazon.com/images/M/MV5BMjI4ODVkY2ItODUxZi00NTgxLWJjODgtOThkNDhhN2I0ZjA5XkEyXkFqcGdeQXVyMTEwODg2MDY@._V1_SX300.jpg"
},
{
Title: "It's a very merry Muppet Christmas Movie",
Year: "2002",
imdbID: "tt0329737",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BYWZlM2RmYzMtMTk1NC00ZmExLTg5YjktODczNmRhOGM2YTc1XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
},
{
Title: "Stephen King's Silver Bullet",
Year: "1985",
imdbID: "tt0090021",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BYjYyZTM5MjEtNzhhYS00MTZlLTk5NzYtMTk4OTJhY2EzN2VkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Deathly Hallows, part 1",
Year: "2010",
imdbID: "tt0926084",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
},
{
Title: "The Great Muppet Caper",
Year: "1981",
imdbID: "tt0082474",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BYzViOWEwOTgtOTIyMS00ZDNkLWIzZDAtMWFjYzUwM2I0YjNkXkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg"
},
{
Title: "Stephen King's Under the Dome",
Year: "2013-2015",
imdbID: "tt1553656",
Type: "serie",
Poster: "https://m.media-amazon.com/images/M/MV5BMjA3NDk0NzM1MF5BMl5BanBnXkFtZTcwOTYxMTk3OQ@@._V1_SX300.jpg"
},
{
Title: "A good day to Die Hard",
Year: "2013",
imdbID: "tt1606378",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNzgyNzUzOV5BMl5BanBnXkFtZTcwMzAwOTA5OA@@._V1_SX300.jpg"
},
{
Title: "Harry Potter and the Deathly Hallows, part 2",
Year: "2011",
imdbID: "tt1201607",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
},
{
Title: "The Muppets take Manhattan",
Year: "1984",
imdbID: "tt0087755",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg"
},
{
Title: "Stephen King's Cujo",
Year: "1983",
imdbID: "tt0085382",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMjI2MDU1MTk5NV5BMl5BanBnXkFtZTgwODA2MDE3MTE@._V1_SX300.jpg"
},
{
Title: "Muppets Most Wanted",
Year: "2014",
imdbID: "tt2281587",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BNDY2MTE0ODM4NF5BMl5BanBnXkFtZTgwMDI3Mjc2MDE@._V1_SX300.jpg"
}

]