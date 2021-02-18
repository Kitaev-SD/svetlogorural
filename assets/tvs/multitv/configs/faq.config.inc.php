<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
	'question' => array(
        'caption' => 'Вопрос',
        'type' => 'text',
		'width'=> '100%'
    ),
	'answer' => array(
        'caption' => 'Ответ',
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




$settings['templates'] = array(
	'outerTpl' => '[+wrapper+]',
	'rowTpl' => '
	<div class="faq_card">
	     <div class="card-header faq_header" role="tab" id="heading[+row.number+]">
		      <a  class="faq_link" data-toggle="collapse" data-parent="#accordionEx" href="#collapse[+row.number+]" aria-expanded="true" aria-controls="collapse[+row.number+]">
			  [+question+]
			  </a>
         </div>
		 <div id="collapse[+row.number+]" class="collapse" role="tabpanel" aria-labelledby="heading[+row.number+]" data-parent="#accordionEx">
             <div class="card-body">[+answer+]</div>
		</div>
	</div>
	
	'
);
