//console.log (dados);
 function buscar() {
    

let section = document.getElementById("resultados-busca");

let campoBusca = document.getElementById("campo-busca");

console.log("campoBusca");
 
let resultados = "";
 
for (let dado of dados){
   resultados += `
    <div class="item-busca">
                <h2>${dado.titulo}</h2>
            <p class="descriçao-meta">${dado.descriçao} </p>
            <a href="https://santacruzcapibaribe.marquesconsult.com.br/" target="_blank">Mais informações acesse o PEC</a>

            </div>

            <div class="item-busca">

            <h2>${dado.titulo}</h2>
            <p class="descriçao-meta">${dado.descriçao}

                 
            </p>
            <a href="https://santacruzcapibaribe.marquesconsult.com.br/" target="_blank">Mais informações acesse o PEC</a>

            </div>

            <div class="item-busca">


            <h2>${dado.titulo}</h2>
            <p class="descriçao-meta">${dado.descriçao} 
            
                 
            </p>
            <a href="https://santacruzcapibaribe.marquesconsult.com.br/" target="_blank">Mais informações acesse o PEC</a>

            </div>

            <div class="item-busca">

            <h2>${dado.titulo}</h2>
            <p class="descriçao-meta"> ${dado.descriçao}
            
                 
            </p>
            <a href="https://santacruzcapibaribe.marquesconsult.com.br/" target="_blank">Mais informações acesse o PEC</a>

            </div>

            <div class="item-busca">
            <h2>${dado.titulo}</h2>
            <p class="descriçao-meta"> ${dado.descriçao}
            
            </p>
            <a href="https://santacruzcapibaribe.marquesconsult.com.br/" target="_blank">Mais informações acesse o PEC</a>

            </div>

            <div class="item-busca">

            <h2>${dado.titulo}</h2>
            <p class="descriçao-meta"> ${dado.descriçao}
            
                 
            </p>
            <a href="https://santacruzcapibaribe.marquesconsult.com.br/" target="_blank">Mais informações acesse o PEC</a>
            
            
            </div>
            






`
}
section.innerHTML = resultados

}
