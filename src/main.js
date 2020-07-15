const buscar = async () => {
    let inputSearch = document.querySelector(".textoBusca");
    let urlUsuario = "https://api.github.com/users/" + inputSearch.value;
    let urlRepositorio = urlUsuario + "/repos";
    let usuarioHtml = document.getElementById("userInfo");
    let repositorioHtml = document.getElementById("userRepositorio");

    usuarioHtml.innerHTML =  await UsuarioController.getUsuario(urlUsuario);
    repositorioHtml.innerHTML = await RepositorioController.getRepositorio(urlRepositorio);
    inputSearch.value = "";
    inputSearch.focus();
};