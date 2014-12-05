#installing devise

gem devise, bundle
rails g devise:install

setup action mailer

add line to environment

set root page

copy notice into application.erb

rails g devise MODEL (User, subscriber, etc. for MODEL)

unlock confirmable, (if using)

add confirmable to user.rb

rake db:migrate to make table work

rails g migration AddUserIdToMixtape user_id:integer
rake db:migrate

users v admin
admin does all
user can own content

admin or not? all priv
	user?
		own content only


	rails g migration AddAdminToUsers admin:boolean

*check migration file*

	rake db:migrate

# .build v .new
	we use build instead of new because new must be called on the class (Mixtape.new), build can be used to get away new (since we're attaching it to the user ) from the mixtape params

	deploying to heroku

	https://devcenter.heroku.com/articles/getting-started-with-rails4#write-your-app

	choose which gems are used in which environment

	currently working in development, deployment

	file saved into upload file

	its read only. (makes the app much quicker)

		use aws > S3
	becomes compiled slug
		database is add-on
			dyno is a server
			all we need to worry about is the app server

			webserver (heroku)

				App server (we manage)
					on DYNO
				*Heroku gives you 5mb free database (add on)

				email server (mandrill) 12k free emails a month (add on)(SMTP)
		where to store files - AWS S3
			cloudfront (free?)

	if you make changes to your js/css, you need to use :
			rake assets:precompile

	if we make changes to the migration firls	
			heroku run db:migrate