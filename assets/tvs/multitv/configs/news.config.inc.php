<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
	'news_title' => array(
        'caption' => 'Заголовок',
        'type' => 'text',
		'width'=> '100%'
	),
	'date' => array(
        'caption' => 'Дата публикации',
        'type' => 'text',
		'width'=> '100%'
    ),
	'news_text' => array(
        'caption' => 'Текст',
        'type' => 'richtext',
		'width'=> '100%'
    
    ));
$settings['templates'] = array(
    'outerTpl' => '<ul>[+wrapper+]</ul>',
    'rowTpl' => '<li>[+text+], [+image+], [+thumb+], [+textarea+], [+date+], [+dropdown+], [+listbox+], [+listbox-multiple+], [+checkbox+], [+option+]</li>'
);
$settings['configuration'] = array(
    'enablePaste' => false,
    'enableClear' => false,
    'csvseparator' => ','
);
