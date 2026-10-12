/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 삼총사
유형: 구현
날짜: 2026-10-12
Review 여부: true

# 📰 문제 설명
- 정수 번호를 지닌 학생들의 번호가 담긴 배열 number가 주어짐
- 세명의 학생을 골라, 번호들을 합했을때 0이되면 그 셋을 삼총사라고 함
- 주어진 number에서 삼총사를 만들 수 있는 방법의 수를 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 삼중 for문
    - answer 변수를 0으로 초기화
    - 삼중 for문으로 number 순회
        - 1번째 for문(루프변수: i): number의 0번 ~ number.length-3번 인덱스를 순회
        - 2번쨰 for문(루프변수: j): number의 i+1번 ~ number.length-2번 인덱스를 순회
        - 3번째 for문(루프변수: k)
            - number의 j+1번 ~ number.length-1번 인덱스를 순회
            - number[i] + number[j] + number[k] === 0이면 answer++
    - for문 종료 후 answer 반환


- 방식2. 순조부 - 조합

# ⏰ 시간복잡도 O(N^3)
- for문이 3번 중첩되어 있으며 각 for문은 number의 길이에 비례하는 횟수를 반복하므로
- 전체 시간복잡도는 O(N^3)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 조합 알고리즘을 재귀함수 형태로 구현하는 것을 해내지 못했다.

*/

function solution(number) {
  let answer = 0;
  const len = number.length;

  for (let i = 0; i <= len - 3; i++) {
    for (let j = i + 1; j <= len - 2; j++) {
      for (let k = j + 1; k <= len - 1; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
