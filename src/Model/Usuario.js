class Usuario {

    constructor(avatar, login, name, local, followers, following, url) {
        this._avatar = avatar;
        this._login = login;
        this._name = name;
        this._local = local;
        this._followers = followers;
        this._following = following;
        this._url = url;
    }

    getUsuario() {
        return {
            avatar: this._avatar,
            login: this._login,
            name: this._name,
            local: this._local,
            followers: this._followers,
            following: this._following,
            url: this._url
        };
    }
}