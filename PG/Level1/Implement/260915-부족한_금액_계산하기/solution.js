/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 부족한 금액 계산하기
유형: 구현
날짜: 2026-09-15
Review 여부: false

# 📰 문제 설명
- 놀이기구 이용료는 price이며 n번째로 이용할 때 마다 n배의 요금이 적용됨
- price-이용료(첫번째 이용 시), money-가진금액, count-이용횟수가 주어짐
- 놀이기구를 count번 이용했을 경우 부족한 금액을 반환하는 함수 만들기
- 금액이 부족하지 않는 경우 0을 반환
    
# 💡 문제 풀이
- 총 이용요금을 저장할 변수 totalPrice을 0으로 초기화
- for문을 통해 총 이용요금을 계산 (루프변수 i는 1이상 n이하)
    - totalPrice에 i * price를 더함
- totalPrice - money이 양수라면 0을 반환
- 그렇지 않다면, 해당 차액을 반환 

# ⏰ 시간복잡도: O(n)
- for문을 제외한 연산들의 시간복잡도는 O(1)이다.
- for문은 count회 만큼 반복하므로 최종 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  const result = totalPrice - money > 0 ? totalPrice - money : 0;

  return result;
}

console.log(solution(3, 20, 4));
