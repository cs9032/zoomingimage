# 이미지 확대 기능
이미지에 `mouseover` 하면 이미지 확대됩니다.

![](https://github.com/cs9032/zoomingimage/blob/master/img/md.png)

```js
$(function () {
    var zoom = new Zoom(선택자, 확대, 속도);
    // 선택자: String ex : ('.zoom')
    // 확대: Number ex : (1.4)
    // 속도: Nuber ex: (400)
});
```

- 작성자 : 이효진
- 저작권 : MIT