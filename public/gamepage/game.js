let score = 0;
let lives = 3;
let correctCount = 0;

const trashTypes = [
    { id: 'paper1', type: 'paper', text: '신문지' },
    { id: 'paper2', type: 'paper', text: '종이컵' },
    { id: 'paper3', type: 'paper', text: '박스' },
    { id: 'plastic1', type: 'plastic', text: '물병' },
    { id: 'plastic2', type: 'plastic', text: '음료수 페트병' },
    { id: 'plastic3', type: 'plastic', text: '플라스틱 용기' },
    { id: 'can1', type: 'can', text: '알루미늄 캔' },
    { id: 'can2', type: 'can', text: '철 캔' },
    { id: 'can3', type: 'can', text: '고철 조각' },
    { id: 'glass1', type: 'glass', text: '유리병' },
    { id: 'glass2', type: 'glass', text: '깨진 유리' },
    { id: 'glass3', type: 'glass', text: '와인병' },
    { id: 'vinyl1', type: 'vinyl', text: '비닐봉지' },
    { id: 'vinyl2', type: 'vinyl', text: '랩' },
    { id: 'vinyl3', type: 'vinyl', text: '과자 봉지' },
    { id: 'food1', type: 'food', text: '음식물 쓰레기' },
    { id: 'food2', type: 'food', text: '채소 껍질' },
    { id: 'food3', type: 'food', text: '과일 껍질' },
    { id: 'medicine1', type: 'medicine', text: '폐약품' },
    { id: 'medicine2', type: 'medicine', text: '사용한 주사기' },
    { id: 'medicine3', type: 'medicine', text: '폐기된 알약' },
    { id: 'other1', type: 'other', text: '옷' },
    { id: 'other2', type: 'other', text: '신발' },
    { id: 'other3', type: 'other', text: '가방' },
    { id: 'other4', type: 'other', text: '장난감' },
    { id: 'other5', type: 'other', text: '전자제품' },
    { id: 'other6', type: 'other', text: '건전지' },
    { id: 'other7', type: 'other', text: '형광등' },
    { id: 'other8', type: 'other', text: '화장품' }
];

document.addEventListener('DOMContentLoaded', () => {
    const trashContainer = document.querySelector('.trash-container');
    const bins = document.querySelectorAll('.bin');
    const resultMessage = document.getElementById('resultMessage');
    const scoreDisplay = document.getElementById('score');
    const carbonDisplay = document.getElementById('carbon');
    const livesContainer = document.querySelector('.lives-container');

    function createTrashItem() {
        trashContainer.innerHTML = ''; // 기존 쓰레기 요소를 삭제
        const randomTrash = trashTypes[Math.floor(Math.random() * trashTypes.length)];
        const trashItem = document.createElement('div');
        trashItem.classList.add('trash');
        trashItem.id = randomTrash.id;
        trashItem.textContent = randomTrash.text;
        trashItem.style.backgroundColor = getRandomColor();
        trashItem.setAttribute('draggable', 'true');
        trashItem.addEventListener('dragstart', dragStart);
        trashContainer.appendChild(trashItem);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggedElement = document.getElementById(id);
        const binType = e.target.getAttribute('data-type');

        if (isCorrectBin(id, binType)) {
            score += 3;
            correctCount++;
            resultMessage.textContent = "정답입니다!";
            updateCarbonReduction();
        } else {
            lives--;
            updateLives();
            resultMessage.textContent = "틀렸습니다!";
        }
        scoreDisplay.textContent = score;
        if (lives <= 0) {
            endGame();
        } else {
            createTrashItem();
        }
    }

    function isCorrectBin(trashId, binType) {
        const trashType = trashTypes.find(trash => trash.id === trashId);
        return trashType && trashType.type === binType;
    }

    function updateCarbonReduction() {
        const carbonReduction = correctCount * 0.2;
        carbonDisplay.textContent = carbonReduction.toFixed(2);
    }

    function updateLives() {
        for (let i = 0; i < 3; i++) {
            const life = document.getElementById(`life${i + 1}`);
            if (i < lives) {
                life.style.backgroundColor = '#ccc';
            } else {
                life.style.backgroundColor = 'transparent';
            }
        }
    }

    function endGame() {
        resultMessage.textContent = "게임 종료!";
        const carbonReduction = correctCount * 0.2;
        carbonDisplay.textContent = carbonReduction.toFixed(2);
        trashContainer.innerHTML = '';
        bins.forEach(bin => {
            bin.removeEventListener('dragover', dragOver);
            bin.removeEventListener('drop', drop);
        });
    }

    bins.forEach(bin => {
        bin.addEventListener('dragover', dragOver);
        bin.addEventListener('drop', drop);
    });

    createTrashItem();
});

