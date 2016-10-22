$(function () {

    var $zoom = $('.zoom li'),
         width = $zoom.width(),
         zoom = 1.4,
         duration = 400;

    $zoom.on({
       mouseenter: function () {

           var $self = $(this),
                height = $self.height();

           $self
               .find('.img')
               .stop()
               .animate({
                   width: width * zoom,
                   marginLeft: -(width * zoom - width) / 2,
                   marginTop: -(height * zoom - height) / 2
               }, duration);
       },
        mouseleave: function () {
            $(this)
                .find('.img')
                .stop()
                .animate({
                    width: width,
                    marginLeft: 0,
                    marginTop: 0
                }, duration);
        }
    });

});