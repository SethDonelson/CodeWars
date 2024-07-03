//given a list of names, return a list of only your friends knowing that your friends only have 4 letters in their names


function friend(friends){
    return friends.filter((word) => word.length === 4)
   }

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]