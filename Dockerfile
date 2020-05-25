FROM node:10

# 앱 디렉터리 생성
WORKDIR /usr/src/DockerApp

# 의존성 패키지 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
COPY . .

EXPOSE 5000
CMD ["node", "server.js"]
