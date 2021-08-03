namespace ErrorMessage {
    export namespace SyntaxError {
        export function fillCmdSyntaxError(): string {
            return (
                Native.Color.DARK_RED +
                "Usage: //fill <id:meta>"
            );
        }
    }
}
