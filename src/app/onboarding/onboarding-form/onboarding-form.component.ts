import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { isValidCPF } from 'src/app/shared/cpf-validator';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  @Input() loading: boolean = false
  @Output() formData = new EventEmitter<string>()
  public faSpinner = faSpinner
  public accountForm: FormGroup = new FormGroup({
    cpf: new FormControl('', [Validators.minLength(14), Validators.maxLength(14), isValidCPF])
  })

  constructor() { }

  ngOnInit(): void {
    this.handleCpf()
  }

  submitForm() {
    this.formData.emit(this.accountForm.get('cpf')?.value)
  }

  get cpf() { return this.accountForm.get('cpf') }

  handleCpf() {
    this.accountForm.controls['cpf'].valueChanges.subscribe(data => {
      let cpf = data.replace(/\D/g, "")
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      this.accountForm.controls['cpf'].setValue(cpf, { emitEvent: false });
    });
  }
}
