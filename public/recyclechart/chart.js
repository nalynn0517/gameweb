function drawInitialChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['Task', 'Percentage'],
        ['재활용 가능', 30],
        ['재활용 불가능', 70]
    ]);

    var options1 = {
        title: '재활용 통계',
        titleTextStyle: { fontSize: 20 },
        pieSliceText: 'label',
        pieSliceTextStyle: { fontSize: 12 },
        slices: {
            0: { color: '#235B36' },
            1: { color: '#558E65' }
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        },
        chartArea: { width: '85%', height: '70%' },
        legend: 'none',
        tooltip: { trigger: 'none' }
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
    google.visualization.events.addListener(chart1, 'select', function() {
        var selectedItem = chart1.getSelection()[0];
        if (selectedItem) {
            var selectedValue = data1.getValue(selectedItem.row, 0);
            if (selectedValue === '재활용 가능') {
                // 재활용 가능 클릭 시 차트 2 표시
                document.getElementById('piechart2').style.display = 'block';
                document.getElementById('piechart3').style.display = 'none'; // 차트3 숨기기
                drawSecondChart();
            } else if (selectedValue === '재활용 불가능') {
                // 재활용 불가능 클릭 시 차트 3 표시
                document.getElementById('piechart3').style.display = 'block';
                document.getElementById('piechart2').style.display = 'none'; // 차트2 숨기기
                drawThirdChart();
            }
        }
    });

    chart1.draw(data1, options1);
}

function drawSecondChart() {
    var data2 = google.visualization.arrayToDataTable([
        ['Task', 'Percentage'],
        ['종이', 30],
        ['플라스틱', 18],
        ['금속', 6],
        ['유리', 7],
        ['비닐', 10],
        ['음식물', 5],
        ['기타', 10]
    ]);

    var options2 = {
        title: '재활용 가능 통계',
        titleTextStyle: { fontSize: 20 },
        pieSliceText: 'label',
        pieSliceTextStyle: { fontSize: 10},
        slices: {
            0: { color: '#5cb85c' }, 
            1: { color: '#52a552' },
            2: { color: '#499349' }, 
            3: { color: '#408040' }, 
            4: { color: '#376e37' }, 
            5: { color: '#2e5c2e' }, 
            6: { color: '#244924' }, 
            7: { color: '#1b371b' }  
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        },
        chartArea: { width: '85%', height: '70%' },
        legend: 'none',
        tooltip: { trigger: 'focus' }
    };

    var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));

    chart2.draw(data2, options2);
}

function drawThirdChart() {
    var data3 = google.visualization.arrayToDataTable([
        ['Task', 'Percentage'],
        ['종이', 22],
        ['플라스틱', 31],
        ['금속', 4],
        ['유리', 5],
        ['비닐', 7],
        ['음식물', 8],
        ['의약품', 20],
        ['기타', 25]
    ]);

    var options3 = {
        title: '재활용 불가능 통계',
        titleTextStyle: { fontSize: 20 },
        pieSliceText: 'label',
        pieSliceTextStyle: { fontSize: 10 },
        slices: {
            0: { color: '#5cb85c' }, 
            1: { color: '#66b749' }, 
            2: { color: '#69ab4f' }, 
            3: { color: '#5fbc66' }, 
            4: { color: '#4cb84c' }, 
            5: { color: '#6fc258' }, 
            6: { color: '#61a54f' },
            7: { color: '#51bb6b' }  
        },
        animation: {
            duration: 1000,
            startup: true,
            easing: 'out'
        },
        chartArea: { width: '85%', height: '70%' },
        legend: 'none',
        tooltip: { trigger: 'focus' }
    };

    var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));

    chart3.draw(data3, options3);
}

document.addEventListener('DOMContentLoaded', function () {
const showMapButton = document.getElementById('showMapButton');
const mapContainer = document.querySelector('.map-container');

showMapButton.addEventListener('click', function() {
if (mapContainer.style.display === 'block') {
    mapContainer.style.display = 'none'; // 지도가 표시되어 있다면 숨깁니다.
} else {
    mapContainer.style.display = 'block'; // 지도가 숨겨져 있다면 표시합니다.
}
});

const pins = document.querySelectorAll('.pin');
const infoBox = document.querySelector('.info-box');

pins.forEach(pin => {
pin.addEventListener('click', function () {
    const info = this.getAttribute('data-info').split('|');
    infoBox.innerHTML = `<h2>${info[0]}</h2><p> ${info[1]}</p><p> ${info[2]}</p><p> ${info[3]}</p>`;
    infoBox.style.display = 'block';
});
});
});