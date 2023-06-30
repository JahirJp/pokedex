const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; i<=21 ; i++){
    fetch(URL+i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(pokem){

    let tipos = pokem.types.map((type) => 
            `<p class="${type.type.name} tipo">${type.type.name}</p>`);

    tipos = tipos.join('');
    
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="card mb-0">
            <div class="row">
                <div class="col-lg-6">                        
                        <div class="card-body">
                            <div class="nombre-contenedor">
                                <p class="pokemon-id">#${pokem.id}</p>
                                <p class="pokemon-nombre">${pokem.name}</p>
                            </div>
                            <div class="pokemon-tipos">
                                ${tipos}    
                            </div>
                        </div>                        
                </div>          
                <div class="col-lg-6">
                    <div class="pokemon-imagen">
                        <img class="w-100" src="${pokem.sprites.other["official-artwork"].front_default}" alt="...">
                    </div>
                </div>                    
            </div>
        </div>
    `;
    listaPokemon.append(div);
}
