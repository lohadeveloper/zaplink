function generateLink() {
  const message = document.getElementById("message").value;
  const phone = document.getElementById("telefone").value;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${encodedMessage}`;
  const card = document.getElementById("link");
  card.querySelector(".textLink").textContent = link;
}

function testLink() {
  const message = document.getElementById("message").value;
  const phone = document.getElementById("telefone").value;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(link, "_blank");
}

function copyLink() {
  const content = document.getElementById("link").textContent;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      alert("Link copiado para a área de transferência.");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}
