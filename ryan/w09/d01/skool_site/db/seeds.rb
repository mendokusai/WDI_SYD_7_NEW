# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  # t.string   "name"
  #   t.string   "logo"
  #   t.text     "description"
  #   t.datetime "created_at",  null: false
  #   t.datetime "updated_at",  null: false

  berkeley = School.create({
  	name: "University of California, Berkeley",
  	description: "Best School. Full Stop",
  	logo: "https://s-media-cache-ak0.pinimg.com/736x/18/f0/e7/18f0e7070a77815e2e1e6557691b01cd.jpg"
  	})

	rice = School.create({
		name: "Rice University",
		description: "A pretty good school, though it's in Houston...",
		logo: "http://logopond.com/logos/48689efb9786ce3ea33162ca109473b6.png"
		})

	tijuana = School.create({
		name: "Tijuana Technical Institute",
		description: "This is a real school. Not a Tequila Distributor!",
		logo: "http://www.mycityway.com/blog/wp-content/uploads/2012/03/Flickrim.no_.hero_.jpg"
		})