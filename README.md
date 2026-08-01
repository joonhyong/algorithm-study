# 🧩 algorithm study

## 규칙

- 매일 최소 1문제
- 못 푼 문제 & 틀린 문제는 다시 풀어보기 -> 한 달 이내

## 목표

- 자료구조/알고리즘 학습
- 코딩테스트 대비

## 사용 언어

- JavaScript

## 커밋 컨벤션

### 형식

- [type] 플랫폼 레벨: 문제명

### type 종류

| type     | 의미                       |
| -------- | -------------------------- |
| solve    | 문제 풀이 추가             |
| init     | 레포지토리 초기 설정       |
| chore    | 폴더 구조 변경, 기타 설정  |
| docs     | README, Notes 수정         |
| refactor | 기존 풀이 개선             |
| review   | 어려운 문제 복습 내용 추가 |

### 예시

- 문제 풀이 추가
  `[solve] PG Lv0: 두 수의 합`

- 처음 레포지토리 생성
  `[init] Initialize algorithm repository`

- 기존 풀이 개선
  `[refactor] Programmers Lv2: 괄호 회전하기`

- Notes 수정
  `[docs] Add DFS notes`

- 어려운 문제 복습
  `[review] Add review for 괄호 회전하기`

## 폴더구조

```js
algorithm-study
│
├── Programmers
│   ├── Level0
│   ├── Level1
│   │   ├── 두_정수_사이의_합.js
│   │   ├── 문자열_내림차순.js
│   │   └── ...
│   └── Level2
│
├── Notes
│   ├── DFS.md
│   ├── BFS.md
│   ├── DP.md
│   └── Hash.md
│
└── Review
    ├── 괄호_회전하기.md
    ├── 거리두기_확인하기.md
    └── ...
```

- Programmers: 프로그래머스의 알고리즘 문제 풀이 코드
- Notes: 알고리즘 개념 정리
- Review: 어려웠던 문제, 여러 풀이 비교 등 분석
