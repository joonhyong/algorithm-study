# 해시 (Hash)

## #1. 해시(Hash)란?

### 정의

- Key를 이용하여 Value를 빠르게 저장하고 조회하는 자료구조
- Key -> Value 형태로 데이터를 관리

### 특징

- Key를 통해 Value에 접근
- 평균적으로 삽입/삭제/탐색을 O(1)에 수행 가능
- 데이터의 순서를 중요하게 다루는 자료구조가 아님
- Key의 중복 여부 등을 관리할 수 있음

### 형태 예시

|   Key    | Value |
| :------: | :---: |
| "apple"  |   3   |
| "banana" |   5   |
| "orange" |   2   |

## #2. JavaScript에서 해시를 구현하는 방법 -> Object / Map / Set

### 1. Object

#### 정의

- Key-Value 형태로 데이터를 저장하는 JavaScript의 객체
- Key를 이용하여 Value에 접근할 수 있음

#### 특징

- Key-Value 형태로 데이터 저장
- Key를 이용한 값의 조회/추가/수정/삭제 가능
- 객체 리터럴(`{}`)을 사용하여 간단하게 생성 가능
- 일반적으로 Key는 문자열 또는 Symbol로 취급됨

#### 생성 방법

```js
const obj = {
  name: "홍길동",
  age: 29,
};
```

#### 주요 사용법

```js
// 조회
obj.name;
obj["name"];

// 추가
obj.height = 180;
obj["height"] = 180;

// 수정
obj.age = 30;
obj["age"] = 30;

// 삭제
delete obj.age;
delete obj["age"];
```

#### 해시 활용

```js
const count = {};

count["apple"] = 1;
count["apple"]++;

console.log(count["apple"]); // 2
```

### 2. Map

#### 정의

- Key-Value 형태로 데이터를 저장하는 자료구조
- `Map` 생성자를 통해 생성

#### 특징

- Key-Value 형태로 데이터 저장
- Key와 Value에 다양한 자료형을 사용 가능
- 객체와 달리 다양한 자료형을 Key로 사용 가능
- 데이터의 삽입 순서를 유지
- size 프로퍼티를 통해 요소의 개수 확인 가능

#### 생성 방법

```js
// Map 생성자로 생성
const map = new Map();

// 초기값 전달하여 생성
const map = new Map([
  ["name", "홍길동"],
  ["age", 29],
]);
```

#### 주요 메서드

```js
map.set(key, value); // 추가/수정
map.get(key); // 조회
map.has(key); // 존재 여부 확인
map.delete(key); // 삭제
map.clear(); // 전체 삭제
map.size; // 요소 개수
```

#### 해시 활용

```js
const count = new Map();

count.set("apple", 1);
count.set("apple", count.get("apple") + 1);

console.log(count.get("apple")); // 2
```

### 3. Set

#### 정의

- 중복되지 않는 값(Value)들을 저장하는 자료구조
- `Set` 생성자를 통해 생성
- 내부적으로는 일반적으로 해시 기반 자료구조로 구현되어 빠른 검색을 제공하는 자료구조

#### 특징

- Set은 `Key -> Value`형식이 아니라 `Value` 형식으로 저장함
- 중복된 값을 허용하지 않음 -> 중복 제거에 유용
- 데이터의 삽입 순서를 유지
- size 프로퍼티를 통해 요소의 개수를 확인할 수 있음
- 값의 존재 여부를 확인할 수 있음 -> 값을 꺼내는 방식의 조회는 없음
  - for-of 문으로 값을 순회해서 확인 가능
  - 배열로 변환해서 특정 인덱스 접근 가능

#### 생성 방법

```js
// Set 생성자로 생성
const set = new Set();

// 초기값을 전달하여 생성
const set = new Set([1, 2, 3, 3]);
console.log(set); // Set(3) {1, 2, 3}
```

#### 주요 메서드

```js
set.add(value); // 추가
set.has(value); // 존재 여부 확인
set.delete(value); // 삭제
set.clear(); // 전체 삭제
set.size; // 요소 개수
```

#### 해시 활용

```js
// 값 존재 여부 확인
const set = new Set([1, 2, 3]);

console.log(set.has(2)); // true
console.log(set.has(5)); // false

// 중복 제거
const numbers = [1, 1, 2, 2, 3];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3]
```

## #3. Object / Map / Set의 차이

|             | Object                 | Map                   |
| ----------- | ---------------------- | --------------------- |
| Key         | 주로 문자열/Symbol     | 다양한 자료형         |
| 데이터 관리 | 객체의 속성            | Key-Value             |
| 크기 확인   | `Object.keys().length` | `map.size`            |
| 추가        | `obj[key] = value`     | `map.set(key, value)` |
| 조회        | `obj[key]`             | `map.get(key)`        |
| 존재 확인   | `key in obj`           | `map.has(key)`        |

|           | Map / Object         | Set                      |
| --------- | -------------------- | ------------------------ |
| 저장 형태 | Key → Value          | Value                    |
| 목적      | Key를 이용한 값 관리 | 값의 존재 여부/중복 관리 |
| 조회      | Value 조회 가능      | `get()` 없음             |
| 존재 확인 | 가능                 | `has()`                  |
| 중복      | Key 기준             | 값 자체의 중복 불가      |

|                    | Object             | Map                   | Set              |
| ------------------ | ------------------ | --------------------- | ---------------- |
| 생성               | `{}`               | `new Map()`           | `new Set()`      |
| 리터럴             | ✅ 있음            | ❌ 없음               | ❌ 없음          |
| 저장 형태          | Key → Value        | Key → Value           | Value            |
| 중복 Key           | ❌                 | ❌                    | -                |
| 중복 Value         | 가능               | 가능                  | ❌               |
| **값 조회**        | `obj[key]`         | `map.get(key)`        | ❌               |
| **존재 여부 확인** | `key in obj`       | `map.has(key)`        | `set.has(value)` |
| 값 추가            | `obj[key] = value` | `map.set(key, value)` | `set.add(value)` |

## #4. 해시의 주요 활용 방법

### 4-1. 빈도수 계산

#### 정의

- 데이터가 몇 번 등장했는지 저장할 때 사용
- Key에 데이터, Value에 등장 횟수 저장
- Object, Map을 활용

#### 예시

```js
const numbers = [1, 2, 1, 3, 2, 1];

const count = new Map();

for (const number of numbers) {
  count.set(number, (count.get(number) || 0) + 1);
}

console.log(count);
// Map(3) { 1 => 3, 2 => 2, 3 => 1 }
```

### 4-2. Key-Value 매핑

#### 정의

- 특정 Key에 대응하는 Value를 저장하고 빠르게 조회할 때 사용
- Object 또는 Map을 활용

#### 예시

```js
const students = new Map();
students.set(101, "홍길동");
students.set(102, "김철수");

console.log(students.get(101));
// 홍길동
```

### 4-3. 중복 제거

#### 정의

- 데이터에서 중복된 값을 제거할 때 사용
- Set을 활용

#### 예시

```js
const numbers = [1, 1, 2, 2, 3, 3];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
// [1, 2, 3]
```

### 4-4. 존재 여부 확인

#### 정의

- 특정 데이터가 존재하는지 확인할 때 사용
- Set 또는 Map의 has() 활용

#### 예시

```js
const numbers = new Set([1, 2, 3]);

numbers.has(2); // true
numbers.has(5); // false
```
