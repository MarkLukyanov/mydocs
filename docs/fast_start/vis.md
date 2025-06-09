# Подключение визуала к данным из реальной модели

1. Для подготовки реальных данных для Вашей визуализации перейдите на экран диспетчера данных, нажав кнопку в правом верхнем углу страницы (доступно только для пользователей с правами разработчика и администратора).  
      
    [![Снимок экрана 2025-06-02 в 20.52.54.png](https://book.winsolutions.ru/uploads/images/gallery/2025-06/scaled-1680-/snimok-ekrana-2025-06-02-v-20-52-54.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-06/snimok-ekrana-2025-06-02-v-20-52-54.png)
2. Подключите источник данных. Для этого необходимо создать новое подключение, нажав на кнопку «Создать подключение». [Подробнее о создании и типах источников.](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/page/istocniki-dannyx "Подключение к источнику данных")  
      
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/Hltimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2024-02/Hltimage.png)
3. После успешного создания источника, его содержимое появится на экране в окне предварительного просмотра. Слева будут схемы и таблицы источника. При клике на одну из них в центральной области появятся колонки, которые тоже можно выборочно отметить для импорта.  
      
    [![Снимок экрана 2025-06-02 в 20.36.04.png](https://book.winsolutions.ru/uploads/images/gallery/2025-06/scaled-1680-/snimok-ekrana-2025-06-02-v-20-36-04.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-06/snimok-ekrana-2025-06-02-v-20-36-04.png)
    
      
    После того как выбор сделан нажмите кнопку «Далее». Окно закроется, и Вы увидите скрипт загрузки, сгенерированный для импорта выбранных таблиц и полей.
4. Для того, чтобы загрузить импортируемые данные в модель, нужно сначала «Сохранить» скрипт, а далее «Запустить» его. Сохранение позволяет Вам зафиксировать все внесённые изменения (даже если Вы покинете скрипт загрузки, все изменения останутся).  
    После успешной загрузки данных на экране появится соответствующее сообщение.   
      
    [![Снимок экрана 2025-06-02 в 20.41.56.png](https://book.winsolutions.ru/uploads/images/gallery/2025-06/scaled-1680-/snimok-ekrana-2025-06-02-v-20-41-56.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-06/snimok-ekrana-2025-06-02-v-20-41-56.png)
5. По завершении загрузки перейдите на вкладку "Модель данных". [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/RrUimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/RrUimage.png)
6. На экране модели данных слева расположен список доступных таблиц.  
    [![Снимок экрана 2025-06-02 в 20.57.01.png](https://book.winsolutions.ru/uploads/images/gallery/2025-06/scaled-1680-/snimok-ekrana-2025-06-02-v-20-57-01.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-06/snimok-ekrana-2025-06-02-v-20-57-01.png)
7. По нажатию на название таблицы, она добавится на лист. Обратите внимание, что таблицы при добавлении на лист наслаиваются друг на друга. Их можно разместить в нужной последовательности, выделив верхнюю таблицу и передвинув в любую сторону.  
      
    [![Снимок экрана 2025-06-02 в 21.01.08.png](https://book.winsolutions.ru/uploads/images/gallery/2025-06/scaled-1680-/snimok-ekrana-2025-06-02-v-21-01-08.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-06/snimok-ekrana-2025-06-02-v-21-01-08.png)
    
      
    Если в вашей модели данных только одна таблица, добавьте ее на лист, нажмите "Сохранить" и переходите к шагу 11.
8. Если вам нужно соединить таблицы, на листе выберите нажатием основную таблицу, к которой будут присоединены остальные (1). В примере это таблица "Income", к которой по ключу "id" можно присоединить таблицу "Goods". Выберите таблицу, которую вы хотите присоединить (2), тип связи (3) и нажмите на кнопку "Связать" (4).  
      
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/oqRimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/oqRimage.png)
9. Далее вам необходимо выбрать из списка поля для главной таблицы (1) и присоединяемой (2), по которым они будут связаны. Выбрав оба поля, нажмите "OK" (3). При необходимости, шаги 7-9 можно повторить для соединения остальных добавленных таблиц.  
       
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/BZZimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/BZZimage.png)
10. После того, как вы закончили построение модели данных, нажмите кнопку "Сохранить" (1), а затем кнопку перехода на экран конструктора дашбордов (2).  
      
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/THfimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/THfimage.png)
11. Выберите добавленную ранее визуализацию. Включите в [параметрах визуализации](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/page/parametry-vidzeta) (1) на вкладке "Данные" (2) режим "Реальные данные" (3), выберите поля для разрезов (4) и показателей (5). Ваша первая визуализация готова!  
    Подробнее ознакомиться с принципами работы с визуализациями Вы можете в разделе [Конструктор дашбордов](https://book.winsolutions.ru/books/rukovodstvo-polzovatelia/chapter/konstruktor-dasbordov "Конструктор дашбордов")  
      
    [![image.png](https://book.winsolutions.ru/uploads/images/gallery/2025-02/scaled-1680-/jQpimage.png)](https://book.winsolutions.ru/uploads/images/gallery/2025-02/jQpimage.png)