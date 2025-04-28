document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert header
    fetch('/header.html') // Use absolute path from the root
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for header.html');
            }
            return response.text();
        })
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
            } else {
                console.error('Header placeholder not found');
            }
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });

    // Fetch and insert footer
    fetch('/footer.html') // Use absolute path from the root
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for footer.html');
            }
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            } else {
                console.error('Footer placeholder not found');
            }
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
        });
}); 