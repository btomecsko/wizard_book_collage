Wizard.destroy_all
Book.destroy_all
Photo.destroy_all


wizard1 = Wizard.create(first: "Harry", last:"Potter", house:"Gryffindor", username: "hpotter")
wizard2 = Wizard.create(first: "Hermione", last:"Granger", house:"Gryffindor", username: "hgranger")
wizard3 = Wizard.create(first: "Ron", last:"Weasley", house:"Gryffindor", username: "rweasley")
wizard4 = Wizard.create(first: "Luna", last:"Lovegood", house:"Ravenclaw", username: "llovegood")
wizard5 = Wizard.create(first: "Newton", last:"Scamander", house:"Hufflepuff", username: "nscamander")
wizard6 = Wizard.create(first: "Nymphadora", last:"Tonks", house:"Hufflepuff", username: "ntonks")
    
    
book1 = Book.create(name: "Quidditch Through the Ages", description: "A collage of photos showing various quidditch matchups or related objects")
book2 = Book.create(name: "Magical Creatures of the Wizarding World", description: "A collage of photos showing various magical creatures throughout the wizarding world")

Photo.create(name: "Hippogriff", image: 'http://pm1.narvii.com/5955/04380e27abe3bec72203e3589064b1426b1ac9b8_00.jpg', date: 5.days.ago, book_id: book2.id, wizard_id: wizard5.id )