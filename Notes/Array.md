# 배열 (Array)

## 1. 배열 생성하기

### 1) 배열 리터럴 - []

```js
const arr = [];
const arr = [1, 2, 3, 4, 5];
```

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
