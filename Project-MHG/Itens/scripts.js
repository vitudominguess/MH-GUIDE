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
        $('#listar_item').DataTable({
          "language": {
          "search": "Buscar:",
		  "paginate": {
          	  "first": "Inicio",
              "last": "Fim",
			  "previous": "Anterior",
			  "next": "Próximo"
		  },
      "aria": {
        "sortAscending":  ": ative para classificar a coluna em ordem crescente",
        "sortDescending": ": ative para classificar a coluna em ordem decrescente"
      },
      "lengthMenu": '<select>'+
        '<option value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option>'+
        '<option value="40">40</option>'+
        '<option value="50">50</option>'+
        '<option value="-1">All</option>'+
        '</select> Registros',
      "info": "Mostrando Página _PAGE_ de _PAGES_",
      "infoEmpty":      "Mostrando 0 de _PAGES_ Registros",
      "infoFiltered":   "(filtrado de _MAX_ registros totais)",
      "decimal":        "",
      "emptyTable":     "Sem dados disponíveis na tabela",
      "zeroRecords":    "Nenhum registro correspondente encontrado",
      "loadingRecords": "Carregando...",
      "processing":     "Processando..."
		}
        });
      } );