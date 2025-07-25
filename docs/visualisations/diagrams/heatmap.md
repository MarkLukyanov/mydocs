# Диаграмма "Heatmap"
## Ошибка в исходнике
[//]: # ()
[//]: # (Представляет собой две координатные оси и прямоугольники разного цвета, расположенные на координатной плоскости.)

[//]: # ()
[//]: # (<span style="background-color: transparent; color: rgb&#40;0, 0, 0&#41;; font-size: 14pt; font-style: italic; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; white-space-collapse: preserve; text-align: center;">Диаграмма Heatmap &#40;градиент&#41;</span>)

[//]: # ()
[//]: # ([![image.png]&#40;https://book.winsolutions.ru/uploads/images/gallery/2023-07/scaled-1680-/image.png&#41;]&#40;https://book.winsolutions.ru/uploads/images/gallery/2023-07/image.png&#41;)

[//]: # ()
[//]: # (<span style="background-color: transparent; color: rgb&#40;0, 0, 0&#41;; font-size: 14pt; font-style: italic; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; white-space-collapse: preserve; text-align: center;">Диаграмма Heatmap &#40;ступенями&#41;</span>)

[//]: # ()
[//]: # ([![image.png]&#40;https://book.winsolutions.ru/uploads/images/gallery/2023-07/scaled-1680-/NH7image.png&#41;]&#40;https://book.winsolutions.ru/uploads/images/gallery/2023-07/NH7image.png&#41;)

[//]: # ()
[//]: # (### Вкладка "Данные")

[//]: # ()
[//]: # (1. Реальные данные &#40;вкл/выкл&#41;: переключает отображение реальных и виртуальных данных)

[//]: # (2. Ось X, Ось Y, Показатель: для построения необходимы 2 разреза &#40;измерения&#41;, где каждое значение является координатами по оси X и Y соответственно и 1 показатель &#40;мера&#41;, значение которого является значениями на пересечениях координат. Более показателей/разрезов добавить нельзя. Есть возможность настроить параметры показателя и разрезов. )

[//]: # (    1. Параметры значений разрезов: )

[//]: # (        - Показывать пустые значения: на оси разрезов будут отображены метки разреза у которых нет значений)

[//]: # (        - Группировать по дате: отображение значений разреза на оси координат меняется в соответствии с выбранной группировкой)

[//]: # (    2. Параметры значений показателя: )

[//]: # (        - Показать значения: отобразить значения показателя на диаграмме)

[//]: # (        - Ориентация: повернуть на 90 градусов)

[//]: # (        - Начертание: включить жирный, курсивный и подчеркнутый шрифт)

[//]: # (        - Размер: указать размер шрифта в пикселях)

[//]: # (        - Межбуквенный интервал: установить интервал между символами в пикселях)

[//]: # (        - Цвет: выбрать цвет символов)

[//]: # (        - Форматирование значений: включить форматирование &#40;например, вместо "1" отобразить "1,00 $")

[//]: # (        - Выбор формата: числовой, процентный, валютный &#40;можно выбрать тип&#41;, долевой, степень числа)

[//]: # (        - Дополнительные параметры формата: текстовое поле &#40;разместить после числа произвольный текст&#41;, уменьшить число знаков после запятой, увеличить число знаков после запятой, разбить число по три символа пробелами)

[//]: # (3. SQL: открыть SQL-редактор для этой визуализации)

[//]: # (4. <span style="color: rgb&#40;0, 0, 0&#41;;">Цвет</span>: определяет цвет заливки прямоугольников со значениями показателей одним из нескольких режимов:  )

[//]: # (    )
[//]: # (    1. Градиент: от минимального &#40;цвет 1&#41; к максимальному &#40;цвет 2&#41; значению лимита  )

[//]: # (        )
[//]: # (        - Легенда отображается в виде градиента &#40;см. рис "Диаграмма Heatmap &#40;градиент&#41;"&#41;)

[//]: # (        - Можно настроить промежуточные цвета &#40;аналогично функциональности "Цвет по значению"&#41; [![image.png]&#40;https://book.winsolutions.ru/uploads/images/gallery/2023-07/scaled-1680-/AvGimage.png&#41;]&#40;https://book.winsolutions.ru/uploads/images/gallery/2023-07/AvGimage.png&#41;)

[//]: # (    2. <span style="color: rgb&#40;0, 0, 0&#41;;">Ступенями</span>: настраивается аналогично градиенту, но переходы цветов отсутствуют, отображаются только выбранные цвета. )

[//]: # (        - Диапазон значений разбивается на эти цвета поровну и автоматически.)

[//]: # (        - Легенда отображается в автоматическом режиме)

[//]: # (5. Лимит: ограничивает данные для построения диаграммы указанным количеством строк)

[//]: # (6. Мин/макс значение: ограничивает значения показателей в пределах, установленных данным параметром)

[//]: # ()
[//]: # (### Вкладка "Вид")

[//]: # ()
[//]: # (Аналогично [комбинированной диаграмме]&#40;https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/page/kombinirovannaya-diagramma&#41;)