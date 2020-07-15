class RepositorioView {

    static template(repositorio) {
        return `<div class="repositorios">
                    <a href="${repositorio.url}" target="_blank">
                        <span> ${repositorio.name}</span>
                    </a>
                </div>`;
    }

}