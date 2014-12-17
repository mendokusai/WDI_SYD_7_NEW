w06_d01_notes.md

testing

pdf's to read: THe RSPEC Book
	Instant RSpec Team Dev

Ruby Koans: http://koans.herokuapp.com/en/about_asserts


assert Calculator.add(2,2) == 4 

User story

*feature - User can add an artist*

given		user is logged in
________________________
when		user presses 'ad an artist' button
				user adds details
				user submits
___________________
then		redirects to artist
				the aritsts details

when tools:

	click link x
	click button x
	fill x with y
	open y
	check x (checkbox)
	select x from y (drop down menus)

then tools: 
	have text
	page
		body
		url


		expect x to have y

	Click Link 'Add Artist'

WHEN

	Fill in 'first name' with 'Freddy'
	Fill in 'last name' with 'Mercury'
	Fill in 'bio' with 'Awesome'
	click button 'submit'

THEN
	Expect page to have text 'Freddy Mercury'
	Expect page to have text 'Awesome'
	Expect page URL to include 'artists/1'

*this has rendered the user story into computer executable terms*

high level style
	EDITING AN ARTIST	
	Adding a song to an artist
	adding a song to a playlist


Given User is logged in

When
	On artist page
		user presses edit aritst button
		user edits name detail
		user submits change

	then
		page redirects to aritst
		artist page displays deets

#morning work#

GIVEN User_is_signed_in on page'artists/id'

when 
	click link 'edit'

then 
	artist/id/edit have text 'first_name', 'last_name', 'bio'

when
	fill in 'first_name' with 'Freddy'
	fill in 'last_name' with 'Wong'
	fill in 'bio' with 'Totes Rad'
	click button 'update artist'

then
	Expect page to have text "Freddy Wong"
	Expect pave to have text "Totes Rad"
	Expect page URL to include "artist/id"

when 
	click button 'add song'
	select song 'candy canes and lolipops' from 'songs'
	click 'submit'

then 
	expect page to have text 'candy canes and lolipops'
	expect page to include soundcloud_link to 'candy canes and lolipops'

given 
	user is signed in on mixtape page

when
	click button 'add song to playlist'


spec file
 *where tests go*

[checkout](https://github.com/jnicklas/capybara)



require 'rails_helper'

	feature "AddingASongToAnArtists", :type => :feature do
		scenario 'valid input' do

		artist = Artist.create(
			first_name = "Miley",
			last_name = "Cyrus"
			)

		song = Song.create(
			name: "Wrecking Ball"
			)

		user = User.create(
			email: 'info@example.com', password: 'password'
			admin: true
			)

		log_in 'info@flufflyjack.com', 'password'

		visit '/artists'

		click_link 'Miley Cyrus'
		click_button 'Add Song'
		fill "Search", with: "Wrecking Ball"
		click_button "Search"

		click_link "Wrecking Ball"
		click_button "Add to Miley Cyrus"

		expect(page).to have_content("Wrecking Ball")
	end
end


#editng an artist

require 'rails_helper'
	feature 'EditingAnArtist', :type => :feature do
	scenario 'valid input' do

		artist = Artist.update(
			first_name = "Bobby",
			last_name = "Brown"
			)
		
		user = User.create(
			email: 'info@example.com', password: 'password'
			admin: true
			)

		log_in 'info@example.com', 'password'

		visit artist_path(artist)

		click_link 'Edit Artist'
		fill 'first_name', with: "Charlie"
		fill 'last_name', with: "Brown"
		click_button 'Update'

		expect(page).to have_content("Charlie Brown")

	end

	scenario 'invalid input' do
	end

	scenario 
end

#cucumber
[cucumber](cuckes.info)


steps to go through to implement code
1. generate artist with first and last name
2. generate user name with email, password, and admin ability
3. specify user details for user login
4. specify page-location
5. follow edit link
6. enter 'snoop' into first_name field
7. enter 'zilla' into last_name field
8. click_button for update
9. Expect page to update with correct name details to be updated.
NOPE

jack wanted us to create a psuedo code version of how to create the edit action based on the steps specified in the test case.

steps to go through to implement code
1. generate artist with first and last name
2. generate user name with email, password, and admin ability
3. specify user details for user login
4. specify route
5. implement action
6. add edit link



esentially you write up a behavior and then test it and build up your prog to run your test.















