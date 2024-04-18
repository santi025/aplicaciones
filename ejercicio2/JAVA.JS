const totalCards = 18;
const availableCards = ['M', 'E', 'D', 'A'];
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;
let pairsFound = 0;

let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

function activate(e) {
   if (currentMove < 2 && !e.target.classList.contains('active') && selectedCards.indexOf(e.target) === -1) {
      e.target.classList.add('active');
      selectedCards.push(e.target);

      if (++currentMove === 2) {
         currentAttempts++;
         document.querySelector('#stats').innerHTML = currentAttempts + ' intentos';

         let value1 = selectedCards[0].querySelector('.face').innerHTML;
         let value2 = selectedCards[1].querySelector('.face').innerHTML;

         if (value1 === value2) {
            pairsFound++;
            if (pairsFound === totalCards / 2) {
               alert('¡Felicidades! ¡Has encontrado todas las parejas!');
            }
            selectedCards = [];
            currentMove = 0;
         } else {
            setTimeout(() => {
               selectedCards.forEach(card => card.classList.remove('active'));
               selectedCards = [];
               currentMove = 0;
            }, 600);
         }
      }
   }
}

function randomValue() {
   let rnd = Math.floor(Math.random() * (totalCards / 2));
   let values = valuesUsed.filter(value => value === rnd);
   if (values.length < 2) {
      valuesUsed.push(rnd);
   } else {
      randomValue();
   }
}

function getFaceValue(value) {
   let rtn = value;
   if (value < availableCards.length) {
      rtn = availableCards[value];
   }
   return rtn;
}

for (let i = 0; i < totalCards; i++) {
   let div = document.createElement('div');
   div.innerHTML = cardTemplate;
   cards.push(div);
   document.querySelector('#game').append(cards[i]);
   randomValue();
   cards[i].querySelector('.face').innerHTML = getFaceValue(valuesUsed[i % (totalCards / 2)]);
   cards[i].querySelector('.card').addEventListener('click', activate);
}
