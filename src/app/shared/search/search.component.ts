import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() buscarEvent = new EventEmitter<string>();
  @Output() limpiarEvent = new EventEmitter();

  searchForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  buscar() {
    this.buscarEvent.emit(this.searchForm.get('name')?.value);
  }

  limpiarBusqueda() {
    this.searchForm.controls['name'].setValue('');
    this.limpiarEvent.emit();
  }

}
