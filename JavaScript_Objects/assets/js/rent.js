const rent_properties = [
{
    name:  'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    location: '123 Main Street, Anytown, CA 91234',
    rooms: 2,
    bathrooms: 2,
    cost: 2000,
    smoke: false,
    pets: true
},
{
    name:  'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    location: '456 Ocean Avenue,Seaside Town, CA 56789',
    rooms: 3,
    bathrooms: 3,
    cost: 2500,
    smoke: true,
    pets: true
},
{
    name:  'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    location: '123 Main Street, Anytown, CA 91234',
    rooms: 2,
    bathrooms: 2,
    cost: 2200,
    smoke: false,
    pets: false
},
{
    name:  '',
    src: '',
    description: '',
    location: '',
    rooms: 0,
    bathrooms: 0,
    cost: 0,
    smoke: true,
    pets: false
}
]

const rentApartment = document.getElementsByClassName("row")[1];

let rent = "";

for(let i = 0; i < 3; i++) {

    let SmokePolicy = rent_properties[i].smoke ? `
        <p class="text-success">
            <i class="fas fa-smoking"></i> Se permite fumar
        </p>
        `: `
        <p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>`;

    let petsPolicy = rent_properties[i].pets ? `
        <p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>`: `
        <p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten Mascotas
        </p>`;

    rent += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src= ${rent_properties[i].src}
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${rent_properties[i].name}
                </h5>
                <p class="card-text">
                    ${rent_properties[i].description}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${rent_properties[i].location}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${rent_properties[i].rooms} Habitaciones
                    <i class="fas fa-bath"></i> ${rent_properties[i].bathrooms} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${rent_properties[i].cost}</p>

                ${SmokePolicy}
                ${petsPolicy}

            </div>
        </div>
    </div>
    `;
}

rentApartment.innerHTML = rent;