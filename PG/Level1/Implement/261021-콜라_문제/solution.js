/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 콜라 문제
유형: 구현
날짜: 2026-10-21
Review 여부: false

# 📰 문제 설명
- 콜라 문제를 일반화 시키는 문제를 해결하는 코드를 짤 예정
- 빈병 a병을 가져다 주면 콜라 b병을 가져다주는 마트가 있음
- 빈병 n병이 있을때 마트에서 받을 수 있는 콜라의 병 개수를 반환하는 함수 만들기
- 단, 가지고 있는 병이 a개 미만 이면 콜라를 받지 못함 
- 1 <= b < a <= n <= 1,000,000

# 💡 문제 풀이
- answer 변수를 0으로 초기화
- while문으로 다음 작업을 수행
    - 루프조건: n >= a
    - 변수 별 의미
        - n: 현재 갖고 있는 빈병의 수
        - answer: 현재까지 받은 누적 콜라의 수
        - take: 해당 순회에서 마트에서 받는 콜라의 수
    - take 변수를 Math.trunc(n / a) * b로 초기화
    - answer에 take를 더함 -> 받는 콜라의 수 누적 합
    - n에 n % a를 할당 -> 마트에서 가져다 주고 남은 빈병의 수 할당
    - n에 take를 더함 -> 마트에서 받은 콜라를 마시면서 생긴 빈병 더하기
- while문 종료 후 answer 반환

# ⏰ 시간복잡도 O(log N)
- 반복문을 한 번 실행한 후의 빈 병 수는 다음과 같음
    - n = (n % a) + Math.trunc(n / a) * b
- a > b이므로 교환을 반복할수록 빈 병의 수는 장기적으로 감소함
- 빈 병 수는 반복할 때마다 일정 비율로 감소하는 형태를 보이므로, 반복 횟수는 초기 빈 병 수 N에 대해 로그 규모로 증가함
- 따라서 시간 복잡도는 O(log N)으로 분석할 수 있음

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const take = Math.trunc(n / a) * b;
    answer += take;
    n = (n % a) + take;
  }

  return answer;
}

console.log(solution(2, 1, 20));
