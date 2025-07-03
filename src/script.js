  // XML dinâmico – recursos.html
  function carregarRecursos() {
    fetch("recursos.xml")
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        const recursos = xml.getElementsByTagName("recurso");
  
        const container = document.getElementById("lista-recursos");
        container.innerHTML = "<ul>";
  
        for (let i = 0; i < recursos.length; i++) {
          const nome = recursos[i].getElementsByTagName("nome")[0].textContent;
          const tipo = recursos[i].getElementsByTagName("tipo")[0].textContent;
          const link = recursos[i].getElementsByTagName("link")[0].textContent;
  
          container.innerHTML += `
            <li>
              <strong>${nome}</strong> (${tipo})<br>
              <a href="${link}" target="_blank">${link}</a>
            </li>
          `;
        }
  
        container.innerHTML += "</ul>";
      })
      .catch(error => {
        document.getElementById("lista-recursos").innerHTML = "<p>Erro ao carregar recursos.</p>";
        console.error("Erro ao carregar XML:", error);
      });
  }
  