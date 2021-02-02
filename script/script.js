const click = () => {
    const header = document.getElementById('header');
    const btn = document.getElementById('header_nav_btn');
    btn.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        header.appendChild(overlay);
        const block = document.createElement('div');
        block.setAttribute('id', 'overlay_block');
        overlay.appendChild(block);
        const form = document.getElementById('form');
        form.style.display = 'block';
        const back_btn = document.createElement('button');
        back_btn.textContent= 'X';
        back_btn.setAttribute('id','form_back_btn');
        form.appendChild(back_btn);
        block.appendChild(form);
        back_btn.addEventListener('click',()=>{
           overlay.style.display='none'
        });
        const form_btn1 =document.getElementById('form_btn');
        form_btn1.addEventListener('click',()=>{
            block.style.display ='none';
            const thank=document.createElement('div');
            thank.setAttribute('id','thank');
            overlay.appendChild(thank)
            const thankText = document.createElement('div')
            thankText.textContent="Thank you! We'll call you back later"
            thankText.setAttribute('id','thank_text');
            thank.appendChild(thankText)


        });
        document.addEventListener('click', (ev) => {
            if (ev.target === overlay) {
                overlay.style.display = 'none'
            }
        });
        window.addEventListener('keydown',(click)=>{
            if(click.key==='Escape'){
                overlay.style.display='none'
            }
        })
    });

};
click();