// Quando a página terminar de carregar, executa estas funções
document.addEventListener('DOMContentLoaded', function() {
  
  // JANELA POP-UP DE INFORMAÇÕES
  // Pega os elementos da página
  const modal = document.getElementById('modalInformacoes'); // A janela pop-up
  const btnInfo = document.querySelector('.botao-informacoes'); // Botão "Mais Informações"
  const spanFechar = document.querySelector('.fechar-modal'); // Botão X para fechar
  
  // Quando clicar no botão "Mais Informações"
  btnInfo.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    modal.style.display = 'block'; // Mostra a janela pop-up
  });
  
  // Quando clicar no X para fechar
  spanFechar.addEventListener('click', function() {
    modal.style.display = 'none'; // Esconde a janela pop-up
  });

  
  // DESTACAR O DIA ATUAL NA TABELA DE HORÁRIOS
  const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const hoje = new Date().getDay(); // Pega o número do dia atual (0=Domingo, 1=Segunda...)
  
  // Pega todas as células da tabela de horários
  const celulas = document.querySelectorAll('.horario-funcionamento td');
  
  // Para cada célula da tabela
  celulas.forEach(celula => {
    // Se o texto da célula for igual ao dia de hoje
    if (diasSemana[hoje] === celula.textContent.trim()) {
      celula.classList.add('dia-atual'); // Adiciona destaque (cor diferente)
      // Se tiver uma célula ao lado (horário)
      if (celula.nextElementSibling) {
        celula.nextElementSibling.classList.add('dia-atual'); // Destaca o horário também
      }
    }
  });

  
  // BOTÃO VOLTAR AO TOPO
  // Quando a página é rolada para baixo
  window.addEventListener('scroll', function() {
    const btnTopo = document.getElementById('btnTopo'); // Pega o botão
    // Se rolou mais de 300 pixels para baixo
    if (window.pageYOffset > 300) {
      btnTopo.classList.add('visivel'); // Mostra o botão
    } else {
      btnTopo.classList.remove('visivel'); // Esconde o botão
    }
  });

  // Quando clicar no botão "Voltar ao topo"
  document.getElementById('btnTopo').addEventListener('click', function() {
    // Rola suavemente até o topo da página
    window.scrollTo({
      top: 0, // Posição do topo
      behavior: 'smooth' // Animação suave
    });
  });

  
  // ANIMAÇÃO NOS COMPLEMENTOS (INGREDIENTES EXTRAS)
  // Pega todos os complementos listados
  const complementos = document.querySelectorAll('.complemento-item');
  
  // Para cada complemento
  complementos.forEach(item => {
    // Quando o mouse passar por cima
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)'; // Aumenta um pouquinho
      this.style.transition = 'transform 0.2s ease'; // Faz isso suavemente
    });
    
    // Quando o mouse sair de cima
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)'; // Volta ao tamanho normal
    });
  });
  
});