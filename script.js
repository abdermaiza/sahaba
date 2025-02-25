const sahabas = [
    {
        name:'abou bakr',
        date:'739',
        number:'123',
    },
    {
        name:'bilal',
        date:'744',
        number:'234',
    }
]

// Select DOM Elements
const listWrapper = document.getElementById('list');




  // Filters scroll animation
  const filters = document.getElementById('filters');
  window.addEventListener('scroll', () => {
      if(window.scrollY > 200) {
        filters.classList.add('active');
      }
      if(window.scrollY < 100) {
        filters.classList.remove('active');
      }
  });