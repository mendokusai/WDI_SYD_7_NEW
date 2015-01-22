#how puma works
Web Server
 app server	> dynamically renders things.

* vertical scaling - bigger computer, more ram (beef up machine)
* horizontal scaling - add more servers

model two:

									web server
											|
											v
	app server <--| app server |--> app server
	request(1) 		|						 |	request(2)
	app server <--| 					 |--> app server
	request(3)  	|						 |	request(4)

# app server copies itsef (memory instance) and lets the copy run a process. The original, then, manages the appservers -- allows concurant processes.

#puma - allows multiple

procfile:
	web: bundle exec puma -t ${PUMA_MIN_THREADS:-8}:{PUMA_MAX_TREADS:12} -w
	${PMA_WORKERS:-2} -p @PORT -e ${RACK_ENV:-development}
	click: bundle exec clockwork lib/clock.rb *like cron*

-t threads
-w workers
-p ports
-e environment

#development
	bundle exec puma -t 8:12 -w 2 -p 3000 -e development
#production (heroku)
	bundle exec puma -t 4:12 -w 8 -p 8888 -e production


#add puma gem
	use procfile locally: forman gem

process starts clock, starts web {app server(s)}



