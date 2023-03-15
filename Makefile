SHELL := /bin/bash

default:
	[[ -d build ]] || mkdir build
	tar -cvf build/login.tar *.*

clean:
	rm build/login.tar
