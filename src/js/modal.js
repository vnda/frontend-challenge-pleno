function mapsModal() {
    let btn = document.querySelectorAll('.store-locator .store .btn');
    let modal = document.querySelector('.modal-maps');
    let iframe = modal.querySelector('iframe');
    let close = modal.querySelector('.close');
  
    btn.forEach(function(item){
      item.addEventListener('click', function(){
        let mapId = this.dataset.map;
        let baseUrl = iframe.getAttribute('src').split('&q=')[0];
        let newUrl = `${baseUrl}&q=${mapId}`;
        iframe.setAttribute('src', newUrl);
        iframe.addEventListener('load', function(){
          modal.classList.add('opened');
        });
      });
      
      close.addEventListener('click', function(){
        modal.classList.remove('opened');
      });
    });
  }