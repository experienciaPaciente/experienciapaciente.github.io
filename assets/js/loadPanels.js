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
    },
    {
        id: 2,
        type: 'rounded',
        title: 'Cómo funciona',
        subtitle: `Con experienciaPaciente, el acceso a tus datos de salud es tan simple como necesario. Aquí te explicamos cómo funciona:`,
        img: '',
        btnLink: 'Playground',
        btnLink2: '',
        btnUrl: '',
        btnUrl2: '',
        itemsType: 'list',
        items: [
            {
                id: 1,
                title: 'Registra y Guarda',
                subtitle: 'Escanea, valida y guarda todos tus datos de salud en un solo lugar.',
                icon: 'desktop',
                imgUrl: '',
                direction: 'row',
            },
            {
                id: 2,
                title: 'Accede en Cualquier Momento',
                subtitle: 'Consulta tu historial médico desde cualquier dispositivo, cuando lo necesites.',
                icon: 'code',
                imgUrl: '',
                direction: 'row',
            },
            {
                id: 3,
                title: 'Comparte con Seguridad',
                subtitle: 'Comparte datos con profesionales de salud y familiares cuando lo necesites.',
                icon: 'save',
                imgUrl: '',
                direction: 'row',
            },      
        ]
    },
    {
        id: 3,
        type: 'transparent',
        title: 'Fuera del Círculo: Empoderando al Paciente',
        subtitle: `experienciaPaciente rompe con el sistema cerrado de salud, ofreciéndote control total sobre tus datos, privacidad, y autonomía en el manejo de tu salud.`,
        img: './assets/img/ep__img--01.png',
        btnLink: 'Quiero saber mas',
        btnLink2: '',
        btnUrl: '',
        btnUrl2: '',
        itemsType: 'list',
        items: [
            // {
            //     id: 1,
            //     title: 'Descentralización',
            //     subtitle: 'Accede a tus datos en un solo lugar sin depender de otras instituciones.',
            //     icon: '',
            //     imgUrl: './assets/img/ep__video--qr.png',
            //     direction: 'column',
            // },
            // {
            //     id: 2,
            //     title: 'Integración Simple',
            //     subtitle: 'Conecta y organiza toda tu información de salud a través de un código QR.',
            //     icon: '',
            //     imgUrl: './assets/img/ep__video--qr.png',
            //     direction: 'column',
            // },
            // {
            //     id: 3,
            //     title: 'Autonomía y Privacidad',
            //     subtitle: 'Protege tu información decidiendo quienes y cuándo acceden a tus datos de salud.',
            //     icon: '',
            //     imgUrl: './assets/img/ep__video--qr.png',
            //     direction: 'column',
            // },
        ]
    },
    {
        id: 5,
        type: 'transparent',
        title: 'Facilita Tu Trabajo, Mejora la Atención',
        subtitle: `experienciaPaciente optimiza el intercambio de información entre profesionales de salud, promoviendo una atención más fluida y coordinada.`,
        img: '',
        btnLink: '',
        btnLink2: '',
        btnUrl: '',
        btnUrl2: '',
        itemsType: 'carousel',
        items: [
            {
                id: 1,
                title: 'Interoperabilidad con QR',
                subtitle: 'Utiliza códigos QR para acceder de manera rápida a los datos de salud del paciente.',
                icon: '',
                imgUrl: './assets/img/ep__video--qr.png',
                direction: 'column',
            },
            {
                id: 2,
                title: 'Coordinación Efectiva',
                subtitle: 'Mejora la comunicación entre diferentes profesionales de la salud con acceso a información consolidada.',
                icon: '',
                imgUrl: './assets/img/ep__video--qr.png',
                direction: 'column',
            },
            {
                id: 3,
                title: 'Optimización del Tiempo',
                subtitle: 'Reduce la carga administrativa con procesos simplificados y una gestión más eficiente.',
                icon: '',
                imgUrl: './assets/img/ep__video--qr.png',
                direction: 'column',
            },
        ]
    },
    {
        id: 4,
        type: 'dark',
        title: 'Sé Parte del Cambio en la Salud',
        subtitle: `experienciaPaciente es un proyecto colaborativo y open-source que reúne a pacientes, profesionales de la salud y desarrolladores para crear un sistema de salud más justo, accesible e innovador. Tu participación es clave para esta (r)evolución!`,
        img: '',
        btnLink: '',
        btnLink2: '',
        btnUrl: '',
        btnUrl2: '',
        itemsType: 'list',
        items: [
            {
                id: 1,
                title: 'Item 1',
                subtitle: 'Lorem ipsum...',
                icon: 'user',
                imgUrl: '',
                direction: 'row',
            },
            {
                id: 2,
                title: 'Item 1',
                subtitle: 'Lorem ipsum...',
                icon: 'phone',
                imgUrl: '',
                direction: 'row',
            },
            {
                id: 3,
                title: 'Item 1',
                subtitle: 'Lorem ipsum...',
                icon: 'video',
                imgUrl: '',
                direction: 'row',
            },
        ]
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
                    <h3 class="panel__title">${panel.title}</h3>
                    <p class="panel__subtitle">${panel.subtitle}</p>
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
