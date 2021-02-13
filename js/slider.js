$('#slidewrapper1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    cssEase: 'linear',
    touchThreshold:500,
    variableWidth: true,
    nextArrow:document.getElementById('next'),
    prevArrow:document.getElementById('previous')
    
});
$('#slidewrapper2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold:500,
    infinite: true,
    cssEase: 'linear',
    variableWidth: true,
    nextArrow:document.getElementById('next2'),
    prevArrow:document.getElementById('previous2')
});
