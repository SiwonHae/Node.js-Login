## Node.js 로그인 기능 구현하기

1. MVC의 V(view) 분리. => ejs 사용
2. 라우팅 분리
3. MVC의 C(controller) 분리 => routes/home/home.ctrl.js
4. app.listen() 모듈화 => bin/www.js
5. package.json => npm init -y
6. 폴더 구조 최적화
    ```
    app
    ㄴ bin
    ㄴ src
      ㄴ routes/home
      ㄴ views/home
    app.js
    package.json
    ```
7. 프론트에서 JS를 사용하기 위하여 public 폴더 연결  
  app/src/public/js 생성  
  app/src/public/css 생성  
    
  app.js 파일 내
  ```javascript
  app.use(express.static(`${__dirname}/src/public`));
  ```
  
### 파일 시스템(fs) 이용
8. 로그인 기능 JS로 구현 => app/src/public/js/login.js  
9. 프론트에서 fetch를 이용해 서버로 데이터 보내기  
10. 서버에서 로그인 API 만들기 => 프론트의 req 데이터 파싱(body-parser)  
11. fetch에 then을 이용해 프론트에 서버에서 응답한 데이터를 다시 보내기  
12. MVC의 M(model) 만들기 => app/src/models/UserStorage.js  
13. User 모델을 따로 만들어서 UserStorage 관리하기 => app/src/mnodels/User.js  
14. 회원가입 기능 JS로 구현 => app/src/public/js/register.js  
15. 데이터를 파일로 구현 => fs(파일시스템) 이용  
    -1. 데이터 베이스 테이블을 따로 분리 => app/src/databases/users.json  
    -2. 파일 DB로 로그인 구현 => promise와 async await 이용  
    -3. 파일 DB로 회원가입 구현 => promise와 async await 이용  
***
### MySQL 이용  
16. 데이터 베이스 설정 코드 저장 => app/src/config/db.js => dotenv를 이용하여 환경변수 저장(암호화)  
17. 로그인 기능 구현  
18. 회원가입 기능 구현  
