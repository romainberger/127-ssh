# 127 SSH

Capture your command not found errors and tries to ssh.

## Installation

To use 127-ssh you need to use zsh and node.

Start by installing the package with npm:

    npm install -g 127-ssh

Then in your `~/.zshrc` add this:

    command_not_found_handler () {
       printf "Command not found: $1"
       127-ssh $1
       return 127
    }

For 127-ssh to work, you need to use an ssh config file kept in `~/.ssh/config` and use it to store your ssh hosts.

## Usage

Whenever you type something in your prompt that exit as a command not found, the script will work. It tries to find an ssh configuration with a `Host` corresponding to the command you typed.

# LICENSE

MIT
