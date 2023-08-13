export class Identifier {

    static identifier = 0;

    static generate() {
        Identifier.identifier++;
        return Identifier.identifier;
    }
}
