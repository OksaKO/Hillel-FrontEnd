
document.querySelector("#People").addEventListener('click', () => {
    axios.get ('https://swapi.dev/api/people/')
    .then(result => console.log(result.data))
    .catch(error => console.log(error))
})