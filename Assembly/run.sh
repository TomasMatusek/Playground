#!/bin/sh

if [ "$1" != "" ]; then
    echo "Positional parameter 1 contains $1"
else
    echo "Positional parameter 1 is empty"
fi

nasm -f macho64 "$1".asm && ld -macosx_version_min 10.7.0 -lSystem -o "$1" "$1".o
