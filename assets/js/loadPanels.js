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
        subtitle: `Un flujo colaborativo entre todos los participantes en el proceso de cuidado y atención del paciente, sea médico, administrativo, familiar o el propio paciente.`,
        img: '',
        btnLink: 'Playground',
        btnLink2: '',
        btnUrl: '',
        btnUrl2: '',
        itemsType: 'list',
        items: [
            {
                id: 1,
                title: 'Abrí la app de experienciaPaciente',
                subtitle: 'Puede ser en desktop o tu celular. Si aún no tenés usuario, podés registrarte aquí.',
                icon: 'desktop',
                imgUrl: '',
                direction: 'row',
            },
            {
                id: 2,
                title: 'Escaneá el código de tu consulta',
                subtitle: 'Ingresá a tu cuenta, presiona scanear y enfoca al QR que el equipo d salud te proveerá.',
                icon: 'code',
                imgUrl: '',
                direction: 'row',
            },
            {
                id: 3,
                title: 'Guardá tus datos de salud',
                subtitle: 'Una vez escaneado, la información se completará en tu historial. Checkeá que esté todo bien, guardá y listo!',
                icon: 'save',
                imgUrl: '',
                direction: 'row',
            },      
        ]
    },
    {
        id: 3,
        type: 'transparent',
        title: 'Qué significa fuera del círculo',
        subtitle: `Iniciativa no gubernamental y sin fines de lucro aue promueve la accesibilidad v descentralización de los datos de salud a
Traves de nertomientos diditoles.`,
        img: './assets/img/ep__img--01.png',
        btnLink: 'Quiero saber mas',
        btnLink2: '',
        btnUrl: '',
        btnUrl2: '',
        itemsType: 'list',
        items: []
    },
    {
        id: 5,
        type: 'transparent',
        title: 'Iniciativas',
        subtitle: `experienciaPaciente se desarrolla en diversas áreas que mejoran la experiencia de los paciente y sus familiares`,
        img: '',
        btnLink: '',
        btnLink2: '',
        btnUrl: '',
        btnUrl2: '',
        itemsType: 'carousel',
        items: [
            {
                id: 1,
                title: 'Item 1',
                subtitle: 'Lorem ipsum...',
                icon: '',
                imgUrl: './assets/img/ep__video--qr.png',
                direction: 'column',
            },
            {
                id: 2,
                title: 'Item 1',
                subtitle: 'Lorem ipsum...',
                icon: '',
                imgUrl: './assets/img/ep__video--qr.png',
                direction: 'column',
            },
            {
                id: 3,
                title: 'Item 1',
                subtitle: 'Lorem ipsum...',
                icon: '',
                imgUrl: './assets/img/ep__video--qr.png',
                direction: 'column',
            },
        ]
    },
    {
        id: 4,
        type: 'dark',
        title: 'Quiero participar',
        subtitle: `Iniciativa no gubernamental y sin fines de lucro aue promueve la accesibilidad v descentralización de los datos de salud a
Traves de nertomientos diditoles.`,
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
    ${panel.type != 'transparent' ? `<span class="circle__half--top"></span>` : ''}
        <section panel type="${panel.type}" class="fade-in delay">
            ${panel.img ? `<img src="${panel.img}" alt="${panel.img}">` : ''}
            <div class="card__wrapper--inner">
                <span class="card__wrapper--inner">
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
    ${panel.type === 'rounded' ? `<span class="circle__half--bottom"></span>` : ''}
    `
}

let container = document.getElementById('container')

function loadPanels() {
    container.innerHTML = ''
    panels.forEach((panel) => {
         container.innerHTML += getPanels(panel)
    })
}
