  // Intersection Observer for scroll animations
  document.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = 1;
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      }, {
          threshold: 0.1
      });
  
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
          // Initialize CSS states for animation
          el.style.opacity = 0;
          el.style.transform = 'translateY(20px)';
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          
        observer.observe(el);
    });

    // Theme Toggling Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(themeIcon) themeIcon.textContent = '☀';
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeIcon.textContent = '☾';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.textContent = '☀';
            }
        });
    }
});
