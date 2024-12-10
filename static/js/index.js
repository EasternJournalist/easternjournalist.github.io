document.addEventListener('DOMContentLoaded', function () {
    const starCountElements = document.querySelectorAll('span.star-count');

    starCountElements.forEach(element => {
        const repo = element.getAttribute('repo');
        const repoUrl = `https://api.github.com/repos/${repo}`;

        fetch(repoUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const starCount = data.stargazers_count;
                if (starCount > 1000)
                    element.textContent = `${(starCount / 1000).toFixed(1)}k`;
                else
                    element.textContent = starCount;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                element.textContent = '-';
            });
    });
});