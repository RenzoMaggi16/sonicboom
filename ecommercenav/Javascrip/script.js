document.addEventListener("DOMContentLoaded", () => {
  const seccionesAnimadas = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
      }
    });
  }, {
    threshold: 0.2
  });

  seccionesAnimadas.forEach(seccion => observer.observe(seccion));
  
  // Función para ajustar la velocidad del carrusel según el ancho de la pantalla
  function adjustCarouselSpeed() {
    const brandLogos = document.querySelector('.brand-logos');
    if (brandLogos) {
      // Más lento en pantallas grandes, más rápido en móviles
      const speed = window.innerWidth < 768 ? '15s' : '20s';
      brandLogos.style.animationDuration = speed;
    }
  }
  
  // Ajustar la velocidad al cargar y al cambiar el tamaño de la ventana
  adjustCarouselSpeed();
  window.addEventListener('resize', adjustCarouselSpeed);
  
  // Funcionalidad para el buscador desplegable
  const searchIcon = document.getElementById('search-icon');
  const searchDropdown = document.getElementById('search-dropdown');
  
  if (searchIcon && searchDropdown) {
    searchIcon.addEventListener('click', () => {
      searchDropdown.classList.toggle('active');
    });
    
    // Cerrar el buscador al hacer clic fuera de él
    document.addEventListener('click', (event) => {
      if (!searchDropdown.contains(event.target) && event.target !== searchIcon) {
        searchDropdown.classList.remove('active');
      }
    });
  }
});
