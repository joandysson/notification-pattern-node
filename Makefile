up:
	docker compose up -d

build:
	docker-compose build

down:
	docker compose down

npm-test:
	docker exec -it app npm test

npm-install:
	docker exec -it app npm install
