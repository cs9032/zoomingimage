
var Zoom = function (ele, zoom, speed) {
    this.init(ele, zoom, speed);
    this.initEvent();
};

Zoom.prototype.init = function (ele, zoom, speed) { //init 안에 변수를 넣는다
    this.$zoom = $(ele).find('li');
    this.width = this.$zoom.width();
    this.zoom = zoom;
    this.duration = speed;
};

Zoom.prototype.initEvent = function () {
    var that = this;
    
    this.$zoom.on({
       mouseenter: function () {
           that.zoonIn($(this));           
       },
        mouseleave: function () {
            that.zoomOut($(this));            
        }
    });
    
};

Zoom.prototype.zoonIn = function ($self) {    
    var height = $self.height();

    $self
        .find('.img')
        .stop()
        .animate({
            width: this.width * this.zoom,
            marginLeft: -(this.width * this.zoom - this.width) / 2,
            marginTop: -(height * this.zoom - height) / 2
        }, this.duration);
    
};

Zoom.prototype.zoomOut = function ($self) {    
    $self
        .find('.img')
        .stop()
        .animate({
            width: this.width,
            marginLeft: 0,
            marginTop: 0
        }, this.duration);
};