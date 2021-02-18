<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'image_1' => array(
        'caption' => 'Наши клиенты',
        'type' => 'image'
		
    ),
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
	'image_2' => array(
        'caption' => '',
        'type' => 'image'
		
    ),
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
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
