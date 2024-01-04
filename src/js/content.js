function mostrarResultados(data) {
    const contenedor = document.querySelector('.grid-cols-1'); // Selecciona el contenedor donde se mostrarán las tarjetas

    if (data.resultados && data.resultados.length > 0) {
        data.resultados.forEach(medicamento => {
            // Crear el contenedor de la tarjeta
            const divTarjeta = document.createElement('div');
            divTarjeta.className = 'p-6 border border-gray-200 rounded-lg';

            // Crear y añadir la imagen
            if (medicamento.fotos && medicamento.fotos.length > 0) {
                const img = document.createElement('img');
                img.src = medicamento.fotos[0].url;
                img.className = 'object-cover object-center w-full mb-4 lg:h-48 md:h-36 rounded-xl';
                divTarjeta.appendChild(img);
            }

            // Crear el contenedor para título y precio
            const divInfo = document.createElement('div');
            divInfo.className = 'flex justify-between items-center';

 
            // Crear y añadir el título (nombre del medicamento)
            const titulo = document.createElement('h1');
            titulo.className = 'text-xl font-semibold leading-none tracking-tighter text-neutral-600 flex-grow pr-2';
            titulo.textContent = medicamento.nombre;
            divInfo.appendChild(titulo);

            // Crear y añadir el precio (modificar según sea necesario)
            const precio = document.createElement('span');
            precio.className = 'text-lg font-semibold text-green-500';
            precio.textContent = '$10.00'; // Reemplazar con el precio real si está disponible
            divInfo.appendChild(precio);

            divTarjeta.appendChild(divInfo);

            // Añadir la descripción (si está disponible)
            if (medicamento.descripcion) {
                const descripcion = document.createElement('p');
                descripcion.className = 'text-base font-medium leading-relaxed text-gray-500 mt-2';
                descripcion.textContent = medicamento.descripcion; // O cualquier otra propiedad relevante
                divTarjeta.appendChild(descripcion);
            }

            // Añadir la tarjeta al contenedor
            contenedor.appendChild(divTarjeta);
        });
    }
}

// Llamada a la API
fetch('https://cima.aemps.es/cima/rest/medicamentos?nombre')
    .then(response => response.json())
    .then(data => mostrarResultados(data))
    .catch(error => console.error('Error al obtener datos de la API:', error));


    