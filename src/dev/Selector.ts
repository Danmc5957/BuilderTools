interface Position {
    x: number;
    y: number;
    z: number;
}

class Selector {
    public static pos1: number[] = [];
    public static pos2: number[] = [];

    public static setPos1(pos: Position) {
        this.pos1 = [pos.x, pos.y, pos.z];
    }

    public static setPos2(pos: Position) {
        this.pos2 = [pos.x, pos.y, pos.z];
    }
}