#!/bin/bash

mkfifo /tmp/myservice-log-fifo
( nc -U /tmp/echo.sock </tmp/myservice-log-fifo & )
exec >/tmp/myservice-log-fifo
rm /tmp/myservice-log-fifo
exec ./daemon.py 2>/dev/null