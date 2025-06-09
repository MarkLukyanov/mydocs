
# Возможности установки - облако и внутренний контур
## Ошибка в исходном файле Markdown
[//]: # ()
[//]: # (mkdir fastboard)

[//]: # (cd fastboard)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--40">  )

[//]: # (</div><div id="bkmrk-%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D0%B5%D0%BC-%D0%B8-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B2%D0%BB">Проверяем и устанавливаем данные для авторизации в базах данных и параметры подключения к контейнерам с базами в файле **docker-compose.yml**, в данный момент там установлены данные для подключения по умолчанию.</div><div id="bkmrk--41">  )

[//]: # (</div><div id="bkmrk-%D0%94%D0%B0%D0%BB%D0%B5%D0%B5-%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D1%80%D1%83%D0%B5%D0%BC-%D0%BE%D0%B1">Далее импортируем образы контейнеров **fastboard:back** и **fastboard:front**, для этого выполняем команды:</div><div id="bkmrk--42">  )

[//]: # (</div>```)

[//]: # (docker load -i fastboard-back.tar)

[//]: # (docker load -i fastboard-front.tar)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7">После загрузки образов, запускаем контейнеры бэк и фронт, а также проверяем логи из запуска</div><div id="bkmrk--43">  )

[//]: # (</div>```)

[//]: # (docker-compose up -d)

[//]: # (docker-compose logs -f)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-docker-compose-up--d-4"></div><div id="bkmrk-%D0%B8%D0%BB%D0%B8%C2%A0">или </div>```)

[//]: # (docker-compose up -d)

[//]: # (docker-compose ps)

[//]: # (docker logs -f container_name)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-docker-compose-up--d-5"></div><div id="bkmrk-%D0%95%D1%81%D0%BB%D0%B8-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D1%8B-%D0%B7%D0%B0%D0%BF%D1%83">Если контейнеры запустились без проблем, то проверяем работу пройдя по ссылке указанной в **docker-compose.yml** для контейнера фронт: https://example.com</div>#### **14. Активация первого ключа )

[//]: # ()
[//]: # (После успешного развертывания нужно войти в API системы под техническим пользователем для активации первого лицензионного ключа. Этот пользователь имеет права администратора и остается в системе.)

[//]: # ()
[//]: # (##### **Входим в API**)

[//]: # ()
[//]: # (Переходим по адресу: **ваш\_бэкенд/docs/swagger,** находим блок аутентификации и метод **get\_token.** Жмем кнопку **TRY OUT**, вводим учетные данные:)

[//]: # ()
[//]: # (**Логин**: admin  )

[//]: # (**Пароль:** дата первого запуска контейнеров ГГГГ-MM-ДД)

[//]: # ()
[//]: # (Далее нажимаем кнопку **EXECUTE**)

[//]: # ()
[//]: # ([![image.png]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/ppzimage.png&#41;]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/ppzimage.png&#41;)

[//]: # ()
[//]: # (##### **Далее активируем лицензионный ключ** )

[//]: # ()
[//]: # (В блоке «Лицензия» находим метод Acivate, жмем кнопку **TRY OUT**, выбираем файл лицензии и нажимаем кнопку **EXECUTE**)

[//]: # ()
[//]: # ([![image.png]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/G3Gimage.png&#41;]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/G3Gimage.png&#41;)

[//]: # ()
[//]: # (##### **Система готова к работе**)

[//]: # ()
[//]: # (Теперь можно войти с помощью интерфейса и создать пользователей через панель администратора и выдавать им лицензии)

[//]: # ()
[//]: # (### **Установка системы без SSL &#40;http&#41;**)

[//]: # ()
[//]: # (#### **1. Для разворачивания контейнеров создаем директории для баз данных и обратного прокси**)

[//]: # ()
[//]: # (```)

[//]: # (mkdir resources)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--36"></div><div id="bkmrk--45"></div><div id="bkmrk--46">  )

[//]: # (</div>#### **2. Переходим в директорию баз данных и создаем директорию для postgres**)

[//]: # ()
[//]: # (```)

[//]: # (cd resources/)

[//]: # (mkdir postgres)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--47">  )

[//]: # (</div>#### **3. Переходим в директорию postgres, копируем в нее файл docker-compose.yml из предоставленного дистрибутива.** )

[//]: # ()
[//]: # (Создаем сеть для контейнеров базами данных и запускаем контейнер с postgres)

[//]: # ()
[//]: # (```)

[//]: # (cd postgres/)

[//]: # (docker network create resources)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--48"></div><div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0-4">После запуска, скачается необходимый образ и запустится контейнер postgres.</div><div id="bkmrk-%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E%3A--1">**Логин по умолчанию:** postgres</div><div id="bkmrk-%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D1%8C%3A-postgres-1">**Пароль:** postgres</div><div id="bkmrk-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B2-%D1%84%D0%B0%D0%B9-3">*изменить можно в файле **docker-compose.yml** перед запуском контейнера*</div><div id="bkmrk--49"></div><div id="bkmrk--50"></div><div id="bkmrk--51">  )

[//]: # (</div>#### **4. Создаем базу данных postgres**)

[//]: # ()
[//]: # (C именем fastboard\_back. Cоздать можно разными способами, например подключиться к контейнеру при помощи PgAdmin или psql-16)

[//]: # ()
[//]: # (```bash)

[//]: # (sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $&#40;lsb_release -cs&#41;-pgdg main" > /etc/apt/sources.list.d/pgdg.list')

[//]: # (    curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg)

[//]: # (    apt update)

[//]: # (    apt install postgresql-client-16)

[//]: # (    psql -h 127.0.0.1 -U postgres)

[//]: # (                \l)

[//]: # (                CREATE DATABASE fastboard_back;)

[//]: # (                \l)

[//]: # (                \q)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--52">  )

[//]: # (</div><div id="bkmrk--53"></div><div id="bkmrk--54"></div><div id="bkmrk--55">  )

[//]: # (</div>#### **5. Переходим на директорию выше, т.е. в директорию resources**)

[//]: # ()
[//]: # (```)

[//]: # (cd ..)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--56"></div><div id="bkmrk-%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B5%D0%BC-%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%B8-%D0%B4">Создаем директории для Clickhouse переходим в нее</div><div id="bkmrk--57">  )

[//]: # (</div>```)

[//]: # (mkdir clickhouse)

[//]: # (cd  clickhouse/)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--58">  )

[//]: # (</div>#### **6. Копируем в директорию clickhouse файл docker-compose.yml и директории с конфигами &#40;etc, custom\_config&#41; из предоставленного дистрибутива Clickhouse.** )

[//]: # ()
[//]: # (Меняем параметры выделенной памяти для контейнера в файле **docker-compose.yml** &#40;по умолчанию выставлено от 2 до 8 Гб ОЗУ&#41; и запускаем контейнер с clickhouse)

[//]: # ()
[//]: # (```)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0-5">После запуска, скачается необходимый образ и запустится контейнер с clickhouse. </div><div id="bkmrk-%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%3A-admin-2">**Логин:** admin</div><div id="bkmrk-%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D1%8C%3A-passw0rd-1">**Пароль:** Passw0rd</div><div id="bkmrk-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B2-%D1%84%D0%B0%D0%B9-4">*изменить можно в файле **etc/users.xml** перед запуском контейнера*</div><div id="bkmrk--59"></div><div id="bkmrk--60">  )

[//]: # (</div>#### **7. Переходим на директорию выше, т.е. в директорию resources**)

[//]: # ()
[//]: # (```)

[//]: # (cd ..)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--61"></div>)

[//]: # (#### **8. Создаем директории для Redis и переходим в нее**)

[//]: # ()
[//]: # (```)

[//]: # (### **Установка системы с SSL &#40;https&#41;**)

[//]: # ()
[//]: # (#### **1. Для разворачивания контейнеров создаем директории для баз данных и обратного прокси**)

[//]: # ()
[//]: # (```)

[//]: # (mkdir resources)

[//]: # (mkdir traefik)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-mkdir-resources---%D0%B4%D0%B8"></div><div id="bkmrk--1"></div><div id="bkmrk--2">  )

[//]: # (</div>#### **2. Переходим в директорию баз данных и создаем директорию для postgres**)

[//]: # ()
[//]: # (```)

[//]: # (cd resources/)

[//]: # (mkdir postgres)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--4">  )

[//]: # (</div>#### **3. Переходим в директорию postgres, копируем в нее файл docker-compose.yml из предоставленного дистрибутива.** )

[//]: # ()
[//]: # (Создаем сеть для контейнеров базами данных и запускаем контейнер с postgres)

[//]: # ()
[//]: # (```)

[//]: # (cd postgres/)

[//]: # (docker network create resources)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-cd-postgres%2F"></div><div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0">После запуска, скачается необходимый образ и запустится контейнер postgres.</div><div id="bkmrk-%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E%3A-">**Логин по умолчанию:** postgres</div><div id="bkmrk-%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D1%8C%3A-postgres">**Пароль:** postgres</div><div id="bkmrk-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B2-%D1%84%D0%B0%D0%B9">*изменить можно в файле **docker-compose.yml** перед запуском контейнера*</div><div id="bkmrk-"></div><div id="bkmrk--6"></div><div id="bkmrk--7">  )

[//]: # (</div>#### **4. Создаем базу данных postgres, например с именем fastboard\_back, создать можно разными способами, например подключиться к контейнеру при помощи PgAdmin**)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B2%D0%BB%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B1%D0%B0%D0%B7%D1%83">Восстанавливаем базу postgres, файл с бэкапом чистой базы **fastboard\_back.sql,** который находится в директории 1. Postgres переданного дистрибутива, восстанавливать например через PgAdmin.</div><div id="bkmrk-%D0%92-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82-%D0%B2-%D0%BC%D0%BE">В момент запуска конейнера, пройдут миграции и создастся база данных с логином и паролем по умолчанию.</div><div id="bkmrk--9"></div><div id="bkmrk-%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%3A-admin">**Логин:** admin</div><div id="bkmrk-%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D1%8C%3A-yyyy-mm-dd-%28">**Пароль:** YYYY-MM-DD &#40;дата первого запуска контейнеров&#41;</div><div id="bkmrk--3"></div><div id="bkmrk--10"></div><div id="bkmrk--11">  )

[//]: # (</div>#### **5. Переходим на директорию выше, т.е. в директорию resources**)

[//]: # ()
[//]: # (```)

[//]: # (cd ..)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--13"></div><div id="bkmrk-%C2%A0-%C2%A0%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B5%D0%BC-%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B8">Создаем директории для Clickhouse переходим в нее</div><div id="bkmrk--14">  )

[//]: # (</div>```)

[//]: # (mkdir clickhouse)

[//]: # (cd  clickhouse/)

[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (#### **6. Копируем в директорию clickhouse файл docker-compose.yml и директорию с конфигами etc из предоставленного дистрибутива Clickhouse.**)

[//]: # ()
[//]: # (Меняем параметры выделенной памяти для контейнера в файле **docker-compose.yml** &#40;по умолчанию выставлено от 2 до 8 Гб ОЗУ&#41; и запускаем контейнер с clickhouse)

[//]: # ()
[//]: # (```)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0-1">После запуска, скачается необходимый образ и запустится контейнер с clickhouse. </div><div id="bkmrk-%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%3A-admin-1">**Логин:** admin</div><div id="bkmrk-%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D1%8C%3A-passw0rd">**Пароль:** Passw0rd</div><div id="bkmrk-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B2-%D1%84%D0%B0%D0%B9-1">*изменить можно в файле **docker-compose.yml** перед запуском контейнера*</div><div id="bkmrk--17"></div><div id="bkmrk--18">  )

[//]: # (</div>#### **7. Переходим на директорию выше, т.е. в директорию resources**)

[//]: # ()
[//]: # (```)

[//]: # (cd ..)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--20"></div>#### **8. Создаем директории для Redis и переходим в нее**)

[//]: # ()
[//]: # (```)

[//]: # (mkdir redis)

[//]: # (cd  redis/)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--22">  )

[//]: # (</div>#### **9. Создаем директории для баз и логов redis**)

[//]: # ()
[//]: # (```)

[//]: # (mkdir -p data/{bases,log})

[//]: # (```)

[//]: # ()
[//]: # (#### **10. Копируем в директорию redis файл docker-compose.yml и директорию с конфигами etc из предоставленного дистрибутива Redis. Запускаем контейнер с Redis**)

[//]: # ()
[//]: # (```)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0-2">После запуска, скачается необходимый образ и запустится контейнер с redis.</div><div id="bkmrk-%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D1%8C-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E%3A">**Пароль по умолчанию:** Passw0rd,</div><div id="bkmrk-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B2-%D1%84%D0%B0%D0%B9-2">*изменить можно в файле **etc/redis.conf** перед запуском контейнера*</div><div id="bkmrk--5"></div>#### **11. Создаем директории для RabbitMQ и переходим в нее**)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%94%D0%BB%D1%8F-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-%D0%B2%D0%B5%D0%B1-%D0%B8%D0%BD"><div id="bkmrk-%D0%94%D0%BB%D1%8F-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-%D0%B2%D0%B5%D0%B1-%D0%B8%D0%BD-1">Для доступа к веб-интерфейсу Traefik нужно сгенерировать и подставить пароль в файл docker-compose.yml, для этого выполняем следующие шаги:</div><div id="bkmrk--8"></div></div>```)

[//]: # (mkdir rabbitmq)

[//]: # (cd rabbitmq/)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B5%D0%BC-%D0%B2-%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B8"><div id="bkmrk--30">Копируем в директорию RabbitMQ файл **docker-compose.yml** из предоставленного дистрибутива RabbitMQ. Запускаем контейнер с RabbitMQ</div><div id="bkmrk--12"></div></div>```)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0-3"><div id="bkmrk-%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-passw0rd-%D0%BD%D0%B0">После запуска, скачается необходимый образ и запустится контейнер с RabbitMQ.   )

[//]: # (**Логин и пароль** по умолчанию: fb_rabbit,   )

[//]: # (*изменить можно в файле **docker-compose.yml** перед запуском контейнера*</div><div id="bkmrk--16"></div><div id="bkmrk-%D0%A2%D0%B5%D0%BF%D0%B5%D1%80%D1%8C-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C">Теперь нужно создать VHOST для контейнера бэк:</div></div>```bash)

[//]: # (docker exec -it rabbitmq_1 bash)

[//]: # (    rabbitmqctl add_vhost fb1)

[//]: # (    rabbitmqctl list_vhosts)

[//]: # (    rabbitmqctl set_permissions -p "fb1" "fb_rabbit" ".*" ".*" ".*")

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--26"></div>#### **12. Переходим в директорию traefik и копируем в нее файл docker-compose.yml из из предоставленного дистрибутива Traefik**)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%94%D0%BB%D1%8F-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-%D0%B2%D0%B5%D0%B1-%D0%B8%D0%BD-2">Для доступа к веб-интерфейсу Traefik нужно сгенерировать и подставить пароль в файл docker-compose.yml, для этого выполняем следующие шаги:</div><div id="bkmrk--21"></div>```)

[//]: # (cd ../../traefik)

[//]: # (apt install apache2-utils)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--29">  )

[//]: # (</div><p class="callout info">**ВАЖНО!** Мы должны экранировать каждый символ “$” в нашем зашифрованном пароле &#40;заменить $ на $$&#41;, так как мы используем пароль напрямую в docker-compose.yml</p>)

[//]: # ()
[//]: # (<div id="bkmrk--23">  )

[//]: # (</div>```)

[//]: # (echo $&#40;htpasswd -nb admin Passw0rd&#41; | sed -e s/\\$/\\$\\$/g)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%97%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-passw0rd-%D0%BD%D0%B0">Заменить Passw0rd на свой пароль.</div><div id="bkmrk--31">  )

[//]: # (</div><div id="bkmrk-%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%B2%D1%8B%D0%B2%D0%BE%D0%B4%D0%B0-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4">*Пример вывода команды &#40;результат будет разный при каждом запуске команды&#41;:*</div><div id="bkmrk--32">  )

[//]: # (</div>```)

[//]: # (admin:$$2y$$05$$iSGcI0SpukDoOZolGkfghIFe31e47F5vewcjlhzhgf0EHo45H.dFyKW)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--33"></div><div id="bkmrk-%D0%92%D1%8B%D0%B2%D0%BE%D0%B4-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-">Вывод команды нужно поместить в наш docker-compose.yml внутрь traefik метки, заменив &lt;USER-PASSWORD-OUTPUT&gt; в примере ниже.</div><div id="bkmrk--35">  )

[//]: # (</div>```)

[//]: # ( "traefik.http.middlewares.auth.basicauth.users=<USER-PASSWORD-OUTPUT>")

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%C2%A0-%C2%A0-%C2%A0---%22traefik.htt"></div><div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8-%D1%83%D1%81%D1%82">После создания и установки пользователя и пароля, создаем сеть докер для Traefik и запускаем контейнер с Traefik</div><div id="bkmrk--37">  )

[//]: # (</div>```)

[//]: # (docker network create traefik)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-docker-network-creat-1">После запуска, скачается необходимый образ и запустится контейнер с Traefik.</div><div id="bkmrk--25"></div><div id="bkmrk--38">  )

[//]: # (</div><p class="callout danger">**ВАЖНО! Для разворачивания проекта необходимо заранее иметь две DNS-записи на IP сервера, где разворачивается проект. Записи нужны для получения сертификатов от Let's Encrypt и шифрования трафика Они включаются в сборку программы для развертывания на конкретном сервере.**</p>)

[//]: # ()
[//]: # (*Например:*  )

[//]: # (front.example.com  )

[//]: # (back.example.com)

[//]: # ()
[//]: # (#### **13. Создаем директорию для FastBoard, переходим в нее, копируем docker-compose.yml и образы docker в рабочую директорию проекта**)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B5%D0%BC-%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8E-%D0%B4">Создаем директорию для FastBoard, переходим в нее, копируем **docker-compose.yml** и образы docker в рабочую директорию проекта</div><div id="bkmrk--39">  )

[//]: # (</div>```)

[//]: # (cd ..)

[//]: # (mkdir redis)

[//]: # (cd  redis/)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--63">  )

[//]: # (</div>#### **9. Создаем директории для баз и логов redis**)

[//]: # ()
[//]: # (```)

[//]: # (mkdir -p data/{bases,log})

[//]: # (```)

[//]: # ()
[//]: # (#### **10. Копируем в директорию redis файл docker-compose.yml и директорию с конфигами etc из предоставленного дистрибутива Redis. Запускаем контейнер с Redis**)

[//]: # ()
[//]: # (```)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0-6">После запуска, скачается необходимый образ и запустится контейнер с redis.</div><div id="bkmrk-%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D1%8C-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E%3A-1">**Пароль по умолчанию:** Passw0rd,</div><div id="bkmrk-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B2-%D1%84%D0%B0%D0%B9-5">*изменить можно в файле **etc/redis.conf** перед запуском контейнера*</div><div id="bkmrk--65"></div><div id="bkmrk--66">  )

[//]: # (</div>#### **11. Создаем директории для RabbitMQ и переходим в нее**)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%94%D0%BB%D1%8F-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-%D0%B2%D0%B5%D0%B1-%D0%B8%D0%BD-3">Для доступа к веб-интерфейсу Traefik нужно сгенерировать и подставить пароль в файл docker-compose.yml, для этого выполняем следующие шаги:</div><div id="bkmrk--67"></div>```)

[//]: # (mkdir rabbitmq)

[//]: # (cd rabbitmq/)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B5%D0%BC-%D0%B2-%D0%B4%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B8-1">Копируем в директорию RabbitMQ файл **docker-compose.yml** из предоставленного дистрибутива RabbitMQ. Запускаем контейнер с RabbitMQ</div><div id="bkmrk--68"></div>```)

[//]: # (docker-compose up -d)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%2C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0-7">После запуска, скачается необходимый образ и запустится контейнер с RabbitMQ.   )

[//]: # (**Логин и пароль** по умолчанию: fb_rabbit,   )

[//]: # (*изменить можно в файле **docker-compose.yml** перед запуском контейнера*</div><div id="bkmrk--69"></div><div id="bkmrk-%D0%A2%D0%B5%D0%BF%D0%B5%D1%80%D1%8C-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-1">Теперь нужно создать VHOST для контейнера бэк:</div>```bash)

[//]: # (docker exec -it rabbitmq_1 bash)

[//]: # (    rabbitmqctl add_vhost fb1)

[//]: # (    rabbitmqctl list_vhosts)

[//]: # (    rabbitmqctl set_permissions -p "fb1" "fb_rabbit" ".*" ".*" ".*")

[//]: # (```)

[//]: # ()
[//]: # (#### **12. Создаем директорию для FastBoard,** )

[//]: # ()
[//]: # (Переходим в нее, копируем **docker-compose.yml**, **license\_rsa.pub** и образы docker из архива **fastboard.tar.gz** в рабочую директорию проекта)

[//]: # ()
[//]: # (```)

[//]: # (cd ..)

[//]: # (mkdir fastboard)

[//]: # (cd fastboard)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--71">  )

[//]: # (</div><div id="bkmrk-%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D0%B5%D0%BC-%D0%B8-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B2%D0%BB-1">Проверяем и устанавливаем данные для авторизации в базах данных и параметры подключения к контейнерам с базами в файле **docker-compose.yml**, в данный момент там установлены данные для подключения по умолчанию.</div><div id="bkmrk--72">  )

[//]: # (</div><div id="bkmrk-%D0%94%D0%B0%D0%BB%D0%B5%D0%B5-%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D1%80%D1%83%D0%B5%D0%BC-%D0%BE%D0%B1-1">Далее импортируем образы контейнеров **fastboard:back** и **fastboard:front**, для этого выполняем команды:</div><div id="bkmrk--73">  )

[//]: # (</div>```)

[//]: # (docker load -i fastboard-back.tar)

[//]: # (docker load -i fastboard-front.tar)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7-1">После загрузки образов, запускаем контейнеры бэк и фронт, а также проверяем логи из запуска</div><div id="bkmrk--74">  )

[//]: # (</div>```)

[//]: # (docker-compose up -d)

[//]: # (docker-compose logs -f)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--75"></div><div id="bkmrk-%D0%B8%D0%BB%D0%B8%C2%A0-1">или </div>```)

[//]: # (docker-compose up -d)

[//]: # (docker-compose ps)

[//]: # (docker logs -f container_name)

[//]: # (```)

[//]: # ()
[//]: # (<div id="bkmrk--76"></div><div id="bkmrk-%D0%92-%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD">В момент запуска конейнера c бэкенд приложения, пройдут миграции и создастся база данных с логином и паролем по умолчанию. Логин admin пароль YYYY-MM-DD &#40;дата первого запуска контейнеров&#41;</div><div id="bkmrk--77"></div><div id="bkmrk-%D0%95%D1%81%D0%BB%D0%B8-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D1%8B-%D0%B7%D0%B0%D0%BF%D1%83-1">Если контейнеры запустились без проблем, то проверяем работу пройдя по ссылке указанной в **docker-compose.yml** для контейнера фронт: https://example.com</div>#### **13. Превый вход в систему и пользователи** )

[//]: # ()
[//]: # (После успешного развертывания нужно войти в API системы под техническим пользователем для активации первого лицензионного ключа. Этот пользователь имеет права администратора и остается в системе.)

[//]: # ()
[//]: # (##### **Входим в API**)

[//]: # ()
[//]: # (Переходим по адресу: **ваш\_бэкенд/docs/swagger,** находим блок аутентификации и метод **get\_token.** Жмем кнопку **TRY OUT**, вводим учетные данные:)

[//]: # ()
[//]: # (**Логин**: admin  )

[//]: # (**Пароль:** дата первого запуска контейнеров ГГГГ-MM-ДД)

[//]: # ()
[//]: # (Далее нажимаем кнопку **EXECUTE**)

[//]: # ()
[//]: # ([![image.png]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/ppzimage.png&#41;]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/ppzimage.png&#41;)

[//]: # ()
[//]: # (##### **Далее активируем лицензионный ключ** )

[//]: # ()
[//]: # (В блоке «Лицензия» находим метод Acivate, жмем кнопку **TRY OUT**, выбираем файл лицензии и нажимаем кнопку **EXECUTE**)

[//]: # ()
[//]: # ([![image.png]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/scaled-1680-/G3Gimage.png&#41;]&#40;https://book.winsolutions.ru/uploads/images/gallery/2024-02/G3Gimage.png&#41;)

[//]: # ()
[//]: # (##### **Система готова к работе**)

[//]: # ()
[//]: # (Теперь можно войти спомощью интерфейса и создать пользователей через панель администратора и выдавать им лицензии)