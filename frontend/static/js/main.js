document.addEventListener("DOMContentLoaded", ()=>{

    let questionsArray = [
        {
            "question": "What kind of house do you want?",
            "type" : "images",
            "options" : [
                {
                    "link": "../static/images/image 1.png",
                    "value": "option_1",
                    "label" : "Wooden house"
                },
                {
                    "link": "../static/images/image 2.png",
                    "value": "option_2",
                    "label" : "Brick house"
                    
                },
                {
                    "link": "../static/images/image 3.png",
                    "value": "option_3",
                    "label" : "Modular house"
                },
            ]
        },
        {
            "question": "Do you have a plot for construction?",
            "type": "radiobutton",
            "options": [
                {
                    "label" : "Yes",
                    "value" : "option_1"
                },
                {
                    "label" : "No",
                    "value" : "option_2"
                },
                {
                    "label" : "We will buy soon",
                    "value" : "option_3"
                }
            ]
        },
        {
            "question": "How many floors will there be in the house?",
            "type": "radiobutton",
            "options": [
                {
                    "label" : "1",
                    "value" : "option_1"
                },
                {
                    "label" : "2",
                    "value" : "option_2"
                },
                {
                    "label" : "Not decided yet",
                    "value" : "option_3"
                }
            ]
        },
        {
            "question": "What area of the house are you considering?",
            "type": "radiobutton",
            "options": [
                {
                    "label" : "up to 70m²",
                    "value" : "option_1"
                },
                {
                    "label" : "70-100m²",
                    "value" : "option_2"
                },
                {
                    "label" : "100-150m²",
                    "value" : "option_3"
                },
                {
                    "label" : "150-200m²",
                    "value" : "option_4"
                },
                {
                    "label" : "200-250m²",
                    "value" : "option_5"
                },
                {
                    "label" : "Not decided yet",
                    "value" : "option_6"
                }
            ]
        },
        {
            "question": "What rooms do you want for the comfort of the whole family?",
            "type": "checkbox",
            "options": [
              {
                "label": "Kitchen-living room",
                "value": "option_1"
              },
              {
                "label": "Bedroom",
                "value": "option_2"
              },
              {
                "label": "Children's room",
                "value": "option_3"
              },
              {
                "label": "Guest room",
                "value": "option_4"
              },
              {
                "label": "Cabinet",
                "value": "option_5"
              },
              {
                "label": "Pantry",
                "value": "option_6"
              }
            ]
        },
        {
              "question": "What do you want included with the house?",
              "type": "checkbox",
              "options": [
                {
                  "label": "Basement / Cellar",
                  "value": "option_1"
                },
                {
                  "label": "Garage",
                  "value": "option_2"
                },
                {
                  "label": "Bath",
                  "value": "option_3"
                },
                {
                  "label": "Alcove",
                  "value": "option_4"
                },
                {
                  "label": "Garden",
                  "value": "option_5"
                }
              ]
        }
]
    let resultArray = []

    const startButton = document.querySelector('button[data-start-button]')
    const contentContainer = document.querySelector('.content-container')
    const question = document.querySelector('.question')
    const bar = document.querySelector('.bar')
    const buttonsContainer = document.querySelector(".buttons-container")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
    const underContent = document.querySelector('.under-content-text')

    const gift_and_text_finally_container = document.querySelector('.gift-and-text-finally-container')
    const contact_and_information_finally_container = document.querySelector('.contact-and-information-finally-container')

    const nameInput = document.querySelector('input[type="text"]')
    const telInput = document.querySelector('input[type="tel"]')

    const submitBtn = document.querySelector('form[data-submit-btn]')


    let currentQuestionIndex = 0;

    buttonsContainer.style.display = 'none'
    question.style.display = 'none'
    bar.style.display = 'none'
    contentContainer.style.display = 'flex'

    gift_and_text_finally_container.style.display = 'none'
    contact_and_information_finally_container.style.display = 'none'


    startButton.addEventListener('click', startQuiz)
    
    function startQuiz() {
        const titleContainer = document.querySelector('.title-container')
        titleContainer.remove()
        document.querySelector(".button-start-container").remove()
        contentContainer.style.display = `block`
        bar.style.display = 'flex'
        question.style.display = 'block'
        buttonsContainer.style.display = 'flex'
        displayQuestion(currentQuestionIndex)
        updateProgressBar()
    }

    
    function displayQuestion(index) {
        const currentQuestion = questionsArray[index];
        question.innerHTML = `
            <div class="title-question">
                <p>${currentQuestion.question}</p>
            </div>
            <div class="cards-container"></div>
        `;
    
        const cardsContainer = question.querySelector('.cards-container');
    
        currentQuestion.options.forEach(option => {
            if (currentQuestion.type === "images") {
                const card = document.createElement('label');
                card.classList.add('card');
                card.innerHTML = `
                    <input type="radio" required name="question_${index}" value="${option.value}" content="${option.label}"/>
                    <div class="card-image">
                        <img src="${option.link}" alt="${option.label}" />
                    </div>
                    <div class="card-title">${option.label}</div>
                `;
                cardsContainer.appendChild(card);
            } else if (currentQuestion.type === "radiobutton") {
                const radioOption = document.createElement('label');
                radioOption.classList.add('radio-option');
                radioOption.innerHTML = `
                    <input type="radio" required name="question_${index}" value="${option.value}" content="${option.label}"/>
                    <span class="istok-web-regular">${option.label}</span>
                `;
                cardsContainer.appendChild(radioOption);
            } else if (currentQuestion.type === "checkbox") {
                const checkboxOption = document.createElement('label');
                checkboxOption.classList.add('checkbox-option');
                checkboxOption.innerHTML = `
                    <input type="checkbox" required name="question_${index}" value="${option.value}" content="${option.label}"/>
                    ${option.label}
                `;
                cardsContainer.appendChild(checkboxOption);
            }
        });
        updateButtonState();
    }
    
    prevBtn.addEventListener('click', ()=>{
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex)
            updateProgressBar()
            resultArray.pop()
        }
    })

    nextBtn.addEventListener('click', () => {
        if (!isOptionSelected(currentQuestionIndex)) {
            alert("Please select an option");
            return;
        }
    
        const option = getUserOption(currentQuestionIndex);
        resultArray.push(option);
    
        if (currentQuestionIndex < questionsArray.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
        } else {

            finallySlide(
                underContent,
                bar,
                question,
                buttonsContainer,
                gift_and_text_finally_container,
                contact_and_information_finally_container
            );
        }
    });
    

    submitBtn.addEventListener('submit', async (event) => {
        event.preventDefault();
    

        if (!nameInput.value || !telInput.value) {
            alert("Введите ваше имя и телефон.");
            return;
        }
    

        resultArray.push({
            name: nameInput.value,
            tel: telInput.value,
        });
    

        await sendData(resultArray);
    });
    

    function isOptionSelected(index){
        const options = document.querySelectorAll(`input[name="question_${index}"]`)
        return Array.from(options).some(input => input.checked)
    }

    function getUserOption(index){
        const options = document.querySelectorAll(`input[name="question_${index}"]`)
        if (!options.length) return null;
        if (options[0].type === 'radio') {
            const selectedOption = Array.from(options).find(input => input.checked)
            return selectedOption ? selectedOption.attributes[4].value : null;
        }
        if (options[0].type === 'checkbox') {
            return Array.from(options)
            .filter(input => input.checked)
            .map(input => input.attributes[4].value)
        }
    }
    


    function finallySlide(underContainer, bar, question, buttons, gift_and_text_finally_container, contact_and_information_finally_container ) {
        underContainer.style.display = "none"
        bar.style.display = "none"
        question.style.display = "none"
        buttons.style.display = "none"
        gift_and_text_finally_container.style.display = `flex`
        contact_and_information_finally_container.style.display = `grid`
    }
    

    function updateButtonState() {
        prevBtn.disabled = currentQuestionIndex === 0
        nextBtn.textContent = currentQuestionIndex === questionsArray.length - 1 ? "Submit" : "Next";

    }
    function updateProgressBar() {
        const progressBar = document.getElementById("myProgress");
        progressBar.value = ((currentQuestionIndex + 1) / questionsArray.length) * 100;
        const scoreText = document.querySelector("[data-score-text]");
        scoreText.textContent = `${currentQuestionIndex + 1} / ${questionsArray.length}`;
    }
})


async function sendData(data) {
    try {
        const response = await fetch('http://127.0.0.1:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ results: data }),
        });

        if (!response.ok) {
            throw new Error(`error HTTP: ${response.status}`);
        }

        const serverResponse = await response.json();
        alert('Your data has been sent successfully!');
    } catch (error) {
        alert('An error occurred while sending data. Try again.');
    }
}
