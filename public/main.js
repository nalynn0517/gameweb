let coords = {
    "경기": {
        stores: [
        { name: "제로웨이스트 차차<br> 밤리단길점", address: "경기도 고양시 일산동구<br>일산로 394번길 15 1층", latitude: 37.684422, longitude: 126.782292, link: "https://map.naver.com/p/search/제로웨이스트차차밤리단길점" },
        { name: "제로웨이스트샵 도토리상점", address: "경기도 고양시 일산서구<br>호수로 856번길 37-7 1층", latitude: 37.681487, longitude: 126.750415, link: "https://map.naver.com/p/search/제로웨이스트샵도토리상점" },
        { name: "제로웨이스트카페일도씨", address: "경기도 평택시<br>고덕국제3길 123 1층", latitude: 37.021357, longitude: 127.066319, link: "https://map.naver.com/p/search/제로웨이스트카페일도씨" },
        { name: "베러띵스", address: "경기도 수원시 권선구<br>매실로 53번길 10-17 1층", latitude: 37.270956, longitude: 127.030435, link: "https://map.naver.com/p/search/베러띵스" },
        { name: "낯설여관204호", address: "경기도 수원시 장안구<br>영화로 71번길 33 2층", latitude: 37.298163, longitude: 127.023504, link: "https://map.naver.com/p/search/낯설여관204호" },
        { name: "빈칸놀이터", address: "경기도 용인시 처인구<br>금학로 426-4 1층", latitude: 37.234668, longitude: 127.180717, link: "https://map.naver.com/p/search/빈칸놀이터" },
        { name: "쏘유니크 비건랩", address: "경기도 안산시 단원구<br>이삭 2길 55-1 1층", latitude: 37.307751, longitude: 126.848845, link: "https://map.naver.com/p/search/쏘유니크비건랩" },
        { name: "숨공작소", address: "경기도 광주시<br>오포로171번길 17-73", latitude: 37.393127, longitude: 127.255664, link: "https://map.naver.com/p/search/숨공작소" },
        { name: "초록숲상점", address: "경기도 평택시<br>용죽6길 22 101호", latitude: 37.016332, longitude: 127.073468, link: "https://map.naver.com/p/search/초록숲상점" },
        { name: "리필위드유", address: "경기도 군포시<br>번영로 502 3층", latitude: 37.353435, longitude: 126.933683, link: "https://map.naver.com/p/search/리필위드유" },
        { name: "슬기로운생활", address: "경기도 성남시 분당구<br>장미로132번길 13 1층", latitude: 37.384701, longitude: 127.115656, link: "https://map.naver.com/p/search/슬기로운생활" },
        { name: "도돌이상점", address: "경기도 시흥시<br>은계호수로 49 시흥 센트럴돔<br>그랑트리 캐슬1 177호", latitude: 37.384212, longitude: 126.789412, link: "https://map.naver.com/p/search/도돌이상점" },
        { name: "바람가게", address: "경기도 부천시<br>원미구 지봉로 122-1", latitude: 37.505708, longitude: 126.767668, link: "https://map.naver.com/p/search/바람가게" },
        { name: "지구시민", address: "경기도 남양주시<br>다산중앙로19번길 21<br>F동 311호", latitude: 37.624734, longitude: 127.168586, link: "https://map.naver.com/p/search/지구시민" },
        { name: "살림가게", address: "경기도 의정부시<br>신흥로258번길 15 2층", latitude: 37.729468, longitude: 127.046784, link: "https://map.naver.com/p/search/살림가게" },
        { name: "돌고래상점", address: "경기도 화성시 봉담읍<br>진등2길 13 1층", latitude: 37.183999, longitude: 127.043923, link: "https://map.naver.com/p/search/돌고래상점" },
        { name: "맹꽁이상점", address: "경기도 시흥시<br>장현능곡로 155<br>플랑드르 2층 204호", latitude: 37.372786, longitude: 126.773225, link: "https://map.naver.com/p/search/맹꽁이상점" },
        { name: "북극곰", address: "경기 남양주시<br>늘을2로 14번길 12<br>이석영신흥상회 3층 301호", latitude: 37.618162, longitude: 127.168775, link: "https://map.naver.com/p/search/북극곰" },
        { name: "에코로이", address: "경기도 김포시<br>양촌읍 양곡4로 25", latitude: 37.622842, longitude: 126.680487, link: "https://map.naver.com/p/search/에코로이" },
        { name: "지구인의 놀이터", address: "경기도 수원시<br>팔달구 화서문로 66", latitude: 37.269967, longitude: 127.007589, link: "https://map.naver.com/p/search/지구인의놀이터" },
        { name: "제로에이블", address: "경기도 안양시 동안구<br>동편로 27번길 7<br>105~106호", latitude: 37.387047, longitude: 126.954976, link: "https://map.naver.com/p/search/제로에이블" },
        { name: "리필: 더 채움샵<br>업사이클 아트센터", address: "경기도 광명시<br>가학로 85번길 142<br>광명업사이클아트센터 내 1층", latitude: 37.479919, longitude: 126.854802, link: "https://map.naver.com/p/search/리필:더채움샵업사이클아트센터" },
        { name: "네모지구", address: "경기도 시흥시<br>능곡번영길 30<br>센텀시티 5층 505호", latitude: 37.390693, longitude: 126.805891, link: "https://map.naver.com/p/search/네모지구" },
        { name: "산제로상점", address: "경기도 부천시 소사구<br>성주로 34번길 40", latitude: 37.483222, longitude: 126.782254, link: "https://map.naver.com/p/search/산제로상점" },
        { name: "바르고 비우고 바르게<br>채우는가게_바비바채", address: "경기도 김포시<br>김포한강 11로 107<br>상가동 1층 10호", latitude: 37.628437, longitude: 126.683354, link: "https://map.naver.com/p/search/바르고비우고바르게채우는가게_바비바채" },
        { name: "제로마을연구소", address: "경기도 성남시 수정구<br>수정로135번길 21 1층", latitude: 37.429218, longitude: 127.153496, link: "https://map.naver.com/p/search/제로마을연구소" },
        { name: "가치가게", address: "경기도 수원시 권선구<br>세권로 140 B01", latitude: 37.261154, longitude: 127.019456, link: "https://map.naver.com/p/search/가치가게"},
        { name: "순환카페1.5", address: "경기도 연천군 전곡읍<br>은전로75-24 1층", latitude: 38.012849, longitude: 127.077763, link: "https://map.naver.com/p/search/순환카페1.5" },
        { name: "공감팩토리", address: "경기도 안양시 동안구<br>동편로 27번길 7<br>105호~106호", latitude: 37.387047, longitude: 126.954976, link: "https://map.naver.com/p/search/공감팩토리" },
        { name: "두고두고", address: "경기도 안산시 상록구<br>성호로 6길 23-1 101호", latitude: 37.314173, longitude: 126.859623, link: "https://map.naver.com/p/search/두고두고" },
        { name: "지구랑마을이", address: "경기도 광주시<br>양촌길 174-6<br>현성아름빌 101동 101-1호", latitude: 37.403666, longitude: 127.247046, link: "https://map.naver.com/p/search/지구랑마을이" },
        { name: "지구돌봄 협동조합", address: "경기도 광명시<br>하안로 288번길 8<br>우성빌딩 601호", latitude: 37.470884, longitude: 126.862662, link: "https://map.naver.com/p/search/지구돌봄협동조합" },
        { name: "다시채움", address: "경기도 용인시 수지구<br>대지로 43 6060호", latitude: 37.318465, longitude: 127.087377, link: "https://map.naver.com/p/search/다시채움" },
        { name: "위로상점", address: "경기도 광명시<br>가학로 85번길 142<br>광명경기문화창조허브", latitude: 37.475818, longitude: 126.851203, link: "https://map.naver.com/p/search/위로상점" },
        { name: "심플소요", address: "경기 용인시 기흥구<br>구갈로 28번길 21-13<br>2층 201호", latitude: 37.272882, longitude: 127.124387, link: "https://map.naver.com/p/search/심플소요" },
        { name: "무해라이프", address: "경기도 화성시 기배로 29", latitude: 37.207416, longitude: 126.924102, link: "https://map.naver.com/p/search/무해라이프" },
        { name: "후곡녹색상점", address: "경기도 고양시<br>일산서구 후곡로 58<br>1층 상가", latitude: 37.685346, longitude: 126.744088, link: "https://map.naver.com/p/search/후곡녹색상점" },
        { name: "카페 아르모니", address: "경기도 김포시<br>김포대로 841 4층 405호", latitude: 37.616291, longitude: 126.714893, link: "https://map.naver.com/p/search/카페아르모니" },
        { name: "컷더트래쉬<br>제로제로 스토어", address: "경기도 부천시 원미구<br>길주로 300 롯데백화점 8층", latitude: 37.486254, longitude: 126.780687, link: "https://map.naver.com/p/search/컷더트래쉬제로제로스토어" },
        ]
    },
    "서울": {
        stores: [
        { name: "베러얼스 제로웨이스트샵 1유로프로젝트점", address: "서울특별시 성동구<br>송정 18길 1-1<br>201호 베러얼스", latitude: 37.563751, longitude: 127.044571, link: "https://map.naver.com/p/search/베러얼스제로웨이스트샵1유로프로젝트점" },
        { name: "덕분애 제로웨이스트샵", address: "서울특별시 서초구<br>효령로 276 203호", latitude: 37.485723, longitude: 127.024167, link: "https://map.naver.com/p/search/덕분에제로웨이스트샵" },
        { name: "제로웨이스트샵 안녕상점", address: "서울특별시 도봉구<br>도봉로 143길 18 2층", latitude: 37.661836, longitude: 127.039226, link: "https://map.naver.com/p/search/제로웨이스트샵안녕상점" },
        { name: "지구샵 제로웨이스트홈", address: "서울특별시 마포구<br>성미산로 155 1층", latitude: 37.555689, longitude: 126.917491, link: "https://map.naver.com/p/search/지구샵제로웨이스트홈" },
        { name: "제로웨이스트샵 퍼스트페이지", address: "서울특별시 송파구<br>토성로 38-6 한강극동아파트<br>상가동 111호", latitude: 37.493014, longitude: 127.118761, link: "https://map.naver.com/p/search/제로웨이스트샵퍼스트페이지" },
        { name: "해달별 제로웨이스트샵", address: "서울특별시 강남구<br>자곡로 191<br>강남푸르지오시티 1차<br>B1 06호", latitude: 37.498641, longitude: 127.030905, link: "https://map.naver.com/p/search/해달별제로웨이스트샵" },
        { name: "탄탄제로 제로웨이스트샵", address: "서울특별시 동작구<br>사당로 16다길 56 1층", latitude: 37.483937, longitude: 126.978571, link: "https://map.naver.com/p/search/탄탄제로제로웨이스트샵" },
        { name: "알맹상점", address: "서울특별시 마포구<br>월드컵로 25길 47 3층", latitude: 37.556203, longitude: 126.906934, link: "https://map.naver.com/p/search/알맹상점" },
        { name: "원점", address: "서울특별시 성동구<br>아차산로 7길 42층 1층", latitude: 37.558471, longitude: 127.056734, link: "https://map.naver.com/p/search/원점" },
        { name: "더피커", address: "서울특별시 성동구<br>왕십리로 14길 9 1층", latitude: 37.561051, longitude: 127.034778, link: "https://map.naver.com/p/search/더피커" },
        { name: "제로웨이스트샵 나아지구", address: "서울특별시 중구<br>마른내로 120 101호", latitude: 37.562589, longitude: 126.998891, link: "https://map.naver.com/p/search/제로웨이스트샵나아지구" },
        { name: "순환지구", address: "서울특별시 성북구<br>동소문로 25길 8 1층", latitude: 37.587265, longitude: 127.000673, link: "https://map.naver.com/p/search/순환지구" },
        { name: "알맹상점 리스테이션", address: "서울특별시 중구<br>한강대로 405 4층", latitude: 37.555794, longitude: 126.978968, link: "https://map.naver.com/p/search/알맹상점리스테이션" },
        { name: "수리상점", address: "서울특별시 마포구<br>망원로 8길 6 지하1층", latitude: 37.551965, longitude: 126.911025, link: "https://map.naver.com/p/search/수리상점"},
        { name: "보탬상점", address: "서울특별시 중랑구<br>봉화산로 22길 2<br>스타팰리스 1층", latitude: 37.605929, longitude: 127.086001, link: "https://map.naver.com/p/search/보탬상점" },
        { name: "송포어스", address: "서울특별시 강동구<br>풍성로 35길 34 1층", latitude: 37.530156, longitude: 127.132229, link: "https://map.naver.com/p/search/송포어스" },
        { name: "일상공감 길음", address: "서울특별시 성북구<br>삼양로 27 1층", latitude: 37.608728, longitude: 127.021881, link: "https://map.naver.com/p/search/일상공감길음" },
        { name: "디어얼스", address: "서울특별시 은평구<br>녹번로 6길 2 1층", latitude: 37.604022, longitude: 126.929472, link: "https://map.naver.com/p/search/디어얼스" },
        { name: "쓰담쓰담 협동조합", address: "서울특별시 은평구<br>연서로 35길 38 3층", latitude: 37.607143, longitude: 126.925568, link: "https://map.naver.com/p/search/쓰담쓰담협동조합" },
        { name: "북촌감성", address: "서울특별시 종로구<br>계동길 60 지하1층", latitude: 37.578785, longitude: 126.982912, link: "https://map.naver.com/p/search/북촌감성" },
        { name: "지구공감", address: "서울특별시 동작구<br>상도로 61길 54 2층", latitude: 37.499128, longitude: 126.939152, link: "https://map.naver.com/p/search/지구공감" },
        { name: "지미프로젝트", address: "서울특별시 송파구<br>오름로 36길 66<br>씨제이빌딩 동관 2층", latitude: 37.507935, longitude: 127.109773, link: "https://map.naver.com/p/search/지미프로젝트" },
        { name: "대안생활공기", address: "서울특별시 강동구<br>상암로 10 201호", latitude: 37.547191, longitude: 127.138796, link: "https://map.naver.com/p/search/대안생활공기" },
        { name: "노플맘", address: "서울특별시 금천구<br>시흥대로 30길 19 1층", latitude: 37.450585, longitude: 126.900319, link: "https://map.naver.com/p/search/노플맘" },
        { name: "플라프리", address: "서울특별시 동작구<br>동작대로 157-4 1층", latitude: 37.482019, longitude: 126.906597, link: "https://map.naver.com/p/search/플라프리" },
        { name: "허그어웨일", address: "서울특별시 강서구<br>화곡로 55길 23 1층", latitude: 37.539333, longitude: 126.851990, link: "https://map.naver.com/p/search/허그어웨일" },
        { name: "아트인사이트", address: "서울특별시 영등포구<br>당산로 16길 17-1<br>1층 102호, 103호", latitude: 37.531848, longitude: 126.909642, link: "https://map.naver.com/p/search/아트인사이트" },
        { name: "아워리 라이프", address: "서울시 노원구<br>중계로 2길 84 1층", latitude: 37.649772, longitude: 127.065283, link: "https://map.naver.com/p/search/아워리라이프" },
        { name: "햇빛상점", address: "서울특별시 은평구<br>연서로 16 헤르미온1층", latitude: 37.604462, longitude: 126.920747, link: "https://map.naver.com/p/search/햇빛상점" },
        ]
    },
    "충청": {
        stores: [
        { name: "탄소영제로웨이스트샵", address: "충청남도 공주시<br>먹자 1길 14", latitude: 36.460160, longitude: 127.118489, link: "https://map.naver.com/p/search/탄소명제로웨이스트샵" },
        { name: "제로웨이스트 카페 놀다가게", address: "충청남도 아산시<br>송악면 역촌길 24<br>송악마을공간해유 1층", latitude: 36.858641, longitude: 127.027872, link: "https://map.naver.com/p/search/제로웨이스트카페놀다가게" },
        { name: "함께그린협동조합 꼭꼭가게", address: "충청남도 천안시<br>서북구 불당23로 73-27 133호", latitude: 36.816871, longitude: 127.132684, link: "https://map.naver.com/p/search/함께그린협동조합꼭꼭가게제로웨이스트샵" },
        { name: "지구살림", address: "충청남도 당진시<br>해로만로 31", latitude: 36.894054, longitude: 126.642862, link: "https://map.naver.com/p/search/제로웨이스트샵지구살림" },
        { name: "후후", address: "충청남도 아산시<br>도고면 아산만로 171", latitude: 36.764401, longitude: 127.004159, link: "https://map.naver.com/p/search/제로웨이스트샵후후" },
        { name: "지구로운 제로웨이스트샵", address: "충청남도 보령시<br>명천로 4길 21<br>1동 105호", latitude: 36.345880, longitude: 126.580991, link: "https://map.naver.com/p/search/지구로운제로웨이스트샵" },
        { name: "함께가치 생활공작소", address: "충청남도 금산군<br>금산읍 비호로 146<br>중도리 104-12", latitude: 36.110689, longitude: 127.496010, link: "https://map.naver.com/p/search/함께가치생활공작소제로웨이스트샵" },
        { name: "푸른별상점", address: "충청남도 천안시<br>동남구 청수 10길 46<br>1층", latitude: 36.816614, longitude: 127.175265, link: "https://map.naver.com/p/search/푸른별상점" },
        { name: "멜리사센츠", address: "충청남도 부여군<br>부여읍 성왕로 328번길<br>18-17 흥선아파트상가동", latitude: 36.293398, longitude: 126.918985, link: "https://map.naver.com/p/search/멜리사센츠" },
        { name: "위요", address: "충청남도 홍성군<br>홍성읍 조양로<br>143번길 49", latitude: 36.598889, longitude: 126.661294, link: "https://map.naver.com/p/search/위요" }
        ]
    },
    "전라": {
        stores: [
        { name: "제로웨이스트 흥분색", address: "전라북도 군산시<br>옥구읍 옥구남로 11<br>조용한흥분색", latitude: 35.991913, longitude: 126.775492, link: "https://map.naver.com/p/search/제로웨이스트홍분색" },
        { name: "자주적관람", address: "전라북도 군산시<br>구영 5길 21-4", latitude: 35.967279, longitude: 126.722596, link: "https://map.naver.com/p/search/자주적관람" },
        { name: "협동조합 비니루없는점빵", address: "전라북도 남원시<br>광한북로 34-3", latitude: 35.412813, longitude: 127.376050, link: "https://map.naver.com/p/search/협동조합비니루없는점빵" },
        { name: "굿바이스토어", address: "전라북도 남원시<br>용성로71 1층", latitude: 35.412476, longitude: 127.387529, link: "https://map.naver.com/p/search/굿바이스토어" },
        { name: "늘미곡", address: "전라북도 전주시 <br>산구 선너머로 16<br>상가2동 1층 1호", latitude: 35.806231, longitude: 127.115413, link: "https://map.naver.com/p/search/늘미곡" },
        { name: "제비마트", address: "전라북도 전주시<br>완산구 서학 3길 84<br>1층", latitude: 35.821511, longitude: 127.111861, link: "https://map.naver.com/p/search/제비마트" }
        ]
    },
    "강원": {
        stores: [
        { name: "동그란책", address: "강원도 속초시<br>중앙로 46번길 45", latitude: 38.204553, longitude: 128.591934, link: "https://map.naver.com/p/search/동그란책" },
        { name: "지니솝", address: "강원도 동해시<br>대동로 118-1", latitude: 37.503820, longitude: 129.120365, link: "https://map.naver.com/p/search/지니솝" }
        ]
    },
    "경상": {
        stores: [
        { name: "제로웨이스트샵, 홍시생활", address: "경상북도 청도군<br>화양읍 도주관로 152<br>초록집", latitude: 35.644291, longitude: 128.736775, link: "https://map.naver.com/p/search/제로웨이스트샵홍시생활" },
        { name: "카페오롯이", address: "경상북도 문경시<br>문경읍 온천 8길 4", latitude: 36.594174, longitude: 128.188946, link: "https://map.naver.com/p/search/카페오롯이" },
        { name: "용기내요", address: "경상북도 성산시<br>박물관로 7길 3-15 101호", latitude: 36.904482, longitude: 128.688124, link: "https://map.naver.com/p/search/용기내요" },
        { name: "블루게리타", address: "경상북도 구미시<br>백산로 141 아카데미상가<br>1층 9호", latitude: 36.123464, longitude: 128.354262, link: "https://map.naver.com/p/search/블루게리타" },
        { name: "지구공방", address: "경상북도 포항시<br>남구 정몽주로 861번길<br>9-5", latitude: 36.012486, longitude: 129.344164, link: "https://map.naver.com/p/search/지구공방" },
        { name: "밭매기", address: "경상북도 경주시<br>포석로 1061-4", latitude: 35.871546, longitude: 129.261606, link: "https://map.naver.com/p/search/밭매기" },
        { name: "이타", address: "경상북도 경주시<br>국당동길 24", latitude: 35.837105, longitude: 129.211612, link: "https://map.naver.com/p/search/이타" },
        { name: "초록별상점", address: "경상북도 구미시<br>검성로 103-50<br>상가동 105호", latitude: 36.123577, longitude: 128.342524, link: "https://map.naver.com/p/search/초록별상점" },
        { name: "머머상점", address: "경상북도 구미시<br>봉곡남로 96<br>4층 402호", latitude: 36.129646, longitude: 128.375207, link: "https://map.naver.com/p/search/머머상점" },
        { name: "공동의집 살림", address: "경상북도 의성군<br>단촌면 장터길 8", latitude: 36.341888, longitude: 128.695842, link: "https://map.naver.com/p/search/공동의집살림" },
        { name: "그냥, 거기", address: "경상북도 포항시<br>남구 연일읍<br>원서길 144", latitude: 35.999038, longitude: 129.424953, link: "https://map.naver.com/p/search/그냥,거기" }
        ]
    }
};


let map; // 전역 변수로 지도 객체를 선언
let markers = []; // 전역 변수로 마커 배열 선언

function setupLogoClick() {
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", function() {
        window.location.href = "http://localhost:8080";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // 각 페이지에서 로고 클릭 이벤트 설정
    setupLogoClick();

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
    map = new kakao.maps.Map(container, options);

    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 제로 웨이스트 샵 정보를 가져와서 표시
    showZeroWasteStores(map);

    // 검색 버튼 클릭 이벤트 설정 (지도 초기화 후 설정)
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function() {
        const searchInput = document.getElementById("searchInput").value;
        searchStores(searchInput);
    });
}

// 제로 웨이스트 샵을 지도에 표시하는 함수
function showZeroWasteStores(map) {
    // 제로 웨이스트 샵 정보를 가져옴 (위에 선언한 coords 객체 사용)
    const zeroWasteStores = coords;

    // 제로 웨이스트 샵 마커 이미지
    const markerImages = {
        경기: new kakao.maps.MarkerImage('img/m1.png', new kakao.maps.Size(18, 30)),
        서울: new kakao.maps.MarkerImage('img/m5.png', new kakao.maps.Size(18, 30)),
        충청: new kakao.maps.MarkerImage('img/m3.png', new kakao.maps.Size(18, 30)),
        전라: new kakao.maps.MarkerImage('img/m4.png', new kakao.maps.Size(18, 30)),
        강원: new kakao.maps.MarkerImage('img/m2.png', new kakao.maps.Size(18, 30)), 
        경상: new kakao.maps.MarkerImage('img/m6.png', new kakao.maps.Size(18, 30)),
    };

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

            markers.push(marker); // 생성된 마커를 배열에 추가
    
            // 인포윈도우를 표시하는 클로저 함수 생성
            const showInfoWindow = (marker, store) => {
                return () => {
                    // 인포윈도우 내용 HTML 생성
                    const content = `
                        <div style="width: 200px; height:170px; padding: 10px; position: relative;">
                            <div>${store.name}</div>
                            <br>
                            <div>${store.address}</div>
                            <button style="position: absolute; right: 10px; bottom: 10px;" onclick="window.open('${store.link}', '_blank')">➡️</button><div>
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

// 기존 마커를 지도에서 제거하는 함수
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = []; // 배열 초기화
}

// 검색어를 사용하여 가게를 검색하고 지도에 표시하는 함수
function searchStores(searchQuery) {
    const zeroWasteStores = coords;
    const searchButton = document.querySelector(".searchButton");

    const markerImages = {
        경기: new kakao.maps.MarkerImage('img/m1.png', new kakao.maps.Size(18, 30)),
        서울: new kakao.maps.MarkerImage('img/m5.png', new kakao.maps.Size(18, 30)),
        충청: new kakao.maps.MarkerImage('img/m3.png', new kakao.maps.Size(18, 30)),
        전라: new kakao.maps.MarkerImage('img/m4.png', new kakao.maps.Size(18, 30)),
        강원: new kakao.maps.MarkerImage('img/m2.png', new kakao.maps.Size(18, 30)), 
        경상: new kakao.maps.MarkerImage('img/m6.png', new kakao.maps.Size(18, 30)),
    };

    // 기존 마커 초기화
    clearMarkers();

    for (const [region, data] of Object.entries(zeroWasteStores)) {
        const stores = data.stores;
        for (const store of stores) {
            // 가게 이름과 검색어를 모두 소문자로 변환하여 비교
            if (store.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                const markerPosition = new kakao.maps.LatLng(store.latitude, store.longitude);
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImages[region],
                    map: map
                });

                markers.push(marker); // 검색 결과 마커를 배열에 추가

                const showInfoWindow = (marker, store) => {
                    return () => {
                        const content = `
                            <div style="width: 200px; height:170px; padding: 10px; position: relative;">
                                <div>${store.name}</div>
                                <br>
                                <div>${store.address}</div>
                                <button style="position: absolute; right: 10px; bottom: 10px;" onclick="window.location.href='${store.link}'">➡️</button>
                            </div>
                        `;
                        const infoWindow = new kakao.maps.InfoWindow({
                            content: content,
                            removable: true
                        });
                        infoWindow.open(map, marker);
                    };
                };

                kakao.maps.event.addListener(marker, 'click', showInfoWindow(marker, store));
            }
        }
    }
}