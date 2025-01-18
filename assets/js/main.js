// 테스트 관련 로직을 추가할 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    // 시작하기 버튼 이벤트 리스너
    const startButton = document.querySelector('.start-button');
    if (startButton) {
        startButton.addEventListener('click', function(e) {
            e.preventDefault();
            // 테스트 시작 로직
            console.log('테스트를 시작합니다.');
        });
    }
});
