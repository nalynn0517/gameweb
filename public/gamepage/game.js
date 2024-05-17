let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const trashItems = document.querySelectorAll('.trash');
    const bins = document.querySelectorAll('.bin');

    trashItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
    });

    bins.forEach(bin => {
        bin.addEventListener('dragover', dragOver);
        bin.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        const id = e.dataTransfer.getData('text');
        const draggedElement = document.getElementById(id);
        const binType = e.target.getAttribute('data-type');

        if (isCorrectBin(id, binType)) {
            e.target.appendChild(draggedElement);
            score++;
            document.getElementById('score').textContent = score;
        }
    }

    function isCorrectBin(trashId, binType) {
        // 쓰레기 아이템 ID와 올바른 분리수거함을 매칭하는 로직을 작성
        const trashTypes = {
            example1: 'paper',
            example2: 'plastic',
            example3: 'can',
            // 추가적인 매칭
        };

        return trashTypes[trashId] === binType;
    }
});