# Simple_form

JavaScript Скрипт, содержащий готовые функции и методы для простой и удобной работы с формами, так же поддерживает полную настройку под конкретного пользователя.


<b>Документация:</b>

<h2>1. Описание функций:</h2>
  <ul>
    <li>1) Simple_Form - основная функция. Данная функция читает опередлённую форму и устанавливает нужные флаги, права и прочее для каждой строчки. В данную функцию обязательно должен быть передан id формы с которой нужно произвести действия. <b>Внимание!</b> Для нескольких форм нужно вызвать данную функцию несколько раз.</li>    
    <li>2) Phone_UnFocus - функция отвечающая за проверку строчек, предназначенных для ввода мобильного телефона. Данная функция присваивается нужным строчкам автоматически и принимает параметры: id формы, само поле для ввода</li>    
    <li>3) Simple_Send - функция отвечающая за отправку данных полученных с формы, в этой функции происходит полная проверка всех полей по всем параметрамм и если всё правильно, то происходит отправка данных. Данная функция присваивается автоматически для кнопки, которая помечена, как кнопка отправки формы. Принимает значения: id формы, тип уведомлений</li>    
    <li>4) Simple_Notice - функция отвечающая за вывод уведомлений об ошибках. Принимает значения: id формы, тип уведомлений, текст предупреждения</li>    
    <li>5) Simple_Loader - функция отвечающая за вывод анимации загрузки, если такая нужна. Принимает значения: id формы, действие, которое нужно сделать (показать/скрыть) с анимацией</li>    
    <li>6) Simple_Timer - функция отвечающая за вывод таймер, если таковой нужен. Принимает значения: id формы</li>    
    <li>7) Simple_Check_Timer - функция-таймер, ведущая отсчёт времени раз в секунду</li>    
    <li>8) Simple_Check_Timer_Small - уменьшенная версия функции-таймера, ведущая отсчёт без секунд</li>
  </ul>
<h2>2. Описание атрибутов input полей:</h2>
  <ul>
    <li>mask - атрибут назначающий какую "маску" нужно надеть на данное поле. Допустимые значения: <br>date - дата, <br>number - цифровое поле, <br>phone - телефонный номер</li>
    <li>phone-type - атрибут, который определяет стиль ввода телефона. Допустимые значения: <br> dash - вывод в формате "8 (xxx) xxx - xx - xx"<br> no_dash - вывод в формате "8 xxx xxx  xx  xx"</li>
    <li>expression - атрибут отвечающий за сообщение, которое получит пользователь, если не заполнит данное поле и попытается отправить форму. <b>Внимание!</b> Работает только, если поле имеет права на проверку, в остальных случаях этот атрибут игнорируется</li>
    <li>permission - атрибут отвечающий за права данного поля на проверку. Доступные значения: <br> full - полная проверка поля на заполненность с выводом сообщения об ошибке, установкой фокуса в поле и сменой цвета текста, обводки и фона поля, если поле осталось пустым  <br> first_step - полная проверка поля на заполненность, но в случае если это поле осталось пустым в отличии от "full" просто сменит цвет текста, обводки, фона поля и поставит в него фокус без вывода предупреждения <br> second_step - полная проверка поля на заполненность с выводом сообщения об ошибке, но без изменения каким либо образом поля, если оно осталось пустым <br> autocomplite - данное поле будет заполненно автоматически перед отправкой формы. </li>
    <li>complite - атрибут отвечающий за то, чем именно будет заполенено поле имеющее права "autocomplite". (Имеет значения: date - дата в формате: ДД.ММ.ГГГГ time - текущее время) В случаии если этот параметр не найден или же указано пустое значение, то в значение подставится то, что пользователь укажет в массиве настроек.</li>
  </ul>
<h2>3. Описание полей массива "person_settings":</h2>
  <ul>
    <li>user_pop_up</li>
    <li>user_pop_up_text</li>
    <li>user_pop_up_close_btn</li>
    <li>user_pop_up_open_with</li>
    <li>autocomplite</li>
    <li>warning_block</li>
    <li>warning_block_text</li>
    <li>border_type</li>
    <li>border_color</li>
    <li>border_size</li>
    <li>text_color</li>
    <li>background_color</li>
    <li>send_btn</li>
    <li>notice_type</li>
    <li>show_time</li>
    <h3>124214</h3>
    <li>neew_window</li>
    <li>after_send</li>
    <li>window_place</li>
    <li>success_window</li>
    <li>error_window</li>
    <li>send_type</li>
    <li>send_method</li>
    <li>send_file</li>
    <li>send_names</li>
    
    <li>loading_show</li>
    <li>loadin_type</li>
    <li>loading_img</li>
    <li>loading_id</li>
    <li>loading_class</li>
    <li>loading_other</li>
    <li>loading_block</li>
    <li>loading_time</li>
    <li>loading_after</li>
    
    <li>form_timer</li>
    <li>timer_block</li>
    <li>timer_type</li>
    <li>timmer_time</li>
  </ul>
