More Test Driven Development

#levels of tests

different levels of test checking

red (doesn't work) >>
	green (works) >>
		blue (works, now refactor) >>
				back to red...


				outer level, testing browser, user stories

				inner level testing methods classes, internal bits.


#Unit Tests
	check the user business
	(inside) validate smaller bits that will come through system


#Integration Tests
	

#Acceptance Tests
	(outside)
	Keep them general - test whether invalid

#handy refactoring guide
	do these, refactor
[code smells](http://ghendry.net/refactor.html)

feature/scenario

describe/context

expect(atm.balance(account)).to eq(0) #vs equal(0) equal means x === y
eq x == y

*render line skip*
(x)it "should show a balance of $100" do

*also*
	it "should show a balance of $100" do
	**(addline)** pending 'working on Account class'

Reference
	.deposit = instance method
	#deposit = class method


tdd is about breaking things into smaller chunks, testing them and building up

spliting up a project
high level: user story
code level: class/method level: unit tests.

acceptance tests are often easier.
unit tests (rspec)

*cucumber, rspec, minitest == all just run test code*

#capybara

writes code that acts like a user.

capybara tests rack things ... web applications

##making a new rails app with rspec testing

state the obvious all. the. time.


test runs first to see it fail and then build from there.

#scenarios
	Reader reads a blog post
			Scenario: Doesn't exist {handled by rails}
			Scenario: Does exist without comments
				Scenario: Does exist w/o comments
					Given a blog post exists
					when I go to the homepage
					And I click the post link
					Then I see the post
			Scenario: Does exist with comments
				Given a blog post
				And that blog post has a comment
				when I go to the home page
				and i check on the post link
				then i see the post
				and I see the comments

	List, show, add, delete
			
User story for adding

Scenario: Does 

Editor adds post
	Scenario Valid input
	Scenario Invalid input

		you will need validations
		will be a struggle

rails g rspec:feature EditorAddsPost






