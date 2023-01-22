<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>runtrack3</title>
  <link rel="stylesheet" href="">
</head>

<header>
</header>

<main id="data-container">
<body>
<form>
  <label for="id">ID:</label>
  <input type="text" id="id" name="id">
  <br>
  <label for="nom">Nom:</label>
  <input type="text" id="nom" name="nom">
  <br>
  <label for="type">Type:</label>
  <select id="type" name="type">
    <option value="">Tous</option>
    <option value="Fire">Fire</option>
    <option value="Water">Water</option>
    <option value="Grass">Grass</option>
    <option value="Poison">Poison</option>
    <option value="Bug">Bug</option>
    <option value="Flying">Flying</option>
    <option value="Normal">Normal</option>
    <option value="Electric">Electric</option>
    <option value="Ground">Ground</option>
    <option value="Fairy">Fairy</option>
    <option value="Fighting">Fighting</option>
    <option value="Psychic">Psychic</option>
    <option value="Rock">Rock</option>
    <option value="Steel">Steel</option>
    <option value="Ice">Ice</option>
    <option value="Ghost">Ghost</option>
    <option value="Dragon">Dragon</option>
  </select>
  <br><br>
  <input type="button" value="Filtrer" onclick="filterData()">
</form>

</body>
</main>












<script src="script.js"></script>