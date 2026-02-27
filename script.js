const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const molecule = molecules[id];

document.getElementById("title").innerText = molecule.name;

document.getElementById("info").innerHTML = `
Rumus: ${molecule.formula}<br>
Notasi VSEPR: ${molecule.vsepr}<br>
Bentuk: ${molecule.shape}<br>
Sudut: ${molecule.angle}<br>
Pasangan Elektron Bebas: ${molecule.lonePairs}
`;

let viewer = $3Dmol.createViewer("viewer", {
  backgroundColor: "white"
});

viewer.addModel(molecule.smiles, "smiles");
viewer.setStyle({}, {stick:{}});
viewer.zoomTo();
viewer.render();