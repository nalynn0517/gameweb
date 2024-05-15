const trash = document.getElementById('trash');
const bins = document.querySelectorAll('.bin');

// 랜덤 쓰레기 종류
const trashTypes = ['재활용', '음식물', '일반'];
let currentTrashType = '';

// 쓰레기 종류 설정
function setTrashType() {
    currentTrashType = trashTypes[Math.floor(Math.random() * trashTypes.length)];
    trash.textContent = currentTrashType;
}

// 드래그 앤 드롭 이벤트 핸들러
trash.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', currentTrashType);
});

bins.forEach(bin => {
    bin.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    bin.addEventListener('drop', (e) => {
        e.preventDefault();
        const droppedTrash = e.dataTransfer.getData('text/plain');
        if (droppedTrash === bin.textContent) {
            alert('정답입니다!');
        } else {
            alert('다시 시도하세요.');
        }
        setTrashType();
    });
});

// 초기 쓰레기 설정
setTrashType();
