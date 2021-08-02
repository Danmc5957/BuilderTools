namespace ErrorMessage {
    export namespace SyntaxError {
        export function fillCmdSyntaxError(): string {
            return (
                Native.Color.DARK_RED +
                "Usage: //fill <id1:meta1,id2:meta2,id3:meta3>"
            );
        }
    }
}
