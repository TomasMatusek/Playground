section .data
hello_world     db      "Hello World!", 0x0a

section .text
global start

start:
mov rax, 4              ; System call write = 4
mov rbx, 1              ; Write to standard out = 1
mov rcx, hello_world    ; The address of hello_world string
mov rdx, 14             ; The size to write
syscall                 ; Invoke the kernel
mov rax, 1              ; System call number for exit = 1
mov rbx, 0              ; Exit success = 0
syscall                 ; Invoke the kernel
