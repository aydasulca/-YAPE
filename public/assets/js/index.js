'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
	wrapper.append(Header());
	root.append(wrapper);

  const update = (function(){
    render(root);
  })

  	if (state.screen == "welcome") {
    	wrapper.append(toRegister(update));
  	} else if (state.screen == "Screen-2"){
    	wrapper.append(registerNumber(update));
  	}else if (state.screen == "Screen-3"){
			wrapper.append(resenCode(update));
  	}else if (state.screen == "Screen-4"){
			wrapper.append(createUser(update));
  	}else if (state.screen == "Screen-5"){
			wrapper.append(usarYape(update));
  	}else if (state.screen == "Screen-6"){
			wrapper.append(registerCard(update));
  	}else if (state.screen == "Screen-7"){
			wrapper.append(Key(update));
  	}else if (state.screen == "Screen-8"){
			wrapper.append(Hello(update));
  	}

}

const state = {
 screen:"welcome",
 phone: null,
 name: null,
 email: null,
 password: null,
 cardNumber: null,
 cardMonth: null,
 cardYear: null,
 cardPassword: null
}

$( _ => {
	const root = $(".root");
	render(root);

})
