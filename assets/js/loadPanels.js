const panels = [
    {
        id: 1,
        type: 'transparent',
        title: `Aquí comienza tu<br><b>Historia de Salud</b>`,
        subtitle: `Iniciativa no gubernamental y sin fines de lucro que promueve la democratización del acceso a los datos de salud a través de herramientas digitales.`,
        img: './assets/img/ep__img--01.png',
        btnLink: 'Quiero mis datos de salud!',
        btnLink2: 'Quiero colaborar!',
        btnUrl: 'https://experienciapaciente.org/portal/',
        btnUrl2: 'https://forms.gle/5BT2yBQnGfno978j9',
        itemsType: 'list',
        items: []
    }
] 

function getPanels(panel) {
    return `
        <section panel type="${panel.type}" class="fade-in delay">
            ${panel.img ? `<img src="${panel.img}" alt="${panel.img}">` : ''}
            <div class="card__wrapper--inner">
                <span class="card__wrapper--inner">
                    <div class="panel__prefix">
                        Fuera del<span class="prefix__circle">Circulo</span>
                    </div>
                    ${panel.title ? `<h3 class="panel__title">${panel.title}</h3>` : ''}
                    ${panel.subtitle ? `<p class="panel__subtitle">${panel.subtitle}</p>` : ''}
                    <span class="btn__wrapper">
                        ${panel.btnLink ? `
                             <a href="${panel.btnUrl}" target="_blank">
                                <button class="btn__filled--primary">
                           ${panel.btnLink}</button></a>`: ''}
                        ${panel.btnLink2 ? `<a href="${panel.btnUrl2}" target="_blank">
                                <button class="btn__outline--tertiary">
                            ${panel.btnLink2}</button></a>`: ''}    
                    </span>
                    <span class="wrapper--row">
                        <a class="link__logo" href="https://medium.com/@pacientexperiencia/manifiesto-f1b67e3291d6" target="_blank">
                            <img src="./assets/img/icon__medium.svg"width="30" height="30"/>
                            <p>Manifiesto</p>
                        </a>     
                        <a class="link__logo" href="https://chng.it/bSP9S2VLt5" target="_blank">
                            <img src="./assets/img/icon__change.svg" width="90" height="20"/>
                        </a>
                        <a class="link__logo" href="https://chromewebstore.google.com/category/extensions/productivity/tools?hl=es" target="_blank">
                            <img src="./assets/img/icon__store.svg"/ width="30" height="30">
                            <p>Chrome Store</p>
                        </a>
                        <a class="link__logo" href="https://github.com/experienciaPaciente/portal" target="_blank" >
                            <img src="./assets/img/icon__github.svg"width="30" height="30"/>
                            <p>GitHub</p>
                        </a>           
                        <a class="link__logo" href="https://open.spotify.com/show/6lyoyR2IBlEg72WU9Cdk7d" target="_blank" >
                            <img src="./assets/img/icon__spotify.svg"width="30" height="30"/>
                            <p>Spotify</p>
                        </a>           
                    </span>
                </span>
            </div>
        </section>
    `
}

let container = document.getElementById('container')

function loadPanels() {
    container.innerHTML = ''
    panels.forEach((panel) => {
         container.innerHTML += getPanels(panel)
    })
}
