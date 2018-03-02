/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel: objects.Label;
    let clickMeButton: objects.Button;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene: number;

    assetManifest = [{id: "clickMeButton", src:"./Assets/images/clickMeButton.png"}];

    // preloads assets
    function Init():void {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); //asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start():void {
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);

        currentScene = config.Scene.START;
        Main();

    }

    
    function clickMeButtonClick():void {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }

    function Update():void {
        stage.update(); // redraws the stage
    }

    function Main():void {
        switch(currentScene) {
            case config.Scene.START:
            // remove all current objects from the stage
            // instantiate a new scene object
            // add the new scene object to stage
            break;
            case config.Scene.PLAY:

            break;
            case config.Scene.OVER:

            break;
        }

    }

    window.onload = Init;


})();