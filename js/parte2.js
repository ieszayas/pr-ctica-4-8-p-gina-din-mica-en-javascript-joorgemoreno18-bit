// Array de objetos con datos de videojuegos del ranking
const games = [
    { rank: 1, name: 'Grand Theft Auto VI', score: 98, trend: '🔥' },
    { rank: 2, name: 'Metroid Prime 4', score: 96, trend: '🔼' },
    { rank: 3, name: 'Monster Hunter Wilds', score: 94, trend: '🔼' },
    { rank: 4, name: 'Ghost of Yotei', score: 93, trend: '🆕' },
    { rank: 5, name: 'Doom: The Dark Ages', score: 92, trend: '➖' },
    { rank: 6, name: 'Borderlands 4', score: 90, trend: '🔽' },
    { rank: 7, name: 'Mafia: Old Country', score: 89, trend: '➖' },
    { rank: 8, name: 'Death Stranding 2', score: 88, trend: '🌊' },
    { rank: 9, name: 'Fable', score: 87, trend: '✨' },
    { rank: 10, name: 'Civilization VII', score: 86, trend: '🏛️' }
];

// Función para generar la tabla dinámicamente
function generateTable(filteredGames = games) {
    const container = document.getElementById('table-container');
    container.innerHTML = ''; // Limpiar previo

    const table = document.createElement('table');
    table.className = 'table table-hover align-middle table-sm';
    table.id = 'ranking-table';

    // Cabecera
    const thead = document.createElement('thead');
    thead.className = 'table-dark';
    thead.innerHTML = `
        <tr>
            <th>#</th>
            <th>Juego</th>
            <th>Score</th>
            <th>Tendencia</th>
        </tr>
    `;
    table.appendChild(thead);

    // Cuerpo
    const tbody = document.createElement('tbody');
    filteredGames.forEach(game => {
        const row = document.createElement('tr');
        row.dataset.name = game.name;
        row.id = `row-${game.rank}`;
        row.innerHTML = `
            <td>${game.rank}</td>
            <td class="game-name-cell">${game.name}</td>
            <td><span class="badge bg-success">${game.score}</span></td>
            <td>${game.trend}</td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);
}

// Función para generar opciones de resaltado en el formulario
function generateHighlightOptions() {
    const select = document.getElementById('highlight-game');
    if (!select) return;

    games.forEach(game => {
        const option = document.createElement('option');
        option.value = game.name;
        option.textContent = game.name;
        select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
        const selectedGame = e.target.value;
        // Quitar resaltado anterior
        document.querySelectorAll('#ranking-table tbody tr').forEach(row => {
            row.classList.remove('table-warning');
        });

        // Resaltar el nuevo
        if (selectedGame) {
            const rowToHighlight = document.querySelector(`#ranking-table tbody tr[data-name="${selectedGame}"]`);
            if (rowToHighlight) {
                rowToHighlight.classList.add('table-warning');
                rowToHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    generateTable();
    generateHighlightOptions();
});
