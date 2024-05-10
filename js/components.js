document.addEventListener('DOMContentLoaded', function () {
    function loadComponent(componentId, url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(componentId).innerHTML = html;
            })
            .catch(error => console.error('Error loading the component:', error));
    }

    // Load components
    loadComponent('navbar', '/components/navbar.html');
    loadComponent('footer', '/components/footer.html');
});