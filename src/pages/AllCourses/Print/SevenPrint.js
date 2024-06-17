import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const SevenPrint = () => {
  return (
    <div>
    <Link to={'/courses/print'}><Button variant="outlined">Вернуться назад</Button></Link>

    <main>
        <section>
            <h1>Модуль 7. Постобработка</h1>

            <h2>Техника безопасности.</h2>

            <ul>
              <li>инструменты острые. Берегите руки. Носите перчатки или хотя бы тканевый лейкопластырь и пр</li>
              <li>Абразив создает пластиковую пыль. Защищайте дыхание и глаза. Делайте влажную уборку.</li>
              <li>Большинство растворителей являются ядами, имеют едкий запах и действуют разрушающе на ткани и органы человека. Полезно иметь возможность быстро смыть чистой водой эти вещества с собственной кожи</li>
              <li>Красками и растворителями дышать вредно, пачкать глаза еще хуже.</li>
              <li>Для собственной защиты используйте защитные перчатки, очки, полнолицевую маску,респиратор с фильтрующими элементами соответствующего класса защиты. Например, маску 3M 6800 с патронами класса А (органические растворители)</li>
              <li>Спецодежда — х/б халат. Иногда целесообразно использовать фартук из ПВХ.</li>
            </ul>

            <h2>Методы обработки.</h2>

            <h3>Инструмент и расходные материалы</h3>

            <ul>
              <li>Острый нож или скальпель </li>
              <li>кусачки</li>
              <li>плоскогубцы </li>
              <li>наждак 220, 400 </li>
              <li>надфили </li>
              <li>напильники</li>
              <li>шлифовальная губка скотчбрайт </li>
              <li>суперклей</li>
              <li>Акриловая шпатлевка</li>
              <li>акриловый праймер, грунт, эмаль, лак </li>
              <li>малярный скотч</li>
              <li>деколи</li>
            </ul>

            <h3>Тепловая обработка.</h3>
            <p>Некоторые пластики, например PLA приобретают большую монолитность, прочность водонепроницаемость после спекания слоев на температуре около начала размягчения — температуре рекристаллизации - 70С.</p>

            <p>Кроме того, локальным нагревом можно гнуть и деформировать отдельные части отпечатка. Сделать уголок из плоской детали, например. Такой уголок будет значительно прочнее чем напечатанный с соблюдением формы.</p>

            <h2>Химическая обработка</h2>

            <p>Важно! Самое время надеть респиратор или полнолицевую маску.</p>

            <p>Ванна из растворителя действует на поверхности пластиковых деталей размягчающе, сглаживающе. В целом деталь становится прочнее и монолитнее. Применяют метод окунания и метод паровой бани в герметичной таре. Подходящие растворители в памятке к пластикам (Приложение 1).</p>

            <p>Окунание. Деталь окунают в растворитель на несколько секунд, затем быстро сушат с помощью фена. Для ПЛА окунание вызывает излишние напряжения в наружном слое и может привести к растрескиванию. Полезно избегать глубокой пропитки растворителем.</p>

            <p>Паровая баня дает более качественный результат, но требует больше времени. Небольшое количество растворителя в герметичной таре разогревают до температур ниже температуры кипения растворителя (чтобы не допустить появления росы конденсата). Затем в тару опускают платформу с обрабатываемой деталью. И оставляют на несколько минут. Например 15 минут. Далее деталь достают и сушат.</p>

            <h2>Увеличение прочности заполнением эпоксидной смолой.</h2>

            <p>Как один из вариантов создания прочных изделий — можно заполнить пустотелую 3d-печатную форму эпоксидной смолой.</p>
            <h2>Абразивная обработка</h2>

            <p>Проводится наждаком, надфилями и т. д. PLA шкурится мокрым лучше Шкурка Сначала 220. Затем 400</p>

            <h2>Окраска</h2>
            <p>ВАЖНО! Самое время одеть полнолицевую маску и рабочую одежду.</p>

            <p>Обычно окраска выполняется после ошкуривания и полировки. Пластик PETG разных производителей неодинаково хорошо красится. Часто требуется подбирать особенные материалы для успешного окрашивания.</p>

            <p>Деталь покрывают шпатлевками и заного шлифуют. Можно нанести цианакрилатный клей (суперклей) и тоже зашлифовать. Затем идет очередь грунта в 2-3 слоя. Для некоторых пластиков, например PLA, перед грунтом необходимо нанести слой праймера. Предварительно разогретые в горячей/теплой воде аэрозольные праймеры/грунты лучше распыляются и ровнее ложатся. Межслойная сушка 10-15 минут. Окрашивание ведется с расстояния в 20-25 см. Сушка согласно TDS 1-24 часа. Затем шлифовальная губка Суперфайн. Очистка, обезжирка</p>

            <p>После такой подготовки поверхности наносят краски и лаки. Большинство ЛКМ рассчитаные на ABS хорошо ложатся и на другие виды пластиков. Но не всегда. Тогда помогает зашкурить поверхность. Это всегда полезно. Эмаль наносят в 3-4 тонких слоя. Межслойная сушка 10-15 минут. Расстояние до детали 20-25 см.</p>

            <p>Для окрашивания декоративных элементов по цельно залитой детали, деталь защищают малярным скотчем, острым ножем вырезают декоративные элементы. Царапины от ножа лучше делать не глубокими. Не все может скрыть краска. Бытовой фен круто ускоряет сушку красок</p>
            <p>Сушка перед покрытием лаком 20 мин (глядим на рекомендации на баллоне лак акриловый. Высок риск образования подтека. Расстояние до детали 20- 25 см. Наносим в 2-3 слоя с межслойной сушкой 10-15 минут. Общее время высыхания 24 часа.</p>
            <p>Использование деколей — еще один шаг к совершенству. Как-то надо деколи напечатать и лазером нарезать. Для переноса используют трансферную пленку. Задекорированное деколями изделие покрывают дополнительным слоем лака.</p>

            <p>Самым доступным вариантом является окраска свеженапечатанной детали акриловым грунтом и затем акриловой краской и лаком. Детали разных цветов удобно печатать по-отдельности. Детали можно клеить на двусторонний скотч для удобства окрашивания из баллончика Струю краски полезно открывать за пределами окрашиваемой детали, ровнее ляжет.</p>
            <p>Искусственное состаривание Подойдут масляные краски на водной основе.</p>





            
        </section>
    </main>
    </div>
  )
}

export default SevenPrint