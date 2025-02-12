function executarProcesso() { 
    try { 
        // Simula um erro 
        if (Math.random() > 0.5) { 
            throw new Error("Ocorreu um erro no processo!"); 
        } 
        // Caso não ocorra erro 
        mostrarModal("Processo concluído com sucesso!"); 
    } catch (erro) { 
        // Exibe mensagem de erro no modal 
        mostrarModal(erro.message); 
    } } 

    function mostrarModal(mensagem) { 
        document.getElementById("modalMensagem").innerText = mensagem; 
        document.getElementById("modelo").style.display = "flex"; 
    } 
    
    function fecharModal() { 
        document.getElementById("modelo").style.display = "none"; 
    } 
