var button = document.getElementsByTagName('button')[0],
   usersButtons = document.getElementsByClassName('users_buttons')[0],
   userInfo = document.getElementsByClassName('user_info')[0];

var userButton = document.createElement('div'),
   image = document.createElement('div'),
   blockNames = document.createElement('div'),
   error = document.createElement('div');

error.classList.add('error');
document.getElementsByClassName('page_content')[0].appendChild(error);

button.addEventListener('click', function () {
   if (localStorage.getItem('Users list') === null) {
      var xhr = new XMLHttpRequest();

      xhr.open('GET', 'https://reqres.in/api/users?page=2');

      xhr.send();

      xhr.onload = function () {
         var statusType = Math.round(this.status / 100);

         if (statusType === 2) {
            var usersList = JSON.parse(this.response).data;

            localStorage.setItem('Users list', JSON.stringify(usersList));
            usersButtons.innerHTML = '';

            for (var i = 0; i < usersList.length; i++) {
               userButton.innerHTML = 'User ' + (i + 1);
               userButton.setAttribute('id', i + 1);
               userButton.classList.add('user_button');
               var clonedUserButton = userButton.cloneNode(true);
               usersButtons.appendChild(clonedUserButton);
            };

            var activeButton = document.getElementById('1');

            userInfo.classList.add('active');
            activeButton.classList.add('active_button');

            image.innerHTML = '<img src="' + usersList[0].avatar + '"></img>';
            blockNames.innerHTML = '<p>First Name: ' + usersList[0].first_name + '.</p><p>Last Name: ' + usersList[0].last_name + '.</p>';

            userInfo.appendChild(image);
            userInfo.appendChild(blockNames);
         } else {
            if (this.status === 400) {
               error.innerHTML = '<p>В вашем запросе обнаружена синтаксическая ошибка!</p>';
            } else if (this.status === 403) {
               error.innerHTML = '<p>Ограничение или отсутствие доступа к материалу на странице, которую вы пытаетесь загрузить!</p>';
            } else if (this.status === 404) {
               error.innerHTML = '<p>Сервер не может найти данные согласно запросу!</p>';
            } else if (this.status === 500) {
               error.innerHTML = '<p>Сервер не может обработать ваш запрос!</p>';
            }

            error.classList.add('error_active');

            setTimeout(function () {
               error.classList.remove('error_active');
            }, 6000);
         };
      };

      xhr.onerror = function () {
         error.innerHTML = '<p>Возможно, что-то пошло не так во время загрузки вашего сайта или вы ошиблись при вводе URL-адреса!</p>';
         error.classList.add('error_active');

         setTimeout(function () {
            error.classList.remove('error_active');
         }, 6000);
      };

      xhr.onloadend = function () {
         console.log('Запрос завершен');
      };
   } else {
      usersButtons.innerHTML = '';

      for (var i = 0; i < JSON.parse(localStorage.getItem('Users list')).length; i++) {
         userButton.innerHTML = 'User ' + (i + 1);
         userButton.setAttribute('id', i + 1);
         userButton.classList.add('user_button');
         var clonedUserButton = userButton.cloneNode(true);
         usersButtons.appendChild(clonedUserButton);
      };

      var activeButton = document.getElementById('1');

      activeButton.classList.add('active_button');
      userInfo.classList.add('active');

      image.innerHTML = '<img src="' + JSON.parse(localStorage.getItem('Users list'))[0].avatar + '"></img>';
      blockNames.innerHTML = '<p>First Name: ' + JSON.parse(localStorage.getItem('Users list'))[0].first_name + '.</p><p>Last Name: ' + JSON.parse(localStorage.getItem('Users list'))[0].last_name + '.</p>';
      userInfo.appendChild(image);
      userInfo.appendChild(blockNames);
   };
});

var userButtons = document.getElementsByClassName('user_button');

usersButtons.addEventListener('click', function () {
   var target = event.target;

   for (var i = 0; i < userButtons.length; i++) {
      if (target === userButtons[i]) {
         var activeButton = document.getElementsByClassName('active_button')[0];
         activeButton.classList.remove('active_button');
         target.classList.add('active_button');

         image.innerHTML = '<img src="' + JSON.parse(localStorage.getItem('Users list'))[i].avatar + '"></img>';
         blockNames.innerHTML = '<p>First Name: ' + JSON.parse(localStorage.getItem('Users list'))[i].first_name + '.</p><p>Last Name: ' + JSON.parse(localStorage.getItem('Users list'))[i].last_name + '.</p>';
      };
   };
});