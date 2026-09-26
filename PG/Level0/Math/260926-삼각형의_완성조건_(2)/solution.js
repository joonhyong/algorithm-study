/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 삼각형의 완성조건 (2)
유형: 수학, 구현
날짜: 2026-09-26
Review 여부: false

# 📰 문제 설명
- 삼각형의 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야함
- 두 변의 길이가 담긴 배열 sides가 주어짐
- 나머지 한 변이 될 수 있는 정수의 개수를 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 0으로 초기화
- sides 배열을 sort((a, b) => a - b)로 오름차순 정렬
- sides[1]이 더 긴 변, sides[0]이 더 짧은 변

- 경우의 수를 두 가지로 나눈다.
    - sides[0], sides[1]을 제외한 변을 x라고 하자
    
    - 경우1. 두 변이 2, 3번째로 긴 변인 경우
        - x의 범위
            - x < sides[0] + sides[1], x > sides[1]
            - sides[1] < x < sides[0] + sides[1]
        - x의 개수: sides[0] - 1
    
    - 경우2. sides[1]이 1번째로 긴 변인 경우
        - x의 범위
            - sides[1] < x + sides[0], x <= sides[1]
            - sides[1] - sides[0] < x <= sides[1]
        - x의 개수: sides[0]
    
- 경우 1, 2에서의 x의 개수를 더한 값인 sides[0] * 2 - 1 반환

# ⏰ 시간복잡도 O(1)
- 배열의 요소가 2개로 고정이므로 sort() 메서드의 시간복잡도는 O(1) 이다.
- 그 외 작업은 단순 수식 연산이므로 전체 시간복잡도는 O(1)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 경우2에서 x가 sides[1]과 같은 경우를 놓쳐서 헤맨점이 아쉬웠다.

*/

function solution(sides) {
  sides.sort((a, b) => a - b);

  return sides[0] * 2 - 1;
}

console.log(solution([1, 2]));
