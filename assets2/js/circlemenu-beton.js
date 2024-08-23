var textForCircle = {
  0: `
<div class="subtitle">3D  ПРИНТЕР<br>печатающий бетоном</div>
<div class="text">Одно из   наиболее  технологичных и современных решений. Благодаря технологии 3д печати возможно все:</div>
<ul>
    <li>Монолитная печать</li>
    <li>Печать + литье</li>
    <li>Гривировка</li>
</ul>`,
    1: `
<div class="subtitle">Плавильный цех</div>
    `,
  2: `
<div class="subtitle">Покрасочные камеры</div>
    `,
  3: `
<div class="subtitle">ЧПУ оборудование</div>
    `,
  4: `
<div class="subtitle">Завод сухих смесей HYDROHID</div>
    `
}

$(function () {
  var DATA = [];

  DATA.push({
    label: '3D принтер, печатающий бетоном',
    key: 0
  });
  DATA.push({
    label: 'Плавильный цех',
    key: 1
  });
  DATA.push({
    label: 'Покрасочные камеры',
    key: 2
  });
  DATA.push({
    label: 'ЧПУ оборудование',
    key: 3
  });
  DATA.push({
    label: 'Завод сухих смесей HYDROHID',
    key: 4
  });

  var SELECTED = 0;

  var OPTIONS = {
    key: 'key',
    pageLoader: {
      target: null,
      key: 'key'
    }
  }

  var FUNC = {
    onInit: function () {
      console.log('INIT');
    },
    onChangeBegin: function () {
      console.log('CHANGE');
    },
    onChangeComplete: function (d) {
      console.log('CHANGE_COMPLETE')
      console.log(d)
    }
  };

  var circleMenu = new CircleMenu($('#my-circle-menu'), DATA, SELECTED, OPTIONS, FUNC);
});