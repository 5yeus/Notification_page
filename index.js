document.addEventListener('DOMContentLoaded',() =>{

    const notifyCount = document.getElementById('notify-counts')
    // const notifyH3 = document.createElement('h3')
    // console.log(unreadCounts);
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