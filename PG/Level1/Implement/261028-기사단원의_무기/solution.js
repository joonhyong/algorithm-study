/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 기사단원의 무기
유형: 구현
날짜: 2026-10-28
Review 여부: false

# 📰 문제 설명
- 숫자나라의 기사단의 기사들은 1번부터 number번까지의 번호가 지정되어있음
- 기사들은 자신의 기사번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매함
- 이 때, 이웃나라와의 협약에 의해 공격력 제한수치가 있음
- 제한수치를 초과하는 공격력의 무기를 구매해야하는 기사는 협약기관에서 정한 공격력의 무기를 구매해야함
- 무기의 공격력 1당 1KG의 철이 필요함
- 기사단원의 수 number, 이웃나라와 협약한 공격력 제한수치 limit, 협약기관이 정한 공격력 power가 주어질 때,
- 필요한 무기들을 만드는데 필요한 철의 무게를 반환하는 함수 만들기

# 💡 문제 풀이
- 숫자를 매개변수로 받아 약수의 수를 반환하는 cntDiv() 함수 생성
    1. 매개변수 n으로 자연수가 주어짐
    2. cnt 변수를 0으로 초기화
    3. sqrt 변수를 Math.sqrt(n)으로 초기화
    4. for문으로 1부터 sqrt까지 다음 작업 수행
        - n을 i로 나눈 나머지가 0이라면 다음 작업 수행
            - i제곱이 n이라면 cnt += 1
            - 아니라면 cnt += 2
    5.for문 종료 후 cnt 반환

- solution() 함수 작성
    1. answer 변수를 0으로 초기화
    2. for문으로 1부터 number까지 다음 작업 수행
        - wepon 변수를 cntDiv(i)로 초기화
        - wepon > power 라면 answer += power
        - 아니라면 answer += wepon
    3. for문 종류 후 answer 반환

# ⏰ 시간복잡도 O(N sqrt(N))
- 기사단원의 수: N
- cntDiv(K) 함수의 시간복잡도는 O(sqrt(K))

- solution() 함수의 for문은 cntDiv() 함수를 N회 호출
- 각 호출에서 K는 최대 N이므로 한번의 호출에 최대 O(sqrt(N)) 소요
- 따라서 전체 시간복잡도는 O(N sqrt(N))

# 🚀 알게 된 점
- 약수는 영어로 Divisor
- 제곱 연산자 **: 밑 ** 지수 형태로 사용

# 💭 아쉬운 점

*/

function cntDiv(n) {
  let cnt = 0;
  const sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      if (i ** 2 === n) cnt += 1;
      else cnt += 2;
    }
  }
  return cnt;
}

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const weapon = cntDiv(i);
    if (weapon > limit) answer += power;
    else answer += weapon;
  }

  return answer;
}

console.log(solution(5, 3, 2));
