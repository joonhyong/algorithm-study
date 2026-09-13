/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 삼각형의 완선조건 (1)
유형: 수학
날짜: 2026-09-13
Review 여부: false

# 📰 문제 설명
- 삼각형의 조건: 가장 긴 변의 길이는 다른 두변의 길이의 합 보다 작아야 함
- 삼각형의 세변의 길이를 요소로 갖는 sides 배열이 주어짐
- 세변으로 삼각형을 만들 수 있다면 1을 반환하고
- 없다면 2를 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. filter() 메서드 사용
    - 변수 max에 sides에서 가장 큰 요소를 할당
    - 변수 arr에 filter() 메서드의 결과값을 할당
        - filter() 메서드 조건: item !== sides.indexOf(max)
    - max의 값이 arr 배열 요소의 합보다 작다면 1을 반환
    - 그렇지 않다면 2를 반환

- 방식2. sort() 메서드 사용
    - sides 배열에 sort() 메서드를 적용하여 오름차순으로 정렬
    - 정렬된 배열에서 pop() 메서드로 가장 큰 값을 꺼내어, 남은 두 요소(sides[0], sides[1])의 합과 비교하여 결과 반환

# ⏰ 시간복잡도: O(n)
- 방식1.
    - Math.max() 메서드, filter() 메서드는 모두 O(n)이며
    - 순차적으로 수행되므로 시간복잡도는 O(n)이다.

- 방식2.
    - sort() 메서드의 시간복잡도는 O(nlogn)이다.
    - 최종 시간복잡도 역시 O(n logn)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(sides) {
  // 방식1. filter() 메서드
  /*
  const max = Math.max(...sides);
  const arr = sides.filter((item, index) => index !== sides.indexOf(max));

  return max < arr[0] + arr[1] ? 1 : 2;
  */

  // 방식2. sort() 메서드
  return sides.sort((a, b) => a - b).pop() < sides[0] + sides[1] ? 1 : 2;
}

console.log(solution([1, 2, 3]));
