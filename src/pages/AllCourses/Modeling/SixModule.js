import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import modeling49 from '../../../static/modeling/modeling49.png';
import modeling50 from '../../../static/modeling/modeling50.png';
import modeling51 from '../../../static/modeling/modeling51.png';
import modeling52 from '../../../static/modeling/modeling52.png';
import modeling53 from '../../../static/modeling/modeling53.png';
import modeling54 from '../../../static/modeling/modeling54.png';
import modeling55 from '../../../static/modeling/modeling55.png';
import modeling56 from '../../../static/modeling/modeling56.png';
import modeling57 from '../../../static/modeling/modeling57.png';
import modeling58 from '../../../static/modeling/modeling58.png';
import modeling59 from '../../../static/modeling/modeling59.png';
import modeling60 from '../../../static/modeling/modeling60.png';


const SixModule = () => {
  return (
    <div>
        <Link to={'/courses/modeling'}><Button variant="outlined">Вернуться назад</Button></Link>

        <main>
          <section>
            <h2>МОДУЛЬ 6. MESH-ОБЪЕКТЫ В BLENDER</h2>

            <p style={{fontSize:'14px'}}>Меши являются одним из типов объектов Blender. Их также называют сетками, полисетками. Это трехмерные геометрические примитивы, изменяя которые с помощью базовых трансформаций и других модификаторов, создают более сложные фигуры.</p>
            <p style={{fontSize:'14px'}}>По-умолчанию Blender содержит десять mesh-объектов (стандартных примитивов), добавить которые можно через меню заголовка редактора 3D Viewport | 3D-сцена. Это же меню вызывается комбинацией клавиш Shift + A.</p>
            
            <img src={modeling49} alt=''/>

            <p style={{fontSize:'14px'}}>Хотя плоскость (plane), круг (circle) и сетка (grid) двумерны, в режиме редактирования их можно сделать трехмерными. Плоскость отличается от сетки тем, что первая состоит из одной грани, а вторая – из множества. </p>
            
            <img src={modeling50} alt=''/>

            <p style={{fontSize:'14px'}}>Плоскость и сетка в режиме редактирования</p>
            <p style={{fontSize:'14px'}}>Различие между UV-сферой и Ico-сферой заключается в форме составляющих их граней. В первом случае это в основном четырехугольники, уменьшающиеся от экватора к полюсам (но на самих полюсах веер из треугольников), во втором – одинаковые треугольники. Тот факт, что икосфера состоит из одинаковых элементов со всех сторон, в определенных ситуациях облегчает ее редактирование.</p>

            <img src={modeling51} alt=''/>

            <p style={{fontSize:'14px'}}>UV Sphere и Ico Sphere в режиме редактирования</p>

            <p style={{fontSize:'14px'}}>Голову обезьяны сложно назвать геометрическим примитивом. Нередко ее используют для проверки материалов, текстур и другого, когда ваши собственные объекты еще не готовы или их не хочется портить.</p>

            <img src={modeling52} alt=''/>
            <p style={{fontSize:'14px'}}>Объекты добавляются в позицию 3D-курсора. Бывает удобно, чтобы меш появлялся в центре сцены. Для точной установки туда курсора, следует нажать Shift + S и в появившемся меню привязки (snap) выбрать Cursor to World Origin | Курсор в центр координат (1).</p>
            <p style={{fontSize:'14px'}}>Когда вы только добавили объект, в регионе последней операции появляются его настройки, которые можно изменить. Панель этого региона может быть свернута, находится внизу слева. Содержащиеся в ней настройки зависят от используемого до этого действия, в данном случае – от добавляемого меша.</p>

            <img src={modeling53} alt=''/>

            <p style={{fontSize:'14px'}}>У некоторых мешей настойки можно сделать такими, что исходная форма объекта будет изменена до неузнаваемости. Ниже показаны два тора. У одного из них сильно уменьшено количество сегментов.</p>

            <img src={modeling54} alt=''/>

            <p style={{fontSize:'14px'}}>Чем больше у объекта составных элементов, тем более сглаженным он может выглядеть. Наиболее наглядно это видно на шарах.</p>

            <img src={modeling55} alt=''/>

            <p style={{fontSize:'14px'}}>Однако в пользу увеличения количества элементов есть одно большое "но". Их прорисовка приводит к увеличению затрат ресурсов. Как следствие компьютер начинает тормозить. Поэтому в Blender существуют другие способы сглаживания мешей. Например, в контекстном меню, которое появляется при клике правой кнопкой мыши, можно выбрать Shade Smooth | Гладкое затенение.</p>
            <p style={{fontSize:'14px'}}>Если в объектном режиме выделить два объекта или более и переключиться в режим редактирования, то в этот режим перейдут все выделенные объекты. Вы можете их править совместно. Однако каждый остается независимым и после возвращения в объектный режим между мешами никаких связей не образуется.</p>
            <p style={{fontSize:'14px'}}>Вы можете добавить новый mesh, находясь в режиме редактирования другого. Тогда при переключении на объектный режим оба меша образуют один более сложный. Не забывайте обращать внимание, где находится центр объекта.</p>
            <p style={{fontSize:'14px'}}>Другой способ объединения мешей воедино – это выделить их вместе в объектном режиме и нажать Ctrl + J. Таким образом, комбинируя и трансформируя различные полисетки, можно получить достаточно сложные фигуры.</p>
            <p style={{fontSize:'14px'}}>Кроме того, можно включить дополнительные mesh-объекты через редактор Preferences | Настройки, вкладка Add-ons | Аддоны (дополнения), различные панели Add Mesh | Добавление мешей. Включенные меши появятся в меню Add | Добавить, там же где все остальные</p>

            <img src={modeling56} alt=''/>

            <p style={{fontSize:'14px'}}>В прошлом уроке, рассматривая базовые трансформации, мы опустили так называемое пропорциональное редактирование, так как по отношению к кубу в нем нет большого смысла. Однако в случае мешей с большим количеством вершин и граней пропорциональное редактирование может играть ключевую роль.
              Суть его в том, что когда вы изменяете один элемент, вслед за ним меняются рядом стоящие. Как меняются, зависит от настроек. На рисунке ниже вершина левого шара поднята вверх при отключенном режиме пропорционального редактирования, а справа – с включенным.
            </p>
            
            <img src={modeling57} alt=''/>

            <p style={{fontSize:'14px'}}>Включение выполняется специальной кнопкой в заголовке 3D Viewport или нажатием буквы O.</p>

            <img src={modeling58} alt=''/>

            <p style={{fontSize:'14px'}}>Хотя пропорциональное редактирование доступно также в объектном режиме, чаще его используют в режиме редактирования.</p>
            <p style={{fontSize:'14px'}}>Если пропорциональное редактирование включено, то при трансформации элемента будет видна окружность. Ее размер меняется с помощью колеса мыши. Все элементы меша, которые попадают в пределы этой окружности будут пропорционально изменяться вслед за выделенным элементом.</p>
            <p style={{fontSize:'14px'}}>На изображении показан результат применения варианта Random | Случайно.</p>

            <img src={modeling59} alt=''/>

            <h2>Практическая работа</h2>
            <p style={{fontSize:'14px'}}>Создайте модель молекулы воды.</p>

            <img src={modeling60} alt=''/>

            <p style={{fontSize:'14px'}}>Угол между связями равен 104.5 градусов. Комбинация клавиш Shift + D выполняет дублирование объектов.</p>

          </section>
        </main>
    </div>
  )
}

export default SixModule