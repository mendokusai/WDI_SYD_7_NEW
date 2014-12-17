w05_d02_notes.md

use heroku logs to debug in production

heroku logs -t

search for:
/app/app
/app/config

Joel's error was a missing comma in his model.. would appear if checked perfectly, but didn't see it. When it goes to heroku, all the files are uploaded and will konk out if

dragonfly

rails app
paperclip

*multi-part = two parts to a request. browser instructions*

url-encoded request

10 file request, 11 files

paperclip uses that and there's a form for it.

content-type: multipart/alternative; boundry=NUMBERS

- BOUNDRY NUMBER
content-type: text/plain...

details...

--SECOND BOUNDRY
cotent-type txt/html

details...

###

fog gem.. data storage assistance

imagemagick image commandline utility

carrierwave is similar to paperclip

gem 'aws-sdk'

config>application.rb = global to all environments
config>production.rb == production only.

in application class
	config.paperclip_defaults = {
		storage: :s3,
		s3_credentials: {
			bucket: "beerscooter",
			access_key_id: CODE,
			secret_acess_key: "CODE"
	}
}

unsafe so use Envirnonment

secrets.yml
	config>	aws.yml

	development:
  access_key_id: "XXXXXX"
  secret_access_key: "XXXXXXX"

  aws

development:
  access_key_id: 
  aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"]
  aws_secret_key_id: ENV["AWS_SECRET_KEY_ID"]


set in: 
	subl ~/.bash_profile

set passwords

export AWS_BUCKET=""
export AWS_ACCESS_KEY_ID="CODE"
export AWS_SECRET_ACCESS_KEY_ID="CODE"

*restart terminal*

