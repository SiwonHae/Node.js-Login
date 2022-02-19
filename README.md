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
