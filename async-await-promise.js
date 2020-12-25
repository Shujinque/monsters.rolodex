/*
async function fn(){
    return "hello";
}

console.log(fn());

fn()
    .then(response => console.log(response));
*/

var isError = true;

function getCategory(){
    return new Promise((fulfilled, rejected) => {
        setTimeout(() => {

            if(!isError){
                fulfilled("phone");
            }else{
                rejected("error");
            }

        }, 1000);
    });
}

function getProducts(category){
    return new Promise(fulfilled => {
        setTimeout(() => {
            fulfilled(`5 products in ${category}.`)
        }, 1000);
    })
}

getCategory()
    .then(getProducts)
    .then(response => console.log(response))
    .catch(error => console.log(error));


async function getProduct(){

    try{
        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
    }catch(error){
        console.log(error);
    };
};

getProduct();