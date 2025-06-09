module.exports = {
    docs: [ //Основное меню
        'about', // отдельный пункт, slug: /
            { // создание нового раздела
                type: 'category',
                label: 'Быстрый старт', // название пункта меню в боковой панели
//                link: {type: 'doc', id: 'fast_start/enter'}, // узел дерева - название раздела
                items: [ 'fast_start/enter', 'fast_start/mock-up', 'fast_start/dashboard', 'fast_start/vis', 'fast_start/nav' ], // файлы md, входящие в выбранный раздел.
                                            // Название пунктов меню боковой панели определяется свойством title md файла
                                            // внутри массива items можно вставить новый объект {type: 'category', ...} и таким образом, организовать еще вложение
                                            // все обращения к страницам идут относительно своих каталогов, например create/create или create/local, где:
                                            // create - название каталога
                                            // create или local - названия md файлов без указания расширения
            },
            {
                type: 'category',
                label: 'Работа с проектами',
                items: ['projects/create_manage'],
            },
            {
                 type: 'category',
                 label: 'Технические характеристики',
                 items: ['tech_char/under_hood', 'tech_char/tech_req', 'tech_char/license', 'tech_char/cloud'],
            },
            {
                 type: 'category',
                 label: 'Конструктор дашбордов',
                 items: ['dashboard_construct/general_view', 'dashboard_construct/project_set', 'dashboard_construct/page_set',
                  'dashboard_construct/palettes', 'dashboard_construct/themes', 'dashboard_construct/widget_add',
                  'dashboard_construct/widget_param', 'dashboard_construct/virt_data', 'dashboard_construct/sql', ],
            },
            {
                 type: 'category',
                 label: 'Визуализации',
                 items: [
                             {
                                type: 'category',
                                label: 'Все диаграммы и все их свойства',
                                items: ['visualisations/diagrams/combined', 'visualisations/diagrams/round', 'visualisations/diagrams/table',
                                'visualisations/diagrams/tree', 'visualisations/diagrams/heatmap', 'visualisations/diagrams/bubble',
                                'visualisations/diagrams/media', 'visualisations/diagrams/filter_list', 'visualisations/diagrams/filter_period',
                                'visualisations/diagrams/filter_buttons', 'visualisations/diagrams/waterfall', ],
                             },
                              'visualisations/context_menu',
                        ],
            },
            {
                 type: 'category',
                 label: 'Диспетчер данных',
                 items: [
                            {
                                 type: 'category',
                                 label: 'Источники данных',
                                 items: ['data_dispatch/data_sources/data_choice', 'data_dispatch/data_sources/script_edit',],
                            },
                            {
                                 type: 'category',
                                 label: 'Коннекторы',
                                 items: ['data_dispatch/connectors/file', 'data_dispatch/connectors/dbms', 'data_dispatch/connectors/api',],
                            },
                        ],
            },
            {
                 type: 'category',
                 label: 'Модель данных',
                 items: ['data_model/connections', 'data_model/table', 'data_model/messages',],
            },
            {
                 type: 'category',
                 label: 'Страницы',
                 items: ['pages/size', 'pages/context_menu', 'pages/saving',],
            },
            {
                 type: 'category',
                 label: 'RLS, OLS, PLS',
                 items: ['rls,ols,pls/doc',],
            },
            {
                 type: 'category',
                 label: 'Администрирование',
                 items: ['admin/user_add', 'admin/rights', 'admin/license', 'admin/roles', 'admin/dash', ],
            },
            {
                 type: 'category',
                 label: 'Особенности SQL-редактора',
                 items: ['sql_features/doc',],
            },
            {
                 type: 'category',
                 label: 'Примеры и гайды',
                 items: ['examples_guides/doc',],
            },
            {
                 type: 'category',
                 label: 'Запросы на улучшение',
                 items: ['improvement_request/doc',],
            },
            {
                 type: 'category',
                 label: 'RoadMap (описание релизов текущих и будущих)',
                 items: ['roadmap/v172', 'roadmap/v171', 'roadmap/v170', 'roadmap/v160', 'roadmap/v150', ],
            },
        ]
    }