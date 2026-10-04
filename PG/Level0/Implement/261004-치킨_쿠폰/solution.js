/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 치킨 쿠폰
유형: 구현
날짜: 2026-10-04
Review 여부: false

# 📰 문제 설명
- 치킨집에서 치킨을 시켜먹으면 쿠폰 한장을 발급해줌
- 쿠폰을 열장 모으면 치킨 한마리를 서비스로 받을 수 있음
- 서비스 치킨에도 쿠폰이 발급됨
- 시켜먹은 치킨의 수 chicken이 주어짐
- 최대로 받을 수 있는 서비스 치킨의 수를 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 직접 시킨 치킨과 서비스 치킨 구분하기 -> 틀린 방식
    - 변수 a와 b를 0으로 초기화
        - a: 직접 시켜먹은 치킨으로 제공되는 쿠폰으로 받는 서비스 치킨의 마리수
        - b: 서비스 치킨으로 제공되는 쿠폰으로 받는 서비스 치킨의 마리수
    - a + b의 결과값을 반환

- 방식2. 서비스 치킨 수를 누적합으로 구하기
    - service 변수를 0으로 초기화
    - coupon 변수를 chicken의 값으로 초기화
    - while문으로 다음 작업 수행
        - 루프 조건: Math.trunc(coupon/10) > 0
        - coupon을 10으로 나눈 몫을 service에 더하기
        - coupon에 coupon을 10으로 나눈 나머지와 service를 더한 값을 할당
    - while문 종료 후 service 반환

# ⏰ 시간복잡도 O(N)
- while문은 주어진 chicken의 수의 비례하여 반복 수행함
- while문 내부의 연산은 단순 수식 연산 -> O(1)
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(chicken) {
  let [coupon, service] = [chicken, 0];

  while (Math.trunc(coupon / 10) > 0) {
    const addService = Math.trunc(coupon / 10);
    service += addService;
    coupon = (coupon % 10) + addService;
  }

  return service;
}

console.log(solution(1081));
