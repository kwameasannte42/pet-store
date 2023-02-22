var discount = [
    {
      title: 'Puppies',
      image: './images/dogs.jpeg',
      price: '$85'
    },
    {
      title: 'Puppies',
      image: './images/kitties.webp',
      price: '$100'
    },
    {
      title: 'Birds',
      image: './images/parrot.jpeg',
      price: '$150'
    },
    {
      title: 'Bunnies',
      image: './images/bunny.jpeg',
      price: '$130'
    },
    {
      title: 'Fishes',
      image: './images/fish.webp',
      price: '$200'
    },
    {
      title: 'Snakes',
      image: './images/snakes.webp',
      price: '$150'
    } 
    
    ]
    
    var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i = 0; i < discount.length; i++){
        var title = '<div class="card"><h5 class="card-title text-center">' + discount[i].title + '</h5>'
        var image = '<img src="' + discount[i].image + '"/>'
        var price = '<div class="card-body"><p><button type="button" class="btn btn-dark">' + discount[i].price+ '</button></p></div></div>'
        var concatThis = title + image + price;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  