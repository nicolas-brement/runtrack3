window.addEventListener("scroll", ()=> {
  let hauteur = document.documentElement.scrollHeight - window.innerHeight; 
  let position = window.scrollY; 
  let largeur = document.documentElement.clientWidth; 
  let scroll = (position / hauteur) * largeur; 

  document.querySelector('footer').style.width = scroll + "px"; 

})








  




