function toast({ title = '', type = '', message = '', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-info',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-bomb'
        }
        const icon=icons[type];

        toast.innerHTML=`
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `

        main.appendChild(toast);

        const autoDel=setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick= function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoDel);
            }
        }
    }
}

function Success(){
    toast({
        title: 'Success',
        type: 'success',
        message:'you have success',
        duration: 1000,
    })
}

function Warning(){
    toast({
        title: 'Warning',
        type: 'warning',
        message: 'do not touch that',
        duration: 1000,
    })
}
