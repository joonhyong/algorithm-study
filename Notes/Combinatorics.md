# 순조부

## 개념 구분

| 유형         | 의미                  | 예: `[1, 2, 3]`에서 2개       |
| ------------ | --------------------- | ----------------------------- |
| **순열**     | 순서 O, 중복 X        | `12, 13, 21, 23, 31, 32`      |
| **조합**     | 순서 X, 중복 X        | `12, 13, 23`                  |
| **부분집합** | 각 원소를 선택/미선택 | `[], [1], [2], [3], [1,2]...` |

#### 순열 = 순서 고려

#### 조합 = 순서 무시

#### 부분집합 = 각 원소를 선택할지 말지 결정

## 구현 방법

### 1. 반복문 (Interation)

- 중첩 반복문을 이용하여 구현
- 선택 개수가 고정된 간단한 경우에 적합

### 2. 재귀 (Recursion / DFS)

- DFS를 이용하여 구현
- 선택 개수가 동적으로 변하는 경우에 유리
- 백트래킹과 함께 자주 사용

<hr style="border: none; border-top: 5px solid #333;">

## #0. 경우의 수 (Number of Cases)

### 정의

- 어떤 사건이 일어날 수 있는 모든 경우의 개수
- 코테에서는 가능한 경우를 계산하거나 모든 경우를 탐색할 때 활용

### 특징

### 구현

<hr style="border: none; border-top: 5px solid #333;">

## #1. 순열 (Permutation)

### 정의

- 서로 다른 개수 중에서 몇 개를 선택하여 순서를 고려하여 나열하거나 것
- 예시 - [1, 2, 3]에서 2개를 뽑아 나열하는 경우 -> `12, 13, 21, 23, 31, 32`

### 특징

- 순서 O (원소가 같아도 순서가 다르면 다른 경우)
- 중복 X (선택한 원소는 다음 자리에 또 쓸 수 없음)

### 구현

#### 방법1. 반복문 방식

- 특징
  - r의 개수가 정확히 고정되어 있을 때만 사용 가능
  - r이 커질수록 for문이 깊어져 r이 가변적인 코딩 테스트 문제에는 지양

- 코드

  ```js
  // [1, 2, 3]에서 2개를 고르는 순열 (r = 2로 고정)
  function getPermutationsWithLoop(arr) {
    const results = [];

    // 첫 번째 원소를 고르는 반복문
    for (let i = 0; i < arr.length; i++) {
      // 두 번째 원소를 고르는 반복문
      for (let j = 0; j < arr.length; j++) {
        // 중복해서 고르는 것을 방지 (중복 X 특징 반영)
        if (i === j) continue;

        results.push([arr[i], arr[j]]);
      }
    }
    return results;
  }

  console.log(getPermutationsWithLoop([1, 2, 3]));
  // 출력: [, [1, 3], [2, 1], [2, 3], [3, 1], [3, 2] ]
  ```

#### 방법2. 재귀 방식

- 특징
  - 고르는 개수(r)가 실행 시점에 어떤 숫자로 바뀌든 상관없이 작동
  - 원본 배열을 훼손하지 않고 인덱스 탐색 방식(DFS)으로 처리하여 메모리와 성능 측면에서 효율적

- 코드

  ```js
  function getPermutationsWithRecursion(arr, selectNumber) {
    const results = [];
    const visited = new Array(arr.length).fill(false); // 현재 선택한 원소인지 여부
    const temp = []; // 현재 고른 원소들을 담을 임시 배열

    function dfs(count) {
      // 목표 개수만큼 다 뽑았다면 결과에 추가 (재귀 탈출 조건)
      if (count === selectNumber) {
        results.push([...temp]);
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue; // 이미 고른 원소라면 패스 (중복 X)

        visited[i] = true; // 1. 현재 원소 선택 처리
        temp.push(arr[i]);

        dfs(count + 1); // 2. 다음 자리에 올 원소 고르러 재귀 호출

        temp.pop(); // 3. 재귀가 끝나 돌아오면 원상복구
        visited[i] = false;
      }
    }

    dfs(0);
    return results;
  }

  console.log(getPermutationsWithRecursion([1, 2, 3], 2));
  // 출력: [, [1, 3], [2, 1], [2, 3], [3, 1], [3, 2] ]
  ```

<hr style="border: none; border-top: 5px solid #333;">

## #2. 조합 (Combination)

### 정의

- 서로 다른 원소를 순서를 고려하지 않고 선택하는 것
- 예시 - [1, 2, 3]에서 2개를 뽑는 경우 -> `12, 13, 23`

### 특징

- 순서 X
- 중복 X

### 구현

#### 방법1. 반복문 방식

- 특징
  - r의 개수가 정확히 고정되어 있을 때만 사용 가능
  - 직관적이며 오버헤드가 없어 속도가 빠름

- 코드

  ```js
  //에서 2개를 고르는 조합 (r = 2로 고정)
  function getCombinationsWithLoop(arr) {
    const results = [];

    // 첫 번째 원소를 고르는 반복문
    for (let i = 0; i < arr.length; i++) {
      // 두 번째 원소는 무조건 첫 번째 원소의 다음(i + 1)부터 시작 (중복/순서 고려 제거)
      for (let j = i + 1; j < arr.length; j++) {
        results.push([arr[i], arr[j]]);
      }
    }
    return results;
  }

  console.log(getCombinationsWithLoop());
  // 출력: [,, ]  (순열과 달리 21, 31, 32 같은 중복 배치가 안 나옴)
  ```

#### 방법2. 재귀 방식

- 특징
  - 고르는 개수(r)가 실행 시점에 어떻게 바뀌든 유연하게 작동
  - 코딩 테스트에서 n개 중 r개를 고르는 가변적인 모든 문제에 범용적으로 적용 가능

- 코드

  ```js
  function getCombinationsWithRecursion(arr, selectNumber) {
      const results = [];
      const temp = []; // 현재 고른 원소들을 담을 임시 배열

      // startIndex: 탐색을 시작할 배열의 인덱스
      // count: 현재까지 뽑은 원소의 개수
      function dfs(startIndex, count) {
          // 목표 개수만큼 다 뽑았다면 결과에 추가 (재귀 탈출 조건)
          if (count === selectNumber) {
              results.push([...temp]);
              return;
          }

          // 항상 startIndex부터 시작하므로 이전 원소는 쳐다보지 않음 (순서 X 특징 반영)
          for (let i = startIndex; i < arr.length; i++) {
              temp.push(arr[i]);       // 1. 현재 원소 선택

              dfs(i + 1, count + 1);   // 2. 현재 원소 다음(i + 1)부터 고르도록 재귀 호출

              temp.pop();              // 3. 재귀가 끝나 돌아오면 원상복구
          }
      }

      dfs(0, 0);
      return results;
  }

  console.log(getCombinationsWithRecursion(, 2));
  // 출력: [,, ]

  ```

<hr style="border: none; border-top: 5px solid #333;">

## #3. 부분집합 (Subset)

### 정의

- 주어진 집합에서 원소를 선택하거나
- 선택하지 않아 만들 수 있는 모든 집합
- 예시 - [1, 2, 3]의 부분집합

  ```
  []
  [1]
  [2]
  [3]
  [1, 2]
  [1, 3]
  [2, 3]
  [1, 2, 3]
  ```

### 특징

- 각 원소마다 선택/선택하지 않음 두 가지 경우
- 원소가 `n`개라면 부분집합의 개수는 `2^n`

### 구현

#### 방법1. 반복문 방식 (비트마스킹 / Bitmasking)

- 특징
  - 중첩 for문을 쓰지 않고, \(0\)부터 \(2^N-1\)까지 도는 단 하나의 for문으로 구현
  - 재귀 호출이 없어 속도가 매우 빠르고 직관적

- 코드

  ```js
  //에서 모든 부분집합 구하기
  function getSubsetsWithLoop(arr) {
    const results = [];
    const n = arr.length;
    // 1 << n 은 2^n과 같습니다. (원소가 3개면 2^3 = 8번 반복)
    const numSubsets = 1 << n;

    for (let i = 0; i < numSubsets; i++) {
      const subset = [];
      for (let j = 0; j < n; j++) {
        // i의 j번째 비트가 1인지 확인 (1이면 j번째 원소를 포함)
        if ((i & (1 << j)) !== 0) {
          subset.push(arr[j]);
        }
      }
      results.push(subset);
    }
    return results;
  }

  console.log(getSubsetsWithLoop());
  // 출력: [ [], [], [], [], [], [], [], ] (공집합 포함 총 8개)
  ```

#### 방법2. 재귀 방식

- 특징
  - 코딩 테스트에서 가장 정석적으로 쓰이는 완전 탐색 형태
  - 상태 트리의 개념이 직관적이며, 탐색 중간에 특정 조건(백트래킹)을 걸어 필터링하기 쉽습

- 코드

  ```js
  function getSubsetsWithRecursion(arr) {
    const results = [];
    const temp = []; // 현재 구성 중인 부분집합을 담을 임시 배열

    // index: 현재 포함 여부를 결정할 원소의 위치
    function dfs(index) {
      // 모든 원소를 다 확인했다면 현재까지 완성된 부분집합을 저장 (재귀 탈출)
      if (index === arr.length) {
        results.push([...temp]);
        return;
      }

      // 1. 현재 원소를 '포함하는' 경우
      temp.push(arr[index]);
      dfs(index + 1); // 다음 원소 확인하러 가기
      temp.pop(); // 재귀 끝나고 돌아오면 원상복구

      // 2. 현재 원소를 '포함하지 않는' 경우
      dfs(index + 1); // 현재 원소를 넣지 않은 상태 그대로 다음 원소 확인하러 가기
    }

    dfs(0);
    return results;
  }

  console.log(getSubsetsWithRecursion());
  // 출력: [ , [], [], [], [], [], [], [] ] (탐색 순서에 따라 출력 순서는 다를 수 있음)
  ```
