import { Component } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructuralDirectives';
  display = true;
  chose='';
  students:any=['Harry','Ajit','Rohan','Shyam'];
  data:any=[
    { id:1,name:'Harry',gender:'Male',age:23},
    { id:2,name:'Sunita',gender:'Female',age:22},
    { id:3,name:'Rohan',gender:'Male',age:24},
    { id:4,name:'Pooja',gender:'Female',age:23 }
  ]
  countryDetails:any=[
    {
      country:'India',
      people:[
        {
          name:'abc'
        },
        {
          name:'xyz'
        },
        {
          name:'qwe'
        }  
      ]
    },
    {
      country:'America',
      people:[
        {
          name:'iop'
        },
        {
          name:'jhg'
        },
        {
          name:'yiy'
        }  
      ]
    },
    {
      country:'Africa',
      people:[
        {
          name:'rty'
        },
        {
          name:'wer'
        },
        {
          name:'sqw'
        }  
      ]
    }
  ];
  
  addEle(val){  
    this.display = val;  
  }
  reEle(val){
    this.display = val;  
  }
  setValue(drop:any){
    this.chose=drop.target.value;
  }
  getData(){
    this.data=[
      { id:1,name:'Harry',gender:'Male',age:23},
      { id:2,name:'Sunita',gender:'Female',age:22},
      { id:3,name:'Rohan',gender:'Male',age:24},
      { id:4,name:'Pooja',gender:'Female',age:23 },
      { id:5,name:'Shyam',gender:'Male', age:24 }
    ]
  }
  trackBydataId(index: number, data: any): string {
    return data.id;
    // return data.dataId;
  }

  
}
