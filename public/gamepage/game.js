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
    { id: 'food1', type: 'food', text: '채소 자투리' },
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
    const homeButton = document.getElementById('homeButton');
    
    homeButton.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080';
    });
    
    const trashContainer = document.querySelector('.trash-container');
    const bins = document.querySelectorAll('.bin');
    const resultMessage = document.getElementById('resultMessage');
    const scoreDisplay = document.getElementById('score');
    const carbonDisplay = document.getElementById('carbon');
    const livescontainer = document.querySelector('.lives-container');
    const restartButton = document.getElementById('restartButton');
    const helpButton = document.getElementById('helpButton');
    const gameRules = document.getElementById('gameRules');
    const closeButton = document.getElementById('closeButton');

    // 쓰레기 아이템 생성
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

    // 랜덤 색상 생성
    function getRandomColor() {
        const colors = ['#FF0000', '#d58300', '#006D00', '#0000FF', '#800000', '#800080', '#000000'];
        return colors[Math.floor(Math.random() * colors.length)];
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
        const carbonReduction = correctCount * 0.21;
        carbonDisplay.textContent = carbonReduction.toFixed(2);
    }

    function updateLives() {
        for (let i = 0; i < 3; i++) {
            const life = document.getElementById(`life${i + 1}`);
            if (i < lives) {
                life.textContent = '❤️';
            } else {
                life.textContent = '🖤';
            }
        }
    }

    function endGame() {
        resultMessage.textContent = "게임 종료!";
        const carbonReduction = correctCount * 0.21;
        carbonDisplay.textContent = carbonReduction.toFixed(2);
        trashContainer.innerHTML = '';
        bins.forEach(bin => {
            bin.removeEventListener('dragover', dragOver);
            bin.removeEventListener('drop', drop);
        });
        // 게임 종료 후 다시 시작하기 버튼 표시
        showRestartButton();
    }

    // 게임 종료 시 다시 시작하기 버튼 표시
    function showRestartButton() {
        restartButton.classList.remove('hidden');
    }

    function toggleGameRules() {
        gameRules.classList.toggle('visible');
    }

    bins.forEach(bin => {
        bin.addEventListener('dragover', dragOver);
        bin.addEventListener('drop', drop);
    });

    createTrashItem();

    function toggleGameRules() {
        gameRules.classList.toggle('visible');
    }

    // 다시 시작하기 버튼을 숨김
    restartButton.classList.add('hidden');

    // 다시 시작하기 버튼 클릭 이벤트 리스너 등록
    restartButton.addEventListener('click', () => {
        location.reload(); // 페이지 새로고침하여 게임 다시 시작
    });

    // 게임 규칙 버튼 클릭 이벤트 리스너 등록
    helpButton.addEventListener('click', toggleGameRules);
    closeButton.addEventListener('click', toggleGameRules);

});

document.addEventListener("DOMContentLoaded", function() {
    const helpButton = document.getElementById("helpButton");
    const gameRules = document.getElementById("gameRules");
    const closeButton = document.getElementById("closeButton");

    helpButton.addEventListener("click", toggleGameRules);
    closeButton.addEventListener("click", toggleGameRules);

    function toggleGameRules() {
        gameRules.classList.toggle("hidden");
    }
});
