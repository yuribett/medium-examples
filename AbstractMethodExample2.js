class Foo {
 
    constructor(text){
       this._text = text;
    }
 
    /**
     * Implementation optional
     */
    genericMethod() {
        console.log('running from super class. Text: '+this._text);
    }
    
    /**
     * Implementation required
     */
    doSomething() {
       throw new Error('You have to implement the method doSomething!');
    }
 
}
 
class Bar extends Foo {
 
    constructor(text){
       super(text);
    }
 
    genericMethod() {
        console.log('running from extended class. Text: '+this._text);
    }
    
    doSomething() {
       console.log('Method implemented successfully!');
    }
    
}
 
let b = new Bar('Howdy!');
b.genericMethod(); //gonna print: running from extended class. Text: Howdy
b.doSomething(); //gonna throw an error: Method implemented successfully!
