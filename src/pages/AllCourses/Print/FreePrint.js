import React from 'react'

import {Link} from 'react-router-dom';
import { Button } from '@mui/material'

import print7 from '../../../static/print/print7.png';
import print8 from '../../../static/print/print8.png';
import print9 from '../../../static/print/print9.png';
import print10 from '../../../static/print/print10.png';
import print11 from '../../../static/print/print11.png';
import print12 from '../../../static/print/print12.png';
import print13 from '../../../static/print/print13.png';
import print14 from '../../../static/print/print14.png';
import print15 from '../../../static/print/print15.png';


const FreePrint = () => {
  return (
    <div>
      <Link to={'/courses/print'}><Button variant="outlined">Вернуться назад</Button></Link>

      <main>
        <section>
          <h1>Модуль 3. Технология FDM. Часть 2. Подготовка нового принтера</h1>
          <p>В этом модуле будет освещен процесс подготовки к печати нового принтера кинематики Prusa, а так же его устройство. В  заключении  я коротко ознакомлю вас с программой слайсером Ultimaker Cura. </p>

          <h2>Техника  безопасности</h2>
          <p>Не работать под напряжением.</p>
          <p>Отдельные элементы 3D-принтера нагреваются выше 200С и вызывают ожоги при соприкосновении с кожей. Горячее сопло выглядит точно так же как и холодное. Шаговые моторы вредно двигать вручную даже у выключенного принтера. Для перемещения экструдера и стола лучше использовать команды с блока управления. Если двигать сопло и стол вручную все же надо, то отключите двигатели от блока управления. В противном случае можно сжечь драйверы управления моторами.</p>
          <h2>Терминология</h2>

          <p>Концевик — концевой выключатель, работающий как ограничитель перемещения по оси.</p>
          <p>Название осей, направляющих и концевых выключателей лучше слов опишет чертеж. Эти названия правдивы для всех XYZ-принтеров.</p>


          <img src={print7} alt=''/>

          <p>Для дельты верна следующая картина Концевые выключатели находятся вверху башен. Их срабатывание описывает не начало координат, а точку на центральной оси вверху доступной зоны печати. Башни принято называть Альфа, Бетта и Гама. За точку начала координат принимается центр поверхности рабочего стола.</p>

          <img src={print8} alt=''/>

          <h2>Что еще полезно иметь для FDM-печати:</h2>
          <p>Штангенциркуль либо микрометр с точностью 0.01мм — измерять толщину филамента точно.</p>
          <p>Два гаечных ключа — для сопла 7мм и малый разводной ключ для термоблока - менять сопло.</p>
          <p>Пинцет — снимать сопли первого слоя и другие лишние штуки с хотэнда, стола и печатаемой детали.</p>
          <p>Кусачки-бокорезы — для снятия поддержек, откусывать лишнее, обрезать филамент.</p>
          <p>Острый нож.</p>
          <p>Наждачную бумагу — зарнистостью 200 и 400 — обрабатывать поверхности отпечатков.</p>
          <h4>Опционально:</h4>

          <p>Набор автомобильных щупов 0.05, 0.10, 0.15мм — для калибровки стола. Моток тонкой проволоки для чистки/прокаливания сопла. Строительный фен - позволяет предварительно прогреть рабочую камеру Ultimaker-подобных принтеров. Помогает быстро убирать «волосатость» с отпечатков.</p>
          <p>Ковырялки — металлические инструменты похожие на шило. Пригодятся вынимать поддержки из труднодоступных мест напечатанных предметов.</p>

          <h2>Сборка и настройка нового принтера</h2>
          <p>Пункт о сборке я пропущу ввиду тенденции производителей присылать полусобранные принтеры «поствь раму, соедини электрику, калибруй и печатай»! Вторая причина - нельзя одним абзацем объять необъятную фантазию производителей принтеров.</p>
          <p>Отмечу важность точного соблюдения перпендикулярности осей X, Y и Z. Все люфты и слабины должны быть устранены. Проверьте каждый подшипник, каждый ролик, и каждое винтовое соединение. Приводные ремни должны быть натянуты в тугую. От этого зависит качество изготавливаемых вами изделий и долгий срок службы принтера.</p>
          <p>Любой современный FDM-принтер состоит из стола, экструдера, направляющих и приводов к ним. Перемещения осуществляют шаговые двигатели. За определение точки начала отсчета координат отвечают концевые выключатели. Действия электроники координирует блок управления.</p>
          <p>Когда все элементы принтера соединены воедино, наступает самая трудная часть: калибровка стола и экструдера. Задача построить плоскость стола так, чтобы экструдер перемещался строго параллельно столу. Для удобства проведения этой процедуры, можно отключить двигатели от блока управления и перемещать стол и экструдер вручную. Я буду описывать процедуру калибровки для Prusa-подобных принтеров. Эта же логика применима к кубообразным принтерам. Дельты калибруются иначе.</p>

          <h4>Калибровка prusa-принтера</h4>
          <p>Для качественной калибровки необходимо в первую очередь проверить параллельность направляющей Y и основания принтера. Далее, на одной высоте(нулевой высоте сопла) надо совместить сопло, стол и концевой выключатель Z-stop. При этом где будет ноль - решает концевой выключатель, а соприкасаться должны стол и сопло. Порядок ваших действий таков:</p>
          <ul>
            <li>наметить высоту, на которой сопло и стол будут соприкасатся и при этом остается запас для регулировки стола вверх и вниз.</li>
            <li>подстроить концевой выключатель оси Z под намеченный уровень нулевой высоты.</li>
            <li>откалибровать стол под установившийся ноль высоты сопла.</li>
          </ul>

          <p>Приступаем. За ноль высоты сопла отвечает Z-stop. Необходимо, чтобы Z- stop срабатывал в момент соприкосновения стола и сопла. Делаем так: Наиболее популярная система крепления стола — на 4 подпружиненных винта.</p>

          <ol>
            <li>Затянуть регулировочные винты до половины возможной высоты.</li>
            <li>Опустить вручную сопло (с отключенными шаговыми двигателями) до соприкосновения со столом.</li>
            <li>Поднять Z-stop до срабатывания (до щелчка) и зафиксировать в этом положении.</li>
            <li>Притянуть стол вниз (это надо, чтобы принтер не мог соплом раздавить стол, в случае ошибки)</li>
            <li>Дайте принтеру команду переместить сопло в начальную точку.</li>
            <li>Теперь сопло вашего принтера находится в нуле высоты. Приступаем к калибровке положения стола.</li>
          </ol>

          <p>Выравнивание плоскости по 4 точкам - противоестественно понятию «плоскость», известному нам с уроков геометрии. Плоскость подразумевает 3 точки для калибровки. А четвертая вносит кривизну и хаос. Потому удобно регулировать стол в два захода: черновой (щупами) и чистовой (печатью калибровочной модели). Иногда приходится дополнительно корректировать выпуклость или вогнутость покрытия стола. Важно! Калибровка стола проводится с прогретым до рабочей температуры столом.</p>
          <p>С помощью щупов выставьте зазор между столом и соплом в значение 0.1мм сначала над условным первым болтом, затем над вторым, снова над первым и еще раз надо вторым. Далее переходим к третьему, четвертому, снова третьему и опять к четвертому. В финале снова проверьте зазор над первым и вторым винтами. Если зазор изменился, то и над третьим и четвертым винтами зазор тоже потребует корректировки. Когда зазоры соблюдены, черновая калибровка выполнена успешно. Преходите к первой пробной печати. Чистовая настройка проводится во время медленой печати калибровочной модели. Но перед этим придется сказать пару слов о слайсере. И не забудем о дельта-принтерах</p>

          <h4>Калибровка Дельта-принтера.</h4>

          <p>Особенность этого вида принтера в том, что стол неподвижный. Калибруются высоты концевиков над столом и углы наклона башен. Хорошо, когда дельта-принтер оснащен датчиком высоты Z. Полностью ручная калибровка (с отключенными моторами) не представляется возможной. Только полуавтоматическая с использованием тех или иных программных калькуляторов, встроенных в прошику. Например, калькулятор Эшера. Внимательно изучите возможности вашего принтера в документации к нему.</p>

          <h4>Слайсер Cura.</h4>
          <p>Мой слайсер по-умолчанию Cura версии 4.2.1. Он хорош тем, что opensource (свободное ПО), кроссплатформенный (я живу в Linux и Windows одновременно) и активно развивается, но об этом позже.</p>

          <p>Скачайте и установите актуальную версию данной программы. Или версию 3.6, она тоже пока еще (2019г) хороша. Иллюстрации ниже приведены из Cura 3.6</p>

          <p>При первом запуске, Cura попросит вас настроить параметры принтера.</p>
          <ul>
            <li>Если вашего принтера нет в списке известных, то выбирайте Custom и заполняйте профиль принтера вручную.</li>
            <li>задайте форму и размеры области печати,</li>
            <li>Выберите предпочтения по формату gcode (при включении, принтер отображает на экране название своей прошивки. Если это, например, marlin - выбирайте эту опцию смело).</li>
            <li>Переключитесь на закладку "Экструдер" и задайте параметры размера сопла обычно 0.4мм, размера совместимого филамента (обычно 1.75мм), </li>
            <li>В большинстве случаев, начальный и конечный g-code для экструдера остаются пустыми. но если ваш принтер того требует - проверьте документацию на принтер и поместите сюда необходимые команды.</li>
            <li>Начальный и конечный G-CODE для принтера - это те команды, которые принтер выполняет перед началом печати. Например, первоначально выдавить некоторое количество нити и смазать ее об край стола.</li>
          </ul>

          <p>Тема G-code очень объемная и не для этого курса. Правильный путь - взять коды под ваш принтер у производителя в документации на принтер. Обычно на флешке есть файлы конфигурации для некоторых слайсеров, в который можно найти готовые start g-code и end g-code. А можно оставить команды, которые предложила Cura.</p>
          <p>ВАЖНО! если что-то пойдет не так во время первого запуска - выключайте питание принтера. Это сохранит ваш принтер от саморазрушения.</p>
          <p>Настройки Printhead settings (настройки головы) - необходимы при печати деталей "одна за другой", когда уже готовые изделия создают препятствия для движения сопла. Этот функционал сейчас трогать не нужно.</p>

          <p>Когда с настройками принтера покончено, перейдите на закладку общих настроек и переключите режим интерфейса на русский язык, если вам это необходимо. Я же продолжу употреблять английские термины. Если принтер у вас только один, то на этой же закладке снимите галку "add machine prefix to job name".</p>
          <p>Можно приступать к печати. Но придется освоить интерфейс.</p>
          <p>Слева кнопки "открыть", "подвинуть модель", "масштабировать модель", "повернуть модель", "отзеркалить модель" и две пока не нужные.</p>

          <p>Справа - выбор пластика и неудобный режим минимума настроек. Сразу же переключаемся из положение Recommended в Custom. Здесь предлагается значительно больше свободы в том, как будет проходить печать.</p>
          <p>Модель для чистовой калибровки стола вы можете скачать здесь. Она предназначена для сопла 0.4мм и толщины слоя 0.2мм.</p>

          <p>Откройте калибровочную модель bed-leveling.stl. Если модель больше вашего стола, то переключитесь на "масштабировать модель" и в появившемся всплывающем меню укажите с помощью процентов необходимый масштаб. Важно, чтобы вы сняли галку "Uniform scaling" и уменьшали только длину и ширину модели, оставив высоту неизменной.</p>

          <p>Из всех доступных настроек печати, вам необходимо задать лишь несколько, часть из которых может быть по-умолчанию скрыта. Сразу под меню выбора профиля находится строка поиска настроек. Им мы и будем пользоваться.</p>

          <ol>
            <li>напишите в строку поиска "layer" и вы увидете все настройки содержащие это слово. В блоке настроек Quality задайте величину слоя Layer height равную 0.2; величину начального слоя Initial layer Height равную 0.2</li>
            <li>напишите в строку поиска "speed". В блоке настроек "Speed" задайте скорость печати Print speed равную 10</li>
            <li>очистите строку поиска, и вы увидите все видимые настройки. Пролистайте этот список до блока "Build plate Adhesion". В этом блоке задайте параметр Build plate Adhesion type равный Skirt.</li>
            <li>Теперь наведите курсор на название блока настроек "Build plane Adhesion" и вы увидете появившуюся кнопку "Шестеренка". Это меню настройки видимости параметров печати. Найдите параметр Skirt line count и сделайте его видимым. Закрывайте меню настроек видимости и задайте этот параметр, количества линий окантовки, равный 10.</li>
            <li>Рядом со строкой поиска есть кнопка "меню" из трех полос. там можно выбрать один из преднастроенных режимов видимости настроек. Желающие могут включить сразу все настройки, это позволит окунуться с головой во все тяжкие и быстрее освоится с тем, какие настройки есть, какие из них меняются часто, а какие можно убрать.</li>          
          </ol>


          <p>Остается выбрать материал из выпадающего меню в правом верхнем углу интерфейса. Коллекция "Generic", то есть "обычный" вам вполне подойдет. Выбирайте ваш тип филамента, и можно нажимать кнопку "Prepare" в правом нижнем углу.</p>

          <p>ВАЖНО! Я рекомендую печатать PLA-пластиком, чтобы во время печати, температура стола была неопасна, а только неприятна к прикосновению.</p>

          <p>G-code файл для печати готов.</p>

          <p>Получившийся gcode необходимо сохранить на флешку. Но сначала его полезно визуально проверить с помощью режима "Layer view" в правом верхнем углу пространства печати. Кнопка "Play" с характерным значком запустит визуализацию движения экструдера</p>

          <img src={print9} alt=''/>

          <p>Напоминаю, после черновой калибровки, между соплом и столом оставался зазор равный величине эталона (щупа или бумажки). Во время печати, принтер дополнительно поднимет сопло на высоту первого слоя «initial layer height». По-этому нить не будет придавливаться в достаточной мере к поверхности стола. В идеале, на нулевой высоте по Z зазора между столом и соплом быть не должно. Однако очень трудно сделать нулевой зазор и не вдавить стол соплом.</p>

          <p>Задача калибровки — вдавить линии первого слоя достаточно для успешного и качественного прилипания, но и не слишком сильно. Если сопло слишком близко, ширина линии будет значительно шире чем требуется, соседнии линии будут перекрывать друг друга и это повлечет характерные дефекты размазанного пластика, либо вовсе остановит подачу филамента с последующей кляксой.</p>

          <p>Итак, файл на флешке, флешка в принтере, органы управления принтера вы изучили по документации производителя, для стола проведена черновая калибровка. Направление вращения регулировочных винтов изучено. Запускайте печать.</p>

          <p>Печать будет медленная, потому с осторожностью, обжигаясь об горячий стол доведите высоту до того максимума, когда нить пластика в половину своего диаметра раздавливается об поверхность. Это делается равномерной регулировкой парных винтов стола двумя руками — сначала передние винты, затем задние. И порознь, ежели то требуется для калибровки. Окантовка должна выглядеть монолитной лентой с едва заметными бороздками между соседними линиями. Во время этой первой в вашей калибровки удобнее придавить линию слишком сильно, чем недодавить ее. Адгезия будет хорошая, но и дефект слишком широких первых слоев тоже проявится. Так называемая «слоновья нога». С этим мы разберемся позже.</p>
          <p>Если у вас проблемы с выставлением зазора, или зазор плавает, или стол кривой - не расстаивайте, хорошему печатнику это не помешает. Вы можете увеличить Initial layer height вплоть до 75% от диаметра сопла, и этим гарантировать себе хорошую адгезию первого слоя в ущерб внешнему виду.</p>
          <p>Если ваш стол кривой — вы видите выпуклость или впадину в центре — не расстраивайтесь. Стекло сверху позволяет устранить и это. Выпуклое стекло необходимо перевернуть, чтобы поверхность стала вогнутой. А затем необходимо подложить небольшие листы бумаги в область вогнутости. Один лист устраняет вогнутость на 0.1мм. Важно, чтобы края стекла были сильно прижаты к нагревателю.</p>
          <p>Когда с калибровкой стола покончено, отчистите стол от отходов и можно приступать к печати. Скачайте модель игральной кости здесь. Увеличьте скорость печати (Print speed) до 40мм/с. Обратите внимание, что скорость первого слоя вдвое ниже скорости остальной модели. Это необходимо для более надежного прилипания филамента к столу. Запустите эту модель в печать. Если необходимо, предварительно обработайте необходимую поверхность стола клеем.</p>

          <p>Первый слой прилип? Молодцы! Дребезг и лязганья есть? нет! Скорость 40 вами освоена! Иначе подготовьте gcode с меньшей скоростью печати. Поздравляю, порог вхождения в FDM-печать вами преодолен. </p>
          <p>А пока принтер печатает, я расскажу о его устройстве.</p>

          <h2>Устройство 3D-принтера</h2>
          <h4>Стол</h4>

          <p>Как говорилось ранее, бывает подогреваемый и неподогреваемый (устарело). Бывает текстолитовый и алюминиевый с нагревателем. Со стеклом и без, с адгезионной наклейкой/покрытием и без нее. Для автоматической калибровки стола у некоторых моделей есть специальные датчики касания:</p>
          <ol>
            <li>механический bltouch/3Dtouch,</li>
            <li>пьезо-датчик давления,</li>
            <li>мембранный датчик давления</li>
            <li>оптический датчик,</li>
            <li>индукционный датчик приближения (как в смартфонах)</li>
          </ol>

          <p>Все они хороши и удобны, если есть. Каждый тип имеет свою точность. Если нет — не страшно. Калибровка делается редко и довольно просто, как вы могли убедиться.</p>

          <h4>Адгезия</h4>

          <p>Замечу, что PLA и PETG хорошо липнут к чистому стеклу без всяких клеев. Потому в первую очередь на хорошую адгезию влияет правильно откалиброванный стол. Напомню, печатаемая нить первого слоя должна в половину вдавливаться в стол и создавать монолитное покрытие с едва заметными бороздками между линиями.</p>

          <p>Жидкие адгезивы создают тонкий слой, имеют высокую эффективность и очень экономичны. Защищают стекло от растрескивания. На текущий момент актуальны следующие варианты:</p>

          <p>Клей ПВП: Иначе называется «повидон». Создает на столе тонкую пленку, липкую начиная с 50С. Остывая ниже 40С клей перестает удерживать отпечаток. Варианты : клей-спрей для FDM-печати, клей-карандаш канцелярский, лак и спрей для волос «супер-сильная фиксация», водный или спиртовой раствор порошка ПВП (или клей-карандаша) в соотношении 1 к 50. Это недолговечное водорастворимое покрытие. Требует периодического обновления.</p>

          <p>Клей ПВБ: иначе называемый БФ2. Это многоразовое покрытие обладающее тем же свойством, как и повидон: быть клейким только горячее 50С. БФ2 густой. Для удобства приготовьте 10-20% раствор БФ2 на спирту. БФ2 требует однократного нанесения и затем 10 минутной полимеризации на температуре 100С. После данной процедуры покрытие может функционировать многократно длительное время. Клей БФ2 спирторастворим.</p>
          <p>Клей ПВА: Одноразовое покрытие с удовлетворительной силой удержания. Пленка ПВА легко удаляется без использозвания инструментов. Желательно использовать ПВА с высоким содержанием клеящего вещества. Обычно встречается в строительных магазинах. Водорастворим.</p>

          <p>Печать на малярный скотч: ввиду шероховатой поверхности, малярная липкая лента отлично удерживает пластики. Может использоваться для успешной печати даже нейлоном. Однако это не самый экономичный способ.</p>

          <p>Печать по пластиковым покрытиям, аля Anycubic Ultrabase. По заверениям производителя, покрытие само обеспечивает сильное прилипание. Зачастую требуется шпатель для снятия отпечатков. Но в минусе зачастую недолговечность покрытия.</p>

          <h2>Экструдер</h2>

          <p>Отвечает за выдавливание пластика в нужном количестве...миллиметров. Включает в себя:</p>
          <ul>
            <li>Фидер — подающий механизм. Отвечает за правильное количество миллиметров выдавленного пластика</li>
            <li>Печатающая голова. Она расплавляет филамент в нить заданной температуры и толщины</li>
          </ul>

          <p>Если фидер и печатающая голова совмещены — это называется direct — узел двигается весь. Точность количества подаваемого пластика выше, вес выше —	инерция движения выше. Вибраций больше.</p>

          <img src={print10} alt=''/>

          <p>Если фидер и печатающая голова разнесены — это называется Bowden. Точность кол-ва пластика страдает: нить имеет возможность "пружинить" в трубке подачи. Ретракт нужен быстрее и длиннее, присутствует задержка подачи филамента после ретракта. Зато скорость перемещений сопла без заметных вибраций выше за счет меньшей подвижной массы.</p>

          <h4>Фидер</h4>

          <ol>
            <li>приемная трубка</li>
            <li>прижимной механизм</li>
            <li>подающая шестерня</li>
            <li>подающий мотор </li>
          </ol>

          <p>Бывает с редуктором и без. Безредукторные проще, но подача филамента происходит микропорциями. На редукторном фидере точность и плавность подачи филамента значительно выше. Подача осуществляется надежнее.</p>

          <img src={print11} alt=''/>

          <h4>Печатающая голова:</h4>

          <ol>
            <li>приемная гайка (для боуден.)</li>
            <li>охлаждение радиатора</li>
            <li>радиатор</li>
            <li>термобарьер (горло)</li>
            <li>датчик температуры.</li>
            <li>нагревательный блок</li>
            <li>сопло</li>
          </ol>

          <p>От сопла до горла — хотэнд. От горла до радиатора — колдэнд.</p>

          <img src={print12} alt=''/>

          <p>Сопло — обычно латунное. Это расходник. Их делают с разными диаметрами отверстий  для разной толщины выдавливаемой нити  пластика.  Латунное страдает от абразивов — несколько сотен грамм металл- наполненного филамента значительно увеличат диаметр выходного отверстия. Медные сопла  я  не  встречал.  зато бывают стальные, стальные закаленные и из титанового сплава. Они обычно чуть холоднее чем температура термоблока, зато устойчивее к абразивам. Латунное сопло с рубиновым или сапфировым отверстием — верх инженерной мысли. Рубин (он же красный корунд) - второе после алмаза вещество по шкале твердости, потому от абразивов рубин страдает меньше иных материалов. Бывает сопло-смеситель, бывает с датчиком температуры внутри - это дорогие и не самые востребованные пока аксессуары.</p>

          <img src={print13} alt=''/>
          <img src={print14} alt=''/>
          <img src={print15} alt=''/>

          <p>Термоблок — алюминиевый, латунный или медный блок, передающий тепло от нагревателя к соплу и пластику. В него крепится картридж нагревателя и датчик температуры.</p>
          <p>Термобарьер (горло) — служит для разграничения горячей и холодной зон. Предотвращает появление пластиковых пробок в канале подачи пластика. Термобарьер бывает цельнометаллический — стальной для ABS- подобных пластиков и из титанового сплава универсальный. С тефлоновой трубкой внутри — универсальный. Со сквозным отверсием 4.1мм — для прямого соединения с трубкой подачи bowden - универсальный. Так же различают горла для 1.75мм и под 3мм филамент.</p>
          <p>Производительность хотэнда — важная характеристика принтера. Напрямую зависит от мощности нагревательного картрижда, а так же от площади контакта термоблока с соплом. Для больших объемов экструдируемого пластика существует экструдер Volcano с большим термоблоком и длинными соплами. Он незаменим при печати толстыми слоями, через сопло с большим диаметром. Экструдер E3D V6 с горлом под трубку — самый беспроблемный экструдер для бытового применения.</p>

          <p>Неполадка мимо которой вы не пройдете — пробка в сопле. Это происходит с каждым — в сопле накапливается мусор/пыль и забивает сопло. Бывает полностью, бывает лишь вредит равномерной подаче пластика и создает недоэкструзию и кляксы, портит качество печати. Происходят засоры с завидной регулярностью. Хорошо помогает в борьбе с пылью небольшой тканевый фильтр на филамент перед экструдером.</p>
          <h4>Пробка в печатающей головке:</h4>

          <p>Проявляется как недоэкструзия, прощелкивание фидера,пропуски слоев, выгрызание подающей шестерней пластика с филамента, вариант1 - объемная пробка (термобарьер/радиатор не справился с производительностью нагревательного блока, пластик расплывается в колдэнде и там застыл) — Необходимо прогреть хотэнд выше рабочей температуры и выдернуть пробку. Если не помогло - снимать хотэнд и чистить колдэнд.</p>

          <p>вариант 2 - пробка между соплом и горлом. Это некорректно собранный хот-энд. между горлом и соплом присутствует ненужных зазор. Пересборка. </p>
          <p>вариант 3 - посторонние тела в сопле. Это может быть пыль, шерсть домашних животных, инородные вкрапления в филаменте - Требует снятия сопла и чистки.</p>
          <p>Разбирать хотэнд надо на горячую. Необходимо зафиксировать термоблок гаечным ключом и затем открутить сопло. Теперь можно выключить нагрев и вытолкнуть пробку, откусить ее и вытащить филамент из экструдера. Сопло можно прокалить в пламени газовой горелки (чище) или стеариновой свечи (грязнее), а затем почистить спиртом, ватой, тонкой проволокой и зубочисткой. Собирать хотэнд можно холодным, но окончательно притянуть сопло к горлу надо горячим.</p>
          <p>Если вы снимали термоблок с горла, то сначала необходимо вкрутить горло, а затем прижимать к горячему горлу сопло. Это поможет избежать пробку- вариант2.</p>

          <p>Известна также техника «Атомик пул» по холодной очистке засора в сопле. Засоренное сопло прогревается до 60-130С, затем филамент освобождается от прижима подающей шестерни (для директ-экструдеров). И плоскогубцами филамент выдергивается из сопла вместе с засором.</p>

          <h2>Каркас и рама.</h2>
          <p>Закрытая камера необходима в первую очередь для поддержания стабильной температуры вокруг печатаемой детали. Это здорово помогает улучшить качество печати пластиками с сильной температурной усадкой (ABS, и ABS-подобные, Nylon, Flex). Если у вас есть рабочая камера, то в начале печати полезно наполнить ее горячим воздухом с помощью строительного фена. Буквально минута, и можно начинать. Первый слой станет значительно стабильнее. Если нет камеры, большие детали из ABS не для вас.</p>

          <p>Акрил - очень бюджетный вариант для небольших медленных принтеров, 100*100мм, 150*150мм, 200*200мм. Большая площадь печати и высокая скорость требует большей жесткости. В ход идут качественная фанера, алюминиевый контрукционный профиль 2020, 4020, 4040, 4060 и т.д.. Рама системы Prusa страдает от раскачиваний верхней П-части. Этот элемент полезно усилить уголками внизу и «вантами» сверху. Кубообразная рама ultimaker-подобных принтеров  значительно меньше страдает от раскачиваний, но диагонали в гранях рамы или цельные жестко зафиксированные пластины во всю грань не помешают.</p>

          <p>За перемещения отвечают 3-4 шаговых двигателя и 2 ременные передачи (3 у принтеров Дельта). В роли направляющих чаще всего используют колеса для профиля v-slot, рельсы, валы и винты. Плавность достигается за счет подшипников скольжения или роликов. Для четких линий и гладких поверхностей необходимо устранить люфты и натянуть ремни. Чем массивнее ваша рама, тем меньше ваш принтер будет прыгать от движущейся массы внутри принтера. Прикрутить принтер к столу/полу - хорошая идея! Чем меньшая масса движется в вашем принтере, тем более высокие скорости вам будут доступны без заметного ухудшения качества. Максимальные скорости, допустимые ускорения и торможения вы будете постигать опытным путем.</p>

          <h2>Электроника</h2>

          <p>Управляющая плата — 8 бит на основе Arduino Mega — это родитель всей бытовой 3D-печати. Очень удобна в эксплуатации, но имеет ограничение по производительности и объему встроенной микропрограммы. Не справляется с большими скоростями печати одновременно с 1/16 микрошагами на сложных траекториях движения.</p>
          <p>Этой проблемы не имеют 32битные платы. Среди них Arduino Duo, платы на STM32, LP1768 и другие не менее качественные продукты.</p>

          <p>Шаговые моторы — крутят, шумят, греются. От натуги могут перегреться. </p>
          <p>ВАЖНО! Если двигатели активно крутить руками, то двигатели будут вырабатывать электрический ток, который сожжет драйверы. Крутить медленно и разочек - не опасно, но где та грань, когда сгорит дорогой тихий драйвер - этого вам не скажет никто. Потому я говорю: не полезно крутить двигатели руками. Для этого есть команды с управляющей платы. Либо отключайте двигатели от управляющей платы и крутите сколько необходимо.</p>
          <p>Драйверы двигателей — Позволяют управлять шаговыми моторами, и делать неполные шаги (микрошаги), что значительно увеличивает детализацию печатаемых предметов. Поют (издают шумы разных тональностей). Когда встроены в управляющую плату — дорогой ремонт и сложный апгрейд. Для XYZ-кинематики достаточно точности 1/8микрошага. (то есть 1600 положений на один полный оборот двигателя), На 2019г актуальны драйвера Allegro A4988 (до 1/16микрошага), LV8729 (до 1/128 микрошага). Наиболее тихие и эффективные драйвера — Trinamic серии SilentStepStick.</p>
          <p>Защита драйверов — StepStick Protector — плата из 8х диодов для защиты драйверов двигателей от токов, генерируемый ручным вращением шаговых моторов. Незначительно ухудшают характеристики шаговых моторов. Поставьте, и можете двигать стол и экструдер руками.</p>

          <p>TL-smoother — сборка из 8 диодов более мощных чем из пункта выше. Устраняют дефект дерганья на определенных микрошагах шаговых моторов. Убирают так называемый эффект "рыбьей чешуи". Актуальны для драйверов DRV8825. Для других драверов эффективность этих плат сомнительна. Для высококачественых драверов, например, для продукции Trinamics, данные платы не нужны, эффект «рыбьей шкуры» на этих драверах не встречается. </p>

          <p>Регулятор горячего стола — силовой транзистор на мат.плате. Реже вынесен отдельно. 12/24/220 В. Требует адекватного охлаждения. Важный источник пожароопасных неполадок.</p>

          <p>Регулятор  нагрева  термоблока  — аналогично. 12/24 В. Источник пожароопасных неполадок.</p>
          <p>Концевики — механические, оптические, логические (встроенная функция драйверов TMC2130, сложная в первоначальной настройке). Самые точные оптические. Необходимы для отслеживания координат начального положения сопла.</p>

          <p>Датчик автоуровня стола — устройство для автоматической калибровки стола. Позволяет управляющей программе математически корректировать изъяны геометрии принтера.</p>

          <p>На этом про технологию FDM я закончил. Следующие лекции будут содержать информацию о печати, ее дефектах, артефактах, и о возможностях слайсера Cura.</p>









        </section>
      </main>
    </div>
  )
}

export default FreePrint