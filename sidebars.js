module.exports = {
    docs: [ //Основное меню
        'about', // отдельный пункт, slug: /
            { // создание нового раздела
                type: 'category',
                label: 'Быстрый старт', // название пункта меню в боковой панели
                link: {type: 'doc', id: 'fast_start/fast_start'}, // узел дерева - название раздела
                items: [ 'fast_start/fast_start', ], // файлы md, входящие в выбранный раздел.
                                            // Название пунктов меню боковой панели определяется свойством title md файла
                                            // внутри массива items можно вставить новый объект {type: 'category', ...} и таким образом, организовать еще вложение
                                            // все обращения к страницам идут относительно своих каталогов, например create/create или create/local, где:
                                            // create - название каталога
                                            // create или local - названия md файлов без указания расширения
            },
        'tech_char',
        'dash_const',
        'vis',
        'data_manager',
        'data_model',
        'pages',
        'rls,ols,pls',
        'adm',
        'sql_ed',
        'examples',
        'improve',
        'roadmap',
        ]
    }