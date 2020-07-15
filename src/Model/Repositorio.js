class Repositorio {
    constructor(name, url){
        this._name = name;
        this._url = url;
    }

    getRepositorio() {
        return {
            name: this._name,
            url: this._url
        };
    }
}