@businesses.each do |business|
    debugger
    json.set! business do 
        json.partial! 'api/businesses/business', business: business
    end
end

#json.partial! 'api/businesses', businesses: @businesses