$(document).ready(function() {
    $.get( "https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json", function( data ) {
       
        const CarsColorsArr = JSON.parse(data)
        const allColors = $('.color');
        
        allColors.each(
            
            function(index, item){
                
                $(item).css(`background`, `${CarsColorsArr[index].color}`);
                
                $(item).click(function() {
                    
                    $('div.imgCar').html(`<img src="https://mc-astro.github.io/tesla-roadster-colors/img/${CarsColorsArr[index].img}.jpg" alt="${CarsColorsArr[index].title}"><p>${CarsColorsArr[index].title}</p>`);
                   
                });

            }
        )
    });
      
});