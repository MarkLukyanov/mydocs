# Быстрый старт

В данной статье описан алгоритм создания простой визуализации.

1. Войдите в систему с правами аналитика, разработчика или администратора.   
   \*Аналитику достаточно шагов 1, 2 и 11, поскольку пользователь с такой ролью может работать исключительно с существующими подключениями и данными из них. Разработчик и администратор могут полностью настроить подключение и модель данных для будущего дашборда.
2. Создайте проект и откройте его, либо войдите в уже существующий (если такой имеется).

   [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/HLvimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/HLvimage.png)


    На этом этапе Вы можете начинать создание дашборда. По умолчанию во всех виджетах включен режим прототипирования (или [виртуальных данных](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/page/virtualnye-dannye "Виртуальные данные")), так что для начала работы иметь в проекте реальные данные вовсе не обязательно.   
    В левом верхнем углу под кнопкой возврата на главную страницу находится библиотека виджетов.   
      
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/2KMimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/2KMimage.png)
    
    Выберите нажатием левой кнопки мыши визуализацию, чтобы добавить её в рабочую область. Нажмите левой кнопкой в любом месте в рамках страницы проекта, чтобы вставить выбранную визуализацию. Её размеры при этом будут установлены автоматически. Вы можете нарисовать визуализацию на экране вручную, зажав левую кнопку мыши и протянув курсором границы будущего объекта.  
      
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/ZsUimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/ZsUimage.png)
    
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/KrIimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/KrIimage.png)
    
      
    Для подготовки реальных данных для Вашей визуализации перейдите на экран диспетчера данных, нажав кнопку в правом верхнем углу страницы (доступно только для пользователей с правами разработчика и администратора).  
      
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/MGdimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/MGdimage.png)
3. Подключите источник данных. Для этого необходимо создать новое подключение, нажав на кнопку «Создать подключение». [Подробнее о создании и типах источников.](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/page/istocniki-dannyx "Подключение к источнику данных")

   [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/Hltimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2024-02/Hltimage.png)
4. После успешного создания источника, его содержимое появится на экране в окне предварительного просмотра. Слева будут схемы и таблицы источника. При клике на одну из них в центральной области появятся колонки, которые тоже можно выборочно отметить для импорта.

   [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/3xJimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2024-02/3xJimage.png)

   После того как выбор сделан нажмите кнопку «Вставить в скрипт». Окно закроется, и Вы увидите скрипт загрузки, сгенерированный для импорта выбранных таблиц и полей.
5. Для того, чтобы загрузить импортируемые данные в модель, нужно сначала «Сохранить» скрипт, а далее «Запустить» его. Сохранение позволяет Вам зафиксировать все внесённые изменения (даже если Вы покинете скрипт загрузки, все изменения останутся).  
   После успешной загрузки данных на экране появится соответствующее сообщение.

   [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/QHzimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2024-02/QHzimage.png)
6. По завершении загрузки перейдите на вкладку "Модель данных". [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/RrUimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/RrUimage.png)
7. На экране модели данных слева расположен список доступных таблиц. Нажатием по названию добавьте на лист таблицы, которые вам нужно соединить. В случае, если в вашей модели данных только одна таблица, добавьте ее на лист, нажмите "Сохранить" и переходите к шагу 10.

   [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/7yfimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/7yfimage.png)
8. Выберите нажатием основную таблицу, к которой будут присоединены остальные (1). В примере это таблица "Income", к которой по ключу "id" можно присоединить таблицу "Goods". Выберите таблицу, которую вы хотите присоединить (2), тип связи (3) и нажмите на кнопку "Связать" (4).

   [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/oqRimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/oqRimage.png)
9. Далее вам необходимо выбрать из списка поля для главной таблицы (1) и присоединяемой (2), по которым они будут связаны. Выбрав оба поля, нажмите "OK" (3). При необходимости, шаги 7-9 можно повторить для соединения остальных добавленных таблиц.

   [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/BZZimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/BZZimage.png)
10. После того, как вы закончили построение модели данных, нажмите кнопку "Сохранить" (1), а затем кнопку перехода на экран конструктора дашбордов (2).

    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/THfimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/THfimage.png)
11. Выберите добавленную ранее визуализацию. Включите в [параметрах визуализации](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/page/parametry-vidzeta) (1) на вкладке "Данные" (2) режим "Реальные данные" (3), выберите поля для разрезов (4) и показателей (5). Ваша первая визуализация готова!  
    Подробнее ознакомиться с принципами работы с визуализациями Вы можете в разделе [Конструктор дашбордов](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/chapter/konstruktor-dasbordov "Конструктор дашбордов")

    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/jQpimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/jQpimage.png)