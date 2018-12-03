export class Recipe {

    constructor(private name: string, private description: string, 
        private imagePath: string, private ingredients?: Map<string, string>) {
    }

}