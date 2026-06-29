        const forms = document.querySelectorAll('.needs-validation');
        forms.forEach(form => {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
        const checkboxToggle = document.getElementById('tipToggle');
        const containerAmount = document.getElementById('otherAmount');
        const inputAmount = document.getElementById('tipAmount');
        const fixedButton = document.querySelectorAll('.donation .d-flex .btn-danger');
        checkboxToggle.addEventListener('change', function() {
            if (this.checked) {
                containerAmount.classList.remove('hide');
                inputAmount.focus();
            } else {
                containerAmount.classList.add('hide');
                inputAmount.value = '';
            }
        });
        fixedButton.forEach(button =>{
            button.addEventListener('click', function() {
                const amountValue = parseInt(this.textContent);
                inputAmount.value = amountValue;
                checkboxToggle.checked = true;
                containerAmount.classList.remove('hide')
            });
        });
        const scrollBtn = document.getElementById('scrollTopBtn');
        function toggleScrollButton() {
            if (!scrollBtn) return;
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        };
        window.addEventListener('scroll', toggleScrollButton);
        window.addEventListener('load', toggleScrollButton);
        if (scrollBtn) {
            scrollBtn.addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        };
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const collapse = document.querySelector('.navbar-collapse');
                if (collapse?.classList.contains('show')) document.querySelector('.navbar-toggler')?.click(); 
            });
        });

        const detalles = {
            detalle1: {
                titulo: "🎋 Proyecto 1: Reforestación de Bambú",
                imagen: "https://images.unsplash.com/photo-1745768575729-e27bc76b4aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI1fHxyZWQlMjBwYW5kYXxlbnwwfHwwfHx8MA%3D%3D",
                texto: "Objetivo: Restaurar 50 hectareas de bosque de Bambú en el Himalaya Oriental.",
                subtexto: " · Acciones: Plantación de 10.000 brotes de Bambú nativo. · Beneficio: Asegura la fuente de alimentación del Panda Rojo. · Impacto: Beneficia a mas de 30 especies de fauna local", 
                meta: "Meta 2026: 30% de la superficie reforestada."
            },
            detalle2: {
                titulo: "📡​ Proyecto 2: Monitoreo con GPS",
                imagen: "https://images.unsplash.com/photo-1681026786920-5da838e4d675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHxyZWQlMjBwYW5kYXxlbnwwfHwwfHx8MA%3D%3D",
                texto: "Objetivo: Implementar collares de seguimiento satelital en ejemplares salvajes de la región.",
                subtexto: "· Acciones: Despliegue de patrullas contra la caza furtiva y colocación de tecnología GPS. · Beneficio: Permite mapear corredores migratorios biológicos en tiempo real. · Impacto: Reduce en un 40% las muertes accidentales por trampas.",
                meta: "Meta 2026: Monitorear 100 ejemplares activamente 100 ejemplares en estado salvaje."
            },
            detalle3: {
                titulo: "🍀Proyecto 3: Educación Ambiental",
                imagen: "https://images.unsplash.com/photo-1708530882737-a112fabb8718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxyZWQlMjBwYW5kYXxlbnwwfHwwfHx8MA%3D%3D",
                texto: "Objetivo: Concienciar e involucrar a las comunidades rurales que colindan con los hábitats protegidos.",
                subtexto:"· Acciones: Realización de talleres interactivos y programas de formación en escuelas locales. · Beneficio: Reduce la tala ilegal y fomenta prácticas de agricultura sostenible. · Impacto: Empodera a más de 5.000 familias como guardianes forestales",
                meta: "Meta 2026: Crear 10 tallers interactivos estables en Nepal y China con capacidad para 25 personas o mas."
            },
        };
      
        document.addEventListener("DOMContentLoaded", function () {
            const botones = document.querySelectorAll('.view-details');
            const modalElement = document.getElementById('descriptionModal');
            
            if (!modalElement) return; 

            const modal = new bootstrap.Modal(modalElement);
            const modalTitle = document.getElementById('modalProductLabel');
            const descriptionContainer = document.getElementById('descriptionProduct');
            const modalImage = document.getElementById('modalImage');

            function mostrarDescripcion(productId) {
                const producto = detalles[productId] || detalles["detalle" + productId];
                
                if (producto) {
                    modalTitle.textContent = producto.titulo;
                    if (modalImage) {
                        modalImage.src = producto.imagen;
                        modalImage.alt = producto.titulo;
                    }
                    
                    if (descriptionContainer) {
                        const textoFormateado = producto.texto.replace("Objetivo:", "<strong>Objetivo:</strong>");

                        const listaHtml = producto.subtexto.split('·')
                            .map(item => item.trim())
                            .filter(item => item.length > 0)
                            .map(item => {
                                let formateado = item
                                    .replace("Acciones:", "<strong>Acciones:</strong>")
                                    .replace("Beneficio:", "<strong>Beneficio:</strong>")
                                    .replace("Impacto:", "<strong>Impacto:</strong>");
                                return `<li class="text-start mb-2">${formateado}</li>`;
                            }).join('');

                        descriptionContainer.innerHTML = `
                            <div class="mb-3"> 
                                <p class="mt-2 text-start">${textoFormateado}</p>
                                <ul class="text-muted small ps-3 my-3">
                                    ${listaHtml}
                                </ul>
                                <hr>
                                <div class="mb-2">
                                    <h5 class="badge bg-success-subtle text-success fw-bold p-2 m-0 text-wrap">
                                        ${producto.meta}
                                    </h5>
                                </div>
                                
                                <div class="d-flex justify-content-end gap-2 mt-4">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <a href="#sectionDonation" class="btn btn-danger" data-bs-dismiss="modal">Apoyar este proyecto</a>
                                </div>
                            </div>
                        `;
                    }
                    modal.show();
                } else {
                    if (descriptionContainer) {
                        descriptionContainer.innerHTML = '<p class="text-danger">Detalle no disponible temporalmente.</p>';
                    }
                    modal.show();
                }
            }

            botones.forEach(boton => {
                boton.addEventListener('click', function (e) {
                    e.preventDefault();
                    const productId = this.getAttribute('data-product');
                    mostrarDescripcion(productId);
                });
            });
        });