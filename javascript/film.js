//megjelenítés:
document.querySelector('tbody').innerHTML=displayFilms(films)

function displayFilms(arr){
    const btn=`<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Részletek
  </button>`
 return   arr.map((obj,i)=>`<tr><td>${obj.Title}</td><td>${obj.Year}</td><td>${obj.Director}</td><td>${obj.Country}</td><td id="${i}" onclick="show(this)">${btn}</td></tr>`).join('')
}
//feliratkozunk a keyup eseményre:

document.getElementById('szo').addEventListener('keyup',(e)=>{
    //console.log(e.target.value)
    const userStr=e.target.value
    const newArr=films.filter(obj=>{
        return obj.Title.toLowerCase().includes(userStr.toLowerCase())
    })
    
    document.querySelector('tbody').innerHTML=newArr.length>0 ? displayFilms(newArr) : displayFilms(films)
})

const show=(o)=>{
    console.log(o.id)
    const film=films[o.id]
    console.log(film)
    document.querySelector('.modal-title').innerHTML=film.Title
    document.querySelector('modal-body').innerHTML=`
        <p>${film.Genre}</p>
        <p>${film.Awards}</p>
        <p>${film.imdbRating}</p>
    `
}