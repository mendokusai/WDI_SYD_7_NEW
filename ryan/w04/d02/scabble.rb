# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.
 
 
#     Scrabble.score("cabbage")
#     => 14
 
 
# Your program should be in a file named scrabble.rb.
 
# Letter Values
 
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10

def scrabble(word)
	points = {
		1 => [A,E,I,O,U,L,N,R,S,T],
		2 => [D,G],
		3 => [B,C,M,P],
		4 => [F,H,V,W,Y],
		5 => [K],
		8 => [J, X],
		10 => [Q, Z]
	}
 
 def self.score(word)
 	total_score = 0
 	word.each_char do |char|
 		SCORES.each do |score, letters|
 			if letters.include? char.upcase
 				total_score += score
 			end
 		end
 	end	

end