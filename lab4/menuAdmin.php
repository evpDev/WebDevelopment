          <nav role="navigation" class="navbar navbar-default">
              <!-- Логотип и мобильное меню -->
                <div class="navbar-header">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                    <a class="navbar-brand">lab4news</a>
                </div>
              <!-- Навигационное меню -->
                <div id="navbarCollapse" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                    <li><a href="/">Главная</a></li>
                    <li <? if ($page == "createArticle") echo 'class="active"' ?>><a href="/createArticle.php">Создать статью</a></li>
                    <li <? if ($page == "admin") echo 'class="active"' ?>><a href="/admin.php">Редактировать статьи</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Войти</a></li>
                </ul>
                </div>
            </nav>