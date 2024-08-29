

document.addEventListener('DOMContentLoaded', () => {
    const jokeButton = document.getElementById('joke-button');
    const jokeContainer = document.getElementById('joke-container');
    
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
          navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
        })
      }

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

