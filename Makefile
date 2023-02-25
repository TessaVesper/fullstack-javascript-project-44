install: install-deps

run:
	bin/brain-games.js

install-deps:
	npm ci

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js