class RepositorioController {
    constructor() {}

    static getRepositorio(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", url);
            request.addEventListener("load", () => {
                if (request.status !== 200) {
                    reject('Error ao buscar repositórios do usuário!');
                }
                let repositorioObj = JSON.parse(request.responseText);
                let result = '';
                for (let repos of repositorioObj) {
                    let repositorioApi = new Repositorio(repos.name, repos.html_url);
                    result += RepositorioView.template(repositorioApi.getRepositorio());
                }
                resolve(result);
            });
            request.onerror = () => reject(request.statusText);
            request.send();
        });
    }
}