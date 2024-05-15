// JavaScript로 밑줄 제거 및 페이지 이동 처리
document.getElementById("logo-link").addEventListener("click", function(event) {
    // 기본 동작인 페이지 이동을 취소
    event.preventDefault();
    // 페이지 이동
    window.location.href = this.getAttribute("href");
});

document.addEventListener("DOMContentLoaded", function () {
    // 카카오맵 API 키
    const kakaoApiKey = '8948120168a32c7a96068b04adbb1558';

    // 카카오맵 API를 비동기로 로드
    loadKakaoMapAPI(kakaoApiKey);

});

// 카카오맵 API를 비동기로 로드하는 함수
function loadKakaoMapAPI(apiKey) {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,drawing`;
    document.body.appendChild(script);
    script.onload = () => {
        // 카카오맵 API 로드 후 초기화 함수 호출
        initMap();
    };
}

// 카카오맵 초기화 함수
function initMap() {
    // 지도 생성 및 표시할 div
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(36.6050, 127.5170), // 중심 위치 설정 (경도 127.5170, 위도 36.6050)
        level: 12 // 지도의 확대 레벨 (8도 영역)
    };

    // 지도 생성
    const map = new kakao.maps.Map(container, options);

    // 제로 웨이스트 샵 정보를 가져와서 표시
    showZeroWasteStores(map);
}

// 제로 웨이스트 샵을 지도에 표시하는 함수
function showZeroWasteStores(map) {
    // 제로 웨이스트 샵 정보를 가져옴 (위에 선언한 coords 객체 사용)
    const zeroWasteStores = coords;

    // 제로 웨이스트 샵 마커 이미지
    const markerImages = {
        경기: new kakao.maps.MarkerImage('img/m1.png', new kakao.maps.Size(18, 30)),
        서울: new kakao.maps.MarkerImage('img/m2.png', new kakao.maps.Size(18, 30)),
        충청: new kakao.maps.MarkerImage('img/m3.png', new kakao.maps.Size(18, 30)),
        전라: new kakao.maps.MarkerImage('img/m4.png', new kakao.maps.Size(18, 30)),
        강원: new kakao.maps.MarkerImage('img/m5.png', new kakao.maps.Size(18, 30)), 
        경상: new kakao.maps.MarkerImage('img/m6.png', new kakao.maps.Size(18, 30)),
    };

    // 제로 웨이스트 샵 정보 반복해서 처리
    for (const [region, data] of Object.entries(zeroWasteStores)) {
        // 각 지역의 제로 웨이스트 샵 정보 가져오기
        const stores = data.stores;

        // 제로 웨이스트 샵 정보 반복해서 처리
        for (const store of stores) {
            // 마커 위치 설정
            const markerPosition = new kakao.maps.LatLng(store.latitude, store.longitude);

            // 마커 생성
            const marker = new kakao.maps.Marker({
                position: markerPosition,
                image: markerImages[region], // 마커 이미지 설정
                map: map // 지도 설정
            });

            // 인포윈도우를 표시하는 클로저 함수 생성
            const showInfoWindow = (marker, store) => {
                return () => {
                    // 인포윈도우 내용 HTML 생성
                    const content = `
                        <div style="width: 200px; height: auto; padding: 10px;">
                            <div>${store.name}</div>
                            <br>
                            <div>${store.address}</div>
                        </div>
                    `;

                    // 인포윈도우 생성
                    const infoWindow = new kakao.maps.InfoWindow({
                        content: content,
                        removable: true // 닫기 버튼 표시
                    });

                    // 인포윈도우 지도에 표시
                    infoWindow.open(map, marker);
                };
            };

            // 마커 클릭 이벤트 리스너 등록
            kakao.maps.event.addListener(marker, 'click', showInfoWindow(marker, store));
        }
    }
}
