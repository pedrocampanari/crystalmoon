const menuBurger = document.getElementById('btn-burger');
const elementAsideMenu = document.getElementById('aside-menu');
menuBurger.addEventListener('click', () => {
    menuBurger.setAttribute("class", "image");
    elementAsideMenu.innerHTML = `
        <aside onmouseleave="closeMenu()" class="container-fluid">
            <div class="row">
                <div class="col-md-2 sidebar">
                    <ul class="nav flex-column">
                        <li onclick="closeMenu()" class="nav-item">
                            <a class="nav-link active aside-a-style" href="#top">>FECHAR MENU<</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="#top">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="budgets.html">Sobre nós</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link aside-a-style" href="html/sobre.html">Mais vendidos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="html/project.html">Colares</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="budgets.html">Brincos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link aside-a-style" href="html/contact.html">Anéis</a>
                        </li>
                        
                    </ul>
                </div>      
            </div>
        </aside>
        `
});

function closeMenu() {
    elementAsideMenu.innerHTML = "";
}