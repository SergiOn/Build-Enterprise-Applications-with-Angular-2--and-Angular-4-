import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Medication, Patient } from './patient';
import { PatientService } from './patient.service';
import { normalizeCamelCase } from '../../utilities/camelCaseNormalizer';

@Component({
    templateUrl: './patient.component.html'
})
export class PatientComponent {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private patientService: PatientService
    ) {
        this.form = fb.group({
            name: [''],
            address: fb.group({
                street: [''],
                city: ['']
            }),
            medications: fb.array([])
        });
    }

    save() {
        this.patientService.save(this.form.value).subscribe(
            (res) => {
                console.log('SUCCESS', res.json());
            },
            (err) => {
                const errors = err.json();
                console.log('Errors', err.json());

                Object.keys(errors).forEach((key) => {
                    const control = this.form.get(normalizeCamelCase(key));
                    if (control) {
                        control.setErrors({
                            'remote': errors[key].join()
                        });
                    }
                });
            });
    }

    addMedication(input: any) {
        if (!input.value) {
            return;
        }

        const medications = <FormArray> this.form.get('medications');
        const newMedication = this.fb.group({
            name: [input.value]
        });
        medications.push(newMedication);

        input.value = '';
    }
}
