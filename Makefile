build:
	@bundle exec jekyll build

serve:
	@bundle exec jekyll serve

clean:
	@bundle exec jekyll clean

lint:
	@echo "Lint pages"

install:
	@gem install bundler
	@bundle install
