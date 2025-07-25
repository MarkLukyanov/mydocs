# Фильтр «Выпадающий список»

# Фильтр "Список"

Представляет собой разворачивающийся список, в котором можно использовать значения выбранного столбца как фильтры, применяющиеся ко всему листу. Значения можно искать как скроллом по всем, так и с помощью поисковой строки. Может быть выбрано более одного значения.

[![](https://book.winsolutions.ru/uploads/images/gallery/2023-06/scaled-1680-/image-1687123128723.png)](https://book.winsolutions.ru/uploads/images/gallery/2023-06/image-1687123128723.png)

[![](https://book.winsolutions.ru/uploads/images/gallery/2023-06/scaled-1680-/image-1687123150090.png)](https://book.winsolutions.ru/uploads/images/gallery/2023-06/image-1687123150090.png)

Выбранные значения фильтра отображаются на листе как название фильтра и количество выбранных в нем значений. Фильтр имеет следующие элементы управления:

1. Кнопка «Сохранить»: закрывает и активирует фильтр
2. Кнопка «Отмена»: закрывает фильтр и не сохраняет изменения
3. Кнопка "Крестик около названия активного фильтра: отменяет фильтрацию
4. Кнопка «Корзина» в правом верхнем углу дашборда: отменяет все выбранные значения
5. Вкладка с названием фильтра в верхней части дашборда: при наведении курсора мыши отображает активные значения фильтра; при нажатии на крестик отменяет фильтрацию

## Основные настройки

### Реальные данные

Скрыть/показать данные из модели. Пока отключена глобальная настройка, управляющая показом данных каждый виджет может быть настроен в отдельности. По умолчанию отключено. [Подробнее о виртуальных данных](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/page/virtualnye-dannye)

### Модель данных

Позволяет выбрать одну из моделей данных, ранее созданных в конструкторе моделей данных. Данные из этой модели будут использоваться для данного виджета (построение графика, заполнение полей таблицы, получение значений для фильтрации и т.д.)

### Применить ко всем листам

Данная настройка позволяет применить выбранные фильтры ко всем листам приложения

### Название из источника

Присваивает фильтру название таблицы, которая выбрана для получения элементов фильтра

### Имя фильтра

При включенном названии из источника оно дублируется как в источнике, иначе задается вручную.

### Элементы фильтра

Выбирается столбец из модели данных. Выбранный столбец становится выпадающим списком (фильтром) на листе, где можно выбирать значения, по которым будет отфильтрован лист.

При клике на значение оно выбирается, при повторном - выбор снимается. При клике на другое значение оно добавляется к выборке

После выбора каких-либо значений возле названия фильтра появляется кнопка «крестик», при нажатии на которую все фильтры будут удалены. Чтобы открыть список еще раз необходимо нажать на его название.

### Позиционирование

Данная настройка позволяет располагать фильтры относительно центра рабочей области слева/по центру/справа

### Отключить перемещение контейнера

Позволяет избежать случайного перемещения диаграммы по рабочей области, блокируя ее расположение в режиме редактирования