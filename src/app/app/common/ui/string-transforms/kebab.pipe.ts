import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'kebab'
})
export class KebabPipe implements PipeTransform {
    transform(value: string): string {
        let characters = value.split("");
        let kebabedString = characters.join("-");

        return kebabedString;
    }
}