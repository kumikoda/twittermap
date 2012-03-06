$(document).ready(function(){
  // Defaults
  $('div.pane').hide();
  $('div#map').show();
  
  $("a.navtab").click(changeTab);
  
  function changeTab(e){
  e.preventDefault();
  $('li.active').removeClass("active");
  $(this).parent('li').addClass("active");
  $('div.pane').hide();
  $($(this).attr('href')).show();
  }
  
});