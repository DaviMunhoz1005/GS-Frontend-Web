const quizForm = document.getElementById("quiz-form");
const resultBox = document.getElementById("result");

const questions = [
    {
        question: "1. O que são enchentes urbanas?",
        options: [
        "Aumento de rios por degelo",
        "Alagamentos causados por chuvas intensas em áreas urbanas",
        "Vazamento de água em tubulações",
        "Fenômenos naturais em regiões montanhosas"
        ],
        correct: 1
    },
    {
        question: "2. Qual fator contribui mais para enchentes nas cidades?",
        options: [
        "Rios naturais",
        "Árvores nas calçadas",
        "Impermeabilização do solo",
        "Uso de bicicletas"
        ],
        correct: 2
    },
    {
        question: "3. Como a tecnologia pode ajudar a prever enchentes?",
        options: [
        "Com sensores de chuva e monitoramento de rios",
        "Com drones entregando comida",
        "Com redes sociais",
        "Com aplicativos de clima offline"
        ],
        correct: 0
    },
    {
        question: "4. O que um sensor de nível de rio faz?",
        options: [
        "Ajuda a pescar",
        "Mede a profundidade da água em rios",
        "Identifica animais na água",
        "Monitora o trânsito"
        ],
        correct: 1
    },
    {
        question: "5. Qual é uma solução tecnológica para alertar moradores?",
        options: [
        "Enviar cartas",
        "Alto-falantes fixos",
        "Aplicativos e SMS automáticos",
        "TV a cabo"
        ],
        correct: 2
    },
    {
        question: "6. O que é um sistema de evacuação inteligente?",
        options: [
        "Guarda-roupas automatizados",
        "Sistema de semáforos",
        "Rotas seguras baseadas em dados em tempo real",
        "Elevadores rápidos"
        ],
        correct: 2
    },
    {
        question: "7. Qual dessas linguagens pode ser usada para programar sensores?",
        options: [
        "HTML",
        "CSS",
        "Python",
        "Photoshop"
        ],
        correct: 2
    },
    {
        question: "8. O que significa IoT (Internet das Coisas)?",
        options: [
        "Jogos na internet",
        "Dispositivos conectados trocando dados",
        "Redes sociais",
        "Computadores antigos"
        ],
        correct: 1
    },
    {
        question: "9. Como a coleta de dados ajuda no combate a enchentes?",
        options: [
        "Melhora a previsão e a resposta rápida",
        "Diminui impostos",
        "Aumenta o número de redes sociais",
        "Ajuda a plantar mais árvores"
        ],
        correct: 0
    },
    {
        question: "10. O que um cidadão pode fazer com tecnologia em enchentes?",
        options: [
        "Ignorar os alertas",
        "Compartilhar informações em apps e seguir orientações",
        "Tirar selfies na água",
        "Desligar o celular"
        ],
        correct: 1
    }
];

questions.forEach((q, index) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = q.question;
    fieldset.appendChild(legend);
    q.options.forEach((option, i) => {
        const label = document.createElement("label");
        label.innerHTML = `
        <input type="radio" name="q${index}" value="${i}" required />
        ${option}
        `;
        fieldset.appendChild(label);
        fieldset.appendChild(document.createElement("br"));
    });
    quizForm.appendChild(fieldset);
});

document.getElementById("submit-quiz").addEventListener("click", () => {
    let score = 0;
    let allAnswered = true;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (!selected) {
            allAnswered = false;
        } else if (Number(selected.value) === q.correct) {
            score++;
        }
    });
    if (!allAnswered) {
        resultBox.innerHTML = `
            <p style="color: red;"><strong>⚠️ Por favor, responda todas as perguntas antes de enviar o quiz.</strong></p>
        `;
        return; 
    }
    resultBox.innerHTML = `
        <h2>Resultado</h2>
        <p>Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.</p>
        <p>${score >= 7 
            ? "Parabéns! Você entende como a tecnologia pode salvar vidas!" 
            : "Você pode aprender mais sobre como a tecnologia ajuda no combate às enchentes."}</p>
    `;
});

document.getElementById('btn-site').addEventListener('click', () => {
    window.location.href = '../../index.html';
});