import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const TwelvePrint = () => {
  return (
    <div>
    <Link to={'/courses/print'}><Button variant="outlined">Вернуться назад</Button></Link>

        <main>
            <section>
                <h1>Модуль 12. Сервисное обслуживание 3D- принтера.</h1>

                <p>Заключительный модуль цикла. Посвещена вопросам технического обслуживания принтера. И кратко озвучены темы, не попавшие по тем или иным причинам в этот курс.</p>

                <h4>Техника безопасности</h4>

                <p>При работе с растворителями пользуйтесь вытяжным шкафом или индивидуальными масками с угольным адсорбентом правильного класса защиты. Соблюдайте противопожарные меры — огонь не зажигать, искры не пускать. Тщательно проветривайте помещение. При попадании едких жидкостей на слизистые (глаза, рот, нос и т. д.) - промойте большим количеством воды. При необходимости обратитесь к врачу. Синдромы отравления — слабость, головокружение, рвота, резь в глазах. В случае отравления немедленно прекратите работу и обратитесь за помощью, чтоб не окочуриться в одиночестве.</p>

                <p>Движущиеся части станков и машин могут запросто намотать на себя ваши волосы или одежду.</p>

                <p>Помните о поражении электрическим током. Соблюдайте правила эксплуатации электроустановок, иначе «не работай под напряжением».</p>

                <h4>Общие правила</h4>

                <p>Наибольший вред принтеру наносит пыль. По этой причине лучше держать его в чистом нежилом помещении. Также лучше избегать установки принтера в помещение с большой сменой температуры (например плохо отапливаемая каптёрка в цехе), сквозняками и перепадами влажности. В общем 4е климатическое исполнение как оно есть. Принтер является нагревательным прибором с температурами до 300С. Важно, чтобы легковоспламеняющиеся предметы не попадали в рабочую зону принтера.</p>

                <h3>Сервис №1. Засор в экструдере.</h3>

                <p>В первый раз столкнувшись с этой проблемой, вам было бы полезно разместить фильтр грубой очистки на входе филамента в экструдер — канцелярскую прищепку с небольшим кусочком х/б ветоши в качестве пылесборника. Ткань работает лучше губки или ваты.</p>

                <p>Далее. Хотэнд разбирается горячим. Я сопла чищу газовой турбозажигалкой подвесив сопло на нержавеющей проволоке 0,3мм. Затем протираю ватной палочкой. Проволоку взял в магазине электронных сигарет. После установки сопла на термоблок, надо прогреть хотэнд и дотянуть сопло к горлу. Большое усилие не требуется — важно добиться плотного прилегания сопла к горлу. Будьте осторожны с гаечным ключом и датчиком температуры. Можете накрыть стол мягкой книжкой для безопасности. А у датчика температуры очень тонкие проводки и мешают подлезть гаечным ключом к термоблоку. Чаще всего, в качестве датчиков используется NTC3950 (это на случай, если вы его случайно оторвете), но бывают и иные варианты, уточните в прошивке или у производителя.</p>

                <h3>Сервис №2. Проверка состояния.</h3>

                <p>По прошествии нескольких килограммов отпечатанного пластика с момента сборки принтера, полезно провести принтеру полный осмотр.</p>

                <p>Цельность каркаса. Все винтовые соединения со временем разбалтываются. Кроме склееных. Я рекомендую вам проверить как затянуты все винты и болты. А лучше бы вклеить винты в резьбу на т. н. «разъемный фиксатор резьбы» - специальную краску, после которой винт не будет раскручиваться, но при желании винт все еще можно выкрутить. Важно! Бывают неразъемные фиксаторы резьбы, которые разбираются газовой горелкой и смекалкой. Суперклей использовать вместо фиксатора вредно - винт уже не открутится. В случае нужды воспользуйтесь лаком для ногтей вместо фиксатора резьбы.</p>

                <p>Прямолинейность движения по  направляющим.  Разболтанность,  а точнее излишняя подвижность конструкции приводит к появлению дребезга и кривизны во время печати, волнообразным артефактам на изделиях или иным дефектам формы. Ищите поперечную подвижность на направляющих. V-ролики должны плотно прилегать к профилю и не болтаться на направляющих, не вращаться, но с небольшим усилием прокручиваться. В случае обнаружения —	подтянуть или ослабить. Подшипники не должны иметь люфтов, а только лишь свободно вращаться. В случае обнаружения люфта подшипника— заменить. Аналогично для линейных подшипников и кареток на рельсах — свободно перемешаться продольно и не иметь люфтов поперечно.</p>

                <p>Если с ними все в порядке — перемещения стола, печатающей головы и эффектора прямолинейные без поперечных болтаний — переходите к следующему этапу.</p>

                <p>Слабо натянутые ремни имеют большой потенциал к растяжению. Вибрации на ремнях создают волны на соответствующей вертикальной грани изделия. До какой степени тянуть — текстом не передать. Когда вы видете вибрацию ремней во время печати, а на изделиях из-за этого остаются волны на соответствующей грани (для ремня оси Х характерны волны на грани Y изделия, для ремня оси Y — X грань изделия) — ваш ремень недотянут. Обычно натянуть ремень на величину одного зуба бывает более чем достаточно. Пробуйте. Руками порвать ремень смогут только самые сильные. А вот деформировать ремень винтовыми натяжителями уже значительно легче. Свойства различных ремней описаны ниже.</p>

                <p>Смазка. все вращающиеся части должны быть чистые и смазанные. Это касается приводных винтов, валов и рельс. Подшипники обслуживать необходимости обычно нет. На смазку налипает пыль, шерсть домашних животных. Движущиеся части без смазки стачиваются, создавая зазоры, клинят и пр. Старую смазку можно снять ветошью. Вонять бензином (вайт- спиритом) в жилом помещении не советую, хотя он помогает! Новая смазка —	это густая автомобильная/велосипедная/любая: Литол, Циатим или «ложка смазки с соседнего автосервиса. WD-40 не смазка, она испаряется оставляя ничтожный след минерального масла. Потому уж лучше смазать хотя бы моторным маслом, не смотря на то, что но оно жидкое, создает тоньше пленку, делает больше грязи и требует более частого применения, чем литиевые смазки. В моем случае бережной эксплуатации в жилом помещении, смазку Циатим на приводных винтах приходится менять несколько раз в год.</p>

                <p>Как говорят на флоте «Всему что двигается — мы отдаем честь, то что не двигается — красим».</p>

                <p>При проведении ТО очень большое внимание уделите состоянию проводов в точках подключения нагревательных приборов — стола и нагревателя. Это самые опасные места. Часто блок управления принтером может быть собран с нарушением — использованы провода недостаточного сечения, многожильные провода необжаты, произведена некачественная пайка контактов.</p>

                <h3>Сервис №3 Запастись расходниками.</h3>

                <p>Смазка литиевая, типа Литол24 — в смазке нуждаются винты, валы, рельсы и редукторы.</p>

                <p>Фиксатор резьбы — threadlock, специальный клей для резьбовых соединений. Принтер правильнее собрать на болты с фиксацией резьбы. Иначе от вибраций некоторые винтовые соединения могут разболтаться.</p>

                <p>Сопла: Наиболее распространенные сопла — для экструдеров MK8 и для экструдеров E3D V6. Они различаются длиной резьбовой части. К сожалению, заменить один тип другим не просто. Полезнее не путаться.</p>

                <p>Качество исполнения канала и его длина не всегда удовлетворительны. Кроме того, в процессе эксплуатации диаметр канала может увеличится, ввиду естественного износа, а форма канала приобретает скругления. Это приводит к неправильной форме печатаемой линии и иным дефектам на поверхностях, волоскам пластика при ретрактах и холостых перемещениях. Сопла бывают:</p>

                <ul>
                  <li>Латунное — универсальное без абразивов,</li>
                  <li>Стальное, а лучше стальное закаленное — для абразивов,</li>
                  <li>Титанового сплава TC4 или TC6 — универсальное и для абразивов. Второе прочнее и жаропрочнее,</li>
                  <li>С рубиновым каналом — универсальное и для абразивов</li>
                </ul>

                <p>Горла: бывают E3D V6 с резьбой М6 в термоблок и М7 в радиатор. Бывают MK8 cо сплошной резьбой М6 по всей длине. Бывает М6 в термоблок и гладкий цилиндр 7мм в радиатор. Все они для разных модификаций хотэнда .</p>

                <ul>
                  <li>Titanium TC4 full metal — универсальное и абразивные.</li>
                  <li>Steel 1.75 full metal — лучше для ABS-подобных и абразивных</li>
                  <li>1.75teflon — с короткой тефлоновой трубкой внутри PTFE 3*2мм — универсальное до 250С без абразивов.</li>
                  <li>4.1Bore — со сквозным отверстием 4.1мм для неразрывной тефлоновой трубки bowden PTFE 4*2мм от фидера до сопла - универсальное до 250С без абразивов.</li>
                </ul>

                <p>Термоблок: Чаще алюминиевый. Иногда латуный, но тяжелее и дороже (выше стабильность температуры, хуже теплопроводность). Медный не встречал. Силиконовый носок очень полезная штука, а можно намотать ptfe- фум. Термоблоки бывают разных размеров, под разные нагревательные элементы и форму датчика температуры.</p>

                <p>Термодатчик: ntc3950 или ntc100k для стола и хотэнда, бывают каплей и картриждем. Часто выходят из строя. У некачественного термистора большая погрешность измерений.</p>

                <p>В целом, полезно иметь второй экструдер в сборе. На случай выхода из строя первого.</p>

                <p>PTFE-трубка: В экструдере некоторые модели горла (т. н. 1.75 with Teflon tube) содержат внутри себя тефлоновую трубку для более легкого движения филамента. Если филамент создаст в трубке пробку, то освободить трубку будет трудно. Кроме того, в процессе эксплуатации ptfe трубка немного оплывает, сужая отверстие и укорачиваясь. Щель между PTFE-трубкой и соплом является источником пробок в хотэнде. Удобно иметь про запас метр PTFE-трубки в размере 3*2мм (3мм внешний диаметр, 2мм внутренний диаметр отверстия).</p>

                <p>В боуденах тоже применяют трубку PTFE. Размер 4*2мм (4мм внешний диаметр, 2мм внутренний диаметр отверстия). Иногда внутренний диаметр 1.9мм для уменьшения ретракта, но при этом несколько затрудняет движение филамента.</p>

                <p>Зубчатые ремни — Чаще используются ремни 2GT 6мм ширины. Они растягиваются от времени, причем неравномерно. Из-за этого нарушается геометрия изделий. При достижении определенной величины растяжения, ремень лопается. Чтобы испортить зубы, достаточно вращать приводной зубчатый шкив с заблокированным ремнем.</p>

                <p>Зубчатые ремни бывают:</p>

                <ul>
                  <li>резиновые</li>
                  <li>резиновые со стальным кордом. Они долговечнее, но не любят малые радиусы изгиба. Потому малопригодны в FDM.</li>
                  <li>резиновые со стеклонитью. Не подвержены недостатку стальных кордов. Этот вариант предпочтительнее.</li>
                  <li>Резиновые с особой резиной на зубах. Вроде менее подвержены износу зубов, но бороться с растяжением это не помогает.</li>
                </ul>

                <p>Иногда в принтере можно встретить кольцевые ремни, они выпускаются разных стандартных периметров, и подбирать их надо с точностью до миллиметров конкретно под ваш принтер.</p>

                <p>V-ролики: состоят из дорогих подшипников и дешевых клиновидных резинок. Резинки имеют очень малый контакт с профилем. И постепенно раздалбываются вибрациями. Нуждаются в периодической подтяжке до состояния «колесо с усилием прокручивается». Иногда встречаются металлические ролики. Они не истираются, но очень шумные и продавливают алюминиевый профиль, не пригодны. Менять резинки можно, но требуется сноровка и специальная оснастка (пусть самодельная). Сами резинки можно напечатать из жесткого TPU (флекса). Но то недолговечное решение. Материал «резины» бывает разным: PU, PC, POM и др.</p>

                <p>Валы: Валы и линейные подшипники скольжения. В смазке не нуждаются, графитовые вставки в линейных подшипниках скольжения в достаточной мере обеспечивают вал смазкой. Однако графитовая смазка не повредит. Иногда бывают кривые.</p>

                <p>Приводные винты: Имеют разный диаметр, самые популярные Т8 (шаг канавки - 8мм длины винта на 1 оборот канавки). Требуют смазки, из-за трения и износа начинают люфтить и портят толщину слоя. Иногда бывают кривые и портят гладкость вертикальных граней изделий.</p>

                <p>Рельсы и каретки: т. н. Линейные направляющие. Бывают разной ширины. Требуют чистки и смазки. Снимая каретку с рельсы, будте готовы, что из каретки посыпется множество шариков. Износ происходит именно на шарах. На замену существуют наборы сменных шариков.</p>

                <p>Вентиляторы. Громкие вентиляторы имеют на борту подшипники скольжения. Ресурс около 1000 часов. Тихие вентиляторы имеют в своей конструкции два шарикоподшипника. Работают значительно тише, ресурс значительно выше. Маркировка вентиляторов отражает их посадочные размеры. Например, 5015 - означает  50мм между  крепежными винтами, 15мм толщина корпуса. Различают вентиляторы 5, 12 и 24 вольта с разной частотой вращения. С осевым потоком (обычные) или радиальным потоком(турбины). Обдув детали лучше делать турбиной или парой турбин.</p>

                <p>Плата управления. Традиционно в принтерах использую 8мибитные платы на основе Arduino и процессоров Atmel2560. Это отличное решение для принтеров с декартовыми кинематиками, но недостаточное для расчета математически сложных кинематик дельта, дельта-робот и иных. Сегодня, в 2019 г все большую популярность приобретают 32битные платы или связки 8бит+принт-хост на x64-процессоре. Наиборее популярные прошивки с открытым кодом — это Marlin, Smoothieware, Reprap firmware и Klipper.</p>

                <h3>Шаговые двигатели и драйверы.</h3>

                <p>Сегодня, в 2019г принтеры еще не комплектуют тихими драйверами. Но будем надеяться, скоро ситуация изменится.</p>

                <p>Иногда материнская плата поддерживает замену драйверов. Иногда нет — драйвера впаяны в плату. Тихие драйвера — драйвера с интерполяцией или с большим дроблением шага 1/128 и мельче. Такие драйвера отлично сглаживают криволинейные поверхности и делают внешний вид отпечатков привлекательнее. Кроме того, драйвера имеют регулировку силы тока, питающей моторы и ограничены некоторой величиной. Работа на пределе вызывает повышенное тепловыделение и может послужить причиной выхода драйвера из строя. Современные драйвера позволяют программировать себя через цифровой интерфейс. Драйвера без цифрового интерфейса значительно менее функциональны и требуют ручной настройки с особой осторожностью.</p>
                <p>Замена драйвера на другой связана с изменением прошивки, кроме случая замены A4988 на драйверы tmc от Trinamic. Вы должны быть готовы разобраться с методикой изменения программного кода и прошивкой вашей платы. Закрытую прошивку изменить получается далеко не всегда. Уточняйте этот вопрос заранее. Для принтеров с декартовыми кинематиками, мелкое дробление свыше ¼ микрошага почти не влияет на качество печати. </p>

                <p>Шаговые моторы в 3d принтерах чаще всего имеют стандарт NEMA17, описывающий посадочные размеры и габариты. Моторы различаются углом поворота за один шаг, крутящим моментом и, соответственно, максимальной силой тока через обмотки. Длительная работа на предельных токах вызывает повышенное тепловыделение. Максимальная допустимая рабочая температура моторов — не более 100С. Полезно работать на силе тока не превышающей 70% от возможности мотора и от возможности драйвера. Замена моторов 1.8°/шаг (200 шагов/оборот) на моторы с углом поворота 0.9/ шаг (400шагов на полный оборот) значительно улучшит детализацию моделей.</p>

                
                
            </section>
        </main>
    </div>
  )
}

export default TwelvePrint