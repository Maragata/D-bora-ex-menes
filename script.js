/* ===========================================
   BANCO DE PREGUNTAS
   =========================================== */
const fullQuestionBank = [
  {
      question: "¿Cuál es una de las principales desventajas de la comunicación telefónica?",
      options: ["Es más lenta que el correo.", "Es más fría que la comunicación cara a cara.*", "No permite la comunicación verbal.", "Tiene un coste de desplazamiento muy alto."]
  },
  {
      question: "En la expresión verbal al teléfono, para ser 'concisos' debemos...",
      options: ["Usar tecnicismos complejos.", "Ser directos y breves.*", "Hablar muy rápido.", "Contar historias detalladas."]
  },
  {
      question: "¿Qué elemento no verbal es fundamental mantener al teléfono porque se percibe en la voz?",
      options: ["La sonrisa telefónica.*", "El contacto visual.", "Los gestos con las manos.", "La ropa de trabajo."]
  },
  {
      question: "¿Cuál es el momento más importante de una llamada para conseguir el objetivo?",
      options: ["La presentación.", "El desarrollo.", "El cierre.*", "La despedida."]
  },
  {
      question: "Al recibir una llamada, ¿cuándo se debe descolgar el teléfono?",
      options: ["Inmediatamente al primer tono.", "Antes del tercer tono.*", "Después del quinto tono.", "Cuando terminemos lo que estamos haciendo."]
  },
  {
      question: "¿Cuál es el tiempo máximo recomendado para mantener a un interlocutor en espera?",
      options: ["1 minuto.", "30 segundos.*", "2 minutos.", "No hay límite si la música es agradable."]
  },
  {
      question: "Si estamos atendiendo una visita presencial y suena el teléfono, ¿qué tiene preferencia?",
      options: ["La llamada telefónica siempre.", "La visita presencial, salvo urgencia.*", "Ninguna, se deben atender a la vez.", "El teléfono, porque es más rápido."]
  },
  {
      question: "En el protocolo telefónico, si no hay relación de amistad o confianza, debemos tratar al interlocutor de...",
      options: ["Tú.", "Colega.", "Usted.*", "Nombre de pila."]
  },
  {
      question: "La atención telefónica proactiva es aquella en la que...",
      options: ["El cliente llama a la empresa.", "La empresa llama al cliente.*", "Se usa un contestador automático.", "Se responde por WhatsApp."]
  },
  {
      question: "Al tomar un mensaje para otra persona, ¿qué datos son imprescindibles?",
      options: ["Solo el nombre de quien llama.", "La edad y dirección del llamante.", "Nombre, empresa, teléfono, motivo, fecha y hora.*", "Solo el número de teléfono."]
  },
  {
      question: "Ante un cliente difícil que grita, lo primero que debemos hacer es...",
      options: ["Gritar más fuerte para imponernos.", "Colgar inmediatamente.", "Mantener la calma.*", "Pasarle la llamada a un compañero."]
  },
  {
      question: "Un 'Contact Center' se diferencia de un 'Call Center' tradicional en que...",
      options: ["Solo atiende llamadas de voz.", "Integra diversos canales como email, WhatsApp y redes sociales.*", "Es más pequeño y local.", "No utiliza ordenadores."]
  },
  {
      question: "Al hablar por teléfono se pierde la referencia visual, lo que exige...",
      options: ["Hablar más alto.", "Que el mensaje sea más preciso y completo.*", "Usar muchas pausas.", "Evitar mencionar el nombre de la empresa."]
  },
  {
      question: "Para evitar errores al tomar notas durante una llamada, debemos aplicar...",
      options: ["La escucha activa.*", "La intuición.", "La rapidez.", "El uso de grabadoras sin avisar."]
  },
  {
      question: "Si tenemos dudas sobre cómo resolver el problema de un cliente difícil, debemos...",
      options: ["Inventarnos una solución rápida.", "Prometer algo aunque no podamos cumplirlo.", "Tomar nota y prometer llamar tras consultarlo.*", "Decirle que no tiene solución."]
  }
];
/* =========================================
   LÓGICA DEL JUEGO
   ========================================= */

// Variables de estado
let currentQueue = [];
let wrongQueue = [];
let currentIndex = 0;
let roundCount = 1;

// Referencias al DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const feedbackMsg = document.getElementById('feedback-msg');
const progressFill = document.getElementById('progress-fill');
const roundIndicator = document.getElementById('round-indicator');
const progressText = document.getElementById('progress-text');
const totalRoundsSpan = document.getElementById('total-rounds');

// Listeners
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', loadNextQuestion);

function startGame() {
    currentQueue = [...fullQuestionBank]; 
    wrongQueue = [];
    currentIndex = 0;
    roundCount = 1;

    // Barajar las preguntas iniciales
    currentQueue.sort(() => Math.random() - 0.5);

    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    updateRoundDisplay();
    showQuestion();
}

function updateRoundDisplay() {
    roundIndicator.textContent = `Ronda ${roundCount}`;
    if(roundCount > 1) {
        roundIndicator.textContent += " (Repaso de fallos)";
        roundIndicator.style.color = "#ef4444";
    }
}

function showQuestion() {
    resetState();
    
    if (currentIndex >= currentQueue.length) {
        handleEndOfRound();
        return;
    }

    const currentQ = currentQueue[currentIndex];
    
    questionText.textContent = currentQ.question;
    progressText.textContent = `Pregunta ${currentIndex + 1} de ${currentQueue.length}`;
    
    const percent = ((currentIndex) / currentQueue.length) * 100;
    progressFill.style.width = `${percent}%`;

    const shuffledOptions = [...currentQ.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        
        const isCorrect = opt.trim().endsWith('*');
        const cleanText = isCorrect ? opt.replace('*', '') : opt;
        
        btn.textContent = cleanText;
        btn.dataset.correct = isCorrect;
        
        btn.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(btn);
    });
}

function resetState() {
    feedbackArea.classList.add('hidden');
    nextBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const currentQData = currentQueue[currentIndex];

    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === "true") {
            btn.classList.add('correct');
        }
    });

    feedbackArea.classList.remove('hidden');
    nextBtn.classList.remove('hidden');

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        feedbackMsg.textContent = "¡Correcto!";
        feedbackMsg.style.color = "var(--success)";
    } else {
        selectedBtn.classList.add('wrong');
        feedbackMsg.textContent = "Incorrecto. Esta pregunta volverá a salir al final.";
        feedbackMsg.style.color = "var(--error)";
        wrongQueue.push(currentQData);
    }
}

function loadNextQuestion() {
    currentIndex++;
    showQuestion();
}

function handleEndOfRound() {
    // Si hay preguntas en la cola de fallos (wrongQueue)
    if (wrongQueue.length > 0) {
        currentQueue = [...wrongQueue]; 
        wrongQueue = []; 
        currentIndex = 0;
        roundCount++;
        
        Swal.fire({
            title: '¡Ronda terminada!',
            text: `Tienes ${currentQueue.length} preguntas pendientes para repasar. ¡Vamos a intentarlo de nuevo!`,
            icon: 'info',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#0066FF',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed) {
                updateRoundDisplay();
                showQuestion();
            }
        });

    } else {
        // Victoria
        Swal.fire({
            title: '¡Felicidades!',
            text: 'Has completado todas las preguntas correctamente.',
            icon: 'success',
            confirmButtonText: 'Genial',
            confirmButtonColor: '#10b981'
        }).then(() => {
            gameScreen.classList.add('hidden');
            endScreen.classList.remove('hidden');
            totalRoundsSpan.textContent = roundCount;
        });
    }
}
