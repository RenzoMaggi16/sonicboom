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

  // Funcionalidad para el menú hamburguesa en móviles
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
    
    // Agregar menú hamburguesa para móviles
    const header = document.querySelector('header');
    const navClass = document.querySelector('.nav-class');
    
    // Crear el botón de hamburguesa
    const hamburgerBtn = document.createElement('div');
    hamburgerBtn.className = 'hamburger-menu';
    hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
    header.appendChild(hamburgerBtn);
    
    // Agregar evento al botón de hamburguesa
    hamburgerBtn.addEventListener('click', () => {
      navClass.classList.toggle('active');
      
      // Cambiar el ícono según el estado del menú
      if (navClass.classList.contains('active')) {
        hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-class a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navClass.classList.remove('active');
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Agregar funcionalidad para submenús en móviles
    const dropdowns = document.querySelectorAll('.dropdown');
    if (window.innerWidth <= 768) {
      dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const submenu = dropdown.querySelector('.submenu');
        
        link.addEventListener('click', (e) => {
          e.preventDefault();
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
      });
    }
  });
});
