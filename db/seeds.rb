# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Wizard.create([{first: "Harry", last:"Potter", house:"Gryffindor"}, {first: "Hermione", last:"Granger", house:"Gryffindor"}, {first: "Ron", last:"Weasley", house:"Gryffindor"}, {first: "Luna", last:"Lovegood", house:"Ravenclaw"}, {first: "Newton", last:"Scamander", house:"Hufflepuff"}, {first: "Nymphadora", last:"Tonks", house:"Hufflepuff"}])
Book.create([{name: "Quidditch Through the Ages", description: "A collage of photos showing various quidditch matchups or related objects"}, {name: "Magical Creatures of the Wizarding World", description: "A collage of photos showing various magical creatures throughout the wizarding world"}])