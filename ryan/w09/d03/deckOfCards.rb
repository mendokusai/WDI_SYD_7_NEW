class Cards
	@deck_of_cards = []
	def initialize
		
		suits = ["hearts", "spades", "diamonds", "clubs"]
		value = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
		suits.each do |suit|
			values.size.times do |i|
				@deck_of_cards << Card.new(value[1], suit, i+1)
			end
		end
	end

end

puts @deck_of_cards


# card class

# class deck

# 	attr_reader :Cards

# 	def initialize
# 		@cards = []
# 		values =
# 		suits = 
