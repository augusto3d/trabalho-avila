// Variáveis globais
let totalPoints = 0;

// Selecionar todos os botões de tarefas
const taskButtons = document.querySelectorAll('.task-button');
const completedList = document.getElementById('completed-list');
const totalPointsElement = document.getElementById('total-points');

// Selecionar botões de recompensas
const rewardButtons = document.querySelectorAll('.reward-button');
const earnedRewardsList = document.getElementById('earned-rewards-list');

// Evento para marcar tarefa como concluída
taskButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = 'Tarefa Feita';
    button.disabled = true; // Desabilitar o botão

    // Obter dados da tarefa
    const taskName = button.getAttribute('data-task');
    const taskPoints = parseInt(button.getAttribute('data-points'));

    // Adicionar tarefa concluída
    const listItem = document.createElement('li');
    listItem.textContent = `${taskName} (+${taskPoints} pontos)`;
    completedList.appendChild(listItem);

    // Atualizar pontos totais
    totalPoints += taskPoints;
    totalPointsElement.textContent = totalPoints;
  });
});

// Evento para resgatar recompensas
rewardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rewardName = button.getAttribute('data-reward');
    const rewardPoints = parseInt(button.getAttribute('data-points'));

    // Adicionar recompensa
    const rewardItem = document.createElement('li');
    rewardItem.textContent = `${rewardName} (+${rewardPoints} pontos)`;
    earnedRewardsList.appendChild(rewardItem);

    // Atualizar pontos totais
    totalPoints += rewardPoints;
    totalPointsElement.textContent = totalPoints;

    alert(`Você adicionou "${rewardName}" e ganhou ${rewardPoints} pontos!`);
  });
});
