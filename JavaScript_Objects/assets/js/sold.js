const sold_properties = [
{
    name:  'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    location: '123 Luxury Lane, Prestige Suburb, CA 45678',
    rooms: 4,
    bathrooms: 4,
    cost: 5000,
    smoke: false,
    pets: false
},
{
    name:  'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    location: '789 Mountain Road, Summit Peaks, CA 23456',
    rooms: 2,
    bathrooms: 1,
    cost: 1200,
    smoke: true,
    pets: true
},
{
    name:  'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    location: '567 Skyline Avenue, Skyview City, CA 56789',
    rooms: 3,
    bathrooms: 3,
    cost: 4500,
    smoke: false,
    pets: true
},
{   name: 'Apartamento espacioso con sauna',
    src: './assets/img/img1.png',
    description: 'Este apartamento te ofrece un espacio amplio y luminoso con una sauna de vapor para relajarte',
    location: '456 Spa Street, Wellness City, MI 78901',
    rooms: 3,
    bathrooms: 2,
    cost: 3000,
    smoke: false,
    pets: false
},

{   name: 'Apartamento artístico con galería',
    src: './assets/img/img2.png',
    description: 'Este apartamento te ofrece un ambiente creativo y colorido con una galería de arte donde puedes admirar y comprar obras de artistas locales',
    location: '123 Art Avenue, Culture Town, IL 23456',
    rooms: 2,
    bathrooms: 1,
    cost: 2000,
    smoke: true,
    pets: true
},

{   name: 'Apartamento ecológico con huerto',
    src: './assets/img/img3.png',
    description: 'Este apartamento te ofrece un estilo de vida sostenible y saludable con un huerto donde puedes cultivar y cosechar tus propias verduras y frutas',
    location: '789 Green Lane, Eco Village, WA 34567',
    rooms: 3,
    bathrooms: 2,
    cost: 2500,
    smoke: false,
    pets: true
},
{   name: 'Apartamento lujoso con jacuzzi',
    src: './assets/img/img1.png',
    description: 'Este apartamento te ofrece un nivel de confort y glamour incomparable con un jacuzzi de hidromasaje donde puedes disfrutar de una copa de champagne',
    location: '456 Luxury Boulevard, Glamour City, NV 56789',
    rooms: 4,
    bathrooms: 3,
    cost: 4000,
    smoke: true,
    pets: false
}
]

/*const soldApartment = document.getElementsByClassName("row")[0];


let Apartment = "";

for(let i = 0; i < 3; i++) {

    let SmokePolicy = sold_properties[i].smoke ? `
        <p class="text-success">
            <i class="fas fa-smoking"></i> Se permite fumar
        </p>
        `: `
        <p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>`;

    let petsPolicy = sold_properties[i].pets ? `
        <p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>`: `
        <p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten Mascotas
        </p>`;

    Apartment += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src= ${sold_properties[i].src}
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${sold_properties[i].name}
                </h5>
                <p class="card-text">
                    ${sold_properties[i].description}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${sold_properties[i].location}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${sold_properties[i].rooms} Habitaciones
                    <i class="fas fa-bath"></i> ${sold_properties[i].bathrooms} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${sold_properties[i].cost}</p>

                ${SmokePolicy}
                ${petsPolicy}

            </div>
        </div>
    </div>
    `;
}

soldApartment.innerHTML = Apartment;
*/
