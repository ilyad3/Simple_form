var person_settings = {
	/*
		ФОРМА
	*/
  user_pop_up: "#warning_alert", // всплывающее окно пользователя
  user_pop_up_text: "#warning_alert > p", // место для вставки текста в этом окне
  user_pop_up_close_btn: "#close_btn", // кнопка для закрытия окна
  user_pop_up_open_with: "", // Появление чего-либо (например чёрного фона) вместе с pop-up окном (можно указать несколько элементов через запятую)
  autocomplite: "123456789", // строчка отвечающая за автозаполнение пустого поля
  warning_block: "", // идентификатор(id или class) блока предупреждения
  warning_block_text: "", // место для вставки текста в этом блоке
  border_type: "solid", // тип обводки пустого поля
  border_color: "red", // цвет обводки
  border_size: "1px", // размер обводки
  text_color: "#a94442", //цвет текста
  background_color: "#f2dede", // цвет фона
  send_btn: "#send_btn", // кнопка по которой производится отправка формы
  notice_type: "warning", // тип уведомлений 
  show_time: "", // время через которое форма откроется сама (если форма находится в выпадающем окне) 
  	/*
  		ОБЩЕНИЕ С СЕРВЕРОМ
  	*/
  neew_window: "Y", // Нужно ли показывать окно с ответом от сервера пользователю (Допустимые значения: "Y","N")
  after_send: "", // Действия с форомй после отправки данных (Допустимые значения: "clear", "hide") (Это поле не принимается во внимание если значение "neew_window" равно "Y")
  window_place: "%form_swap%", //блок (обязательно id) для отображения ответа сервера на запрос, для замены всей формы на ответ укажите параметр "%form_swap%"
  success_window: "<div id=test>Спасибо за отправку!</div>", // окно появляющееся при положительном ответе сервера
  error_window: "<div id=test>Что-то не так!</div>", // окно при отрицательном ответе
  send_type: "ajax", // тип отправки данных (синхронный или асинхронный)
  send_method: "POST", // метод отправки данных на сервер (GET или POST)
  send_file: "index.php", // скрипт на который нужно отправить данные (указать полный путь до скрипта!)
  send_names: "", //Список имён в правильном порядке (через запятую), которые будут присваиваться полям для отправки синхронным методом (если не указаны, то имя = id)
  	/*
  		АНИМАЦИЯ ЗАГРУЗКИ
  	*/
  loading_show: "Y", // нужно ли показывать изображение загрузчика
  loadin_type: "built", //тип загрузчика (пользовательский или встроенный)
  loading_img: "second", // изображение загрузчика если тип - встроенные, то указан номер изображение, иначе указан путь до файла с изображением
  loading_id: "", // указывает id для изображения загрузчика
  loading_class: "img-responsive", // указывает class для изображения загрузчика
  loading_other: "", // указывает остальные HTML тэги для изображения загрузчика
  loading_block: "%simple_swap%", // место для отображения загрузки (Укзать обязательно именно id эллемента), для замены кнопки на значок загрузки указать значение "%simple_swap%"
  loading_time: "send", // после какого события показывается окно загрузки (Доступные значения: "send", "check", "loading")
  loading_after: "", // появление чего-либо на месте изображения после загрузки (если значение "loading_block" равно "%simple_swap%", то значение этого поля во внимание не принимается)
  	/*
		ТАЙМЕРЫ
  	*/
  form_timer: "Y", // нужен ли таймер (Значение "Y" или "N")
  timer_block: "#test", //блок для отображения таймера (Обязательно id!)
  timer_type: "simple", // тип таймера (Допустимые значения: "simple", "small")
  real_time: "N", // Вести "реальный" отчёт времени до даты или нет (Значение "Y" или "N")
  time_to: "", // Если в "real_time" указано значение "Y"(иначе это поле игнорируется), то в этом поле должна быть дата (в формате ДД.ММ.ГГГГ) до которой вести отчёт
  timmer_time: "24", // Количество времени на таймере(в часах), которое увидит пользователь. Поле игнорируется, если поле "real_time" имеет значение "Y"
  	/*
		ОКРУЖЕНИЕ ФОРМЫ
  	*/
  form_encirclement: "Y", // Нужно ли окружение окружение
  form_title: "", // Заголовок формы
  form_title_box: "",// Блок в котором отображать Заголовок формы (Например .block_title)
  form_title2: "", // Подзаголовок формы
  form_title2_box: "", // Блок в котором отображать подзаголовок формы (Например .block)
  btn_text: "", // текст на кнопке внутри формы (Если поле пустое, то ничего не будет подставляться)
};

function Simple_Form(form) {
	if (person_settings['loading_show'] == "Y" && person_settings['loading_time'] == "loading") {
		Simple_Loader(form,"show");
	}
	var count_inputs = $(form+" input").length;
	for (var for_count = 0; for_count < count_inputs; for_count++) {
		var check_input = $(form+" input:eq("+for_count+")");
		var mask_attr = check_input.attr("mask");
		switch (mask_attr) {
			case 'date':
				check_input.attr("type","date");
				break;
			case 'number':
				check_input.attr("type","number");
				break;
			case 'phone':
				check_input.attr({
					"onblur":"Phone_UnFocus('"+form+" input:eq("+for_count+")','"+form+"');",
				});
				$("body").after("<script>$('"+form+" input:eq("+for_count+")').keypress(function(e) {if (e.keyCode < 48 || e.keyCode > 57) {return false;}});</script>");
				break;
			case 'mail':
				check_input.attr("type","email");
				break;
		}
	};
	$(person_settings['send_btn']).attr({
		"onclick": "Simple_Send('"+form+"','"+person_settings['notice_type']+"');",
		"type": "button"
	});
	if (person_settings['loading_show'] == "Y" && person_settings['loading_time'] == "loading") {
		Simple_Loader(form,"hide");
	}
	if (person_settings['form_timer'] == "Y") {
		Simple_Timer(form);
	}
	if (person_settings['neew_window'] == "Y") {
		if (person_settings['window_place'] == "%form_swap%") {
			if (window.location.hash == "#simple_form_good_answer") {
				$(form).replaceWith(person_settings['success_window']);
			}else if (window.location.hash == "#simple_form_bad_answer") {
				$(form).replaceWith(person_settings['error_window']);
			}
		}else{
			if (window.location.hash == "#simple_form_good_answer") {
				$(form).html(person_settings['success_window']);
			}else if (window.location.hash == "#simple_form_bad_answer") {
				$(form).html(person_settings['error_window']);
			}
		}
	}
	if (person_settings['show_time'] != "") {
		setTimeout(function() { $(form).show(); }, person_settings['show_time']);
	}
	if (person_settings['form_encirclement'] == "Y") {
		$(person_settings['form_title_box']).html(person_settings['form_title']);
		$(person_settings['form_title2_box']).html(person_settings['form_title2']);
		if (person_settings['btn_text'] != "") {
			$(person_settings['send_btn']).text(person_settings['btn_text']);
		}
	}
}

function Phone_UnFocus(input,form) {
	var phone_input = $(input);
	var input_text = phone_input.val();
	if (input_text.length == 11) {
		var country_code_phone = input_text.substr("0","1");
		var city_code_phone = input_text.substr("1","3");
		var op_code_phone = input_text.substr("4","3");
		var before_code_phone = input_text.substr("7","2");
		var after_code_phone = input_text.substr("9","11");
		if (phone_input.attr("phone-type") == "dash") {
			var phone = country_code_phone+" ("+city_code_phone+") "+op_code_phone+"-"+before_code_phone+"-"+after_code_phone;
		}else{
			var phone = country_code_phone+" "+city_code_phone+" "+op_code_phone+" "+before_code_phone+" "+after_code_phone;
		}
		phone_input.val(phone);
	}else{
		phone_input.css({"background":person_settings['background_color'],"border":""+person_settings['border_size']+" "+person_settings['border_type']+" "+person_settings['border_color']+"","color":person_settings['text_color']}).focus();
		expression = phone_input.attr("expression");
		Simple_Notice(person_settings['notice_type'],expression,form);
	}
}

function Simple_Send(form,notice) {
	if (person_settings['loading_show'] == "Y" && person_settings['loading_time'] == "send") {
		Simple_Loader(form,"show");
	}
	var count_inputs = $(form+" input").length;
	send_names_array = "";
	if (person_settings['send_names'] != "") {
		send_names_array = person_settings['send_names'].split(",");
	}
	for (var for_count = 0; for_count < count_inputs; for_count++) {
		var check_input = $(form+" input:eq("+for_count+")");
		check_input.attr("name", send_names_array[for_count]);
		var perm_attr = check_input.attr("permission");
		if (check_input.val() == "") {
			switch (perm_attr) {
				case 'full':
					check_input.css({"background":person_settings['background_color'],"border":""+person_settings['border_size']+" "+person_settings['border_type']+" "+person_settings['border_color']+"","color":person_settings['text_color']}).focus();
					Simple_Notice(notice,check_input.attr('expression'),form);
					return false;
					break;
				case 'first_step':
					check_input.css({"background":person_settings['background_color'],"border":""+person_settings['border_size']+" "+person_settings['border_type']+" "+person_settings['border_color']+"","color":person_settings['text_color']}).focus();
					Simple_Loader(form,"hide");
					return false;
					break;
				case 'second_step':
					Simple_Notice(notice,check_input.attr('expression'),form);
					return false;
					break;
				case 'autocomplite':
					var autocomplite = check_input.attr('complite');
					switch (autocomplite) {
						case "date":
							Data = new Date();
							Year = Data.getFullYear();
							Month = Data.getMonth();
							Day = Data.getDate();
							switch (Month) {
								  case 0: fMonth="января"; break;
								  case 1: fMonth="февраля"; break;
								  case 2: fMonth="марта"; break;
								  case 3: fMonth="апреля"; break;
								  case 4: fMonth="мае"; break;
								  case 5: fMonth="июня"; break;
								  case 6: fMonth="июля"; break;
								  case 7: fMonth="августа"; break;
								  case 8: fMonth="сентября"; break;
								  case 9: fMonth="октября"; break;
								  case 10: fMonth="ноября"; break;
								  case 11: fMonth="декабря"; break;
							}
							autocomplite = Day+"."+fMonth+"."+Year;
							break;
						case "time":
							Data = new Date();
							Hour = Data.getHours();
							Minutes = Data.getMinutes();
							autocomplite = hour+":"+Minutes;
							break;
						case "":
							autocomplite = person_settings["autocomplite"];
							break;
					}
					check_input.val(autocomplite);
					break;
			}
		}
		var pre_simple_send_array = pre_simple_send_array+","+check_input.val();
	}
	if (person_settings['send_type'] == "submit") {
		if ($(form+" input:eq(0)").attr("name") == undefined) {
			for (var for_count = 0; for_count < count_inputs; for_count++) {
				var check_input = $(form+" input:eq("+for_count+")");
				var new_name = check_input.attr("id");
				check_input.attr("name",new_name);
			};
		}
		$(form).attr({
			"action": person_settings['send_file'],
			"method": person_settings['send_method']
		}).submit();
	}else if (person_settings['send_type'] == "ajax") {
		var simple_send_array = pre_simple_send_array.split(",");
		$.ajax({
		   type: person_settings['send_method'],
		   data: {simple_send_array:simple_send_array},
		   url: person_settings['send_file'],
		   success: function(msg){
		     var simple_answer = "success";
		   },
		   error: function(){
		    var simple_answer = "error";
		   }
		});
		if (person_settings['neew_window'] == "Y") {
			if (person_settings['window_place'] == "%form_swap%") {
				if (simple_answer == "success") {
					$(form).replaceWith(person_settings['success_window']);
				}else if (simple_answer == "error") {
					$(form).replaceWith(person_settings['error_window']);
				}
			}else{
				if (simple_answer == "success") {
					$(form).html(person_settings['success_window']);
				}else if (simple_answer == "error") {
					$(form).html(person_settings['error_window']);
				}
			}
		}
	}
	if (person_settings['neew_window'] == "N") {
		if (person_settings['after_send'] == "clear") {
			$(form+" input").val("");
		}else if (person_settings['after_send'] == "hide") {
			$(form).hide();
		}
	}
}

function Simple_Notice(notice_type,expression,form) {
	if (person_settings['loading_show'] == "Y" && person_settings['loading_time'] == "check") {
		Simple_Loader(form,"show");
	}
	switch (notice_type) {
		case 'alert':
			alert(expression);
			break;
		case 'pop-up':
			$("#pop_up").show();
			$("#pop_up > p").text(expression);
			break;
		case 'user_pop-up':
			var active_block = person_settings["user_pop_up"];
			if (person_settings["user_pop_up_open_with"] != "") {
				var active_block = active_block+" , "+person_settings["user_pop_up_open_with"];
			}
			$(active_block).show();
			$(person_settings["user_pop_up_text"]).text(expression);
			$(person_settings["user_pop_up_close_btn"]).attr("onclick",'$("'+active_block+'").hide();');
			break;
		case 'warning':
			$("#warning_alert").show();
			$("#warning_alert > p").text(expression);
			break;
		case 'user_warning':
			$(person_settings['warning_block']).show().attr("onclick",'$("'+person_settings['warning_block']+'").hide();');
			$(person_settings['warning_block_text']).text(expression);
			break;
	}
	Simple_Loader(form,"hide");
}

function Simple_Loader(form,do_event) {
	if (person_settings['loadin_type'] == "built") {
		loading_img = "loaders_img/"+person_settings['loading_img']+".gif";
		loading_class = "class='img-responsive'";
		loading_id = "id='load_status'";
		loading_other = "";
		load_for_hide = "#load_status";
	}else{
		loading_img = person_settings['loading_img'];
		if (person_settings['loading_class'] != "") {
			loading_class = "class='"+person_settings['loading_class']+"'";
		}
		if (person_settings['loading_id'] != "") {
			loading_id = "id='"+person_settings['loading_id']+"'";
		}
		loading_other = person_settings['loading_other'];
	}
	if (do_event == "show") {
		if (person_settings['loading_block'] == "%simple_swap%") {
			$(person_settings['send_btn']).clone().appendTo(form).hide();
			$(person_settings['send_btn']).replaceWith("<img "+loading_id+" "+loading_class+" "+loading_other+" src='"+loading_img+"'>");
		}else{
			$(person_settings['loading_block']).html("<img "+loading_id+" "+loading_class+" "+loading_other+" src='"+loading_img+"'>");
		}
	}else if (do_event == "hide") {
		if (person_settings['loading_block'] == "%simple_swap%") {
			$(person_settings['send_btn']).clone().appendTo(load_for_hide);
			$(load_for_hide).remove();
			$(person_settings['send_btn']).show();
		}else{
			if (person_settings['loading_after'] != "") {
				$(person_settings['loading_block']).html(person_settings['loading_after']);
			}else{
				$(person_settings['loading_block']).hide();
			}
		}
	}
}

function Simple_Timer(form) {
	if (person_settings['real_time'] == "N") {
		if (person_settings['timmer_time'] != "") {
			if (person_settings['timer_type'] == "simple") {
				var timer_time = person_settings['timmer_time'] - 1;
				$(person_settings['timer_block']).html("<font id='hour'>"+timer_time+"</font>:<font id='minute'>59</font>:<font id='second'>59</font>");
				setInterval(Simple_Check_Timer, 800)
			}else if (person_settings['timer_type'] == "small") {
				var timer_time = person_settings['timmer_time'] - 1;
				$(person_settings['timer_block']).html("<font id='hour'>"+timer_time+"</font><font id='small_second'>:</font><font id='minute'>59</font>");
				setInterval(Simple_Check_Timer_Small, 59800)
				setInterval(Simple_Check_Timer, 800)	
			}
		}
	}
}

function Simple_Check_Timer() {
	if (person_settings['timer_type'] == "small") {
		if ($("#small_second").text() == ":") {
			$("#small_second").text(" ");
		}else{
			$("#small_second").text(":");
		}
	}else if (person_settings['timer_type'] == "simple") {
		var hour = $(person_settings['timer_block']+ " font:eq(0)").text();
		var minute = $(person_settings['timer_block']+ " font:eq(1)").text();
		var second = $(person_settings['timer_block']+ " font:eq(2)").text();
		if (second == "00") {
			if (minute == "00") {
				if (hour == "00") {
					
				}else{
					if (hour < 11) {
						hour--;
						hour = "0"+hour;
					}else{
						hour--;
					}
					$(person_settings['timer_block']+ " font:eq(0)").text(hour)
					$(person_settings['timer_block']+ " font:eq(1)").text("59");
					$(person_settings['timer_block']+ " font:eq(2)").text("59");
				}
			}else{
				if (minute < 11) {
					minute--;
					minute = "0"+minute;
				}else{
					minute--;
				}
				$(person_settings['timer_block']+ " font:eq(1)").text(minute);
				$(person_settings['timer_block']+ " font:eq(2)").text("59");
			}
		}else{
			if (second < 11) {
				second--;
				second = "0"+second;
			}else{
				second--;
			}
			$(person_settings['timer_block']+ " font:eq(2)").text(second);
		}
	}
}

function Simple_Check_Timer_Small() {
	var hour = $(person_settings['timer_block']+ " font:eq(0)").text();
	var minute = $(person_settings['timer_block']+ " font:eq(2)").text();
	if (minute == "00") {
		if (hour == "00") {
			
		}else{
			if (hour < 11) {
				hour--;
				hour = "0"+hour;
			}else{
				hour--;
			}
			$(person_settings['timer_block']+ " font:eq(0)").text(hour)
			$(person_settings['timer_block']+ " font:eq(2)").text("59");
		}
	}else{
		if (minute < 11) {
			minute--;
			minute = "0"+minute;
		}else{
			minute--;
		}
		$(person_settings['timer_block']+ " font:eq(2)").text(minute);
	}
}