import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import print42 from '../../../static/print/print42.png';
import print43 from '../../../static/print/print43.png';
import print44 from '../../../static/print/print44.png';
import print45 from '../../../static/print/print45.png';
import print46 from '../../../static/print/print46.png';
import print47 from '../../../static/print/print47.png';


const TenPrint = () => {
  return (
    <div>
    <Link to={'/courses/print'}><Button variant="outlined">Вернуться назад</Button></Link>

    <main>
        <section>
            <h1>Модуль 10. Скульптурное моделирование</h1>

            <p>Наиболее популярный инструмент для скульптурного моделирования — это свободное ПО Bender, проприетарный Zbrush. Подходящий функционал есть в Fusion 360.</p>

            <p>Я не занимаюсь скульптурным моделированием и не знаком с тонкостями и толстостями этой работы. Потому, передаю вам «как есть» набор материала по теме Скульптура в Blender от пользователя ffd:</p>

            <div>
              <h4>AgenZasBrothers </h4>
              <p>(https://www.youtube.com/channel/UCOOmTjuGS9VwH3rziflB7Xg) - канал закрылся, но полезная информация никуда не делась.</p>
            </div>
            <div>
              <h4>Artur Shamshadinov </h4>
              <p>(https://www.youtube.com/channel/UCTbj9GGBll0ycmSaBbGgcxQ) - новичкам к просмотру. Хороший старт. Канал заброшен, но ещё актуален.</p>
            </div>
            <div>
              <h4>blazraidr</h4>
              <p>(https://www.youtube.com/channel/UCBTVDEpwT5L3TXMYZO3Rn_g) - много демок, видео с уроками и советами.</p>
            </div>
            <div>
              <h4>Blender  3D </h4>
              <p>(https://www.youtube.com/channel/UCLYrT1051M_6XkbEc5Te8PA) - уроки - отличный канал от автора Артёма Славки. Свои уроки а та же переведенные уроки англоязычных  коллег.  Обзоры  возможностей программы. Новичкам обязателен к изучению.</p>
            </div>
            <div>
              <h4>Blender Animation Studio </h4>
              <p>(https://www.youtube.com/channel/UCz75RVbH8q2jdBJ4SnwuZZQ) - канал официальной студии анимации Blender Institute. Работы и видео о жизни студии.</p>
            </div>
            <div>
              <h4>Blender  HD  </h4>
              <p>(https://www.youtube.com/channel/UCatamfbt5w18LusUifPsIXQ) - уроки и советы. Канал давненько не  обновлялся,  но  здесь  много интересного.</p>
            </div>
            <div>
              <h4>Blender Sensei </h4>
              <p>(https://www.youtube.com/user/blendersensei/videos) - канал проекта Blender Sensei, переработанной авторской сборки редактора. Многие уроки вполне актуальны и для официальной сборки.</p>
            </div>
            <div>
              <h4>BlenderDiplom </h4>
              <p>(https://www.youtube.com/channel/UCDr2wre7DtbJg8IxJNJkhmw) - уроки, тесты, обзоры. Затрагиваются многие аспекты 3-х мерной графики и анимации.</p>
            </div>
            <div>
              <h4>CG Geek </h4>
              <p>(https://www.youtube.com/channel/UCG8AxMVa6eutIGxrdnDxWpQ) - огромная подборка уроков автора. Очень рекомендую тем кто уже освоил основы и хочет большего!</p>
            </div>
            <div>
              <h4>CG  Master</h4>
              <p>(https://www.youtube.com/channel/UCCxay0KiyLlawfgoZ2mVnNQ) - отличные уроки от профессионалов.</p>
            </div>

            <h2>Особенности моделирования для FDM</h2>

            <p>При проектировании деталей обязательно думайте как потом ее будет печатать принтер и как потом ее собрать в целый механизм. Это касается как формы изделия, так и его свойств.</p>

            <p>Тонкие стенки — при моделировании стен, целесообразно выбирать толщину кратно диаметру сопла. А точнее, кратно ширине линии (line width) вашего слайсера. Способности слайсера заполнять тонкие щели не всегда удовлетворительны.</p>

            <p>Прочность — параллельно слоям отпечатки обладают в несколько раз большей прочностью, чем перпендикулярно слоям. В случае необходимости высокой прочности в месте изгиба детали, иногда целесообразно повернуть деталь на 90 градусов, либо отделить деталь с изгибом и, в дальнейшем, печатать отдельно и затем вклеить. Либо, как предложил romzes, использовать способность полимеров FDM размягчатся от нагрева, и изгибать плоскую отпечатанную деталь с помощью локального нагрева.</p>

            <p>Отверстия — При печати отверстий в вертикальных стенках, каждый сталкивался с проблемой провисаний. Пластик верхних слоев, закрывающих верхний полукруг не имеет опоры и портит ровность отверстия. Можно высверлить после печати, а можно печатать чтобы не высверливать. Для этого достаточно вместо отверстий круглой формы моделировать форму капли.</p>

            <p>Кроме того, для круглых отверстий возможно применение вырезов. Это даст небольшую подвижность для очень плотной фиксации валов там, куда они вовсе бы не влезли.</p>

            <img src={print42} alt=''/>

            <p>Допуски и посадки — не углубляясь с дебри, сразу же предлагаю тестовую модель, дающую ясное представление, на какие допуски способен ваш принтер: https://www.thingiverse.com/thing:2351919 Правильно задавать допуски на этапе моделирования, используя результаты полученные в вышеуказанном тесте. Но можно воспользоваться параметром в слайсере Cura — Shell — Outer Wall Inset. Еще один более точный метод — моделированием с учетом последущей доработки отпечатка — моделировать с припуском для доработки сверлом, напильником и пр.</p>

            <p>Углы — моделировать скругления предпочтительнее острых углов. Ввиду инерции подвижных частей вашего принтера, помимо острого угла, принтер будет стремиться напечатать еще и артефакты «волны». Со скруглением вместо острого угла вы уменьшите волны на детали и нагрузки на ремнях. Помните, что из-за толщины печатаемой линии, идеально напечатанный угол будет иметь скругление равное радиусу сопла. Потому в модели скругление полезно задавать выше этой величины.</p>

            <p>Резьбы — целесообразнее резьбы менее М12 не печатать, а использовать закладную деталь из металла, например, квадратну гайку. Либо не моделировать резьбу вовсе: винт вкрученый в пластиковое отверстие правильного диаметра держится достаточно надежно.</p>

            <p>Ассиметричность деталей напечатанных на декартовых принтерах  — ввиду разных инерций вибраций по осям Х и Y, печать деталей с простиранием по одной из осей приведет к разным микроотклонениям в какую-либо сторону. С этим явлением сталкивались все, кто печатал траки или звенья разборной цепи для кабеля. Если печатать одинаковые детали с одинаковым расположением на столе, тогда детали будут идентичны друг другу. Иначе если располагать их разнонаправленно, тогда микроотклонения будут скомпенсированы, но детали будут немного отличаться друг от друга.</p>

            <p>Поддержки, мосты и нависания — это вспомогательные режимы печати. И они ставят высокие требования как к печатающим устройствам, так и к тщательной настройке модели в слайсере. В некоторых случаях целесообразнее сделать модель без использования таких элементов. Однако, эти режимы печати можно применять нестандартно, как например:</p>

            <h4>Режим спирализации</h4>

            <img src={print43} alt=''/>

            <h4>Режим нависаний (модель в стиле Hairy)</h4>

            <img src={print44} alt=''/>
            <img src={print45} alt=''/>

            <h4>Неразборные модели в стиле Flexi</h4>

            <img src={print46} alt=''/>

            <p>Отдельно отмечу более широкое поле для фантазии с неразборными моделями. Например, неразборный подшипник.</p>

            <img src={print47} alt=''/>

            
        </section>
    </main>
    </div>
  )
}

export default TenPrint