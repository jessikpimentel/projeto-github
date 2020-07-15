class UsuarioView {

    static template(usuario) {
        return `<div class="perfil">
                    <a href="${usuario.url}" target="_blank">
                        <img src="${usuario.avatar}">
                    </a>
                    <ul>
                        <li><b>Login:</b> ${usuario.login}</li>
                        <li><b>Name:</b> ${usuario.name}</li>
                        <li><b>Local:</b> ${usuario.local}</li>
                        <li><b>Followers:</b> ${usuario.followers}</li>
                        <li><b>Following:</b> ${usuario.following}</li>
                    </ul>
                </div>`;
    }
}
