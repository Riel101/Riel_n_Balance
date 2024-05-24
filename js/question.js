// data
const newRes = [
    {"question": "What does www stand for?",
    "answers": [
        {"option": "World With Web"},
        {"option": "World Wide Web"},
        {"option": "World Wide Works"},
        {"option": "Work With Web"}],
        "correctAnswer": "World Wide Web"
    },

    {"question": "What is the tiny piece at the end of a shoelace called?",
    "answers": [
        {"option": "Lace knot"},
        {"option": "Tiplace"},
        {"option": "Lacetip"},
        {"option": "An aglet"}],
        "correctAnswer": "An aglet"
    },

    {"question": "What is the name of this project?",
    "answers": [
        {"option": "iProject"},
        {"option": "Project CAM"},
        {"option": "iSmart"},
        {"option": "Trivia Questions"}],
        "correctAnswer": "iSmart"
    },

    {"question": "The tallest mountain in the world is?",
    "answers": [
        {"option": "Kilimanjaro"},
        {"option": "Mount Everest"},
        {"option": "Olumo rock"},
        {"option": "Zuma rock"}],
        "correctAnswer": "Mount Everest"
    },

    {"question": "The fastest man alive is?",
    "answers": [
        {"option": "Bolt"},
        {"option": "Flash"},
        {"option": "Osaini"},
        {"option": "Trevoh"}],
        "correctAnswer": "Bolt"
    },

    {"question": "What phone brand uses iOS?",
    "answers": [
        {"option": "Hp"},
        {"option": "Dell"},
        {"option": "Infinix"},
        {"option": "iPhone"}],
        "correctAnswer": "iPhone"
    },
    {"question": "Who was the first woman to win a Nobel Price?",
    "answers": [
        {"option": "Precious Adeyemi"},
        {"option": "Fumilayo Kuti"},
        {"option": "Marie Curie"},
        {"option": "Mona Lisa"}],
        "correctAnswer": "Marie Curie"
    },
    {"question": "Who painted the Mona Lisa?",
    "answers": [
        {"option": "Leonardo da Vinci"},
        {"option": "Donnie Mark"},
        {"option": "Michealangelo"},
        {"option": "Raphael"}],
        "correctAnswer": "Leonardo da Vinci"
    },
    {"question": "Chrome, Safari, Opera are different types of what?",
    "answers": [
        {"option": "Web browsers"},
        {"option": "Software"},
        {"option": "Search Engine"},
        {"option": "Application"}],
        "correctAnswer": "Web browsers"
    },
    {"question": "When did Facebook first launch?",
    "answers": [
        {"option": "2006"},
        {"option": "2001"},
        {"option": "2004"},
        {"option": "2002"}],
        "correctAnswer": "2004"
    },
    {"question": "When did Nigeria gain independence?",
    "answers": [
        {"option": "1990"},
        {"option": "1960"},
        {"option": "1963"},
        {"option": "2000"}],
        "correctAnswer": "1960"
    },
    {"question": "How many Harry Potter books are there?",
    "answers": [
        {"option": "7"},
        {"option": "8"},
        {"option": "9"},
        {"option": "6"}],
        "correctAnswer": "7"
    },
    {"question": "How many Harry Potter movies are there?",
    "answers": [
        {"option": "7"},
        {"option": "8"},
        {"option": "9"},
        {"option": "6"}],
        "correctAnswer": "8"
    },
    {"question": "The first sport to be invented was?",
    "answers": [
        {"option": "Wrestling"},
        {"option": "Soccer"},
        {"option": "Baseball"},
        {"option": "Gymnastics"}],
        "correctAnswer": "Wrestling"
    },
    {"question": "Ping-pong is an alternative name for?",
    "answers": [
        {"option": "Table tennis"},
        {"option": "Badminting"},
        {"option": "Volleyball"},
        {"option": "Long tennis"}],
        "correctAnswer": "Table tennis"
    },
    {"question": "What is the loudest animal on Earth?",
    "answers": [
        {"option": "Lion"},
        {"option": "Elephant"},
        {"option": "Toad"},
        {"option": "Sperm Whale"}],
        "correctAnswer": "Sperm Whale"
    },
    {"question": "What is the largest animal on Earth?",
    "answers": [
        {"option": "Antarctic Blue Whale"},
        {"option": "Elephant"},
        {"option": "Sperm Whale"},
        {"option": "Giant squid"}],
        "correctAnswer": "Antarctic Blue Whale"
    },
    {"question": "What are male honey bees called?",
    "answers": [
        {"option": "Bee kings"},
        {"option": "Fliers"},
        {"option": "Drones"},
        {"option": "King bees"}],
        "correctAnswer": "Drones"
    },
    {"question": "What do you call animals that eat everything (meat, plants and fish)?",
    "answers": [
        {"option": "Herbivore"},
        {"option": "Omnivore"},
        {"option": "Phytovore"},
        {"option": "Canivore"}],
        "correctAnswer": "Omnivore"
    },
    {"question": "The age of a lion can be determined by its?",
    "answers": [
        {"option": "Hair"},
        {"option": "Height"},
        {"option": "Nose"},
        {"option": "Strenght"}],
        "correctAnswer": "Nose"
    },
    {"question": "Which is the only edible food that never expires?",
    "answers": [
        {"option": "Rice"},
        {"option": "Ketchup"},
        {"option": "Cheese"},
        {"option": "Honey"}],
        "correctAnswer": "Honey"
    },
    {"question": "What is the most popular carbonated beverage in the world?",
    "answers": [
        {"option": "Pepsi"},
        {"option": "Sprite"},
        {"option": "Coca-Cola"},
        {"option": "Mountain-dew"}],
        "correctAnswer": "Coca-Cola"
    },
    {"question": "What is the longest river?",
    "answers": [
        {"option": "Amazon River"},
        {"option": "River Niger"},
        {"option": "Jordan"},
        {"option": "Coast River"}],
        "correctAnswer": "Amazon River"
    },
    {"question": "Which is the world's most earthquake-prone country?",
    "answers": [
        {"option": "Russia"},
        {"option": "U.S."},
        {"option": "Japan"},
        {"option": "Korea"}],
        "correctAnswer": "Japan"
    },
    {"question": "Africa is home to how many deserts?",
    "answers": [
        {"option": "Two"},
        {"option": "Three"},
        {"option": "Four"},
        {"option": "Five"}],
        "correctAnswer": "Three"
    },
];

// variables
const mins = document.querySelector('#mins');
const secs = document.querySelector('#secs');
const theQuestion = document.getElementById('theQuestion');
const opts = document.getElementsByClassName('opt');
const nextBtn = document.querySelector('.next-btn');
const timer = document.querySelector('#timer');
const optContainer = document.querySelector('#opt-container');
const questionsContainer = document.querySelector('#questions-container');
const modalBox = document.querySelector('#modal-box');
const modalCloseBtn = document.querySelector('#modal-close-btn');
const totalScored = document.querySelector('#total-scored');
const inputName = document.querySelector('#name');

let counter;
let intTimer = 120;
let score = 0;
let questionsAnswered = 0

// countdown
window.addEventListener('load', function(){
    setInterval(function(){
        if(intTimer > 0){
            const calcMins = Math.floor(intTimer / 60);
            mins.textContent = '0' + calcMins;
            const calcSecs = Math.floor(intTimer % 60);
            if(calcSecs < 10){
                secs.textContent = '0' + calcSecs;
            } else {
                secs.textContent = calcSecs;
            }
            intTimer--
        } else {
            secs.textContent = '00';
            mins.textContent = '00';
            questionsAnswered = 10;
            // nextBtn.classList.add('hidden');
            // proceedBtn.classList.remove('hidden');
        }
        
    }, 1000)
});

// Next Question
function nextQuestion(){
    counter = Math.floor(Math.random() * newRes.length);
    theQuestion.textContent = newRes[counter].question;
    
    opts[0].textContent = newRes[counter].answers[0].option;
    opts[1].textContent = newRes[counter].answers[1].option;
    opts[2].textContent = newRes[counter].answers[2].option;
    opts[3].textContent = newRes[counter].answers[3].option;

    opts[0].dataset.correct = newRes[counter].answers[0].correct;
    opts[1].dataset.correct = newRes[counter].answers[1].correct;
    opts[2].dataset.correct = newRes[counter].answers[2].correct;
    opts[3].dataset.correct = newRes[counter].answers[3].correct;

    const answers = newRes[counter].answers;
    // console.log(answers);
    
    // option selection
        for(let opt of opts){
            
            opt.addEventListener('click', function(){
                const activeOpt = optContainer.querySelector('.selected');
                if(optContainer.querySelector('.selected')){
                    activeOpt.classList.remove('selected');
                }
                opt.classList.add('selected');
            })
            opt.classList.remove('selected');
        }
    }

    nextQuestion()
    
    // Next button func

    nextBtn.addEventListener('click', function(){
        if(optContainer.querySelector('.selected')){
            let selectedOption = optContainer.querySelector('.selected').textContent
            const correctOption = newRes[counter].correctAnswer
            // console.log(correctOption)
            if(selectedOption === correctOption){
                score++
            }
            console.log(score);
        }

        nextQuestion();
        // Number of answerable question
        questionsAnswered++
        if(questionsAnswered >= 10){
            intTimer = 0;
            // Print Score
            totalScored.textContent = score;
            modalBox.classList.remove('hidden');
            questionsContainer.classList.add('hidden');
        }
    })
    
    // Hide Modal Box
    modalCloseBtn.addEventListener('click', function(){
        modalBox.classList.add('hidden');
        questionsContainer.classList.remove('hidden');
        intTimer = 120
        score = 0;
        questionsAnswered = 0;
        nextQuestion()
        nextBtn.classList.remove('hidden');
        proceedBtn.classList.add('hidden');
    })

