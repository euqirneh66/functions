#!/bin/bash

echo "Digite o nome do modulo: \n";

read nome_modulo;

mkdir -pv $nome_modulo/{src/$nome_modulo/{Controller,Form,Model/{Gateway,Tables}},config/view/{layout,error,$nome_modulo/index}};

touch $nome_modulo/config/module.config.php;
touch $nome_modulo/src/$nome_modulo/Controller/IndexController.php;
touch $nome_modulo/view/$nome_modulo/index/index.phtml;
touch $nome_modulo/view/layout/layout.phtml;

echo "<?php return array();?>" > $nome_modulo/config/module.config.php;
echo "<?php \
        /** \
        * IndexController gerado automaticamente para o modulo $nome_modulo \
        * \
        */ \
        namespace $nome_modulo\\Controller;\
        class IndexController extends AbstractController {\
              public indexAction(){\
              }\
        }\
" > $nome_modulo/src/$nome_modulo/Controller/IndexController.php;

echo "<h2>Index</h2>" > $nome_modulo/view/$nome_modulo/index/index.phtml;
echo "<h1>Layout</h1>" > $nome_modulo/view/layout/layout.phtml;

echo "\
------------------------------------------\

Modulo criado meu jovem! Boa sorte :)

------------------------------------------";
