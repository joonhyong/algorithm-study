/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 제일 작은 수 제거하기
유형: 배열
날짜: 2026-09-11
Review 여부: false

# 📰 문제 설명
- 정수 배열 arr가 주어짐
- arr에서 가장 작은 수를 제거한 배열을 반환하는 함수 만들기
- 단, 반환하는 배열이 빈배열인 경우 배열에 -1을 채워서 반환함

# 💡 문제 풀이
- 방식1, 방식2, 방식3 모두 시작하기 전에 arr의 길이를 확인
- 길이가 1인 경우 [-1] 반환

- 방식1. sort() 메서드 사용하기 -> 실패
    - arr에 sort() 메서드를 적용시켜 내림차순으로 정렬
    - arr에 pop() 메서드 적용
    - arr 반환

- 방식2. 반복문으로 최소값 갱신하기
    - let 변수 min을 Math.max(...arr)로 초기화
    - for문으로 arr를 순회하며 min과 비교하기
    - min보다 작은 요소인 경우 해당 요소를 min의 값으로 할당하기
    - for문 종료 후 indexOf()메서드를 통해 min값의 인덱스를 갖는 요소를 splice() 메서드로 제거하기
    - arr 반환

- 방식3. Math.min(), indexOf() 메서드, splice() 메서드 사용
    - Math.min() 메서드를 통해 arr의 최소값을 구함
    - indexOf() 메서드를 통해 최솟값의 인덱스를 구함
    - splice() 메서드를 통해 해당 인덱스값으로 arr 배열에서 최솟값 요소 제거
    - arr 반환

# ⏰ 시간복잡도: O(n)
- Math.min() 메서드, indexOf() 메서드, splice() 메서드 모두 배열을 순회하는 방식이다.
- 메서드들이 순차적으로 실행되므로 전체 시간복잡도는 O(3n)이다.
- 빅오표기법에서는 상수를 생략하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- splice() 메서드는 제가한 요소를 배열 형태로 반환함

# 💭 아쉬운 점
- 아쉬운 점1. sort() 메서드 오용
    - 해당 문제에서는 최솟값 요소를 제거한 배열을 반환하는 것.
    - 정렬되어 있다는 조건이 없었으므로, sort() 메서드 사용 시 arr가 기존의 순서와 달라지는 문제가 발생하는 것을 인지하지 못함.

- 아쉬운 점2. 불필요한 for문 사용 
    - 기존에 본인은 최솟값, 최댓값을 갱신하는 방법을 생소하게 느껴서, 해당 문제에서 최솟갓을 갱신하는 코드에 집중하였음.
    - 그러다보니 불필요하게 반복문을 수행하는 과정이 들어감 -> 단순히 Math.min()만 사용하면 됐었음.
*/

function solution(arr) {
  // 방식1. sort() 메서드 사용하기
  // -> 기존 배열의 요소들의 순서가 바뀌므로 오답
  /*
  if (arr.length === 1) return [-1];
  else {
    arr.sort((a, b) => b - a).pop();
return arr;
}
*/

  // 방식2. 반복문으로 최솟값 갱신하기
  /*
  if (arr.length === 1) return [-1];
  else {
    let min = Math.max(...arr);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }

    const minValueIndex = arr.indexOf(min);
    arr.splice(minValueIndex, 1);
    return arr;
  }
  */

  // 방식3. Math.min(), indexOf() 메서드, splice() 메서드 사용
  if (arr.length === 1) return [-1];
  else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
  }
}

console.log(solution([4, 3, 2, 1]));
