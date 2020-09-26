import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultado:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  clicar(valor:string){
      //testa se já foi usado algum sinal na string antes para calcular antes de inserir novo sinal
    if((this.resultado.includes("*")
    || this.resultado.includes("/")
    || this.resultado.includes("+")
    || this.resultado.includes("-"))
      && !this.isNumber(valor)
      && this.isNumber(this.resultado.charAt(this.resultado.length-1))){
        this.calcular();
    }

    //se ultimo caractere for sinal e outro sinal for inserido é trocado o sinal
    if(this.resultado.charAt(this.resultado.length-1)=="*" && (valor=="/" || valor=="+" || valor=="-")){
      this.resultado=this.resultado.replace("*", valor);
    }

    //se ultimo caractere for sinal e outro sinal for inserido é trocado o sinal
    if(this.resultado.charAt(this.resultado.length-1)=="/" && (valor=="*" || valor=="+" || valor=="-")){
      this.resultado=this.resultado.replace("/", valor);
    }

    //se ultimo caractere for sinal e outro sinal for inserido é trocado o sinal
    if(this.resultado.charAt(this.resultado.length-1)=="+" && (valor=="/" || valor=="*" || valor=="-")){
      this.resultado=this.resultado.replace("+", valor);
    }

    //se ultimo caractere for sinal e outro sinal for inserido é trocado o sinal
    if(this.resultado.charAt(this.resultado.length-1)=="-" && (valor=="/" || valor=="+" || valor=="*")){
      this.resultado=this.resultado.replace("-", valor);
    }
  
    /* se o primeiro caractere inserido após um sinal for '0' e ele não for o caractere final do numero será
    substituído pelo próximo número */
    if(this.resultado.charAt(this.resultado.length-1)=="0" 
    && !this.isNumber(this.resultado.charAt(this.resultado.length-2)) 
    && this.isNumber(valor)){
      this.resultado = this.resultado.substr(0, this.resultado.length-1)+valor;

    //se o primeiro caractere inserido for '0', o próximo número inserido substituirá o '0'
    }else if(this.resultado == "0" && this.isNumber(valor)){
      this.resultado = valor;

      //ainda, se o ultimo caractere for um sinal:
    }else if(this.resultado.charAt(this.resultado.length-1)=="*"
    || this.resultado.charAt(this.resultado.length-1)=="/"
    || this.resultado.charAt(this.resultado.length-1)=="+"
    || this.resultado.charAt(this.resultado.length-1)=="-"){
       
      //só será inserida na string se o valor for um número e diferente de 0
      if(this.isNumber(valor)){
        this.resultado+=valor;
      }

    }else{
      this.resultado+=valor;
    }
    
  }

  //calcula o valor que estiver na string
  calcular(){
    this.resultado=""+eval(this.resultado);
  }

  //limpa toda a string @this.resultado
  limpar(){
    this.resultado="";
  }

  //testa se @valor:string passado é um número
  isNumber(valor:string){
    if(valor == '1'
    || valor == '2'
    || valor == '3'
    || valor == '4'
    || valor == '5'
    || valor == '6'
    || valor == '7'
    || valor == '8'
    || valor == '9'
    || valor == '0'){
      return true;
    }else{
      return false;
    }
  }
}
