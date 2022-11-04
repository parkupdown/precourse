# precourse
 우아한테크코스[5기] 프리코스를 수료하며 배운 점 
### 프리코스에서 배울 수 있는 건 다 배워가자..!!📚📚

혼자 학습을 해오다보니 이런 기회가 많지 않았다. 올해는 감사히 모든 신청자에게 프리코스의 기회를 주셨다!!!
_
"오히려조아"😏_

**기대가 된다 빨리 배우고싶다!!**


> 가장 중요한건 기죽지 않고 끝까지 도전하기!! 
나보다 잘하는 사람이 많더라도 
비교말고 내 템포로 끝까지 완료하자!

----

우테코 4시 프론트엔드과정 후기에

**_"일단 쓰레기 코드라도 작성해라!"_**

라는 글을 보았다. 각 미션마다 요구하는 기능이 다르고 이를 기능별로 커밋 해야 하기 때문에 요구사랑을 처음부터 지키려하지말고 일단 만들고 쳐내는 식으로 해보자!!🔥🔥

> **MVC 패턴을 학습해보자 !! 이를 기준으로 모듈화를 한다면 확실한 모듈기준이 생길것이다!**



---


# <span style="color: yellowgreen">코드 컨벤션 연습</span>

코드 컨벤션은 읽고 관리하기 쉬운 코드를 작성하기 위한 코딩 스타일 규약!
(협업 할 때 코드를 읽기 쉽게 만들어주는 하나의 규칙..!)

## 1. 변수와 함수의 이름을 정하기  
### 카멜케이스, 파스칼 표기법, 헝가리안 표기법, 스네이크 표기법

**rocket launch duration**

1. 카멜케이스 => 첫 단어는 소문자로 시작하고 두 번째 단어부터 대문자로 시작한다!
ex =>  roketLaunchDuration

2. 스네이크 표기법 => ex=> roket_launch_duration

3. 파스칼 표기법 => ex => RoketLaunchDuration

**주로 카멜 케이스를 사용한다! (상수 일때만 스네이크 표기법)**

## 2. Const , Let 

### const를 let 보다 위에 선언한다

## 3. 배열과 객체는 반드시 리터럴로 선언한다!

## 4. 모듈 

항상 import와 export를 이용한다.

```
// Best
import {es6} from './AirbnbStyleGuide';
export default es6;
```
import문으로부터 직접 export하지 않는다.

한 줄로 표현되어 간결하기는 하지만, import와 export 하는 방법을 명확하게 구분함으로써 일관성을 유지하자.
```
// Bad
export {es6 as default} from './airbnbStyleGuide';
```

## 5. for문 

키워드와 조건문 사이에 빈칸을 사용한다.
키워드와 조건문 사이가 빼곡하면 코드를 읽기 어렵다.
```
// Bad
var i = 0;
for(;i<100;i+=1) {
  someIterativeFn();
} 

// Good
var i = 0;
for(; i < 100; i+=1) {
  someIterativeFn();
} 
```

반복을 위한 변수를 미리 선언한다

```
// Bad
for (var i = 0; i < array.length; i += 1) ...

// Bad
for (var i in array) ...

// Good
var i, len
for (i = 0, len = array.length; i < len; i += 1) ...

// good
var key;
for (key in object) ...
``` 

 #### 기타 깨알 코드 지식
reduce(누적값,현재값) : 누적값을 리턴해 줄 수 있다.
forEach는 return이 먹히지 않는다.
string과 toString은 사실상 같다고 봐도 된다.
toString은 인자를 하나 받는데 이에 따라 숫자의 표현방식이 달라진다 (이진법 십진법 )


참고: https://ui.toast.com/fe-guide/ko_CODING-CONVENTION
