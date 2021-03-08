// let idade = 17;
// console.log(idade);
// let altura = 180;
// console.log(altura);
// let nome = 'Vitor'; //string literal
// let idade = 25; //number literal
// let estaAprovado = true; // boolean
// let sobrenome ; //Undefined

// let pessoa = {
//     nome: 'Vitor',
//     idade: 25,
//     estaAprovado: true,
//     sobrenome : 'Pessoa'
//  };

//  console.log(pessoa);

//Arrays

// let familia = [true,27,'Vitor',17,50];
// familia.log(familia.lenght);
// console.log(familia[0]);
// let Micael= [16,'Hortolândia', 'ETEC'];
// console.log(Micael[2]);

//Verbo + Substantivo

// let tamanhoPessoa = 178;
// function mudarTamanho(tamanho, unidade){
//     tamanhoPessoa = tamanho + ' ' + unidade;
// };

// console.log(tamanhoPessoa);
// mudarTamanho(180, 'cm');
// console.log(tamanhoPessoa);

/* var numeroFormatado;
var numero  = prompt('Insira o número aqui');
numeroFormatado = parseInt(numero);
alert(numeroFormatado * 0.5);
*/
 $(document).ready(function() {
	$('#listar_Item').dataTable( {
		"language": {
		  "paginate": {
			"previous": "Anterior",
			"next": "Próximo"
		  }
		}
	  } );
		});