    function Products(b,n,p,i){
        this.brand=b;
        this.Name=n;
        this.price=p;
        this.image=i
    }

 function storeProduct(e){
    e.preventDefault();
    let form=document.getElementById("product_form");
    let brand=form.product_brand.value;
    let Name=form.product_name.value
    let price=form.product_price.value
    let image=form.product_image.value

    
let s1=new Products(brand,Name,price,image)
console.log(s1)
let data=JSON.parse(localStorage.getItem("Products"))||[]
data.push(s1);
localStorage.setItem("Products",JSON.stringify(data))


 }

