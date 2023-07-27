
// Lista Dia


const buttonDia = document.querySelector('.adicionar-dia-btn');
const inputDia = document.querySelector('.adicionar-dia-input');
const listaCompletaDia = document.querySelector('.ul-dia');

const limite = 10;
let qtdDia = 0;


//Adiciona uma tarefa 
function adicionarTarefaDia() {

  //Validação de valor digitado Lista Dia
  if (!inputDia.value) {
    return alert('Digite uma Tarefa a ser adicionada')
  };

  //Validação de limite de itens Lista Dia
  if (qtdDia >= limite) {
    alert('Limite de itens atingido')
    return
  } 

  //Insere a li na ul Dia
  const novaTarefaDia = document.createElement('li');
  novaTarefaDia.innerHTML = `<span><i class="bi bi-brightness-high"></i></span>${inputDia.value}`;
  novaTarefaDia.classList.add('li-dia');

  listaCompletaDia.appendChild(novaTarefaDia);

  //Contador para quantidade máxima
  qtdDia++

  //Chama função que salva a qtd dia
  salvarQtdDia()

  //Reset do input
  inputDia.value = '';

  //Chama função que adiciona botão de delete
  adicionarDeletarDia(novaTarefaDia);

  //Salva o item no localStorage
  localStorage.setItem('listaDia', JSON.stringify(listaCompletaDia.innerHTML));
}


//Adiciona botão de delete
function adicionarDeletarDia(li) {

  const btnDeletar = document.createElement('button');
  btnDeletar.innerHTML = '<i class="bi bi-check2"></i>';
  li.appendChild(btnDeletar);
  btnDeletar.addEventListener('click', () => {
    li.remove() 
    
    //Contador para controle da quantidade máxima
    qtdDia--;

    //Salva mudança no localStorage da qtdDia
    localStorage.setItem('qtdDia', (qtdDia));
    
    //Salva mudança no localStorage da listaDia
    localStorage.setItem('listaDia', JSON.stringify(listaCompletaDia.innerHTML));
  });
}


//Readiciona as tarefas salvas na pagina ao recarregar
function recarregarTarefasDia() {

  //Pega os itens da localStorage
  const tarefasLocalStorageDia = localStorage.getItem('listaDia');

  //Verificação da localStorage
  if (tarefasLocalStorageDia === '' || !tarefasLocalStorageDia) {
    localStorage.setItem('listaDia', JSON.stringify(''));
  };

  //Transcreve os itens da localStorage
  listaCompletaDia.innerHTML = JSON.parse(tarefasLocalStorageDia);
};

//Readiciona o botão de deletar ao recarregar a página 
function reinicializarDeleteDia() {
  const listaDia = document.querySelectorAll('.li-dia');
  listaDia.forEach((e, _i) => {
    e.lastChild.addEventListener('click', () => {
      e.remove()

      //Contador para controle da quantidade máxima
      qtdDia--

      //Salva mudança no localStorage da listaDia
      localStorage.setItem('listaDia', JSON.stringify(listaCompletaDia.innerHTML));

      //Salva mudança no localStorage da qtdDia
      localStorage.setItem('qtdDia', (qtdDia));
    });
  })
};

//Salva a quantidade quantidade de itens no localStorage
function salvarQtdDia() {
localStorage.setItem('qtdDia', (qtdDia));
}

//Readiciona a quantidade quantidade de itens na variável
function recarregaQtdDia() {
  qtdDia = localStorage.getItem('qtdDia');
}



// Lista Noite

const buttonNoite = document.querySelector('.adicionar-noite-btn');
const inputNoite = document.querySelector('.adicionar-noite-input');
const listaCompletaNoite = document.querySelector('.ul-noite');

let qtdNoite = 0;

//Adiciona uma tarefa 
function adicionarTarefaNoite() {

  //Validação de valor digitado Lista Noite
  if (!inputNoite.value) {
    return alert('Digite uma Tarefa a ser adicionada')
  };

  //Validação de limite de itens Lista Noite
  if (qtdNoite === limite) {
    alert('Limite de itens atingido')
    return
  };

  //Insere a li na ul Noite
  const novaTarefaNoite = document.createElement('li');
  novaTarefaNoite.innerHTML = `<span><i class="bi bi-moon-fill"></i></span>${inputNoite.value}`;
  novaTarefaNoite.classList.add('li-noite');

  listaCompletaNoite.appendChild(novaTarefaNoite);

  //Contador para quantidade máxima
  qtdNoite++

  //Chama função que salva a qtd Noite
  salvarQtdNoite()

  //Reset do input
  inputNoite.value = '';

  //Chama função que adiciona botão de delete
  adicionarDeletarNoite(novaTarefaNoite);

  //Salva o item no localStorage
  localStorage.setItem('listaNoite', JSON.stringify(listaCompletaNoite.innerHTML));
}

//Adiciona botão de delete
function adicionarDeletarNoite(li) {

  const btnDeletar = document.createElement('button');
  btnDeletar.innerHTML = '<i class="bi bi-check2"></i>';
  li.appendChild(btnDeletar);
  btnDeletar.addEventListener('click', () => {
    li.remove()
    
    //Contador para controle da quantidade máxima
    qtdNoite-- ;

    //Salva mudança no localStorage da qtdNoite
    localStorage.setItem('qtdNoite', (qtdNoite));

    //Salva mudança no localStorage da listaNoite
    localStorage.setItem('listaNoite', JSON.stringify(listaCompletaNoite.innerHTML));
  });
}

//Readiciona as tarefas salvas na pagina ao recarregar
function recarregarTarefasNoite() {

  //Pega os itens da localStorage
  const tarefasLocalStorageNoite = localStorage.getItem('listaNoite');

  //Verificação da localStorage
  if (tarefasLocalStorageNoite === '' || !tarefasLocalStorageNoite) {
    localStorage.setItem('listaNoite', JSON.stringify(''));
  };

  //Transcreve os itens da localStorage
  listaCompletaNoite.innerHTML = JSON.parse(tarefasLocalStorageNoite);
};

//Readiciona o botão de deletar ao recarregar a página 
function reinicializarDeleteNoite() {
  const listaNoite = document.querySelectorAll('.li-noite');
  listaNoite.forEach((e, _i) => {
    e.lastChild.addEventListener('click', () => {
      e.remove()
      
      //Contador para controle da quantidade máxima
      qtdNoite--
      
      //Salva mudança no localStorage da listaNoite
      localStorage.setItem('listaNoite', JSON.stringify(listaCompletaNoite.innerHTML));

      //Salva mudança no localStorage da qtdNoite
      localStorage.setItem('qtdNoite', (qtdNoite));
    });
  })
};

//Salva a quantidade quantidade de itens no localStorage
function salvarQtdNoite() {
localStorage.setItem('qtdNoite', (qtdNoite));
}

//Readiciona a quantidade quantidade de itens na variável
function recarregaQtdNoite() {
  qtdNoite = localStorage.getItem('qtdNoite');
}

window.onload = () => {
  
  //Chama funções de recarregamento de página Dia 
  recarregarTarefasDia()
  reinicializarDeleteDia()
  recarregaQtdDia()

  //Adiciona EventListeners aos inputs do HTML Dia
  buttonDia.addEventListener('click', adicionarTarefaDia);
  inputDia.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
      adicionarTarefaDia()
    }
  })
  //Chama funções de recarregamento de página Dia 
  recarregarTarefasNoite()
  reinicializarDeleteNoite()
  recarregaQtdNoite()
  
  //Adiciona EventListeners aos inputs do HTML Noite
  buttonNoite.addEventListener('click', adicionarTarefaNoite);
  inputNoite.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
      adicionarTarefaNoite()
    }
  })
};


