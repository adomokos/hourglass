REPORTER = list

test: test-bdd

test-bdd:
	@./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--ui bdd \
		-- spec/*.js

test-doc:
	@./node_modules/mocha/bin/mocha \
		--reporter list \
		--ui bdd \

run-cukes:
	@./node_modules/cucumber/bin/cucumber.js -f pretty
