const panels = [
    {
        id: 1,
        type: 'transparent',
        title: 'Aquí comienza tu historia de salud',
        subtitle: `Iniciativa no gubernamental y sin fines de lucro que promueve la accesibilidad y descentralización de los datos de salud a través de herramientas digitales.`,
        img: './assets/img/ep__img--01.png',
        btnLink: 'Quiero mis datos de salud!',
        btnLink2: 'Trabajo en un equipo de salud',
        btnUrl: '',
        btnUrl2: '',
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
                        ${panel.btnLink ? `<button class="btn__filled--primary">${panel.btnLink}</button>`: ''}
                        ${panel.btnLink2 ? `<button class="btn__outline--secondary">${panel.btnLink2}</button>`: ''}   
                    </span>
                </span>
                ${panel.items.length != 0 ? `<ul ${panel.itemsType}>
                    ${panel.items.map(item => `
                    <li card type="default" size="sm" direction="${item.direction}">
                        ${item.icon ? `<i class="fa-solid fa-${item.icon}"></i>` : ''}
                        ${item.imgUrl ? `<img src="${item.imgUrl}">` : ''}
                        <span class="title__wrapper--row">
                            ${item.title ? `<h4 class="card__title">${item.title}</h4>` : ''}
                            ${item.subtitle ? `<p class="card__subtitle">${item.subtitle}</p>` : ''}
                        </span>
                    </li>
                    `).join('')}
                </ul>`: ''}
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
