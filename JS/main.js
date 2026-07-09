
  $(function () {
  $('a[href^="#"]').on('click', function () {
    const speed = 500;
    const href = $(this).attr('href');
    const target = $(href);

    if (!target.length) return false;

    const position = target.offset().top;

    $('html, body').animate(
      {
        scrollTop: position
      },
      speed
    );

    return false;
  });
});


