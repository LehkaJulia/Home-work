$(document).ready(function() {
    $.get( "https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json", function( data ) {
       
        const CarsColorsArr = JSON.parse(data)
        
        $('div.imgCar').append(`<img id="img" src="https://mc-astro.github.io/tesla-roadster-colors/img/${CarsColorsArr[0].img}.jpg" alt="${CarsColorsArr[0].title}"><p>${CarsColorsArr[0].title}</p>`);

        $.each(CarsColorsArr,
            function(){
                $('div.colorCar').append(`<span class="color"></span>`);
            }
        )

        const allColors = $('.color');

        allColors.each(
            
            function(index, item){

                $(item).css(`background`, `${CarsColorsArr[index].color}`);

                $(item).click(function() {

                    $('#img').attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${CarsColorsArr[index].img}.jpg`);
                    $('#img').attr(`alt`, `${CarsColorsArr[index].title}`);

                    $('p').html(`${CarsColorsArr[index].title}`);

                });

            }
        )
    });
});