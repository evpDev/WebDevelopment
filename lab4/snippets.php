<?php

function printArticle($title, $body) {
	echo '
            <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="images/500x300.png" alt="">
                    <div class="caption">
                        <h4>'.$title.'</h4>
                        <p>'.$body.'</p>
                        <a href="#" class="btn btn-info btn-md" role="button">Подробнее</a>
                    </div>
                </div>
            </div>';
}

function printDeviderForPair() {
	echo '
            <div class="col-sm-2"></div>
        </div>
        <div class="row">
            <div class="col-sm-2"></div>';
}

function printStartArticles() {
	echo '
        <div class="row">
            <div class="col-sm-2"></div>';
}

function printEndArticles() {
	echo '
            <div class="col-sm-2"></div>
        </div>';
}

?>