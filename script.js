document.addEventListener('DOMContentLoaded', () => {
    const jokeButton = document.getElementById('joke-button');
    const jokeContainer = document.getElementById('joke-container');

    jokeButton.addEventListener('click', () => {
        fetch('https://v2.jokeapi.dev/joke/Any?type=single')
            .then(response => response.json())
            .then(data => {
                if (data.joke) {
                    jokeContainer.textContent = data.joke;
                } else {
                    jokeContainer.textContent = 'Desculpe, não consegui encontrar uma piada!';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar a piada:', error);
                jokeContainer.textContent = 'Erro ao buscar a piada.';
            });
    });
});
