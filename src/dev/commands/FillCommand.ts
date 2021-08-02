/// <reference path="../error/SyntaxError.ts" />

const FILL_COMMAND = {
    cmdName: "//fill",
    callback: () => {
        Filler.fill();
    },
};

Callback.addCallback("NativeCommand", (cmd) => {
    const command = cmd.split(" ");

    if (command[0] !== FILL_COMMAND.cmdName) {
        return;
    }

    if (command[1] == "") {
        Game.tipMessage(ErrorMessage.SyntaxError.fillCmdSyntaxError());
        return;
    }

    FILL_COMMAND.callback();
});
