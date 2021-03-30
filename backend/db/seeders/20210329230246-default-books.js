'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',
    [
      {
      "title": "The Perks of Being a Wallflower",
      "author": "Stephen Chbosky",
      "googleLink": "http://books.google.com/books?id=pK0X5FyUs28C&hl=&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=pK0X5FyUs28C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "After",
      "author": "Anna Todd",
      "googleLink": "http://books.google.com/books?id=QVLRBAAAQBAJ&hl=&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=QVLRBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "The Tao of Pooh",
      "author": "Benjamin Hoff",
      "googleLink": "http://books.google.com/books?id=IAhbAAAAMAAJ&hl=&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=IAhbAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "Dark Places",
      "author": "Gillian Flynn",
      "googleLink": "http://books.google.com/books?id=bPCMDQAAQBAJ&hl=&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=bPCMDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "The Te of Piglet",
      "author": "Benjamin Hoff",
      "googleLink": "http://books.google.com/books?id=SJzc6cjDFy8C&hl=&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=SJzc6cjDFy8C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "The House of the Seven Gables",
      "author": "Nathaniel Hawthorne",
      "googleLink": "http://books.google.com/books?id=_3SdGRyvMAcC&hl=&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=_3SdGRyvMAcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "googleLink": "https://play.google.com/store/books/details?id=PGR2AwAAQBAJ&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "The Girl on the Train",
      "author": "Paula Hawkins",
      "googleLink": "https://play.google.com/store/books/details?id=Udv-AwAAQBAJ&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=Udv-AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "Something Blue",
      "author": "Emily Giffin",
      "googleLink": "https://play.google.com/store/books/details?id=3ydnhB7waIEC&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=3ydnhB7waIEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
      "title": "Something Borrowed",
      "author": "Emily Giffin",
      "googleLink": "https://play.google.com/store/books/details?id=v2CrBj-MSg4C&source=gbs_api",
      "imageURL": "http://books.google.com/books/content?id=v2CrBj-MSg4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "createdAt": new Date(),
      "updatedAt": new Date()
      },
      {
        "title": "Sharp Objects",
        "author": "Gillian Flynn",
        "googleLink": "http://books.google.com/books?id=7JCLDQAAQBAJ&hl=&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=7JCLDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "Harry Potter and the Deathly Hallows",
        "author": "J.K. Rowling",
        "googleLink": "https://play.google.com/store/books/details?id=_oaAHiFOZmgC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=_oaAHiFOZmgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "Harry Potter and the Half-Blood Prince",
        "author": "J.K. Rowling",
        "googleLink": "https://play.google.com/store/books/details?id=R7YsowJI9-IC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=R7YsowJI9-IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "Harry Potter and the Order of the Phoenix",
        "author": "J.K. Rowling",
        "googleLink": "https://play.google.com/store/books/details?id=zpvysRGsBlwC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=zpvysRGsBlwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "Harry Potter and the Goblet of Fire",
        "author": "J.K. Rowling",
        "googleLink": "https://play.google.com/store/books/details?id=etukl7GfrxQC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=etukl7GfrxQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "author": "J.K. Rowling",
        "googleLink": "https://play.google.com/store/books/details?id=Sm5AKLXKxHgC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling",
        "googleLink": "https://play.google.com/store/books/details?id=5iTebBW-w7QC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "googleLink": "https://play.google.com/store/books/details?id=wrOQLV6xB-wC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "The Sun Also Rises",
        "author": "Ernest Hemingway",
        "googleLink": "http://books.google.com/books?id=IrjQDwAAQBAJ&hl=&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=IrjQDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
        "title": "1984",
        "author": "George Orwell",
        "googleLink": "https://play.google.com/store/books/details?id=kotPYEqx7kMC&source=gbs_api",
        "imageURL": "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "createdAt": new Date(),
        "updatedAt": new Date()
        },
        {
          "title": "Mockingjay (The Hunger Games, Book 3)",
          "author": "Suzanne Collins",
          "googleLink": "https://play.google.com/store/books/details?id=Iw_gHtk4ghYC&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=Iw_gHtk4ghYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "Catching Fire (The Hunger Games, Book 2)",
          "author": "Suzanne Collins",
          "googleLink": "https://play.google.com/store/books/details?id=FN5wMOZKTYMC&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=FN5wMOZKTYMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "Miss Peregrine's Home for Peculiar Children",
          "author": "Ransom Riggs",
          "googleLink": "https://play.google.com/store/books/details?id=pkGqafH1V40C&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=pkGqafH1V40C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "Two-way Street",
          "author": "Lauren Barnholdt",
          "googleLink": "https://play.google.com/store/books/details?id=xp1N7SXX-XIC&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=xp1N7SXX-XIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "Gone Girl",
          "author": "Gillian Flynn",
          "googleLink": "http://books.google.com/books?id=mmWODQAAQBAJ&hl=&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=mmWODQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "Eclipse",
          "author": "Stephenie Meyer",
          "googleLink": "https://play.google.com/store/books/details?id=lw99Oii9R90C&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=lw99Oii9R90C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "Breaking Dawn",
          "author": "Stephenie Meyer",
          "googleLink": "https://play.google.com/store/books/details?id=kcsqGna7fBIC&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=kcsqGna7fBIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "New Moon",
          "author": "Stephenie Meyer",
          "googleLink": "https://play.google.com/store/books/details?id=07LTDdpMZfYC&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=07LTDdpMZfYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "The Hunger Games",
          "author": "Suzanne Collins",
          "googleLink": "http://books.google.com/books?id=_zSzAwAAQBAJ&hl=&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=_zSzAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          },
          {
          "title": "Twilight",
          "author": "Stephenie Meyer",
          "googleLink": "https://play.google.com/store/books/details?id=ZfjzX7M8zt0C&source=gbs_api",
          "imageURL": "http://books.google.com/books/content?id=ZfjzX7M8zt0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "createdAt": new Date(),
          "updatedAt": new Date()
          }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
