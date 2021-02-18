<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'image' => array(
        'caption' => 'Баннер',
        'type' => 'image'
    ),
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
    'title' => array(
        'caption' => 'Заголовок',
        'type' => 'text'
    ),
	'subtitle' => array(
        'caption' => 'Подзаголовок',
        'type' => 'text'
    )
);
$settings['templates'] = array(
    'outerTpl' => '<ul>[+wrapper+]</ul>',
    'rowTpl' => '<li>[+text+], [+image+], [+thumb+], [+textarea+], [+date+], [+dropdown+], [+listbox+], [+listbox-multiple+], [+checkbox+], [+option+]</li>'
);
$settings['configuration'] = array(
    'enablePaste' => true,
    'enableClear' => true,
    'csvseparator' => ','
);
