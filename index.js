document.addEventListener('DOMContentLoaded',() =>{

    //attaching eventlisteners to the unread-indicators
    //to remove each unread-count or indicator
    const notifyCount = document.getElementById('notify-counts')
    const unreadCounts = document.querySelectorAll('.unread-counts')
    unreadCounts.forEach(unreadCount => {
        unreadCount.classList.add('cursor-pointer');
        
        unreadCount.addEventListener('click', (event) => {
            const currentTarget = event.currentTarget;
            currentTarget.remove();
            const chatBg = document.querySelector('.chat')
            chatBg.style.backgroundColor = '';
        });
    })



    const updateNotifyCount =()=>{
        const unreadCounts = document.querySelectorAll('.unread-counts')
        const unreadArray = Array.from(unreadCounts)
        notifyCount.textContent = unreadArray.length || 0;
    }
    updateNotifyCount();
    
    const markTick = document.getElementById('mark')
    markTick.addEventListener('click', () => {
        const unreadCounts = document.querySelectorAll('.unread-counts')
        const chatCounts = document.querySelectorAll('.chat')
        chatCounts.forEach((chat)=>{
            chat.style.backgroundColor = 'white';
        })
        unreadCounts.forEach((element) => {
            element.remove();
        });
        updateNotifyCount();
    });
      
})