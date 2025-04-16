## 숫자 맞추기 게임
- MDN 문서를 참고하여 직접 만들어 본 학습용 숫자 맞추기 게임
- 기본 구조를 바탕으로 두 가지 기능을 추가하여 구현

<br>

## 추가
- Enter 키와 버튼 클릭 모두로 제출이 가능하도록 구현
- 입력창이 비어 있을 경우, Enter 키 또는 버튼 클릭 시 알림(alert)이 뜨도록 처리
<br>

## 게임 설명
| 시작 | alert 창 |
| ---- | ---- |
|<img alt="start" src="https://github.com/user-attachments/assets/9dec25e7-7d71-4ebd-9828-79fef7645851" width="700" height="200"/> | <img alt="alert" src="https://github.com/user-attachments/assets/8dddaf40-4fb8-407d-8959-b7a030b1eea6" width="700" height="200"/> |

| 오답일 때 | 정답일 때 |
| ---- | ---- |
| <img alt="wrong" src="https://github.com/user-attachments/assets/3c09e3ec-9ebe-4340-b11e-2f04d6e7f05a" width="700" height="200"/> | <img alt="correct" src="https://github.com/user-attachments/assets/3dc345aa-86f2-4c5d-ba99-94868b8036a5" width="700" height="200"/> |

<br>

- 숫자 범위는 1부터 100 사이
- 총 10번의 기회 동안 정답을 추측
- 입력 없이 제출 시, alert로 입력 요청
- 오답일 경우, 정답보다 높은지 또는 낮은지 피드백 제공
- 사용자가 입력한 이전 숫자들을 화면에 표시
- 정답을 맞히면 게임 종료 및 "다시 시작" 버튼 노출

