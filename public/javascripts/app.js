$(document).ready(function() {
  $('#roller button.btn-primary').on('click', function() {
    console.log('WAT');
    $('.dice').append('<div class="die"><img src="images/dice/1.png"></div>')
  })

  $('#roller button.btn-success').on('click', function() {
    $('.die').each(function(key, die) {
      let value = Math.floor((Math.random() * 6) + 1)
      let dice = "";
      if(value == 1) {
        dice = '<img src="images/dice/1.png">'
      } else if(value == 2) {
        dice = '<img src="images/dice/2.png">'
      } else if(value == 3) {
        dice = '<img src="images/dice/3.png">'
      } else if(value == 4) {
        dice = '<img src="images/dice/4.png">'
      } else if(value == 5) {
        dice = '<img src="images/dice/5.png">'
      } else {
        dice = '<img src="images/dice/6.png">'
      }
      $(die).html(dice)
    })
  })
})
