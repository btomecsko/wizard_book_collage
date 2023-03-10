
wizard1 = Wizard.create(first: "Harry", last:"Potter", house:"Gryffindor", username: "hpotter", password: "expecto")
wizard2 = Wizard.create(first: "Hermione", last:"Granger", house:"Gryffindor", username: "hgranger", password: "leviosa")
wizard3 = Wizard.create(first: "Ron", last:"Weasley", house:"Gryffindor", username: "rweasley", password: "wicked")
wizard4 = Wizard.create(first: "Luna", last:"Lovegood", house:"Ravenclaw", username: "llovegood", password: "sleepwalk")
wizard5 = Wizard.create(first: "Newton", last:"Scamander", house:"Hufflepuff", username: "nscamander", password: "philosophy")
wizard6 = Wizard.create(first: "Nymphadora", last:"Tonks", house:"Hufflepuff", username: "ntonks", password: "lupin")
    
    
book1 = Book.create(name: "Quidditch Through the Ages", description: "A collage of photos showing various quidditch matchups or related objects")
book2 = Book.create(name: "Magical Creatures of the Wizarding World", description: "A collage of photos showing various magical creatures throughout the wizarding world")

Photo.create(name: "Hippogriff", image: 'http://pm1.narvii.com/5955/04380e27abe3bec72203e3589064b1426b1ac9b8_00.jpg', date: 5.days.ago, book_id: book2.id, wizard_id: wizard5.id )
Photo.create(name: "Thestral", image: 'https://assets.mugglenet.com/wp-content/uploads/2017/11/81a3ba0b-0f1f-426e-86b1-9f5bb97737ae.jpg', date: 4.days.ago, book_id: book2.id, wizard_id: wizard4.id)