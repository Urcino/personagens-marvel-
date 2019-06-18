/*
 * Comando para inicia a API 
 * json-server personagens.json
 */

axios.get('http://localhost:3000/personagens')
.then(function(dados) {

    console.log(dados.data);

    var i = 0;

    for(persona of dados.data) {

        i++;

        let menuDePersonagens = `
    <div class="col">
        <div class="card" style="width: 18rem;  margin:30px; " >
  
         <img src="${persona.img}" class="card-img-top" style="height:90px; width:90px; margin:90px; "  >
         <div class="card-body">
         <h5 class="card-title" >${persona.nome}</h5>         
         <p>
         <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
           Biografia
         </a>
         </p>
         <div class="collapse" id="collapseExample${i}">
         <div class="card card-body">
         <p style="text-align:justify" class="card-text">${persona.texto1}</p>
         <p class="card-text">${persona.texto2}</p>
         </div>
         </div>
        </div>
    </div>
  
        <!--<div class="caixa-principal">
             <img src="${persona.img}"></img>
            <div>${persona.id}</div>
            <div type="hidden">
            <div>${persona.nome}</div>
            <div>${persona.texto}</div>
            </div>
        </div>-->
        </div>`;

        document.querySelector('#ingresso').innerHTML += menuDePersonagens;
    }
})
.catch(resposta => {
    document.querySelector('#ingresso').innerHTML += resposta;
});
