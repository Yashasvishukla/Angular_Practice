import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {

  // We will make use of FormBuilder which is a clear way to implement the form.

  form = this.fb.group({
    name: ['', Validators.required],

    lessons: this.fb.array([])
  });
  constructor(private fb: FormBuilder) { }
  
  get lessons()
  {
    return this.form.get('lessons') as FormArray;
  }
  ngOnInit() {
  }

  AddLesson()
  {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['Beginner', Validators.required]
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(index: number)
  {
    this.lessons.removeAt(index);
  }


  Details(form: ElementRef<any>)
  {
    console.log(form);
  }
}
