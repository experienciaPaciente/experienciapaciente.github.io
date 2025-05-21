const panels = [
    {
        id: 1,
        type: 'transparent',
        prefix: true,
        title: `Aquí comienza tu<br><b>Historia de Salud</b>`,
        subtitle: `Iniciativa colaborativa, no gubernamental y sin fines de lucro que propone repensar y transformar la forma en la que interactuamos con el sistema de salud.`,
        img: './assets/img/ep__img--01.png',
        btnLink: 'Conocé los proyectos',
        btnLink2: 'Quiero colaborar!',
        btnUrl: '#iniciativas',
        btnUrl2: 'https://forms.gle/5BT2yBQnGfno978j9',
        itemsType: 'list',
        footer: true,
        items: []
    },
    {
        id: 2,
        type: 'dark',
        prefix: false,
        title: 'Proyectos activos de experiencia<b>Paciente</b>',
        subtitle: `Cada proyecto aborda una problemática del sistema de salud, combinando análisis, enfoque teórico y soluciones tecnológicas concretas con prototipos y documentación aplicable.`,
        img: '',
        itemsType: 'list',
        footer: false,
        items: [
            {
                id: 1,
                title: 'Democratizar el acceso a los datos de salud',
                subtitle: 'La experiencia del paciente incluye poder acceder, gestionar y disponer de sus propios datos de salud. <a href="https://experienciapaciente.org/portal/" target="_blank">Probar prototipo</a>.',
                icon: '',
                imgUrl: './../assets/img/ep__img--huds.png',
                direction: 'row',
                category: 'Comunicación',
                buttonLabel: 'Quiero saber más',
                buttonUrl: 'https://medium.com/@pacientexperiencia/fuera-del-c%C3%ADrculo-f1b67e3291d6'
            },
            {
                id: 2,
                title: 'Proveer lineamientos para entornos de salud',
                subtitle: 'El espacio es parte de la experiencia: la accesibilidad, higiene, señalización influyen directamente en la percepción del paciente.',
                icon: '',
                imgUrl: './../assets/img/ep__img--infra.png',
                direction: 'row',
                category: 'Entorno',
                buttonLabel: 'Quiero saber más',
                buttonUrl: 'https://medium.com/@pacientexperiencia/el-espacio-físico-también-es-parte-de-la-experiencia-del-paciente-a4ec0cb34707'
            }
        ]
    }
] 

function getPanels(panel) {
    return `
        <section panel ${panel.btnLink ? '' : 'id="iniciativas"'} type="${panel.type}" class="fade-in delay">
            ${panel.img ? `<img src="${panel.img}" alt="${panel.img}">` : ''}
            <div class="card__wrapper--inner">
                <span class="card__wrapper--inner">
                    ${panel.prefix === true ? `<div class="panel__prefix">
                        Fuera del<span class="prefix__circle">Circulo</span>
                    </div>`: ''}
                    ${panel.title ? `<h3 class="panel__title">${panel.title}</h3>` : ''}
                    ${panel.subtitle ? `<p class="panel__subtitle">${panel.subtitle}</p>` : ''}
                    ${panel.btnLink ? `<span class="btn__wrapper">
                             <a href="${panel.btnUrl}">
                                <button class="btn__filled--primary">
                           ${panel.btnLink}</button></a>`: ''}
                        ${panel.btnLink2 ? `<a href="${panel.btnUrl2}" target="_blank">
                                <button class="btn__outline--tertiary">
                            ${panel.btnLink2}</button></a>   
                    </span>` : ''}
                    ${panel.items.length != 0 ? 
                    `<ul ${panel.itemsType}>
                        ${panel.items.map(item => `
                        <li card type="default" direction="${item.direction}">
                            ${item.icon ? `<i class="fa-solid fa-${item.icon}"></i>` : ''}
                            ${item.imgUrl ? `<img class="card__img" src="${item.imgUrl}">` : ''}
                            <div class="title__wrapper--row">
                                <span class="badge__wrapper">
                                    <p>${item.category}</p>
                                </span>
                                ${item.title ? `<h4 class="card__title">${item.title}</h4>` : ''}
                                ${item.subtitle ? `<p class="card__subtitle">${item.subtitle}</p>` : ''}
                                ${item.buttonLabel ? `<a href="${item.buttonUrl}" target="_blank"><button class="btn__outline--tertiary">
                                ${item.buttonLabel}</button></a>` : ''}
                            </div>
                        </li>
                        `).join('')}
                    </ul>`: ''}
                    ${panel.footer === true ?
                   `<span class="wrapper--row">
                        <a class="link__logo" href="https://medium.com/@pacientexperiencia/los-pilares-de-experienciapaciente-22e5d57e21b6" target="_blank">
                            <img src="./assets/img/icon__medium.svg"width="30" height="30"/>
                            <p>Leer el manifiesto</p>
                        </a>     
                        <a class="link__logo" href="https://open.spotify.com/show/6lyoyR2IBlEg72WU9Cdk7d" target="_blank" >
                            <img src="./assets/img/icon__spotify.svg"width="30" height="30"/>
                            <p>Escuchar el podcast</p>
                        </a>           
                        <a class="link__logo" href="https://chng.it/bSP9S2VLt5" target="_blank">
                            <img src="./assets/img/icon__change.svg" width="90" height="20"/>
                        </a>
                        <a class="link__logo" href="https://github.com/experienciaPaciente" target="_blank" >
                            <img src="./assets/img/icon__github.svg"width="30" height="30"/>
                            <p>Conocer el código</p>
                        </a>           
                    </span>`
                    :''}
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
