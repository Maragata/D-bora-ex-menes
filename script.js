/* ===========================================
   BANCO DE PREGUNTAS
   =========================================== */
const fullQuestionBank = [
  {
      question: "¿Qué significa descontar un efecto comercial?",
      options: ["Pedir un anticipo al banco*", "Cobrarlo después de la fecha", "Aplazar su pago", "Cancelarlo antes de tiempo"]
  },
  {
      question: "Para calcular el capital final según la ley de la capitalización simple tenemos que…",
      options: ["Sumar los intereses totales al capital inicial.*", "Restar los intereses totales al capital inicial.", "Multiplicar el tipo de interés por el capital final.", "Multiplicar el tipo de interés por el plazo."]
  },
  {
      question: "Cuando hablamos de un aplazamiento en el pago que un proveedor concede a una empresa estamos hablando de…",
      options: ["Descuento de efectos comerciales", "Confirming", "Crédito comercial*", "Crédito bancario"]
  },
  {
      question: "Las fuentes de financiación a corto plazo son aquellas que cubren necesidades de pago con un plazo de…",
      options: ["Menos de 1 mes", "Menos de 6 meses", "Menos de 1 año*", "Menos de 2 años"]
  },
  {
      question: "Un crédito bancario es…",
      options: [
          "Un préstamo de una cantidad de monetaria que debe devolverse después de un plazo.",
          "Un aplazamiento en el pago a un proveedor.",
          "Un anticipo de un cobro a clientes.",
          "Un servicio financiero donde la empresa dispone de una cantidad máxima y paga intereses solo por lo que usa.*"
      ]
  },
  {
      question: "Los cheques y pagarés son ejemplos de efectos comerciales.",
      options: ["Verdadero*", "Falso"]
  },
  {
      question: "Cuanto menor sea el tipo de interés, más costoso será para una empresa obtener financiación.",
      options: ["Verdadero", "Falso*"]
  },
  {
      question: "Cuando hablamos de que una empresa tiene la opción de pagar en el momento con un descuento o aplazar el pago a un proveedor nos referimos a…",
      options: ["Descuento de efectos comerciales*", "Crédito comercial", "Crédito bancario", "Factoring"]
  },
  {
      question: "¿Qué es un efecto comercial?",
      options: ["Un préstamo a largo plazo.", "Un descuento financiero", "Un documento que contiene una promesa de pago.*", "Una factura pagada al contado"]
  },
  {
      question: "Dos maneras de obtener financiación son adelantar pagos y aplazar cobros.",
      options: ["Verdadero", "Falso*"]
  },
  {
      question: "¿Qué es la financiación de una empresa?",
      options: ["El dinero que gana la empresa al vender", "La obtención de recursos financieros*", "Los gastos que paga la empresa", "El beneficio anual obtenido"]
  },
  {
      question: "¿Qué es una fuente de financiación?",
      options: ["El lugar donde se guarda el dinero", "Una opción para obtener recursos económicos*", "Un préstamo sin intereses.", "Un gasto financiero"]
  },
  {
      question: "¿Para qué se usa la financiación a corto plazo?",
      options: ["Para comprar maquinaria pesada.", "Para pagar gastos inmediatos.*", "Para adquirir locales comerciales.", "Para abrir una nueva tienda."]
  },
  {
      question: "¿Qué es el crédito comercial?",
      options: ["Un préstamo entre amigos", "Una subvención pública", "Una cuenta de ahorro empresarial", "Un aplazamiento del pago concedido por el proveedor*"]
  },
  {
      question: "¿Qué es una póliza de crédito?",
      options: ["Un contrato de alquiler de local", "Un seguro de crédito comercial", "Una cuenta corriente donde el banco pone dinero a disposición de la empresa*", "Una ayuda a fondo perdido"]
  },
  {
      question: "En una póliza de crédito, los intereses se pagan...",
      options: ["Solo por el dinero realmente usado*", "Por todo el crédito concedido", "Solo al final del año", "Nunca"]
  },
  {
      question: "¿Qué es el 'efectivo' en un descuento comercial?",
      options: ["El dinero que adelanta el banco*", "El valor total del préstamo", "La deuda final", "La comisión pagada"]
  },
  {
      question: "¿Qué es el factoring?",
      options: ["Un contrato de alquiler de maquinaria", "Un préstamo hipotecario", "Un servicio financiero que gestiona el cobro a clientes*", "Una forma de crowdfunding"]
  },
  {
      question: "¿Qué es un préstamo bancario?",
      options: ["Una ayuda sin devolución", "Una cuenta corriente con comisiones", "Un pago por adelantado", "Un contrato donde el banco presta dinero y cobra intereses a cambio*"]
  },
  {
      question: "¿Qué es el leasing?",
      options: ["Alquiler con opción a compra*", "Compra directa", "Préstamo sin intereses", "Renting de locales"]
  },
  {
      question: "¿Qué es el renting?",
      options: ["Alquiler con opción a compra", "Compra directa", "Alquiler sin opción a compra*", "Compra aplazada"]
  },
  {
      question: "¿Qué es un business angel?",
      options: ["Un préstamo bancario", "Un inversor privado que aporta dinero y asesoramiento*", "Una sociedad anónima", "Un banco público"]
  },
  {
      question: "¿Qué es el crowdfunding?",
      options: ["Financiación colectiva a través de Internet*", "Un tipo de crédito a corto plazo", "Un contrato de leasing", "Una póliza de seguros"]
  },
  {
      question: "El tipo de interés que va cambiando con el tiempo y suele ir ligado al Euríbor es el interes…",
      options: ["Pendiente", "Fijo", "Permanente", "Variable*"]
  },
  {
      question: "Una anualidad en un préstamo es…",
      options: ["El precio del dinero.", "La cantidad de dinero que se paga cada mes para devolver el préstamo.*", "El periodo de tiempo del banco.", "El capital descontado."]
  },
  {
      question: "¿Qué tipo de préstamo solemos usar en España?",
      options: ["Préstamo francés*", "Préstamo alemán", "Préstamo español", "Préstamo simple"]
  },
  {
      question: "La anualidad que pagamos al devolver un préstamo está formada por…",
      options: ["El interés más la cuota de amortización*", "El periodo de tiempo por el interés.", "El tipo de interés por el capital.", "El capital inicial menos el final."]
  },
  {
      question: "El contrato de leasing consiste en ceder un bien en régimen de alquiler con opción a compra.",
      options: ["Verdadero*", "Falso"]
  },
  {
      question: "Los contratos de renting no suelen incluir servicios adicionales como el mantenimiento.",
      options: ["Verdadero*", "Falso"]
  },
  {
      question: "Los contratos de renting suelen tener una duración de…",
      options: ["12 meses", "5 años", "10 años", "2 años*"]
  },
  {
      question: "Dentro del activo no corriente de la empresa se incluye…",
      options: ["Existencias iniciales", "Tesorería", "Edificios y construcciones*", "Dinero efectivo inicial"]
  },
  {
      question: "Los equipos informáticos deben ser incluidos en el plan de inversiones iniciales.",
      options: ["Verdadero*", "Falso"]
  },
  {
      question: "En un contrato de seguro la aseguradora es la empresa que se encarga de subsanar los daños ocasionados.",
      options: ["Verdadero*", "Falso"]
  },
  {
      question: "En un contrato de seguro, la persona que contrata el servicio y paga una tarifa se llama…",
      options: ["Tomador del seguro*", "Asegurador", "Cliente protegido", "Ninguna de las anteriores"]
  },
  {
      question: "Algunas de las ventajas de alquilar un local frente a comprarlo son…",
      options: ["Es muy flexible, ya que permite cambiar de ubicación sin problemas.*", "Menos responsabilidades.", "No vinculado a hipoteca.", "Todas las anteriores."]
  },
  {
      question: "Uno de los inconvenientes de alquilar un local frente a comprarlo es que…",
      options: ["No supone un activo para la empresa.*", "Es una opción muy flexible.", "Es una inversión a largo plazo.", "No eres responsable de las reparaciones."]
  },
  {
      question: "Una póliza de seguro es un contrato entre un prestamista y un prestatario.",
      options: ["Verdadero", "Falso*"]
  },
  {
      question: "El crédito comercial consiste en aplazar los pagos con los _________ del comercio.",
      options: ["Clientes", "Proveedores*", "Bancos", "Inversores"]
  },
  {
      question: "En la capitalización simple, los intereses se calculan únicamente sobre el ________ inicial.",
      options: ["Capital*", "Tiempo", "Riesgo", "Coste"]
  },
  {
      question: "El leasing es un alquiler de bienes con opción de _______.",
      options: ["Venta inmediata", "Reventa", "Compra*", "Devolución con coste"]
  },
  {
      question: "El préstamo bancario suele devolverse mediante cuotas periódicas llamadas____.",
      options: ["Márgenes", "Anualidades*", "Primas", "Dividendos"]
  },
  {
      question: "La póliza de seguros obliga al tomador a pagar una cantidad periódica llamada ______.",
      options: ["Tasa", "Canon", "Prima*", "Interés"]
  },
  {
      question: "Las fuentes de financiación propias son aquellas que pertenecen a la empresa y no necesitan ser _______.",
      options: ["Declaradas", "Amortizadas", "Devueltas*", "Negociadas"]
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
