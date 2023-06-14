document.addEventListener('DOMContentLoaded',() =>{

    //attaching eventlisteners to the unread-indicators
    //to remove each unread-count or indicator
    const notifyCount = document.getElementById('notify-counts')
    const unreadCounts = document.querySelectorAll('.unread-counts')
    const unreadArray = Array.from(unreadCounts)
    const chatCounts = document.querySelectorAll('.chat')

    unreadCounts.forEach(unreadCount => {
        unreadCount.classList.add('cursor-pointer');
        
        unreadCount.addEventListener('click', (event) => {
            const currentTarget = event.currentTarget;
            const chatBg = currentTarget.closest('.chat')
            chatBg.style.backgroundColor = '#fff';
            currentTarget.remove();

            //update the NotifyCountValue or the UnreadArray
            const targetIndex = unreadArray.indexOf(currentTarget)
            if(targetIndex > -1) {
                unreadArray.splice(targetIndex, 1);
                updateNotifyCount();
            }
        });

        
    })



    const updateNotifyCount =()=>{
        notifyCount.textContent = unreadArray.length || 0;
    }

    updateNotifyCount();
    
    const markTick = document.getElementById('mark')
    markTick.addEventListener('click', () => {
        const unreadCounts = document.querySelectorAll('.unread-counts')
        chatCounts.forEach((chat)=>{
            chat.style.backgroundColor = 'white';
        })
        unreadCounts.forEach((element) => {
            element.remove();
        });

        unreadArray.length = 0;
        updateNotifyCount();
    });
      
})