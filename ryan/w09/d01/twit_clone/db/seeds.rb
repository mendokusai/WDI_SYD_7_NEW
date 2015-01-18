# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts 'Creating some seed statuses'

msg1 = Status.create({
	username: "Dinoryan",
	context: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga accusantium voluptas officia iure, aliquid deserunt odit quos adipisci, mollitia ducimus dicta nobis recusandae iusto doloribus modi cupiditate. Culpa, molestias?"
	})

msg2 = Status.create({
	username: "TheEnigma",
	context: "Adipisicing elit."
	})

msg3 = Status.create({
	username: "Dinoryan",
	context: "Consectetur adipisicing elit. Sed fuga accusantium voluptas officia iure, aliquid deserunt odit quos adipisci, mollitia ducimus dicta nobis recusandae iusto doloribus modi cupiditate. Culpa, molestias?"
	})

msg4 = Status.create({
	username: "Badger",
	context: "Auid deserunt odit quos adipisci, mollitia ducimus dicta nobis recusandae iusto doloribus modi cupiditate. Culpa, molestias?"
	})