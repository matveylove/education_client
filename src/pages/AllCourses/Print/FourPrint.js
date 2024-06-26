import React from 'react'

import {Link} from 'react-router-dom';
import { Button } from '@mui/material'

import print16 from '../../../static/print/print16.png';
import print17 from '../../../static/print/print17.png';
import print18 from '../../../static/print/print18.png';
import print19 from '../../../static/print/print19.png';
import print20 from '../../../static/print/print20.png';
import print21 from '../../../static/print/print21.png';
import print22 from '../../../static/print/print22.png';



const FourPrint = () => {
  return (
    <div>
      <Link to={'/courses/print'}><Button variant="outlined">Вернуться назад</Button></Link>
      
      <main>
        <section>
          <h1>Модуль 4. Печать. Часть 1. Оптимальные режимы печати</h1>

          <p>Прошлые модули были посвящены технической стороне FDM-печати. Сейчас начинается блок про качество изготавливаемых изделий. Пора узнать возможности принтера и начать печатать качественные предметы. Приступаем.</p>

          <h2>Слайсер Ultimaker Cura 3.6</h2>
          <h3>Интерфейс</h3>

          <p>Частично с интерфейсом вы познакомились в прошлой лекции. Остается не много:</p>
          <h4>Профили материалов.</h4>

          <p>Осваивая печать, я вам очень рекомендую прыгать по разным вариантам не сразу. Вы можете начать с любого удобного пластика, PLA, PETG, ABS, HIPS. Они все разные и клевые. И если,  например,  PLA  вас  устраивает  по свойствам, научитесь получать на нем хорошее качество хотя бы на одном конкретном цвете. Иметь радугу в доступности - это приятно, но мешает эффективному устранению дефектов и наработке навыков. Разные  цвета одного пластика могут сильно отличаться по свойствам. Кроме того, пластик разных производителей зачастую требует разных температур печати.</p>

          <p>Профили настроек. Когда ваше основное использование FDM-печати определится, вы скорее всего начнете часто делать схожие по параметрам печати изделия, перемежаемые печатью всякого разного с хитрыми параметрами. Для быстрого возврата к настройкам своей основной деятельности удобно делать профиль настроек с узнаваемым названием. "Fine", "My Fine" и "My Fine#2" не информативны. Делайте "0.1 медленно на шестерни" или "0.3 коробочка по-быстрому".</p>

          <h3>Базовые параметры печати</h3>
          <h4>Толщина слоя</h4>
          <p>Layer Height - толщина слоя - это требование к детализации модели. Толщину слоя можно выбирать в интервале 20-80% от диаметра сопла. чем тоньше слой - тем более гладкими будут стенки и более мелкие детали удастся воспроизвести. Но и время печати при этом увеличивается кратно. Чем толще слой - тем быстрее идет печать. Кроме внешнего вида, изделие из более толстых нитей выдерживает большие нагрузки. Но при этом, оптимальная межслойная прочность достигается на толщине слоя от 20 до 50% диаметра сопла.</p>

          <h4>Толщина стен</h4>

          <p>Wall thickness, Top/bottom layers — отвечают за количество линий стенок. Это требование к прочности. Часто бывает недостаточно 2 линий, чтобы получить достаточно прочны детали.</p>

          <h4>Заполнение</h4>

          <p>Infill - это тоже параметр для успешной печати горизонтальных поверхностеей. И от части влияет на прочность детали. Заполнение можно выключить вовсе, если требования к изделию того позволяют. Изделие  в один Толстый слой в некоторых случаях уже обладает достаточной прочностью.</p>
          <ol>
            <li>•	infill = 0 по возможности,</li>
            <li>•	0- 20% - базовое значение заполнения для большинства задач,</li>
            <li>•	20-40% - для изделий, подвергающихся значительным нагрузкам,</li>
            <li>•	40-80% - для ОЧень прОЧных изделий,</li>
            <li>•	80-100% - при необходимости.</li>
          </ol>

          <img src={print16} alt=''/>

          <p>Сводная таблица о зависимости прочности и заполнения я привел в своей памятке по свойствам пластиков</p>
          <p>Для справки, тестовый кубик 2*2см из ABS (а так же из PETG, HIPS и PLA) с заполнением 20% выдерживает нагрузку более 1.5 тонн. Выводы делайте сами.</p>
          <h4>Материал</h4>

          <img src={print17} alt=''/>
          <p>Параметры печати обычно указаны на упаковке. При этом каждый датчик температуры врет по-своему. И системы обдува на китайских prusa-клонах оставляют желать лучшего. Вам придется подбирать параметры для конкретных филаментов на тестовых моделях. Эти свойства идут связкой: скорость печати — температура печати — обдув — ретракт. Но сначала я попрошу вас вернуться на один шаг назад, и вспомнить печать игральной кости. С помощью штангенциркуля вам необходимо измерить отпечаток. Игральная кость должна быть чуть больше своих модельных размеров 20*20*20мм. Если размеры отличаются больше чем на 2%, значит принтер рассчитывает свои перемешения неправильно и вам необходимо внести соответствующие поправки.</p>

          <h4>Калибровка геометрии отпечатков</h4>

          <p>За правильную величину перемешений отвечают такие параметры как «количество шагов на мм). Если у вас прошивка Марлин, то эти параметры располагаются в меню Control — Motion — Steps/mm Правильное количество шагов рассчитывается математической пропорцией:</p>

          <p>текущее значение Xsteps/mm	ширина грани «2» в реальности искомое значение Xsteps/mm	ширина грани «2» в слайсере Например, если грань «2» получилась 21,93мм шириной, а Xsteps/mm=330, то правильное значение Xsteps/mm = 330*20/21,93 = 301 шаг/мм Аналогичный расчет необходимо провести для оси Y и экструдера. Экструдер калибруется проще. Необходимо отмерить 10см и 11см филамента от входа в экструдер и сделать пометку фломастером. Затем прогрейте сопло и управляя с экрана принтера дайте команду двигать экструдер на 100мм. Принтер должен продавить через сопло ровно 100мм филамента. Если принтер давит иное количество, измерьте ошибку и рассчитайте правильное количество Esteps/mm пропорцией, как это делалось ранее для перемещений по осям.</p>

          <p>А теперь вернемся к параметру Поток: Flow - параметр, которому я до этого времени уделил незаслуженно мало внимания. Этот параметр является коэффициентом, корректирующим расчетное количество миллиметров подаваемого пластика и реальное количество (объем) наплавляемого пластика. Неправильно настроенный Flow загубит на корню все ваши попытки добиться чистых и гладких стенок изделий.</p>

          <p>Поток - параметр расчетный. Это отношение расчетного объема пластика к реальному объему подаваемого пластика. То есть Flow = (πD^2)/(πd^2) = (D/ d)^2, где D — толщина филамента в слайсере, а d — реальная толщина филамента.</p>
          <p>Если в слайсере толщина задана 1.75мм, а реальная толщина 1.68мм, то Flow = (1.75/1.68)2= 1,08 — 108% Если Толщина-в-слайсере=1.75, в Толщина-реальная = 1.8, то Flow= (1.75/1.8)2 = 94%</p>

          <p>Правильно настроенный поток даст вам ровные заливки без следов размазывания филамента. Лучше всего видно некорректно заданный поток в режиме Top/bottom pattern - Concentric. Это очень красивый узор заливки поверхностей, я рекомендую вам его попробовать. При некорректном потоке, последние центральные линии будут здорово размазываться и выпирать или наоборот, перестанут друг с другом слипаться. Важно понимать, что с некорректной высотой сопла над столом (когда параметр initial layer height больше, чем реальная высота сопла над столом, заливка гарантировано будет размазываться и выпирать, создавая дефект «слоновья нога» - то есть излишне широкие первые слои отпечатка). Если такой дефект присутствует на ваших опечатках, первые слои нельзя использовать для визуальной корректировки потока.</p>

          <p>Кроме параметра Flow в слайсере, аналогичный параметр можно задать с интерфейса управления принтера. Бывает, толщина филамента в процессе печати меняется. Особенно на больших изделиях. И заметив мазню или недоэкструзию, вы понимаете необходимость изменить значение Flow. Измерьте филамент, который поступает в экструдер и скорректируйте Flow: Толщина-в-слайсере=1.75, Flow-в-слайсере=97%. Это значит, печать рассчитывалась на толщину филамента 1.8мм. Но теперь филамент стал 1.75мм. Надо воспользоваться той же формулой: (расчетная делить на реальную) в квадрате: (1.8/1.75)^2 = 1.06. В интерфейсе принтера необходимо задать Flow=106% Вот как выглядят недоэкструзия и избыточная экструзия.</p>

          <img src={print18} alt=''/>

          <p>Для себя я выбрал использовать в слайсере диаметр филамента 1.75м, величину Flow 100%. А правильную величину flow указывать через меню принт непосредственно по результатам замера филамента штангенциркулем.</p>

          <h2>Связка "скорость-температура-обдув-ретракт"</h2>

          <p>3D-печать - технология очень медленная, потому печать побыстрее и получше - это наша главная цель. Понимание, что "получше" важнее чем "побыстрее" приходит быстро, после нескольких часов ошкуривания изделия. А потому разъясняю по-очереди:</p>

          <p>Скорость перемещений сопла - сколько позволяет рама без серьезных вибраций. Скорость печати - это то же самое, плюс стабильная работа экструдера в выбранном темпе. Вибрации обязательно проявят себя волнами на поверхности изделия после каждого изменения направления. Уменьшить вибрации можно - найти их источник или уменьшить инерцию от подвижной массы. Первое что надо проверить - натяжение ремней. Затем - люфты в подвижных частях. Если все в порядке - придется уменьшать инерцию - снижать скорости или уменьшать ускорения. Если уж совсем быть занудой, то в 3D-принтерах применяется три величины для расчета перемещений: Speed, Acceleration & Jerk. Cкорость, ускорение и рывок.</p>

          <p>Скорость - это максимальная величина, до которой могут разогнаться стол и экструдер. Пределом данной величине служит максимальная скорость вращения шаговых двигателей. Достигнув своей предельной скорости, шаговики начнут пропускать шаги. Однако стоит отметить, что принтеры редко используют максимальные доступные скорости.</p>
          <p>Ускорение - это интенсивность увеличения скорости и торможения. Этот параметр главным образом ограничивается инерцией подвижной массы и возможностями шаговых моторов. Опять же, увеличение этого параметра рано или поздно приведет к пропуску шагов мотора (как пробуксовка).</p>
          <p>Рывок - это усилие на срыв с места. Приводит к разовому дерганью всей конструкции принтера и отдельно дерганью подвижной массы, которую требовалось дернуть с места. Это стол и/или экструдер.</p>

          <p>Принтер выполняет поворот следующим образом: на максимальной скорости мчит к повороту, перед поворотом тормозит с интенсивностью ускорения до скорости рывка и опять же рывком меняет направление. Когда рывок слишком большой, после поворота двигаемая масса и ее направляющая, а иногда и вся конструкция принтера будут некоторое время качаться и на стенках вы увидите затухающие волны (ringing или ghosting). Волны по оси Х и по оси Y будут разные (для дрыгостола, на Х влияет инерция стола, на Y - инерция экструдера).</p>

          <p>Jerk, Acceleration и Speed меняются несколькими способами: через перепрошивку мат.платы, из интерфейса управления принтером и через g- code. Для Prusa-подобных принтеров с direct-экструдером величина Jerk составляет 5-10 единиц. Для Ultimaker-подобных Jerk может быть больше. Подбирайте опытным путем. Для принтеров с прошивкой Marlin зайдите в меню Control - Motion - и задайте значения X-Jerk и Y-Jerk. Затем в меню Control - нажмите Store settings.</p>

          <p>Аналогичные параметры можно задавать в слайсере Cura в блоке Speed, параметр Enable Jerk Control. Но правильнее поместить эти параметры сразу в прошивку принтера.</p>

          <p>Ускорения обычно поднимают, пока шаговые моторы не начнут пропускать шаги. Однако правильнее остановиться раньше, пока не начнется резонанс на ремнях и направляющих. Этот громкий резонанс без видимых вибраций не позволит получить качественный отпечаток и потому не полезно ставить ускорения выше.</p>

          <p>Ускорения можно подбирать начиная с величины 3000 для Х (bowden) и 3000 для Y (дрыгостол). Задайте Feedrate (так в Marlin называется параметр Скорость) осей X и Y в значения 100 и задайте желаемое значения для ускорений.</p>

          <p>В прошивке Marlin все эти параметры находятся в меню Control-Motion Запустите на печать модель со 100% заполнением узором Grid. Например, модель тестового куба. Если пропуска шагов по осям не будет - поднимайте величины ускорения на 10-20%. Если будет -  уменьшайте  на  10%  значение для той оси, где пропуски появились. Когда  подберете  максимальные значения без пропуска шагов по каждой из осей - отнимите дополнительные 20% процентов для безопасности и фиксируйте в память принтера.</p>

          <p>Скорость во время печати редко поднимается до значений максимальной скорости принтера, и даже до величины 150. Но для чистоты эксперимента, можете растянуть модель тестового куба на всю ширину и длину стола, включить в слайсере Cura параметр Special modes-Surface mode-Surface и задать feedrate 150 для осей Х и Y. Прокатило? Поднимайте значения на 20%! Начались пропуски - отнимайте 20% для безопасности и сохраняйте значение в память.</p>

          <p>Все. Ваш принтер работает с максимальной доступной для него резвостью.</p>

          <p>Теперь, когда вы нашли максимальную скорость своего принтера с приемлемыми вибрациями, переходим к следующему пункту. Температура печати - любой пластик имеет некоторый интервал, в котором его свойства остаются стабильными, а работа экструдера не вызывает нареканий. Недостаток температуры приводит к плохой межслойной адгезии. Избыток температуры - к кривым углам, артефактам на поверхности, изменению геометрических размеров, и образованию волосков на изделии. Кривые углы лечатся охлаждением. Волоски - ретрактом. Высокая скорость требует усиления адгезии между слоями, а значит увеличения температуры. В итоге мы приходим к поиску баланса между скоростью печати, приемлемой температурой для прочности изделия и достаточным охлаждением для качественной формы изделия. И опять, придется выбирать между скоростью и качеством. И слабым звеном чаще всего оказывается слабое охлаждение.</p>

          <p>В подборе параметров температуры печати вам поможет тестовая модель температурной башни. При печати этих тестов рекомендую включить в Cura особый режим печати поверхностей. В блоке параметров "Special Modes" включите параметр Surface mode в положение Surface. И получите печать только вертикальных стен толщиной в одну нить. Если результат теста вас не удовлетворит - уменьшайте скорость и повторяйте. Так выглядит изделие с адекватным и с неадекватным охлаждением:</p>

          <img src={print19} alt=''/>
          <img src={print20} alt=''/>

          <p>Переохлажденная деталь оказывается очень хрупкой, с недостаточной межслойной адгезией и разваливается буквально в руках. Подобрав температуру печати пластика на максимальной доступной скорости, приступайте к подбору ретракта.</p>

          <p>Для включения функции ретракт в слайсере Cura откройте блок параметров Material и найдите параметр Enable Retraction. Появятся уточняющие параметры из которых основные:</p>

          <img src={print21} alt=''/>

          <ul>
            <li>Retraction Distance - сколько миллиметров филамента необходимо втягивать. Для директ-экструдеров этот параметр может быть 0.5-3 мм, для боуденов больше.</li>
            <li>Retraction Speed - скорость с которой экструдер осуществляет втягивание. Медленный ретракт несовместим с высокой скоростью.</li>
            <li>Retraction extra prime amount - сколько дополнительно миллиметров добавить после ретракта - это компенсация сжатия филамента в трубке боудена и компенсация потери пластика на волоски при печати. Каждый волосок - это недоэкструзия на последующем участке печати.</li>
          </ul>

          <p>К сожалению, иногда качественная печать начинает получаться на очень медленной скорости. И причина тому - просто ужасная система обдува сопла у многих дешевых принтеров. И ее придется модернизировать. Пользователи таких принтеров активно моделируют и делятся своими моделями тюнингованных воздуховодов для своих 3d-принтеров на сайте thingiverse.com А теперь немного материала не про тесты:</p>
          <h2>Три важных аспекта успешной печати</h2>

          <h3>Устойчивость модели</h3>

          <p>Для хорошей адгезии со столом, печатаемое изделие должно стоят устойчиво на столе или иметь большое пятно контакта. Если пятно недостаточное - можно попробовать переориентировать модель - положить на бок, перевернуть, наклонить. Иногда целесообразнее печатать деталь по частям. Или включить режим "Brim" — поля:В слайсере Cura в блоке параметров Build plate adhesion включите параметр Build plate adhesion type в положение Brim и задайте адекватное на ваш взгляд количество линий примыкающих к детали. После печати этот "брим" придется отрезать.</p>

          <p>Быстро поделить модель на куски можно в самом слайсере Cura. Для этого просто опустите часть модели ниже уровня стола. И все что окажется под столом печататься не будет. Работает не всегда, но часто этого бывает достаточно.</p>

          <h3>Поверхность</h3>

          <ul>
            <li>Липкий чистый стол.</li>
            <li>Откалиброванный стол.</li>
            <li>Чистое качественное сопло.</li>
          </ul>

          <p>Вот все, что я могу сказать про качественную поверхность.</p>

          <h2>Поддержки</h2>

          <p>3Д-принтер, к сожалению, не способен печатать в воздухе без опоры. Модели с нависающими элементами можно напечатать только с применением поддержек. Этим параметрам в слайсере Cura отведен отдельный блок "Support". Для включения режима печати поддержек поставьте галку на параметре "Generate Support". Откроется много регулировок и все они тем или иным образом влияют на автоматическое создание поддержек. Особо важные параметры:</p>

          <ul>
            <li>•	Support overhang Angle - угол нависания, начиная с которого будут сгенерированы поддержки.</li>
            <li>•	Support placement - расположение поддержек только на поверхности стола или внутри/на поверхности модели тоже</li>
            <li>•	Support density - плотность поддержек. Точнее, жесткость. Чем выше и тоньше поддержка, тем она должна быть жестче, чтоб не рухнула.</li>
            <li>•	Support brim - поля для адгезии поддержек к столу. Это важно, потому что поддержки - это обычно высокие башни с очень малым пятном контакта.</li>
          </ul>

          <p>В слайсере Cura есть режим блокировки генерации поддержек в выбранных пользователем зонах. И этот же режим позволяет делать поддержки принудительно в выбранных местах. Для создания такой зоны воспользуемся ранее не озвученными двумя нижними кнопками левой части интерфейса Cura под названием Support blocker и Per model Settings.</p>

          <p>Выделите печатаемую модель, нажмите кнопку Support blocker (горячая клавиша E) и разместите куб отмечающий зону с особыми параметрами печати. Эта зона будет отмечать те части печатаемой модели, которые не надо поддерживать. Теперь выделите куб блокировшика и с помощью кнопки Scale и Move переместите и измените его форму как считаете нужным. Далее в меню кнопки Per model settings поставьте режим "Don't support overlap with other models - Не поддерживать все, что попало в зону особых параметров.</p>

          <img src={print22} alt=''/>

          <p>Чтобы сделать наоборот и наставить принудительных поддержек, в меню Per model settings, поставьте режим Print as support. И тогда зона особых параметров, которая не пересекается с печатаемой моделью, будет заполнена поддержками. Обращаю ваше внимание, что режим Print as support можно модифицировать внутри меню Select settings</p>

          <p>Но иногда, чтобы избавиться от необходимости поддержек, достаточно просто наклонить модель. А часто нависания и вовсе поддержек не требуют. Чтобы знать, какие нависания печатаются без поддержки- существуют тесты на нависания.</p>

          <h2>Пара слов о качестве филамента</h2>

          <p>Не всегда дорогой филамент будет иметь хорошие свойства, и не всегда дешевый филамент оказывается плох.</p>

          <p>Чем плох филамент: пузырями, мусором внутри филамента и неравномерным диаметром. Пузыри лопаются и портят поверхность изделий, мусор забивает сопло, а неравномерный диаметр делает слои и заливки некрасивыми или дырявыми</p>

          <p>Разница между разными хорошими филаментами - Фирменные филаменты отличаются от безымянных лучшей повторяемостью свойств от партии к партии. Когда катушка заканчивается, она всегда заканчивается неожиданно. С фирменным филаментом вы можете взять следующую катушку и сразу же продолжить производить. С безымянным филаментом вы можете столкнуться с расслоением, низкой прочностью изделий, некорректным ретрактом. Иным цветом пластика. Придется тратить время на подбор новых параметров температуры печати и ретракта. Что касается намотки филамента на катушки и случаев, когда филамент перехлестывается - производитель с автоматической намоткой катушек не может так намотать с перехлестом, даже если специально захочет. Перехлест витков - исключительно вина пользователя или признак кустарного изготовления мотка филамента.</p>

          


          


        </section>
      </main>

    </div>
  )
}

export default FourPrint