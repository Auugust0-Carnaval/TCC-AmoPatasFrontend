import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputPassword()
  {
    $(document).ready(function(){

      // Click event of the showPassword button
      $('#senha').on('click', function(){

        // Get the password field
        var passwordField = $('#senha');

        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');

        // Check to see if the type is a password field
        if(passwordFieldType == 'senha')
        {
            // Change the password field to text
            passwordField.attr('type', 'text');

            // Change the Text on the show password button to Hide
            $(this).val('Hide');
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');

            // Change the value of the show password button to Show
            $(this).val('Show');
        }
      });
    });
  }



}
