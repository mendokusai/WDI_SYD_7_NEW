Today

User Authorizations

More Associations
Review
This week
	two main labs
		Cookbook
		Tuner

Friday: planning next week's project

# Active Record

Artist has many paintings...
so far use artist_id...


What if Many to Many?

Tags
	secondary categorization system
	ex: blog post has many tags (iphone, apple, mobile, etc.)

Posts <--> Tags
	need something to hold the connection between the two
	third model that sits in the middle
	*post_tags* 
	holds connection between two
# =JOIN TABLE=
	has post_id && tag_id

post has array of tag_ids,
	gives to rails

	example: *token selector* 
	jquery token input


# third table:
	one entry has:
			artist_id,	
			painting_id

in the instance of blog tags, when you add a new tag, it appends it to the tag model..


# *how it looks in code:*

class Painting < ActiveRecord::Base
	has_many :artist_paintings
	has_many :artists, through: :artist_paintings
end

&&

class ArtistPainting < ActiveRecord::Base
	belongs_to :artist
	belongs_to :painting
end

rails g model ArtistPaintings artist_id:integer painting_id:integer

a = artist(id)
p = painting(id)

a.paintings | creates an inside join

a.paintings << p
 ^> shovels in paintings into the join

 a.painting_ids #=> [4]
*make sure the controllers know how to deal with it*

#show painting:
# .
# <% @artist.painting.each do |painting| %>
# 	<%= link_to painting.title, painting do %>
# 		<div class="painting_link">
# 			<%= image_tag painting.url %>
# 		</div>
# 	<% end %>
# <% end %>

# dropdown menu
		vito's code:
		<p>
		<%= f.lable 'Artist' %>
		<%= collection_select(:painting, :artist_id, Artist.all, :id, :last_name, {},  { :multiple => false}) %>
		</p>

		better version:

		<p> 
		<%- f.label :artist_id, "Artist" %>
		<%= f.select :painting_id, [["Jack", 1]] %>
		</p>

		use map to create the array for ln 97.

		f.select :painting_ids, Painting.all.map {|p| [p.title, p.id] } %>

# helpers is where to put ruby logic so that you can keep it out of views and keep views easy to read.

*if i'm writing html AT al, look up a helper/asset...*

DASH search image... would have got me what i needed.

# view helpers
	rake routes? shows the various pathes

re MOMA homework:
*to make my "artists/1/paintings/1" path work, I needed to create an array of [artist, painting] to then create the correct path.*


routes > controller > action > view >

Jack works from the browser, backward. Rails gives error messages, error messages tell what's needed. fix it, continue.


#LUNCH

models are where business logic live.
validations are a type of business logic.

learn and understand errors

cookbook

	(section type) cookbooks have many
		recipies have many
			ingrdients will not belong too, has many recipies too.

			ingrdients have many recipies

Cookbooks table
	title
	cuisine
	chef
	image
recipies table
	name
	course
	serving size
	instructions
	image
	cookbook_id

ingredients table
	name
	measurement
	cost
	image
recipie-ingredients (join) table
	recipie_id
	ingredient_id


checkboxes for the ingredients


startup
	build out models
		rake routes


hacksumit day 1:
	infoq
	yammer
	
