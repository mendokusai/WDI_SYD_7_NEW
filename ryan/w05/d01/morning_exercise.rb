require 'pry'

# Triangle
# Create a method so if you call .triangle on 3 numbers, the result will tell you if a triangle is equilateral, isosceles, or scalene.
 
# eg
 
# [3,3,5].triangle = "isoceles"
# The program should raise an error if the triangle cannot exist.



# class Array
# 	def triangle
# 		return "Triangle can't exist" unless self.length == 3
# 		self.n1 = n1
# 		self.n2 = n2
# 		self.n3 = n3

# 		if n1 == n2
# 			"Triangle is isoceles"
# 		elsif n1 < n2 || n1 > n2
# 			"Triangle is scalene"
# 		elsif n1 == n2 && n3
# 			"Triangle is equilateral, boyee"
# 		else
# 			"You've done something wrong, friendo."
# 		end
# 	end
				
# 	binding.pry
# end

#nick's solu 

class Array
	def triangle
		return "No" unless self.length == 3

		case self.uniq.length
		when 3
			"Scalene, mofo."
		when 2
			"isoceles."
		when 1
			"Equilateral"
			
		end
	end
binding.pry
end
			
