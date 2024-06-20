const produto = {
    name: "exemplo",
    desc: "exemplo desc",
    price: 12
};

function salvarProduto() {
    let produtos = JSON.parse(localStorage.getItem("produtos"));

    const produto = {
        name: document.getElementById('name').value,
        desc: document.getElementById('description').value,
        price: document.getElementById('price').value
    };

    if(produtos) {
        produtos.push(produto);
    } else {
        produtos = [produto];
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));
    alert("Produto adicionado!");

}

function mostrarProdutos(){
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    let catalogo = document.getElementById('catalogo');

    if(produtos.length === 0) {
        catalogo.innerHTML = '<h1>Não há produtos cadastrados</h1>';
    } else {

        produtos.forEach((produto, index) => {
            let cadaproduto = document.createElement('div');

            cadaproduto.innerHTML = `
            <h1>${produto.name}</h1>
            <p>Descrição: ${produto.desc}</p>
            <p>Preço: ${produto.price}</p>
            <button onclick="removerProduto(${index})">Remover</button>
            <button onclick="editarProduto(${index})">Editar</button>
            `;

            catalogo.appendChild(cadaproduto);

        });
    }
}

function editarProduto(index){
    let produtos = JSON.parse(localStorage.getItem("produtos")); 
    let produto = produtos[index];

    const name = prompt("Editar nome:", produto.name);
    const desc = prompt("Editar descrição:", produto.desc);
    const price = prompt("Editar preço:", produto.price);

    if(name !== null && desc !== null && price !== null){
        produtos[index] = { name, desc, price };
        localStorage.setItem("produtos", JSON.stringify(produtos));
    }
    location.reload();
}

function removerProduto(index) {
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    location.reload();
}

window.onload(mostrarProdutos());