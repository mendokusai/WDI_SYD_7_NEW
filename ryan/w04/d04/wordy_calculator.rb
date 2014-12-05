class Wordy_calculator

	def self.run(string)
		arr = string.split(" ")
		first = arr.shift.to_i
		last = arr.pop.to_i

		case arr[0]
		when "plus"
			first + last
		when "minus"
			first + last
		when "times"
			first + last
		when "divided"
			first + last
		end
	end

end