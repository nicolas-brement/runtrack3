function filterData() {
  var id = document.getElementById("id").value;
  var nom = document.getElementById("nom").value;
  var type = document.getElementById("type").value;

  fetch("pokemon.json")
    .then(response => response.json())
    .then(data => {
      var filteredData = data.filter(item => {
        if (id && id !== "" && item.id !== parseInt(id)) {
          return false;
        }
        if (nom && item.name.english.indexOf(nom) === -1 && item.name.japanese.indexOf(nom) === -1 && item.name.chinese.indexOf(nom) === -1 && item.name.french.indexOf(nom) === -1) {
          return false;
        }
        if (type && !item.type.includes(type)) {
          return false;
        }
        return true;
      });

      displayData(filteredData);
    });
}


  function displayData(data) {
    var container = document.getElementById("data-container");
    container.innerHTML = "";
  
    data.forEach(item => {
      var div = document.createElement("div");
      div.innerHTML = `<p>ID: ${item.id}</p> <p>Nom English: ${item.name.english}</p> <p>Nom Japanese: ${item.name.japanese}</p> <p>Nom Chinese: ${item.name.chinese}</p> <p>Nom French: ${item.name.french}</p> <p>Type: ${item.type}</p> <p> Base:</p><p>HP: ${item.base.HP}</p> <p>Attack: ${item.base.Attack}</p> <p>Defense: ${item.base.Defense}</p> <p>Sp. Attack: ${item.base['Sp. Attack']}</p> <p>Sp. Defense: ${item.base['Sp. Defense']}</p> <p>Speed: ${item.base.Speed}</p>`;
      container.appendChild(div);
    });
  }
  
  
  







  




