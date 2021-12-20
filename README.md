###### ***Эта документация доступна на русском языке. Если хотите прочитать, прокрутите вниз***
# TabsRush `English version`

**Tabarnush** - is a free plugin that allows you to implement
tabs inside html markup using pure JavaScript.

## Connection

To get started, you need to download and connect before the closing tag `body`
file `tabs-rush.js`, be sure to check the paths in your project.
 
```
<body>
    <!-- Plug-in is connected before the main script-->
    <script src="js/tabs-rush.js"></script>

    <!-- The main script-->
       <script src="js/script.js" ></script>
</body>
```

## Initialization
First, we need to create the markup for the buttons in our tabs. Mandatory for every
the button needs to set the class `rushButtom`.

For the wrapper and buttons, you need to set a unique `id`, which we will then use during initialization.

An active button will always have the class `rushButton-active`

```
<div class="button__container" id="btnBox">
    <div class="rushButtom rushButton-active" id="btnOne">
        Click 1
    </div>
    <div class="rushButtom" id="btnTwo">
        Click 2
    </div>
</div>
```

Next, we need to create a markup for the blocks that will be activated.
when you click on any of the buttons.

For blocks, you need to set a unique `id`, which we will then use during initialization.

The active block will always have the class `rushItem-active`

```
<div class="content__container">
    <div class="content__container-item rushItem-active" id="ConOne">
        1
    </div>
    <div class="content__container-item" id="ConTwo">
        2
    </div>
</div>
```
Next, we need to initialize
an object by specifying the `id` parameters of the parent block of buttons.

Next, inside we need to create an array of objects.

Each object will have the following keys:

`btn` - Here in the value it is necessary to specify the id of the button that should activate its object.

`item` - Here in the value you must specify the object that should be displayed when the button is pressed.

```
new tabsRush('btnBox',{
    tabs: [
        {
            btn: 'btnOne',
            item: 'ConOne'
        },
        {
            btn: 'btnTwo',
            item: 'ConTwo'
        }
    ]
})
```

## Initializing multiple objects

To initialize two or more blocks with tabs,
we just need to create a new markup with new `id`

HTML:

```
<div class="button__container" id="btnBox">
    <div class="rushButton rushButton-active" id="btnOne">
        Click 1
    </div>
    <div class="rushButton" id="btnTwo">
        Click 2
    </div>
</div>

<div class="content__container">
    <div class="content__container-item rushItem-active" id="ConOne">
        1
    </div>
    <div class="content__container-item" id="ConTwo">
        2
    </div>
</div>

<div class="button__container" id="btnBoxNew">
    <div class="rushButton rushButton-active" id="btnOneNew">
        Click 1
    </div>
    <div class="rushButton" id="btnTwoNew">
        Click 2
    </div>
</div>

<div class="content__container">
    <div class="content__container-item rushItem-active" id="ConOneNew">
        1
    </div>
    <div class="content__container-item" id="ConTwoNew">
        2
    </div>
</div>

```

JS:
```
new tabsRush('btnBox',{
    tabs: [
        {
            btn: 'btnOne',
            item: 'ConOne'
        },
        {
            btn: 'btnTwo',
            item: 'ConTwo'
        }
    ]
})

new tabsRush('btnBoxNew',{
    tabs : [
        {
            btn: 'btnOneNew',
            item: 'ConOneNew'
        },
        {
            btn: 'btnTwoNew',
            item: 'ConTwoNew'
        }
    ]
})
```



## Parameters

* buttonActive - In this parameter, you can change the class for the active button.
* itemActive - In this parameter, you can change the class for the active block.

For instance:

```
new tabsRush('btnBox',{
    tabs: [
        {
            btn: 'btnOne',
            item: 'ConOne'
        },
        {
            btn: 'btnTwo',
            item: 'ConTwo'
        }
    ],
    buttonActive : 'buttonActiveNew',
    itemActive : 'itemActiveNew'
})
```

## Default parameters

If you do not specify any parameters in the `TabsRush` plugin, the default values ​​will be used:

* buttonActive: 'rushButton-active'
* itemActive: 'rushItem-active'

# TabsRush `Russian version`

**TabsRush** - Это бесплатный плагин который позволяет реализовать
табы внутри html разметки используя чистый JavaScript.

## Подключение

Для начала работы необходимо скачать и подключить перед закрывающимся тегом `body`
файл `tabs-rush.js`, обязательно проверьте пути в своем проекте.

```
<body>
    <!-- Плагин подключаем перед основным скриптом-->
    <script src="js/tabs-rush.js"></script>

    <!-- Основной скрипт-->
       <script src="js/script.js" ></script>
</body>
```


## Инициализация
Нам необходимо создать разметку для кнопок наших табов. Обязательно каждой
кнопке необходимо задать класс `rushButtom`.

Для обертки и кнопок необходимо задать уникальный `id` который потом будем использовать при инициализации.

У активной кнопки всегда будет класс `rushButton-active`



```
<div class="button__container" id="btnBox">
    <div class="rushButtom rushButton-active" id="btnOne">
        Click 1
    </div>
    <div class="rushButtom" id="btnTwo">
        Click 2
    </div>
</div>
```


Далее нам необходимо создать разметку для блоков которые будут активироваться
при клике на любую из кнопок.

Для блоков необходимо задать уникальный `id`, который потом будем использовать при инициализации.

У активного блока всегда будет класс `rushItem-active`

```
<div class="content__container">
    <div class="content__container-item rushItem-active" id="ConOne">
        1
    </div>
    <div class="content__container-item" id="ConTwo">
        2
    </div>
</div>
```

Далее нам необходимо инициализировать 
объект указав в параметрах `id` родительского блока кнопок.

Далее внутри нам необходимо создать массив объектов. 

Каждый объект будет следующие ключи:

`btn` - Тут в значении необходимо указать id кнопки которая должна активировать свой объект.

`item` - Тут в значении необходимо указать объект, который должен отображаться при нажатии кнопки.

```
new tabsRush('btnBox',{
    tabs: [
        {
            btn: 'btnOne',
            item: 'ConOne'
        },
        {
            btn: 'btnTwo',
            item: 'ConTwo'
        }
    ]
})
```


## Инициализация нескольких объектов

Для инициализации двух и более блоков с табами, 
нам необходимо просто создать новую разметку с новыми `id`

HTML:

```
<div class="button__container" id="btnBox">
    <div class="rushButton rushButton-active" id="btnOne">
        Click 1
    </div>
    <div class="rushButton" id="btnTwo">
        Click 2
    </div>
</div>

<div class="content__container">
    <div class="content__container-item rushItem-active" id="ConOne">
        1
    </div>
    <div class="content__container-item" id="ConTwo">
        2
    </div>
</div>

<div class="button__container" id="btnBoxNew">
    <div class="rushButton rushButton-active" id="btnOneNew">
        Click 1
    </div>
    <div class="rushButton" id="btnTwoNew">
        Click 2
    </div>
</div>

<div class="content__container">
    <div class="content__container-item rushItem-active" id="ConOneNew">
        1
    </div>
    <div class="content__container-item" id="ConTwoNew">
        2
    </div>
</div>

```

JS:
```
new tabsRush('btnBox',{
    tabs: [
        {
            btn: 'btnOne',
            item: 'ConOne'
        },
        {
            btn: 'btnTwo',
            item: 'ConTwo'
        }
    ]
})

new tabsRush('btnBoxNew',{
    tabs : [
        {
            btn: 'btnOneNew',
            item: 'ConOneNew'
        },
        {
            btn: 'btnTwoNew',
            item: 'ConTwoNew'
        }
    ]
})
```

## Параметры

* buttonActive - В этом параметре можно изменить класс для активной кнопки.
* itemActive - В этом параметре можно изменить класс для активного блока.

Например:
```
new tabsRush('btnBox',{
    tabs: [
        {
            btn: 'btnOne',
            item: 'ConOne'
        },
        {
            btn: 'btnTwo',
            item: 'ConTwo'
        }
    ],
    buttonActive : 'buttonActiveNew',
    itemActive : 'itemActiveNew'
})
```


## Параметры по умолчанию

Если в плагине `TabsRush` не указать какие либо параметры, будут применяться значения по умолчанию :

* buttonActive : 'rushButton-active'
* itemActive : 'rushItem-active'