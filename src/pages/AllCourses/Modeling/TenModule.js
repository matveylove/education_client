import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import modeling90 from '../../../static/modeling/modeling90.png';
import modeling91 from '../../../static/modeling/modeling91.png';
import modeling92 from '../../../static/modeling/modeling92.png';
import modeling93 from '../../../static/modeling/modeling93.png';
import modeling94 from '../../../static/modeling/modeling94.png';
import modeling95 from '../../../static/modeling/modeling95.png';
import modeling96 from '../../../static/modeling/modeling96.png';
import modeling97 from '../../../static/modeling/modeling97.png';


const TenModule = () => {
  return (
    <div>
        <Link to={'/courses/modeling'}><Button variant="outlined">Вернуться назад</Button></Link>

        <main>
          <section>
            <h2>МОДУЛЬ 10. МОДИФИКАТОР MIRROR В BLENDER</h2>
            <p style={{fontSize:'14px'}}>Большинство объектов реального мира обладают симметрией. У них могут быть как оси, так и плоскости симметрии. У человека есть только одна плоскость, так как только его левую и правую половины можно считать симметричными. Через куб можно провести несколько осей и плоскостей симметрии, а через шар – множество.</p>
            <p style={{fontSize:'14px'}}>Симметричные половины не совсем идентичны. Они являются зеркальными отражениями друг друга. То, что у одной расположено слева, у другой – справа. Однако это не мешает создавать только уникальную часть объекта, даже если простым дублирование его нельзя будет достроить до целого. На помощь приходят инструменты зеркального отражения, которые предусмотрены в средах 3D-моделинования, в том числе Blender.</p>
            <p style={{fontSize:'14px'}}>Заметим, что слово "mirror" с английского языка переводится как "зеркало" или глагол "отражать".</p>
            <p style={{fontSize:'14px'}}>В Blender есть простой инструмент Mirror | Симметрия, который отражает, то есть переворачивает, а не достраивает, выделенный объект по указанной оси. Инструмент доступен через контекстное меню объекта.</p>

            <img src={modeling90} alt=''/>

            <p style={{fontSize:'14px'}}>Также в Blender есть модификатор Mirror | Симметрия, выполняющий достраивание. При его использовании следует учитывать ряд особенностей.</p>

            <img src={modeling91} alt=''/>

            <p style={{fontSize:'14px'}}>Ключевыми настройками являются оси (axis), вдоль которых происходит отражение объекта. То есть воображаемая плоскость симметрии перпендикулярна выбранной оси.</p>

            <img src={modeling92} alt=''/>

            <p style={{fontSize:'14px'}}>На изображении выше обратите внимание, где находится центральная точка объекта. По-умолчанию отражение происходит относительно нее. Если вы попробуете отзеркалить куб в неизменном виде, то ничего не увидите, так как отражения будут находиться в том же месте. Это следствие того, что центральная точка куба находится в его центре, а сам объект симметричен относительно всех трех осей.</p>
            <p style={{fontSize:'14px'}}>Поэтому перед применением модификатора Mirror может потребоваться изменить положение центральной точки. Для этого надо установить 3D-курсор в желаемое место, потом выделить объект и в контекстном меню выбрать Set Origin → Origin to 3D Cursor | Задать центральную точку → Центр объекта к 3D-курсору.</p>
            <p style={{fontSize:'14px'}}>Нередко центральную точку устанавливают в позицию одной из вершин объекта. Для этого надо выделить эту вершину в режиме редактирования, нажать Shift + S и выбрать Cursor to Selected | Курсор к выделению. После этого 3D-курсор будет установлен на место вершины. Далее в объектном режиме переместить центральную точку к курсору, как описано в предыдущем абзаце.</p>
            <p style={{fontSize:'14px'}}>При использовании модификатора Mirror отражение происходит вдоль локальных, а не глобальных осей. Если объект не поворачивался (R), то эти оси совпадают. После ротации обычно это уже не так. Чтобы увидеть локальные оси объекта, надо из списка ориентации осей, расположенного в заголовке 3D Viewport, выбрать Local | Локально и включить инструмент перемещения.</p>
            <p style={{fontSize:'14px'}}>На скрине ниже куб был повернут, и была смещена его центральная точка. Далее применено зеркальное достраивание по оси Z. В результате отражение появилось не сверху, как это было бы, если бы объект не поворачивался, а вдоль локальной оси Z.</p>
            <img src={modeling93} alt=''/>
            <p style={{fontSize:'14px'}}>При отражении может использоваться не собственная центральная точка, а точка другого объекта и, следовательно, чужие оси. В настройках модификатора Mirror в поле Mirror Object | Объект симметрии можно указать объект, относительно которого следует выполнять зеркальное достраивание.</p>
            <p style={{fontSize:'14px'}}>Подобное может применяться не только как самостоятельное явление, также в случае, если локальные оси объекта не совпадают с глобальными, а отразить надо вдоль глобальной оси. Тогда можно использовать объект, который не был повернут. Например, объект-пустышку (Shift + A → Empty | Пустышка → Arrows | Стрелки), который не имеет "физического" воплощения и служит для вспомогательных целей.</p>

            <img src={modeling94} alt=''/>

            <p style={{fontSize:'14px'}}>На рисунке показано, что локальные оси конуса не совпадают с осями пустышки. Однако отражение происходит по оси Y последней.
              Модификатор Mirror позволяет включить отражение сразу по нескольким осям. Если будет включено по двум, то объект учетверится. Если по трем, то увосьмерится.
            </p>

            <img src={modeling95} alt=''/>

            <h2>Практическая работа</h2>
            <p style={{fontSize:'14px'}}>В качестве практической работы создадим модель гантели, закрепив тему этого урока, а также познакомимся с созданием групп вершин.</p>

            <img src={modeling96} alt=''/>

            <p style={{fontSize:'14px'}}>Гантель – простая фигура, ее можно сделать, объединив цилиндр и две сферы. Однако, если в дальнейшем потребуется ее править, то делать это будет не просто. Во первых, придется изменять каждый шар по отдельности. Во-вторых, в режиме редактирования mesh-объекта, чтобы отделить вершины шара от вершин цилиндра, потребуется немало усилий.</p>
            <p style={{fontSize:'14px'}}>Первая проблема решается модификатором Mirror, вторая – созданием группы вершин.</p>
            <p style={{fontSize:'14px'}}>В данном случае уместно использовать отражение только по одной оси, т. е. изготовить половину гантели</p>
            <p style={{fontSize:'14px'}}>Добавим на сцену цилиндр. С помощью масштабирования (S) зададим ему желаемую форму. Цилиндр – это половина рукоятки гантели.</p>
            <p style={{fontSize:'14px'}}>Сразу установим точку центра масс цилиндра у его нижнего основания. Проще не помещать туда 3D-курсор, а оставить его в центре сцены и приподнять цилиндр по оси Z. Далее в контекстном меню выбрать Set Origin → Origin to 3D Cursor | Задать центральную точку → Центр объекта к 3D-курсору.</p>
            <p style={{fontSize:'14px'}}>Теперь переключимся в режим редактирования. Перед тем как добавлять сферу создадим группу для ее вершин. Для этого надо перейти на вкладку Data редактора свойств и в панели Vertex Groups | Группы вершин с помощью кнопки с плюсом добавить новую группу. Ее можно переименовать.</p>

            <img src={modeling97} alt=''/>

            <p style={{fontSize:'14px'}}>Не выходя из режима редактирования цилиндра, добавим сферу. Не снимая с нее выделения, назначим (assign) ее вершины группе. В дальнейшем, если потребуется править сферу, следует выбрать группу и нажать Select | Выделить. Будут выделены вершины группы. Если нужно будет править цилиндр: выделить все (A), затем нажать Deselect | Снять выделение. Или можно создать отдельную группу для вершин цилиндра.</p>
            <p style={{fontSize:'14px'}}>Выделив все вершины сферы, переместим их к верхнему концу цилиндра. Ведь если центр масс находится у нижнего, позже верхняя часть правильно отразиться вниз.</p>
            <p style={{fontSize:'14px'}}>В объектном режиме применим модификатор Mirror | Симметрия с отражением по оси Z.</p>
            <p style={{fontSize:'14px'}}>После этого можно приступить к более тонкой правке гантели (изменять шары, рукоять, точку центра, поворачивать ее), при этом наблюдать, как будет выглядеть целый объект.</p>
            <p style={{fontSize:'14px'}}>Обратите внимание, в данном случае не надо применять (apply) модификатор. Иначе вторая половинка станет не "виртуальной", а реально продублируется. В режиме редактирования вы будете видеть ее вершины, ребра, грани</p>


          </section>
        </main>
    </div>
  )
}

export default TenModule