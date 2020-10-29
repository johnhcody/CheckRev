@reviews.each do |review|
       json.set! review.id do 
        json.partial! 'review', review: review
        json.photoUrl rails_blob_url(review.photo)
    end
end