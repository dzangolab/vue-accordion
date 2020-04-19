build:
	@printf "\033[0;32m>>> Building component for production\033[0m\n"
	yarn build

install:
	@printf "\033[0;32m>>> Installing dependencies\033[0m\n"
	yarn install

lint:
	@printf "\033[0;32m>>> Checking and fixing code standards\033[0m\n"
	yarn run lint

publish:
	@printf "\033[0;32m>>> Publishing package to npmjs.org\033[0m\n"
	npm publish --access public

run:
	@printf "\033[0;32m>>> Running local server\033[0m\n"
	yarn serve

test:
	@printf "\033[0;32m>>> Running tests\033[0m\n"
	yarn run test

test.unit:
	@printf "\033[0;32m>>> Running unit tests\033[0m\n"
	yarn run test:unit
