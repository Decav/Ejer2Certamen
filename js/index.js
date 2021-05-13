tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const pedidos = [];
const cargarTabla = () =>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i=0; i < pedidos.length; ++i){
        let p = pedidos[i];
        let tr = document.createElement("tr");
        let tdNro = document.createElement("td");
        tdNro.innerText = (i+1);
        let tdNombre = document.createElement("td");
        
        tdNombre.innerText = p.nombre;
        
        let tdTipo = document.createElement("td");
      
        let icono = document.createElement("i");
        if (p.tipo == "combo"){
        //<i class="fas fa-fire"></i>
            icono.classList.add("fas","fa-box","text-danger","fa-3x");
        
        }else if(p.tipo == "hamburguesa"){
            icono.classList.add("fas","fa-hamburger","text-danger","fa-3x");

        //<i class="fas fa-leaf"></i>
        
        }
        tdTipo.classList.add("text-center")
        tdTipo.appendChild(icono);

        let tdTotal = document.createElement("td");
        tdTotal.innerText = p.total;
        
        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTotal);
        tr.appendChild(tdTipo);
        tbody.appendChild(tr);
    }
}
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let Nombre = document.querySelector("#nombre-txt").value;
    let Tipo = document.querySelector("#tipo-select").value;
    let Total = document.querySelector("#total-txt").value;
    let Pago = document.querySelector("#pago-select").value;

    let cliente = {};
    cliente.nombre = Nombre;
    cliente.tipo = Tipo;
    cliente.total = Total;
    cliente.pago = Pago;

    pedidos.push(cliente); // append
    cargarTabla();
    //Titulo, mensaje interno, (succes,info,danger)
    Swal.fire("Exito!","El pedido fue recibido!","success");
});