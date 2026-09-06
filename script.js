const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const filter = button.getAttribute('data-filter');

        filterButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        products.forEach(function(product) {
            const category = product.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});