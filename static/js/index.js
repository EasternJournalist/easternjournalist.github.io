document.addEventListener('DOMContentLoaded', function () {

    const repoUrl = "https://api.github.com/repos/Microsoft/TRELLIS";
    const starCountElement = document.getElementById('star-count');

    fetch(repoUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const starCount = data.stargazers_count;
            starCountElement.textContent = `| ${starCount} Stars`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            starCountElement.textContent = '| Stars not available';
        });
});