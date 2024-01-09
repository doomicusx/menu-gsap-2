function setupMenuAnimation() {
  // Seletor para o botão de alternância do menu
  const toggleButton = document.querySelector(".toggle");
  // Variável para controlar o estado do menu (aberto ou fechado)
  let isOpen = false;
  // Criação da timeline GSAP
  const timeline = gsap.timeline({ paused: true });

  // Adiciona uma animação para a "website-content"
  timeline.to(".website-content", {
    duration: 2,
    ease: "power4.inOut",
    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    scale: 0.5,
  });

  // Adiciona uma animação para a "row" com um atraso usando "stagger"
  timeline.to(
    ".row",
    {
      duration: 3,
      left: "0%",
      ease: "power4.inOut",
      stagger: 0.1,
    },
    "-=2.5"
  );

  // Adiciona um ouvinte de evento para o botão de alternância do menu
  toggleButton.addEventListener("click", function () {
    // Verifica se o menu está aberto
    if (isOpen) {
      // Reverte a timeline se o menu estiver aberto
      timeline.reverse();
    } else {
      // Reproduz a timeline se o menu estiver fechado
      timeline.play();
    }
    // Inverte o estado do menu (aberto para fechado e vice-versa)
    isOpen = !isOpen;
  });
}

// Executa a função quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", setupMenuAnimation);
