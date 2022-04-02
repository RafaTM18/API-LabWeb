import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

let produtos: {id: number, name: string, price: number}[] = [];


export default class LojasController {

    public async index({ request }: HttpContextContract) {
        const { id } = request.qs();
        
        if (id) {
            let prod = produtos.find((prod) => prod.id == id);

            if(prod) {
                return prod
            }

            return 'Produto não encontrado!'
        }

        

        return produtos.length == 0 ? 'Não foi adicionado nenhum produto!' : produtos;
    }

    public async store({ request }: HttpContextContract) {
        const { name, price } = request.body();
        let id: number = produtos.length + 1;

        if (name && price) {
            let prod = {id, name, price};
            console.log(prod);
            
            produtos.push(prod);
            return 'Produto adicionado!';
        }

        return 'Não foi possível adicionar um produto, faltou(aram) campo(s)!'
    }
}
