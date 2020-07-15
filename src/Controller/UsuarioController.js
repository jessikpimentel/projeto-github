class UsuarioController {
    constructor() {}

    static getUsuario(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", url);
            request.addEventListener("load", () => {
                if (request.status !== 200) {
                    reject('Error ao buscar usuário!');
                }
                let usuarioObj = JSON.parse(request.responseText);
                let usuario = new Usuario(
                    usuarioObj.avatar_url,
                    usuarioObj.login,
                    usuarioObj.name,
                    usuarioObj.location,
                    usuarioObj.followers,
                    usuarioObj.following,
                    usuarioObj.html_url
                );
                resolve(UsuarioView.template(usuario.getUsuario()));
            });
            request.onerror = () => reject(request.statusText);
            return request.send();
        });
    }
}