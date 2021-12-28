global start

section .text

start:
	mov rax, 0x2000004	; output of program
	mov rbx, 0x2000004	; result status of program
	int 0x80
