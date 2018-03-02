module objects {
    export class Scene extends createjs.Container {
        // Instance Variables

        // Public Properties
        public assetManager;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super();

            this.assetManager = assetManager;
        }

        // Private Methods
        public Start():void {

        }

        public update():void {

        }

        // Public Methods
    }
}