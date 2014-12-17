
#application screen
link to user signin /sign up OR link to profile 
link to quick search
link to random search

show recent bar reviews
show recent beer reviews

show recent bar adds
show recent beer adds

# bar model
*has many beers through barbeer*
*has many bar reviews*
*C*admin can add/edit bar
*R*user can see bars
*U*user can add bar (with new_bar tag) {can be removed by admin}
*U*user can make edit (with edit_bar tag) {can be removed by admin}
*D*user can request delete(with note)
*D*Admin can delete



# beer model
*has many bars through barbeer*
*has many beer review*
[tap into open beer db?]
*C*Admin can add new/edit beer
*R*User can see/search beer
*U*User can request beer (with profile)
*D*User can request delete (with note)
*D*Admin can delete

# barbeer
*belongs to bar*
*belongs to beer*
# join table #
Collects Beer_id
Collects Bar_id
Receives input Beer_price

# bar_review
*belongs to user through user_reviews*
*belongs to bar*


# beer_review
*belongs to user through user_reviews*
*belongs to beer*

# user_reviews
*belongs to user*
collects bar_reviews
collects beer_reviews


