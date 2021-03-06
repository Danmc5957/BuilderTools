/// <reference path="../error/SyntaxError.ts" />

const FILL_COMMAND = {
    cmdName: "//fill",
    callback: (id: ItemInstance) => {
        Filler.fill(id)
    },
};

Callback.addCallback("NativeCommand", (cmd) => {
    const command = cmd.split(" ");

    if (command[0] !== FILL_COMMAND.cmdName) {
        return;
    }

    FILL_COMMAND.callback(Player.getCarriedItem());
});
