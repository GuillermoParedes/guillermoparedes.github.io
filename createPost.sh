#! /bin/bash
#Le pasamos dos parametros e imprime el que esta en la posicion 1 y 2
echo "Creando un Post con el nombre: " $1;

mkdir ./src/pages/$1

touch ./src/pages/$1/index.md

echo "Post creado... disfruta compartiendo."
