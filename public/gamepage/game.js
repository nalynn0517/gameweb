let score = 0;
let lives = 3;
let correctCount = 0;

const trashTypes = [
    { id: 'paper1', type: 'paper', text: '신문지' },
    { id: 'paper2', type: 'paper', text: '노트' },
    { id: 'paper3', type: 'paper', text: '박스' },
    { id: 'plastic1', type: 'plastic', text: '물병' },
    { id: 'plastic2', type: 'plastic', text: '음료수 페트병' },
    { id: 'plastic3', type: 'plastic', text: '플라스틱 용기' },
    { id: 'can1', type: 'can', text: '통조림 캔' },
    { id: 'can2', type: 'can', text: '철 캔' },
    { id: 'can3', type: 'can', text: '고철 조각' },
    { id: 'glass1', type: 'glass', text: '유리병' },
    { id: 'glass2', type: 'glass', text: '깨진 유리' },
    { id: 'glass3', type: 'glass', text: '와인병' },
    { id: 'vinyl1', type: 'vinyl', text: '비닐봉지' },
    { id: 'vinyl2', type: 'vinyl', text: '랩 필름' },
    { id: 'vinyl3', type: 'vinyl', text: '과자 봉지' },
    { id: 'food1', type: 'food', text: '채소 자투리' },
    { id: 'food2', type: 'food', text: '채소 껍질' },
    { id: 'food3', type: 'food', text: '과일 껍질' },
    { id: 'medicine1', type: 'medicine', text: '폐약품' },
    { id: 'medicine2', type: 'medicine', text: '사용한 주사기' },
    { id: 'medicine3', type: 'medicine', text: '폐기된 알약' },
    { id: 'other1', type: 'etc', text: '옷' },
    { id: 'other2', type: 'etc', text: '신발' },
    { id: 'other3', type: 'etc', text: '가방' },
    { id: 'other4', type: 'etc', text: '장난감' },
    { id: 'other5', type: 'etc', text: '전자제품' },
    { id: 'other6', type: 'etc', text: '건전지' },
    { id: 'other7', type: 'etc', text: '형광등' },
    { id: 'other8', type: 'etc', text: '화장품' }
];

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    
    homeButton.addEventListener('click', () => {
        window.location.href = "../index.html";
    });
    
    const trashContainer = document.querySelector('.trash-container');
    const bins = document.querySelectorAll('.bin');
    const resultMessage = document.getElementById('resultMessage');
    const scoreDisplay = document.getElementById('score');
    const carbonDisplay = document.getElementById('carbon');
    const livesContainer = document.querySelector('.lives-container');
    const restartButton = document.getElementById('restartButton');
    const helpButton = document.getElementById('helpButton');
    const gameRules = document.getElementById('gameRules');
    const closeButton = document.getElementById('closeButton');
    const modal = document.getElementById('explanationModal');
    const modalText = document.getElementById('modalText');
    const closeBtn = document.querySelector('.close');

    // 쓰레기 아이템 생성
    function createTrashItem() {
        trashContainer.innerHTML = ''; // 기존 쓰레기 요소를 삭제
        const randomTrash = trashTypes[Math.floor(Math.random() * trashTypes.length)];
        const trashItem = document.createElement('div');
        trashItem.classList.add('trash');
        trashItem.id = randomTrash.id;
        trashItem.textContent = randomTrash.text;
        trashItem.setAttribute('draggable', 'true');
        trashItem.addEventListener('dragstart', dragStart);
        trashContainer.appendChild(trashItem);
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
    
    function dragOver(e) {
        e.preventDefault();
        const binType = e.currentTarget.getAttribute('data-type');
        // 드래그 중에만 쓰레기통 이미지를 열린 이미지로 변경
        e.currentTarget.querySelector('img').src = `../gamepage/img/${binType}_open.png`;
    }

    function dragLeave(e) {
        const binType = e.currentTarget.getAttribute('data-type');
        e.currentTarget.querySelector('img').src = `../gamepage/img/${binType}.png`;
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggedElement = document.getElementById(id);
        const binType = e.currentTarget.getAttribute('data-type');
        const trashItem = trashTypes.find(trash => trash.id === id);
        
        if (isCorrectBin(id, binType)) {
            score += 3;
            correctCount++;
            resultMessage.textContent = "정답입니다!";
            modalText.innerHTML = `${trashItem.text}는 ${binType} 분리수거함에 올바르게 분리되었습니다.<br><br> ${getCorrectExplanation(trashItem)}`;
            updateCarbonReduction();
        } else {
            lives--;
            updateLives();
            resultMessage.textContent = "틀렸습니다!";
            modalText.innerHTML = `${trashItem.text}는 ${binType} 분리수거함에 잘못 분리되었습니다.<br><br>${getIncorrectExplanation(trashItem)}`;
        }
        scoreDisplay.textContent = score;
        explanationModal.style.display = "block";
        if (lives <= 0) {
            endGame();
        } else {
            createTrashItem();
        }
    
        bins.forEach(bin => {
            const type = bin.getAttribute('data-type');
            bin.querySelector('img').src = `../gamepage/img/${type}.png`;
        });
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
                life.src = '../gamepage/img/fullheart.png';
            } else {
                life.src = '../gamepage/img/emptyheart.png';
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
            bin.removeEventListener('dragleave', dragLeave);
            bin.removeEventListener('drop', drop);
        });
        showRestartButton();
    }

    function showRestartButton() {
        restartButton.classList.remove('hidden');
        trashContainer.appendChild(restartButton);
    }

    function toggleGameRules() {
        gameRules.classList.toggle('visible');
    }
    bins.forEach(bin => {
        bin.addEventListener('dragover', dragOver);
        bin.addEventListener('dragleave', dragLeave);
        bin.addEventListener('drop', drop);
    });
    
    
    // 다시 시작하기 버튼을 숨김
    restartButton.classList.add('hidden');

    // 다시 시작하기 버튼 클릭 이벤트 리스너 등록
    restartButton.addEventListener('click', () => {
        location.reload(); // 페이지 새로고침하여 게임 다시 시작
    });

    // 게임 규칙 버튼 클릭 이벤트 리스너 등록
    helpButton.addEventListener('click', toggleGameRules);
    closeButton.addEventListener('click', toggleGameRules);

    // 게임 시작 시 쓰레기 아이템 생성
    createTrashItem();
    
    function getCorrectExplanation(trashItem) {
        const explanations = {
            paper: {
                '신문지': "신문지는 종이류로 분류하여 재활용할 수 있습니다.<br>깨끗한 상태로 배출해주세요.",
                '노트': "노트는 종이류로 분류하여 재활용할 수 있습니다.<br>스프링은 제거하고 배출해주세요.",
                '박스': "박스는 종이류로 분류하여 재활용할 수 있습니다.<br>테이프와 스티커는 제거하고 배출해주세요."
            },
            plastic: {
                '물병': "물병은 플라스틱류로 분류하여 재활용할 수 있습니다.<br>라벨을 제거하고 깨끗이 헹군 후 배출해주세요.",
                '음료수 페트병': "음료수 페트병은 플라스틱류로 분류하여 재활용할 수 있습니다.<br>라벨을 제거하고 깨끗이 헹군 후 배출해주세요.",
                '플라스틱 용기': "플라스틱 용기는 플라스틱류로 분류하여 재활용할 수 있습니다.<br>내용물을 비우고 깨끗이 헹군 후 배출해주세요."
            },
            can: {
                '통조림 캔': "통조림 캔은 캔류로 분류하여 재활용할 수 있습니다. <br>깨끗이 헹군 후 배출해주세요.",
                '철 캔': "철 캔은 캔류로 분류하여 재활용할 수 있습니다. <br>깨끗이 헹군 후 배출해주세요.",
                '고철 조각': "고철 조각은 캔류로 분류하여 재활용할 수 있습니다. <br>크기가 작을 경우에는 모아서 배출해주세요."
            },
            glass: {
                '유리병': "유리병은 유리류로 분류하여 재활용할 수 있습니다. <br>내용물을 비우고 깨끗이 헹군 후 배출해주세요.",
                '깨진 유리': "깨진 유리는 유리류로 분류하여 재활용할 수 있지만, <br>안전을 위해 두꺼운 종이에 싸서 배출해주세요.",
                '와인병': "와인병은 유리류로 분류하여 재활용할 수 있습니다.<br> 내용물을 비우고 깨끗이 헹군 후 배출해주세요."
            },
            vinyl: {
                '비닐봉지': "비닐봉지는 비닐류로 분류하여 재활용할 수 있습니다. <br>깨끗한 상태로 배출해주세요.",
                '랩 필름': "랩 필름은 비닐류로 분류하여 재활용할 수 있습니다. <br>깨끗한 상태로 배출해주세요.",
                '과자 봉지': "과자 봉지는 비닐류로 분류하여 재활용할 수 있습니다. <br>내용물을 비우고 깨끗한 상태로 배출해주세요."
            },
            food: {
                '채소 자투리': "채소 자투리는 음식물 쓰레기로 분류하여 재활용할 수 있습니다. <br>이물질을 제거하고 배출해주세요.",
                '채소 껍질': "채소 껍질은 음식물 쓰레기로 분류하여 재활용할 수 있습니다. <br>이물질을 제거하고 배출해주세요.",
                '과일 껍질': "과일 껍질은 음식물 쓰레기로 분류하여 재활용할 수 있습니다. <br>이물질을 제거하고 배출해주세요."
            },
            medicine: {
                '폐약품': "폐약품은 약국이나 보건소에서 수거합니다. <br>함부로 버리지 말고 지정된 장소에 배출해주세요.",
                '사용한 주사기': "사용한 주사기는 병원이나 보건소에서 수거합니다. <br>함부로 버리지 말고 지정된 장소에 배출해주세요.",
                '폐기된 알약': "폐기된 알약은 약국이나 보건소에서 수거합니다. <br>함부로 버리지 말고 지정된 장소에 배출해주세요."
            },
            etc: {
                '옷': "옷은 의류 수거함에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '신발': "신발은 신발 수거함에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '가방': "가방은 재활용 센터에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '장난감': "장난감은 재활용 센터에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '전자제품': "전자제품은 전자제품 수거함에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '건전지': "건전지는 폐건전지 수거함에 배출해주세요.",
                '형광등': "형광등은 폐형광등 수거함에 배출해주세요.",
                '화장품': "화장품 용기는 내용물을 비우고 깨끗이 헹군 후 배출해주세요."
            }
        };
        return explanations[trashItem.type][trashItem.text];
    }

    function getIncorrectExplanation(trashItem) {
        const explanations = {
            paper: {
                '신문지': "신문지는 종이류로 분류하여 재활용할 수 있습니다.<br>깨끗한 상태로 배출해주세요.",
                '노트': "노트는 종이류로 분류하여 재활용할 수 있습니다.<br>스프링은 제거하고 배출해주세요.",
                '박스': "박스는 종이류로 분류하여 재활용할 수 있습니다.<br>테이프와 스티커는 제거하고 배출해주세요."
            },
            plastic: {
                '물병': "물병은 플라스틱류로 분류하여 재활용할 수 있습니다.<br>라벨을 제거하고 깨끗이 헹군 후 배출해주세요.",
                '음료수 페트병': "음료수 페트병은 플라스틱류로 분류하여 재활용할 수 있습니다.<br>라벨을 제거하고 깨끗이 헹군 후 배출해주세요.",
                '플라스틱 용기': "플라스틱 용기는 플라스틱류로 분류하여 재활용할 수 있습니다.<br>내용물을 비우고 깨끗이 헹군 후 배출해주세요."
            },
            can: {
                '통조림 캔': "통조림 캔은 캔류로 분류하여 재활용할 수 있습니다. <br>깨끗이 헹군 후 배출해주세요.",
                '철 캔': "철 캔은 캔류로 분류하여 재활용할 수 있습니다. <br>깨끗이 헹군 후 배출해주세요.",
                '고철 조각': "고철 조각은 캔류로 분류하여 재활용할 수 있습니다. <br>크기가 작을 경우에는 모아서 배출해주세요."
            },
            glass: {
                '유리병': "유리병은 유리류로 분류하여 재활용할 수 있습니다. <br>내용물을 비우고 깨끗이 헹군 후 배출해주세요.",
                '깨진 유리': "깨진 유리는 유리류로 분류하여 재활용할 수 있지만, <br>안전을 위해 두꺼운 종이에 싸서 배출해주세요.",
                '와인병': "와인병은 유리류로 분류하여 재활용할 수 있습니다.<br> 내용물을 비우고 깨끗이 헹군 후 배출해주세요."
            },
            vinyl: {
                '비닐봉지': "비닐봉지는 비닐류로 분류하여 재활용할 수 있습니다. <br>깨끗한 상태로 배출해주세요.",
                '랩 필름': "랩 필름은 비닐류로 분류하여 재활용할 수 있습니다. <br>깨끗한 상태로 배출해주세요.",
                '과자 봉지': "과자 봉지는 비닐류로 분류하여 재활용할 수 있습니다. <br>내용물을 비우고 깨끗한 상태로 배출해주세요."
            },
            food: {
                '채소 자투리': "채소 자투리는 음식물 쓰레기로 분류하여 재활용할 수 있습니다. <br>이물질을 제거하고 배출해주세요.",
                '채소 껍질': "채소 껍질은 음식물 쓰레기로 분류하여 재활용할 수 있습니다. <br>이물질을 제거하고 배출해주세요.",
                '과일 껍질': "과일 껍질은 음식물 쓰레기로 분류하여 재활용할 수 있습니다. <br>이물질을 제거하고 배출해주세요."
            },
            medicine: {
                '폐약품': "폐약품은 약국이나 보건소에서 수거합니다. <br>함부로 버리지 말고 지정된 장소에 배출해주세요.",
                '사용한 주사기': "사용한 주사기는 병원이나 보건소에서 수거합니다. <br>함부로 버리지 말고 지정된 장소에 배출해주세요.",
                '폐기된 알약': "폐기된 알약은 약국이나 보건소에서 수거합니다. <br>함부로 버리지 말고 지정된 장소에 배출해주세요."
            },
            etc: {
                '옷': "옷은 의류 수거함에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '신발': "신발은 신발 수거함에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '가방': "가방은 재활용 센터에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '장난감': "장난감은 재활용 센터에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '전자제품': "전자제품은 전자제품 수거함에 배출하거나, <br>재사용할 수 있는 경우 기부할 수 있습니다.",
                '건전지': "건전지는 폐건전지 수거함에 배출해주세요.",
                '형광등': "형광등은 폐형광등 수거함에 배출해주세요.",
                '화장품': "화장품 용기는 내용물을 비우고 깨끗이 헹군 후 배출해주세요."
            }
        };
        return `${explanations[trashItem.type][trashItem.text]}<br><br>다음 번에는 ${trashItem.text}를 ${trashItem.type} 분리수거함에 올바르게 분리해 주세요.`;
    }
    closeBtn.addEventListener('click', closeModal);

    function openModal(text) {
        modalText.textContent = text;
        modal.style.display = 'block';
    }
    
    function closeModal() {
        modal.style.display = 'none';
    }
    document.addEventListener('click', function(event) {
        if (event.target.matches('.close')) {
            closeModal();
        }
    });
    
});