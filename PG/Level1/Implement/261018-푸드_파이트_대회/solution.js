/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 푸드 파이트 대회
유형: 구현
날짜: 2026-10-18
Review 여부: false

# 📰 문제 설명
- 푸드 파이트 대회는 두명의 선수가 각각 왼쪽에서 오른쪽, 오른쪽에서 왼쪽으로 음식을 먹는 시합
- 음식은 칼로리 순서대로 놓여 있으며, 음식의 중앙에는 물이 놓여있으며 먼저 물을 먹는 선수가 승리
- 음식의 종류는 1-8가지 이며, 두명의 선수는 동일한 양, 수의 음식을 먹음
- 준비된 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어짐
- 이 때, 0번 인덱스의 음식은 물임
= 대회를 위한 음식의 배치를 나타내는 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
1.  answer 변수를 []으로 초기화
2.  한 사람이 먹을 음식에 대한 배치를 answer 배열에 추가
    - 중첩 for문으로 다음 작업을 수행
        - 외부 for문
            - food 배열을 순회
            - 루프변수 i의 범위: 1 ~ food.length-1
            - i가 곧 음식의 번호임
            - foodForOnePerson 변수를 Math.trunc(food[i] / 2)로 초기화
        - 내부 for문: i를 food[i]를 2로 나눈 몫 만큼 answer.push(i)

3 answer.join("") + "0" + answer.reverse().join("")을 반환

# ⏰ 시간복잡도 O(N)
- 외부 for문은 food 배열의 길이(N) 만큼 반복하므로 시간복잡도가 O(N)이다.
- 내부 for문
    - food 배열의 요소를 2로 나눈 몫 만큼 반복하는데, food의 원소는 1에서 1000으로 정해져있음.
    - 따라서 상수처리가 가능하다.
- join()와 reverse() 메서드
    - answer 배열의 길이(K) 만큼 반복함
    - 이 때 최악의 상황에서 K는 500N이므로 O(K) = O(N)이다.
- 전체 작업은 순차 수행되므로 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- repeat() 메서드를 사용하여 코드의 가독성을 더 높일 수 있었다.

*/

function solution(food) {
  const answer = [];

  for (let i = 1; i < food.length; i++) {
    const foodForOnePerson = Math.trunc(food[i] / 2);

    for (let j = 0; j < foodForOnePerson; j++) {
      answer.push(i);
    }
  }

  return answer.join("") + "0" + answer.reverse().join("");
}

console.log(solution([1, 3, 4, 6]));
