function createParagraph(){
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;
    var word3 = document.getElementById('word3').value;
    var word4 = document.getElementById('word4').value;
    var word5 = document.getElementById('word5').value;
    var word6 = document.getElementById('word6').value;
    var word7 = document.getElementById('word7').value;
    var word8 = document.getElementById('word8').value;


var paragraph = '<p> When I go to the arcade with my ' + word1 + ' there are lots of games to play.' + ' I spend lots of time there with my friends.' + 'in the game X-Men you can be different ' + word2 + '. The point of the game is to ' + word3 + ' every robot.' + ' You also need to save people.' + ' Then you can go to the next level.' + ' In the game Star Wars you are Luke Skywalker and you try to destroy every' + word4 + '. In a car racing/motorcycle racing game you need to beat every computerized vehicle that you are' + word5 + ' against.' + ' There are a whole lot of other cool games.' + ' When you play some games you win' + word6 + ' for certain scores.' + ' Once your done you can cash in your tickets to get a big' + word7 + '. you  can save your' + word8 + ' for another time.' + ' When I went to this arcade I didnt belive how much fun it would be.' + ' So far I have had a lot of fun every time Ive been to this great arcade!'
 
    document.getElementById('answer').innerHTML = paragraph; 
}
// }
// When I go to the arcade with my ____________
//         (plural noun) there are lots of games to play. I spend
//         lots of time there with my friends. In the game X-Men
//      you can be different ____________ (plural noun). The
//         point of the game is to ____________(verb) every
//        robot. You also need to save people. Then you can
//         go to the next level.
//         In the game Star Wars you are Luke Skywalker
//         and you try to destroy every ____________(noun). In
//         a car racing/motorcycle racing game you need to beat
//         every computerized vehicle that you are
//         ____________ (-ing verb) against.
//         There are a whole lot of other cool games. When
//         you play some games you win ____________ (plural
//         noun) for certain scores. Once you're done you can
//         cash in your tickets to get a big ______(noun). You
//         can save your ____________ (plural noun) for
//         another time. When I went to this arcade I didn't
//         believe how much fun it would be. So far I have had a
//         lot of fun every time I've been to this great arcade! 