
//referenciar ao arquivo data.json, onde há as informações; 
let json = require("./data.json");

let products = json.products;
let categories = json.categories;
let establishments = json.establishments;

let result = [];

//ir no arquivo data.json e observa-se que há os ids dos produtos que há nos estabelecimentos; 
//então verifica-se na lista de produtos e observa-se em quais categorias estão tais produtos;
//então fiz uma organização hierárquica e relacional entre esses 3 objetos seguindo a ordem: estabelecimentos, categorias e produtos utilizando seus ids;
//quanto aos preços dos produtos, eu já fiz a divisão por 100 conforme o case pede;

json.establishments=[ 
{
    	name: 'Restaurante',
    		categoriesId6= 
    		{
    			name: 'Bebidas',
    		}
    		
    				productsId6=
    				{

    					name:'Guaraná',
    					price:9,

    					name: 'Suco',
    					price: 9,

    					name: 'Água',
    					price: 5,
    				}

    		categoriesId7= 
    		{
    			name:'Refeições',
    		}

    				productsId7={


    					name: 'Alaminuta',
    					price: 28,

    					name:'Churrasco',
    					price: 31.9,
    				}	
    	
}];

let establishments2=[
{

	name: 'Comida Asiática',
	 	categoriesId3={
	 		name: 'Japonesa',
	 	}
	 			productsId3=
	 			{
	 				name: 'Temaki',
	 				price: 20.9,

	 				name: 'Sushi',
	 				price: 70, 
	 			}

	 	categoriesId4= 
	 		name: 'Chinesa',
	 	}
	 			productsId4=
	 			{
	 				name: 'Rolinho Primavera',
	 				price: 15.9,
	 			}
	 	categoriesId5={
	 		name: 'Oriental', 
	 	}
	 			productsId5=
	 			{
	 				name: 'Rolinho Primavera',
	 				price:15.9,

	 				name: 'Temaki',
	 				price: 20.9,

	 				name: 'Sushi',
	 				price: 70,
	 			}

	 	categoriesId6=
	 	{
	 		name: 'Bebidas',

	 	}
	 			productsId6=
	 			{
	 				name: 'Guaraná',
	 				price: 9,

	 				name: 'Água',
	 				price: 5,
	 			}

	 	categoriesId7={
	 		name: 'Refeições',
	 	}

	 			productsId7=
                 {
	 				name: 'Sushi',
	 				price: 70,

	 			}

}];  

let establishments3=[
{
    name: 'Fast Food',
        categoriesId1={
            name:'Lanche',
        }

            productsId1=
            {
                name: 'Xis Frango',
                price: 30,

                name: 'Xis Carne',
                price: 31,

                name: 'Xis Coração',
                price: 36.5,

                name: 'Hambúrguer',
                price: 28.5,

                name: 'Batata frita',
                price: 15,
            }
        categoriesId2={
            name: 'Fast Food',
        
        }

            productsId2={
                name: 'Hambúrguer',
                price: 28.5,

            }
            categoriesId6={
                name: 'Bebidas',
            
            }
    
                productsId6={
                    name: 'Guaraná',
                    price: 9,

                    name: 'Suco',
                    price: 6,

                    name: 'Água',
                    price: 5,
    
                }
}];

console.log(JSON.stringify(result));

//infelizmente não consegui que saísse em json corretamente conforme é pedido no case, está dando erro;
//acredito que tenha alguma função ou variável que faça uma operação e dê tal resultado;
//fiquei em dúvida quanto a essa parte e confesso que gostaria de saber como se resolve.
