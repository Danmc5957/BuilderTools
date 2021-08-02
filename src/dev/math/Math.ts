class math {

    public static maxY: number = 0x100; // 256

    public static getMinX(pos1: Position, pos2: Position): number {
        return Math.min(pos1.x, pos2.x);
    }

    public static getMaxX(pos1: Position, pos2: Position): number {
        return Math.max(pos1.x, pos2.x);
    }

    public static getMinZ(pos1: Position, pos2: Position): number {
        return Math.min(pos1.z, pos2.z);
    }

    public static getMaxZ(pos1: Position, pos2: Position): number {
        return Math.max(pos1.z, pos2.z);
    }

    public static getMinY(pos1: Position, pos2: Position): number {
        return Math.max(Math.min(pos1.y, pos2.y, this.maxY), 0)
    }

    public static getMaxY(pos1: Position, pos2: Position): number {
        return Math.min(Math.max(pos1.y, pos2.y, 0), this.maxY);
    }
}
