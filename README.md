# Simple_form

JavaScript Скрипт, содержащий готовые функции и методы для простой и удобной работы с формами, так же поддерживает полную настройку под конкретного пользователя.


<b>Документация:</b>

1. Описание функций:
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
