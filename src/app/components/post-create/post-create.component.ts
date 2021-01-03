import { Component } from '@angular/core';

@Component({
    selector :'app-post-create',
    templateUrl:'./post-create.component.html'

})
export class PostCreateComponent {
    title = 'Post Create Compo Works Successfully';
    entredValue = ''

    onAdd(){
        this.title = this.entredValue;
    }
}