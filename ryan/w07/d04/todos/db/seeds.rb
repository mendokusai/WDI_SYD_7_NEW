# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# create_table "todos", force: :cascade do |t|
#     t.text     "text"
#     t.string   "notes"
#     t.boolean  "completed"
#     t.datetime "created_at"
#     t.datetime "updated_at"
#   end

Todo.destroy_all

todo1 = Todo.create({
	text: "Do the Dishes.",
	notes: "Use soap?",
	completed: false
	})

todo2 = Todo.create({
	text: "Dinner with Charlie.",
	notes: "He owes you!",
	completed: false
	})

todo3 = Todo.create({
	text: "Do the laundry.",
	completed: true
	})