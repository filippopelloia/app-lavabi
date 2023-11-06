import {Api} from 'onpage-js'

//dichiaro variabile con TOKEN di On Page
const api_token = 'vJpq42lJ5KoFs5r0';


// Init the library
const api = new Api('app', api_token)
const schema = await api.loadSchema()


//prendo e salvo la prima TIPOLOGIA
const type = await schema.query("tipologia").first();
const typeName = type.val('nome'); 

/* let currentProduct = ''; */



//==============  collections

//prendo e salvo le COLLEZIONI in relazione alla prima TIPOLOGIA
export const collections = await type.rel('collezione');


//==============  models
export const models = await type.rel('collezione.modello');


//============== test
/* export const filters = async (currentProduct) => {
                    await schema.query('modello')
                                .with('prodotto')
                                .filterRelation('prodotto', q => {
                                    q.where('sku', currentProduct)
                                })
                                .first();

                    return filters;
} */


//==============  products
export const products = await type.rel('collezione.modello.prodotto');

export const totNumProducts = products.length;