const questions = [
    "극심한 피로감을 느낀다",
    "충분히 잠을 자도 피곤하다",
    "두통이나 근육통이 자주 있다",
    "식욕이 변했다 (늘거나 줄었다)",
    "불면증이 있다",
    "작은 일에도 짜증이 난다",
    "일에 대한 열정이 사라졌다",
    "미래가 불안하고 우울하다",
    "무기력감을 자주 느낀다",
    "집중하기 어렵다",
    "일이나 공부를 미룬다",
    "사람 만나는 것을 피한다",
    "취미생활이나 운동을 하지 않는다",
    "일상적인 결정을 내리기 어렵다",
    "업무나 학업 성과가 떨어졌다"
];

let currentQuestion = 0;
let scores = [];

function startTest() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('test-page').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionNumber = currentQuestion + 1;
    document.querySelector('.question-number').textContent = `질문 ${questionNumber}/15`;
    document.getElementById('question-text').textContent = questions[currentQuestion];
    document.querySelector('.progress').style.width = `${(questionNumber/15)*100}%`;
}

function selectAnswer(score) {
    scores.push(score);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalScore = scores.reduce((a, b) => a + b, 0);
    let result = '';
    let advice = '';
    let solutions = [];

    if (totalScore <= 30) {
        result = '정상 범위';
        advice = '현재 상태를 잘 유지하고 있습니다.';
        solutions = [
            '규칙적인 생활 리듬 유지하기',
            '현재의 스트레스 관리 방법 계속하기',
            '정기적인 운동으로 건강 관리하기',
            '취미 생활 지속하기',
            '주기적으로 자신의 상태 점검하기'
        ];
    } else if (totalScore <= 45) {
        result = '경미한 번아웃 상태';
        advice = '초기 번아웃 증상이 보입니다. 적절한 휴식과 관리가 필요합니다.';
        solutions = [
            '하루 7-8시간 충분한 수면 취하기',
            '주말은 완전한 휴식 시간으로 활용하기',
            '가벼운 운동으로 스트레스 해소하기',
            '업무나 학업 중간에 짧은 휴식 자주 가지기',
            '퇴근 후나 휴일에는 업무 연락 자제하기'
        ];
    } else if (totalScore <= 60) {
        result = '중등도 번아웃 상태';
        advice = '상당한 수준의 번아웃 상태입니다. 적극적인 관리가 필요합니다.';
        solutions = [
            '전문가 상담 고려하기',
            '업무나 학업의 우선순위 재설정하기',
            '명상 또는 요가로 마음 다스리기',
            '주변에 도움을 요청하고 업무 분담하기',
            '일주일 정도의 휴가 고려하기',
            '규칙적인 운동으로 스트레스 해소하기',
            '건강한 식단으로 영양 관리하기'
        ];
    } else {
        result = '심각한 번아웃 상태';
        advice = '심각한 번아웃 상태입니다. 전문가의 도움이 반드시 필요합니다.';
        solutions = [
            '즉시 전문가 상담 받기',
            '필요한 경우 병원 진료 고려하기',
            '2주 이상의 충분한 휴식 계획하기',
            '업무나 학업량 대폭 줄이기',
            '가족이나 친구들과 충분한 대화하기',
            '스트레스 유발 환경에서 잠시 벗어나기',
            '일상생활 루틴 재설정하기',
            '충분한 수면과 휴식 취하기'
        ];
    }

    document.getElementById('test-page').innerHTML = `
        <div class="result-container">
            <h2>테스트 결과</h2>
            <div class="divider"></div>
            
            <div class="result-summary">
                <p class="result-score">총점: ${totalScore}점</p>
                <p class="result-title">${result}</p>
                <p class="result-advice">${advice}</p>
            </div>

            <div class="solutions-container">
                <h3>맞춤형 해결방안</h3>
                <div class="solutions-list">
                    ${solutions.map(solution => `
                        <div class="solution-item">
                            <span class="solution-bullet">•</span>
                            <span class="solution-text">${solution}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <button onclick="location.reload()" class="start-button">다시 테스트하기</button>
        </div>
    `;
}
