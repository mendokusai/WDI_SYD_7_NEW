# Anagram Detector
# Write a program that, given a word and a list of possible anagrams, selects the correct one(s).
 
# In other words, given: "listen" and ['enlists', 'google', 'inlets', 'banana'] the program should return "inlets".
 
# Tips 
# ---- 
 
# + Use ruby docs and find some methods that you can use on arrays and strings to help you. 
# + If you're stuck, google how to find anagrams. 





words_list = ['enlists', 'google', 'inlets', 'banana']

def anagram_detector(word, list)
	temp_arr = []
	list.each do |x| 
		temp_arr.push(x.split("").sort.join)
	end

	x = word.split("").sort.join

	print temp_arr

end

anagram_detector("listen", words_list)


# Nick's version

# given_word

# list_of_words

# def anagram_in(list, word)
# 	sorted_hash = {}
# 	list.each do |item|
# 		sorted_item = item.chars.sort.join
# 		sorted_has[sorted_item] = item
# 	end
# 	sorted_word = word.chars.sort.join
# 	sorted_hash[sorted_word]
# end