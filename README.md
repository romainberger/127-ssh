# 127 SSH

Capture your command not found errors and tries to ssh.

## Installation

To use 127-ssh you need to use zsh and node.

Start by installing the package with npm:

    npm install -g 127-ssh

Then in your `~/.zshrc` add this:

    command_not_found_handler () {
        if type "127-ssh" > /dev/null; then
            127-ssh $1
        fi
        return 127
    }

For 127-ssh to work, you need to use an ssh config file kept in `~/.ssh/config` and use it to store your ssh hosts.

## Usage

Whenever you type something in your prompt that exit as a command not found, the script will work. It tries to find an ssh configuration with a `Host` corresponding to the command you typed.

Let's say you want to ssh into your `coolserver` but you forgot to type `ssh` you'll get:

    $ coolserver
    zsh: command not found: coolserver

With 127-ssh:

    $ coolserver
    SSH Host "coolserver" found
    user@coolserver.com's password:

# LICENSE

MIT
