const apiKey= "A-Q5CQ-2GaWedYHtkyt9pfMW6Ul7BPV-LJvJmGP_SRz78R0yUAFzLJI-QA-E07Tw9UNcZEKXTLE672Xdk85qlG4IPFk8GvEa2un5N1zjMe4ETD4XLaa_C8xZUBh8XHYx"
const clientId= "n5dccALGutBB01w-pXMj5Q"
let accessToken;

const Yelp = {
  search(term,location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers : {
          Authorization : `Bearer ${apiKey}`,
        }
      }).then( response=>{
          return response.json()
      }).then( jsonResponse=>{
          if (jsonResponse.businesses){
          return jsonResponse.businesses.map( business=>{
                return {
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zipcode,
                  category: business.categories.title,
                  rating: business.rating,
                  reviewCount: business.review_count
                }
            })
          }
      }

      )
  }
}

export default Yelp;
