# 배열 (Array)

## 1. 배열 생성하기

### 1) 배열 리터럴 - []

```js
const arr = [];
const arr = [1, 2, 3, 4, 5];
```

---

### 2) 길이가 n인 빈 배열 - new Array()

#### 1. new Array()로만 배열 생성 -> 길이가 n인 빈 배열 생성

```js
const arr = new Array(5);

// 결과: [ <5 empty items> ]
```

#### 2. new Array() + fill()로 배열 생성 -> 길이가 n이며 undefined를 요소로 갖는 배열 생성

```js
const arr1 = new Array(3);
const arr2 = new Array(3).fill(undefined);

// 결과:
// arr1 → [empty, empty, empty]
// arr2 → [undefined, undefined, undefined]
```

- arr1은 요소 자체가 없음
- arr2는 `undefined`라는 요소가 있음
- `arr1[0] === undefined`는 `true`지만, `undefined`라는 값이 저장되어 있다는 뜻은 아님

- 따라서, Array.from()과 같이 사용함.

---

### 3) 길이가 n인 배열 - Array.from()

- 알고리즘에서 유용한 배열 생성 방법

#### 1. 길이가 n인 배열 생성 (인자 1개)

```js
const arr = Array.from({ length: 5 });
// 결과: [undefined, undefined, undefined, undefined, undefined]
```

#### 2. 길이가 n이며, 인덱스를 요소로 갖는 배열 생성 (인자 2개 - 2번째 인자는 함수)

```js
const arr = Array.from({ length: 5 }, (_, i) => i);
// 결과: [0, 1, 2, 3, 4]
```

#### 3. 길이가 n이며, 1부터 순차적으로 1씩 증가하는 값들을 요소로 갖는 배열

```js
const arr = Array.from({ length: 5 }, (_, i) => i + 1);
// 결과: [1, 2, 3, 4, 5]
```

---

### 4) 같은 값으로 채우기 - fill() 혹은 from()

#### 1. fill 메서드 사용

```js
const arr = new Array(5).fill(0);
// 결과: [0, 0, 0, 0, 0]
```

#### 2. from 메서드 사용

```js
Array.from({ length: 5 }, () => 0);
// 결과: [0, 0, 0, 0, 0]
```

| 아무래도 fill() 메서드가 조금 더 직관적

#### 참고 - new Array()와 Array()의 차이

1. new Array()
   - Array를 생성자 함수로 호출
   - 길이를 지정하거나 요소들을 같은 값으로 초기화 할 때 주로 fill() 메서드와 함께 사용

2. Array()
   - Array를 일반 함수처럼 호출
   - 연속된 숫자를 요소로 갖는 배열 생성할 때 주로 from()메서드와 함께 사용

- 인수의 개수에 따라 결과가 달라짐
  1. 인수 0개 -> 빈 배열
  2. 인수 1개
     - 숫자 -> 길이가 n인 빈 배열
     - 숫자가 아닌 값 -> 해당 값을 요소로 갖는 배열
  3. 인수 여러개 -> 전달한 값들을 요소로 갖는 배열

#### 참고 - fill() 메서드와 from() 메서드의 차이

1. fill 메서드
   - 배열의 인스턴스 메서드 -> 배열 객체에 사용하는 메서드
   - `new Array()`와 `Array()` 둘 다 사용 가능 -> `new Array(5).fill(0)`, `Array(5).fill(0)`

2. from 메서드
   - Array(생성자 함수)의 정적 메서드(static method)
   - Array 자체에 사용하는 메서드이므로 `Array()`에만 사용 가능

#### 참고 - 정적 메서드 (Static Method)와 내장 메서드 (Built-in Method)의 차이

1. 정적 메서드

   ```js
   Array.from();
   Array.isArray();
   ```

   - 어디에 붙어 있는냐를 기준으로 함
   - `from()`, `isArray()`는 Array 자체에 붙어 있으므로 정적 메서드

2. 내장 메서드

   ```js
   Array.from();
   arr.map();
   arr.filter();
   arr.push();
   ```

   - 자바스크립트에서 기본적으로 제공되는 메서드냐를 기준으로 함
   - 전부 자바스크립트가 기본적으로 제공하므로 내장 메서드

---

### 5) 문자열을 배열로 변환 - split()

#### 1. 문자열을 배열로 변환

```js
const arr = "12345".split("");
// 결과: ["1", "2", "3", "4", "5"]
```

#### 2. 문자열을 공백 기준으로 나눠서 배열로 변환

```js
const arr = "10 20 30".split(" ");
// 결과: ["10", "20", "30"]
```

#### 3. 변환한 배열의 요소를 숫자형으로 만들기

```js
const arr = "10 20 30".split(" ").map(Number);
// 결과: [10, 20, 30]
```

#### 4. split() 메서드에 인수가 없을 경우

- 문자열 전체를 하나의 요소로 갖는 배열을 반환

```js
const str = "Hello";

console.log(str.split());
// 결과: ["Hello"]
```

#### 비교

```js
"Hello".split();
// ["Hello"]

"Hello".split("");
// ["H", "e", "l", "l", "o"]

"Hello World".split(" ");
// ["Hello", "World"]
```

---

##2. 배열 관련 메서드

#### 인스턴스 (instance) : 어떤 생성 방법(클래스/생성자)을 통해 만들어진 실제 객체

```js
const arr = new Array(1, 2, 3);
// Array는 배열을 만드는 생성자
// arr는 실제로 만들어진 배열 객체 = 인스턴스
```

### reduce() 메서드

#### 정의

- 배열의 요소를 순회하며 누적 연산을 수행하고 하나의 결과값을 반환하는 배열의 인스턴스 메서드

#### 특징

- 원본 배열 변경하지 않음
- 콜백 함수의 반환값이 다음 실행의 accumlulator로 전달됨
- acc의 초기값을 지정하지 않는 경우,
  - 첫번째 요소를 acc의 초기값으로 사용
  - 콜백 함수의 반복 횟수는 배열 길이 - 1

#### 형식

```js
array.reduce((acc, cur, index, array) => {
  return 새로운_누적값;
}, initialValue);

// acc (accumulator) → 누적값
// cur (currentValue) → 현재 요소
// index → 현재 요소의 인덱스 (생략 가능)
// array → reduce()를 호출한 원본 배열 (생략 가능)
// initialValue → acc의 초기값 (생략 가능)
```

#### 예시

```js
const numbers = [1, 2, 3];

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

// sum = 6
```

### splice() 메서드

#### 정의

- 배열의 특정 위치에 있는 요소를 추가/교체/삭제하여 배열의 내용을 변경하는 배열 메서드

#### 형식

```js
array.splice(start, deleteCount, item1, item2, ...);
```

- `start`: 변경을 시작할 인덱스
- `deleteCount`: 삭제할 요소의 개수
- `item1, item2, ...`: 삭제한 위치에 추가할 요소

#### 특징

- 원본 배열을 직접 수정 (Mutate)
- 삭제한 요소를 반환 (삭제한 요소가 없다면 [] 반환)
- 음수 인덱스 사용 가능

#### 문법

`const arr=[1, 2, 3, 4, 5]`

1. 요소 삭제
   - `arr.splice(2, 2)` -> `arr === [1, 2, 5]`
   - 인덱스 2부터 2개의 요소 삭제

- `arr.splice(2)` -> `[1, 2]`
  - deleteCount 생략 시, start 인덱스 부터 배열 끝까지 전부 삭제

2. 요소 추가
   - `arr.splice(2, 0, 3)` -> `arr === [1, 2, 3, 3, 4, 5]`
   - deleteCount로 0 전달
   - 인덱스 2 위치에 3을 삽입
3. 요소 교체
   - 삭제와 추가를 동시에
   - `arr.splice(2, 1, 10)` -> `arr === [1, 2, 10, 4, 5]`
   - 인덱스 2 위치의 데이터를 삭제하고 10을 삽입
4. 요소 여러개 교체
   - `arr.splice(1, 2, 10, 20)` -> `arr === [1, 10, 20, 4, 5]`
   - 인덱스 1 위치의 요소부터 2개의 데이터 삭제 후 10, 20을 추가
   - 즉, 인덱스 1,2 위치의 요소를 10, 20으로 교체

### slice() 메서드

#### 정의

- 배열에서 특정 범위의 요소를 추출하여 새로운 배열로 반환하는 메서드

#### 형식

```js
array.slice(start, end);
```

- `start`: 추출을 시작할 인덱스
- `end`: 추출을 종료할 인덱스
  - end 인덱스는 미포함
  - 생략 시 배열 끝까지 추출

#### 특징

- 원본 배열을 변경하지 않음 (Immutate)
- 잘라온 새로운 배열을 반환
- 시작 인덱스는 포함, 종료 인덱스는 제외
- 음수 인덱스 사용 가능

#### 문법

`const arr=[1, 2, 3, 4, 5]`

1. 인수 2개
   - `arr.slice(1, 4);` -> `[2, 3, 4]` 반환
   - 1번 인덱스 부터 4-1번 인덱스 까지 가져옴
2. 인수 1개
   - `arr.slice(2)` -> `[3, 4, 5]` 반환
   - 2번 인덱스 부터 끝까지 가져옴
3. 인수 0개
   - `const copy = arr.slice()` -> `copy === [1, 2, 3, 4, 5]` 반환
   - 인수 생략 시 배열 전체 복사
   - 이 때, `arr === copy`는 `false`임 (참조값이 다르므로)
