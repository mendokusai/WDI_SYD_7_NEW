# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

joyDivision = Artist.create({
	name: "Joy Division",
	hometown: "Manchester",
	bio: "Joy Division were an English rock band formed in 1976 in Salford, Greater Manchester. Originally named Warsaw, the band primarily consisted of Ian Curtis, Bernard Sumner, Peter Hook and Stephen Morris.",
	years_active: "1976-1990"
	})

bruce = Artist.create({
	name: "Bruce Springsteen",
	hometown: "Philedelphia",
	bio: "Bruce is from the streets and he's born in the USA...",
	years_active: "1972 - 2010"
	})

love_will_tear_us_apart = Song.create({
	name: "Love Will Tear Us Apart",
	year: "1990",
	genre: "Rock",
	length: "3:12",
	artist_id: 1
	})

transmission = Song.create({
	name: "Transmission",
	year: "1990",
	genre: "Rock",
	length: "3:20",
	artist_id: 1
	})

shes_lost_control = Song.create({
	name: "She's Lost Control",
	year: "1979",
	genre: "Rock",
	length: "3:52",
	artist_id: 1
	})

dancing_in_the_dark = Song.create({
	name: "Dancing in the Dark",
	year: "1975",
	genre: "Rock",
	length: "8:57",
	artist_id: 2
	})

mixtape1 = Mixtape.create({
	name: "Mixtape 01",
	description: "This is my first mixtape! SQUEEE!"
	})
