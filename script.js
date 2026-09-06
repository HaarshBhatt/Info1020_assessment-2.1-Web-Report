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

const orderForm = document.querySelector('#order-form');

if (orderForm) {
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let valid = true;

        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const item = document.querySelector('#item');
        const message = document.querySelector('#message');
        const success = document.querySelector('.form-success');

        clearError(name, '#name-error');
        clearError(email, '#email-error');
        clearError(item, '#item-error');
        clearError(message, '#message-error');
        success.classList.remove('show');

        if (name.value.trim() === '') {
            showError(name, '#name-error', 'Please enter your name.');
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, '#email-error', 'Please enter your email address.');
            valid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, '#email-error', 'Please enter a valid email address.');
            valid = false;
        }

        if (item.value.trim() === '') {
            showError(item, '#item-error', 'Please choose an item.');
            valid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, '#message-error', 'Please enter a more detailed message (at least 10 characters).');
            valid = false;
        }

        if (valid) {
            success.textContent = 'Thank you! Your enquiry has been received and I will reply within two business days.';
            success.classList.add('show');
            orderForm.reset();
        }
    });
}

function showError(field, errorId, text) {
    field.classList.add('invalid');
    document.querySelector(errorId).textContent = text;
}

function clearError(field, errorId) {
    field.classList.remove('invalid');
    document.querySelector(errorId).textContent = '';
}
